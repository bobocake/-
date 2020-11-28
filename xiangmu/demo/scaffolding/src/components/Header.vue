<template>
  <div class="header">
    <!-- {{poiInfo.name}} -->
    <!-- 顶部通栏 开始 -->
      <mt-header title="啵啵开了家店">
      <div slot="left" class="shortcut" v-if="this.$store.state.isLogined == 1">
        <span>您好,{{this.$store.state.userInfo.uname}}</span>
      </div>
      <div slot="left" class="shortcut" v-else>
        <router-link to="/register">注册  </router-link>
        <router-link to="/login">  登录</router-link>
      </div>
      <div slot="right" class="shortcut" v-if="this.$store.state.isLogined == 1">
       <div v-if="this.$store.state.userInfo.user_name==null">
         <router-link to="/Message">
        <img class="tu"
          src="../assets/sige/1.png"
          alt=""
        />
        </router-link>
        </div> 
        <div v-else>
            <router-link to="/Me">
        <img class="tu"
          src="../assets/sige/1.png"
          alt=""
        />
        </router-link>
        </div>
      </div>
      <div slot="right" class="shortcut" v-else>
         <mt-button icon="more"></mt-button>
      </div>
    </mt-header> 

    <!-- 顶部通栏 结束 -->

    <!-- 背景内容 开始 -->
    <div class="bg-wrapper" >
      <!-- <img src="../../assets/common/banner4.png" /> -->
      <div class="swipe">
            <mt-swipe :auto="5000" :show-indicators="true">
                <mt-swipe-item><img src="../assets/lb/1.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="../assets/lb/3.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="../assets/lb/2.jpg"></mt-swipe-item>
                <mt-swipe-item><img src="../assets/lb/4.jpg"></mt-swipe-item>
            </mt-swipe>
        </div>
    </div>

    <!-- 背景内容 结束 -->

 
  </div>
</template>
<style scoped>
 .swipe{
    height: 200px;
    width: 100%;
 }
  .header{
    height: 170px;
  }
.swipe img{
  height: 170px;
  width: 100%;
}
  /* 顶部通栏样式 */
 .header .mint-header{
   background: transparent;
   font-size: 26px;
   color:rgb(175, 217, 245);
   font-weight: 800;
   font-family: "华文行楷";
 }
 
 .header .mint-header .shortcut a{
  color: #fff;
  font-size: 15px;
 }
 .header .mint-header .shortcut{
  color: #fff;
  font-size: 15px;
  font-family:"华文行楷"
 }

 .header .mint-header .shortcut .tu{
   width: 34px;
 }
  /* 背景图片样式 */
  .header .bg-wrapper {
    width: 100%;
    height: 170px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-size: 100% 140%;
    background-position: center -12px;
  }

</style>
