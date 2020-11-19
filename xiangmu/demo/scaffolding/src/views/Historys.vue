<template>
<div>
<!-- 顶部导航开始 -->
    <mt-header>
      <div slot="right" class="shortcut" v-if="this.$store.state.isLogined == 1">
        <router-link to="/shopcar">
          <img class="tu" src="../assets/sige/2.png" alt="">
        </router-link>
      </div>
      <div slot="left" class="shortcut" v-if="this.$store.state.isLogined == 1">
        <router-link to="/">
          <mt-button @click="logout">注销</mt-button>
        </router-link>
      </div>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item id="1">已完成</mt-tab-item>
      <mt-tab-item id="2">待付款</mt-tab-item>
      <mt-tab-item id="3">待收货</mt-tab-item>
      <mt-tab-item id="4">待评价</mt-tab-item>
      <mt-tab-item id="5">已取消</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
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
        <div class="Item">
            <!-- 图像开始  -->
            <div class="Img">
              <img src="../assets/sige/tb.jpg" alt="">
            </div>
            <!-- 图像结束 -->
            <!-- 文章简介开始 -->
            <div class="Des">
              您还没有相关订单
            </div>
            <!-- 文章简介结束 -->
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="ef">
        <div class="Item">
            <!-- 图像开始  -->
            <div class="Img">
              <img src="../assets/sige/tb.jpg" alt="">
            </div>
            <!-- 图像结束 -->
            <!-- 文章简介开始 -->
            <div class="Des">
              您还没有相关订单
            </div>
            <!-- 文章简介结束 -->
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="gh">
        <div class="Item">
            <!-- 图像开始  -->
            <div class="Img">
              <img src="../assets/sige/tb.jpg" alt="">
            </div>
            <!-- 图像结束 -->
            <!-- 文章简介开始 -->
            <div class="Des">
              您还没有相关订单
            </div>
            <!-- 文章简介结束 -->
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="ij">
        <div class="Item">
            <!-- 图像开始  -->
            <div class="Img">
              <img src="../assets/sige/tb.jpg" alt="">
            </div>
            <!-- 图像结束 -->
            <!-- 文章简介开始 -->
            <div class="Des">
              您还没有相关订单
            </div>
            <!-- 文章简介结束 -->
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 面板区域结束 -->
  </div>
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="index">
        首页
        <img
          src="../assets/common/index_enabled.png"
          alt=""
          slot="icon"
          v-if="selectedTab == 'index'"
        />
        <img
          src="../assets/common/index_disabled.png"
          alt=""
          slot="icon"
          v-else
        />
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img
          src="../assets/common/me_enabled.png"
          alt=""
          slot="icon"
          v-if="selectedTab == 'me'"
        />
        <img src="../assets/common/me_disabled.png" alt="" slot="icon" v-else />
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
</div>
</template>
<style scoped>
.mint-header{
  background-color:rgb(148, 143, 143);
}
a{
  color: black;
}
.tu{
  width: 29px;
  margin-right: 11px;
}
.shortcut a {
  color: #fff;
  padding-left: 20px;
}
.main {
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
  width: 200px;
  height: 180px;
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
  margin-top: 5px;
}
</style>
<script>
export default {
    data() {
        return {
            active: "1",
            tab: "ab",
            selectedTab: "me",
        };
    },
    methods:{
      //用户注销
      logout(){
        this.$store.commit('logout_mutations');
        localStorage.clear();
      },
    },
    watch:{
        active(newValue) {
          if (newValue == "1") {
            this.tab = "ab";
          } else if (newValue == "2") {
            this.tab = "cd";
          } else if (newValue == "3") {
            this.tab = "ef";
          } else {
            this.tab = "gh";
          }
        },
        selectedTab(value){
          if (value=='me'){
            this.$router.push('/historys')
          }else {
            this.$router.push('/')
          }
        },
      },

}   
</script>