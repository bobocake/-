<template>
    <div>
        <!-- 顶部导航开始 -->
        <mt-header>
            <router-link slot="left" to="/">
                <mt-button  icon="back"></mt-button>
            </router-link>
            <div slot="right" class="shortcut" v-if="this.$store.state.isLogined == 1">
                <span>您好,{{this.$store.state.userInfo.uname}}</span>
            </div>
        </mt-header>
    <div >
      <div class="l" >
        <button class="i" @click="handle">保存</button>
        <span >请完善个人信息</span>
      </div>
      <div class="kx"></div>
            <mt-field
              label="用户名"
              placeholder="请输入用户名"
              type="text"
              v-model="uname"
            >
           </mt-field>
           <mt-field
              label="昵称"
              placeholder="请输入昵称"
              type="text"
              v-model="user_name"
            >
            </mt-field>
            <mt-field
              label="联系方式"
              placeholder="请输入联系方式"
              type="text"
              v-model="phone"
            >
            </mt-field>
            <mt-field
              label="地址"
              placeholder="请输入收货地址"
              type="text"
              v-model="email"
            >
            </mt-field>
    </div> 
        <div class="kx"></div>
        <div class="mm">
            <mt-navbar v-model="active">
                <mt-tab-item id="1">我的足迹</mt-tab-item>
                <mt-tab-item id="2">我的评价</mt-tab-item>
            </mt-navbar>
            </div>
            <div class="main">
            <mt-tab-container v-model="tab">
                <mt-tab-container-item id="ab">
                <div class="articleItem">
                <div class="articleItem-wrapper">
                <!-- 图像开始  -->
                <div class="articleImg">
                  <img src="../../public/img/product/1.jpg" alt="">
                </div>
                <!-- 图像结束 -->
                <div>
                  <!-- 简介开始 -->
                  <div class="articleDes">
                    【鲜奶蛋糕】
                  </div>
                  <div class="articleDes">
                    往后余生相濡以沫
                  </div>
                  <!-- 简介结束 -->
                  <div class="q">
                    ￥199.00
                  </div>
                  <div class="btn">
                    <router-link to="/productdetail/1">
                     再次购买
                    </router-link>
                  </div>
                </div>
                </div>
                </div> 
                </mt-tab-container-item>
                <mt-tab-container-item id="cd">
                  <div class="rating-wrapper">
          <ul class="rating-content" >
            <!-- v-for="(comment,index) in food.rating.comment_list"
              :key="index" -->
            <li class="comment-item">
              <div class="comment-header">
                <!-- v-if="!comment.user_icon" -->
                <img src="../assets/common/me_disabled.png" />
              </div>
              <div class="comment-main">
                <div class="user">
                  {{this.$store.state.userInfo.username}}
                </div>
                <div class="time">
                  2020.11.04
                </div>
                <div class="content">
                  用勺子bai轻轻挖下一块带着草莓奶油的蛋糕，放入口中，根本不用嚼，含在口中一会儿就化掉了，唇齿间留下一丝淡淡的清香。细细回味，奶油浓浓的气息回旋在口中，甜甜的，香香的。
                </div>
                <div class="b33">
                <div class="pjt">
                  <img src="../assets/bobo/list_2.jpg" alt="">
                  <img src="../assets/bobo/list_3.jpg" alt="">
                </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div class="d">
            <router-link to="/">
                <mt-button @click="logout">注销</mt-button>
            </router-link>
        </div>
    </div> 
</template>
<style scoped>
.mint-header{
  background-color:rgb(148, 143, 143);
}
.shortcut a {
  color: #fff;
  padding-left: 20px;
}
.kx{
  height: 11px;
  width: 100%;
  background-color: #ccc;
}
.l{
    margin-top:11px;
    margin-left: 5px;
    font-size: 14px;
    margin-bottom: 2px;
}
.i{
    margin-left: 5px ;
    margin-bottom: 7px;
}
.l span{
  margin-left: 225px;
  font-size: 16px;
  color: #fcb32cc5;;
  font-weight: 900;
}
.a{
width: 93%;
margin-top: 10px;
margin-left: 12px;
margin-bottom: 7px;
color: black;
}
.b1,.b2{
  margin-top: 4px;
  margin-bottom: 6px;
  border-bottom:1px solid #999; 
  height: 22px;
  font-size: 14px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
  font-family:"微软雅黑"
}
.b3{
   margin-top: 4px;
  margin-bottom: 6px;
  height: 22px;
  font-size: 14px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
  font-family:"华文行楷"
}
.d{
    margin-top: 65px;
    text-align: center;
}
.mm{
    width: 93%;
    height: 35px;
    margin-top: 2px;
    margin-left: 12px;
}
.main{
    width:93%;
    margin-left: 13px;
    margin-bottom: 55px;
}
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 115px;
  height: 80px;
  border-radius: 5px;
}
.articleDes {
  height: 23px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis; 
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
.btn{
  margin-left: 150px;
  margin-top: 25px;
  width: 60px;
  height: 17px;
  border:2px solid rgb(148, 143, 143);
  border-radius: 7px;
  font-size: 10px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  letter-spacing: normal;
  text-align: center;
}
.q{
  margin-left: 150px;
  margin-top: -30px;
  font-size: 15px;
}
.Item {
  padding: 10px 0;
  margin: 0 10px;
  background-color:  rgba(219, 206, 206, 0.171);
}
.Img {
  margin-left: 60px;
}
.Img img {
  width: 205px;
  height: 195px;
  border-radius: 5px;
}
.Des {
  font-size: 16px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis; 
  line-height: 21px;
  letter-spacing: normal;
  color: rgba(68, 68, 68, 0.61);
  text-align: center;
  margin-bottom: 8px;
}
 .rating-wrapper {
    padding-left: 16px;
  }

 .rating-wrapper .comment-item {
    padding: 15px 14px 12px 0;
    border-bottom: 1px solid #999;
    width: 100%;
    box-sizing: border-box;
    display: flex;
  }

 .rating-wrapper .comment-item .comment-header {
    flex: 0 0 41px;
    margin-right: 10px;
  }

.rating-wrapper .comment-item .comment-header img {
    width: 41px;
    height: 41px;
    border-radius: 50%;
  }

.pjt{
  display: flex;
}
.pjt img{
  margin-top: 4px;
  margin-right: 6px;
  width: 60px;
  height: 60px;
} 

.rating-wrapper .comment-item .comment-main {
    flex: 1;
    margin-top: 6px;
  }

.rating-wrapper .comment-item .comment-main .user {
    width: 50%;
    float: left;
    font-size: 14px;
    color: #333333;
  }

.rating-wrapper .comment-item .comment-main .time {
    width: 50%;
    float: right;
    text-align: right;
    font-size: 10px;
    color: rgb(148, 143, 143);
  }

.rating-wrapper .comment-item .comment-main .content {
    margin-top: 17px;
    font-size: 11px;
    line-height: 19px;
  }
</style>
<script>
export default {
    data(){
        return {
            isRouterAlive:true,
            active:"1",
            tab: "ab",
            uname:"",
            user_name: "",
            phone:'',
            email:''
        };
    },
    watch:{
        active(newValue) {
            if (newValue == "1") {
                this.tab = "ab";
            } else if (newValue == "2") {
                this.tab = "cd";
            }
        }
    },
    methods: {
      handle(){
      //会引发短路现象
        // //现在要发送相关的用户名、密码到WEB服务器
        let object = {
          uname:this.uname,
          phone:this.phone,
          user_name:this.user_name,
          email:this.email
        }
        this.axios.put('/message',this.qs.stringify(object)).then(res=>{
            //代表用户修改成功
            if(res.data.code == 1){
              this.$router.push('/me');
            } else {
              //弹出提示框
              this.$messagebox("提示信息","保存失败--用户名错误");
            }

        });
      },
         //this.$store.dispatch('message_actions',this.qs.stringify(object));

    //用户注销
    logout(){
      this.$store.commit('logout_mutations');
      localStorage.clear();
    },
    
  },
}
</script>