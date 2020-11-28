# scaffolding

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 数据库设计：
根据项目设计需求还有现实要求，数据库的设计我们从蛋糕的种类，评论区，用户信息区分为三大类；蛋糕种类又有商品名称、简介、价格、库存、数量、好评率等方面；评论区分好评、普通、追加、差评、有图等分类；用户信息分用户名、密码、邮箱、手机号、姓名、配送地址，男女等。以此分类，进行增删改查的实现，数据库明了易懂，也方便于日后的操作。

### 后台导入模块：
// 加载Express模块
const express = require('express');

//加载MD5模块
const md5 = require('md5');

// 加载CORS模块
const cors = require('cors');

// 加载body-parser模块
const bodyParser = require('body-parser');

// 加载MySQL模块
const mysql = require('mysql');

### 后台API列表：
$ npm install axios
$ bower install axios
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
axios(url[, config])

发送 GET 请求（默认的方法）
axios('/user/12345');

执行 GET 请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

发送 PUT 请求
axios({
  method: 'put',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

执行 PUT请求
axiosputt('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

发送 POST 请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

执行 POST 请求
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

### 前端功能描述：
轮播图、面板选项卡、底部选项卡、左右联动选项卡、页面信息滚动、页面跳转功能、对应信息跳转、数量按键加减、数量加减和总结计算、商品的全选和删除功能、登录注册格式判断、登录注册注销功能、登录注册注销状态同步、完善个人信息、修改个人信息、查询个人信息。

### 脚手架设计：
1.导入Mint-ui组件：
    //导入MintUI的所有组件
    import MintUI from 'mint-ui';

    //导入MintUI的样式文件
    import 'mint-ui/lib/style.min.css';

    //通过Vue.use()方法将Mint UI注册为Vue的插件
    Vue.use(MintUI);

2.引入BScroll插件：
    import BScroll from 'better-scroll'

### 职责划分：
邢译文：我的、登录、注册、个人信息、购物车的页面设计；页面框架的整合；登录、注册、修改信息等功能的实现；制作PPT；
张静慧：制定计划安排；数据库的编写；脚手架的创建；首页、商品详情的页面设计和后端数据的接口实现；
任瑞环：github上传；阿里云部署；
郭星亮：结算的页面设计；