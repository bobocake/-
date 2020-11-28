　
// 加载Express模块
const express = require('express');


//加载MD5模块
// const md5 = require('md5');

// 加载CORS模块
const cors = require('cors');

// 加载body-parser模块
const bodyParser = require('body-parser');

// 加载MySQL模块
const mysql = require('mysql');
const { userInfo } = require('os');

// 创建MySQL连接池
const pool = mysql.createPool({
  // 数据库服务器的地址
  host: '47.95.28.19',
  // 数据库服务器的端口号
  port: 3306,
  // 数据库用户的用户名
  user: 'root',
  // 数据库用户的密码
  password: 'root',
  // 数据库名称
  database: 'cake',
  // 编码方式
  charset: 'utf8',
  // 最大连接数
  connectionLimit: 20
});

// 创建WEB服务器实例
const server = express();

// 将CORS作为Server的中间件
server.use(
  
  cors({
  origin: ['http://www.bobocake.xyz:8081', 'http://127.0.0.1:8081']
  
}));

//将bodyParser作为Server的中间件
server.use(bodyParser.urlencoded({
  extended: false
}));

// 用户注册的接口
server.post('/houtai/register', (req, res) => {
  //console.log(md5('12345678')) ;
  //获取用户名和密码
  let uname = req.body.username;
  let upwd = req.body.password;
  let email = '';
  let phone = '';
  console.log(uname);
  console.log(upwd);
  //查找用户是否存在
  let sql = 'SELECT COUNT(uid) AS count FROM cake_user WHERE uname=?';
  pool.query(sql, [uname], (error, results) => {
    if (error) throw error;
    //如果用户不存在,则插入记录
    if (results[0].count == 0) {
      sql = 'INSERT INTO cake_user(uname,upwd,email,phone) VALUES(?,?,?,?)';
      pool.query(sql, [uname, upwd,email,phone], (error, results) => {
        if (error) throw error;
        res.send({ message: '注册成功', code: 1 });
      })
    } else { //否则产生合理的错误提示
      res.send({ message: '用户已存在', code: 0 });
    }
  })
});

//修改信息
server.put('/houtai/message', (req, res) => {
  let uname = req.body.uname;
  let phone = req.body.phone;
  let user_name = req.body.user_name;
  let email=req.body.email;
  let obj=req.body;
  let sql = 'update cake_user set ? where uname=?';
    pool.query(sql,[obj,uname],(err,result)=>{
      if (err) throw err;
		  if(result.affectedRows!==0){
			    res.send({ message: '保存成功', code: 1 });
		  }else{
			  res.send({ message: '用户不存在', code: 0 });
      } 
    })
});


//用户登录的接口
server.post('/houtai/login', (req, res) => {
  //获取用户名和密码
  let uname = req.body.username;
  let upwd = req.body.password;
  console.log(uname);
  console.log(upwd);
  //以用户名和密码为条件进行查找
  let sql = 'SELECT uid,uname,email,phone,user_name,gender FROM cake_user WHERE uname=? AND upwd=?';
  pool.query(sql, [uname, upwd], (error, results) => {
    if (error) throw error;
    if (results.length == 0) {
      res.send({ message: '登录失败', code: 0 });
    } else {
      res.send({ message: '登录成功', code: 1, userInfo: results[0] });
    }
  });

});

//查询信息
server.post('/houtai/me', (req, res) => {
  //获取用户名
  let uname = req.body.uname;
  //以用户名为条件进行查找
  let sql = 'SELECT uid,uname,email,phone,user_name,gender FROM cake_user WHERE uname=?';
  pool.query(sql, [uname], (error, results) => {
    if (error) throw error;
    if (results.length == 0) {
      res.send({ message: '显示失败', code: 0 });
    } else {
    res.send({ message: '显示成功', code: 1, results: results[0] });
    console.log(results)
    }
  });
});

//获取所有蛋糕的分类列表
server.get('/houtai/type',(req,res)=>{
  //获取蛋糕的分类
  let sql='SELECT fid,fname FROM cake_laptop_family';
  //通过连接池的query方法执行SQL语句
  pool.query(sql,(error,results)=>{
     if(error) throw error;
     res.send({
         message:'查询成功',
         code:1,
         results:results
     }) ;
  });
});

//获取指定分类下的蛋糕数据
server.get('/houtai/details',(req,res)=>{
let sql = 'SELECT lid,cake_id,lname,short_detail,details,price,old_price,sold_count,ratings,cake_image FROM cake_laptop ';
pool.query(sql,(error,results)=>{
  if(error) throw error;
  res.send({
    message:"查询成功",
    code:1,
    results:results
  });
});
});

//获取每个蛋糕的详细信息
server.get('/houtai/productdetail',(req,res)=>{
  let lid=req.query.lid;
  let sql = 'SELECT lid,cake_id,lname,short_detail,details,price,old_price,sold_count,ratings,cake_image FROM cake_laptop WHERE lid=?';
  pool.query(sql,[lid],(error,results)=>{
    if(error) throw error;
    res.send({
      message:"查询成功",
      code:1,
      results:results[0]
      
    });
  });
})
//获取一个蛋糕的评论
server.get('/houtai/rating',(req,res)=>{
  let id=req.query.lid;
  let sql='SELECT rid,rat_ratings FROM cake_rating WHERE c_id=?';
  pool.query(sql,[id],(error,results)=>{
    if(error) throw error;
    res.send({
      message:"查询成功",
      code:1,
      results:results
    })
  })
});

//获取所有蛋糕的评论
server.get('/houtai/ratings',(req,res)=>{
  let sql='SELECT rid,rat_ratings FROM cake_rating';
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({
      message:"查询成功",
      code:1,
      results:results
    })
  })
})

// 指定WEB服务器监听的端口
server.listen(3000);

