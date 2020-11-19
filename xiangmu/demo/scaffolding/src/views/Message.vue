<template>
    <div>
        <!-- 顶部导航开始 -->
        <mt-header>
            <router-link slot="left" to="/">
                <mt-button  icon="back"></mt-button>
            </router-link>
            <div slot="right" class="shortcut" v-if="this.$store.state.isLogined == 1">
                <span>您好,{{this.$store.state.userInfo.username}}</span>
            </div>
        </mt-header>
        <div class="l">
            <button class="i">编辑</button>
        </div>
        <div class="kx"></div>
        <div class="a">
          <div class="b1">用户名 : {{this.$store.state.userInfo.username}}</div>
          <div class="b2">手机号 : 130****0581</div>
          <div class="b3">收货地址 : 北京达内教育大厦</div>
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
                  <img src="../assets/bobo/list_15.jpg" alt="">
                </div>
                <!-- 图像结束 -->
                <div>
                  <!-- 简介开始 -->
                  <div class="articleDes">
                    【人气爆棚】
                  </div>
                  <div class="articleDes">
                    草莓格格蛋糕
                  </div>
                  <!-- 简介结束 -->
                  <div class="q">
                    ￥46.00
                  </div>
                  <div class="btn">
                    <router-link to="/productdetail">
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
                  味道超级好，价格也实惠，一定会回购的。
                </div>
                <div class="b33">
                <div class="pjt">
                  <img src="../assets/bobo/list_2.jpg" alt="">
                  <img src="../assets/bobo/list_3.jpg" alt="">
                </div>
                <div class="btn2">
                  <button class="b1">修改</button>
                  <button class="b2">删除</button>
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
.kx{
  height: 11px;
  width: 100%;
  background-color: #ccc;
}
a{
  color: black;
}
.mint-header{
  background-color:rgb(148, 143, 143);
}
.shortcut a {
  color: #fff;
  padding-left: 20px;
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
.a{
width: 93%;
margin-top: 10px;
margin-left: 12px;
margin-bottom: 7px;
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

.btn2{
  margin-top: -45px;
}
.btn2 .b1{
  margin-left: 205px;
  margin-top: 5px;
  width: 40px;
  height: 23px;
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
.btn2 .b2{
  margin-left: 3px;
  margin-top: 15px;
  width: 40px;
  height: 23px;
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
            active:"1",
            tab: "ab"
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

    //用户注销
    logout(){
      this.$store.commit('logout_mutations');
      localStorage.clear();
    },
    
  },
}
</script>