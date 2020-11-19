<template>
  <div>
    <Header></Header>
    
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item id="1">点菜</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
      <mt-tab-item id="3">商家</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 --> 
    <div class="main">
      <mt-tab-container v-model="tab">
         <mt-tab-container-item id="ab">
          
        </mt-tab-container-item>
        <mt-tab-container-item id="cd">
          <div class="mmn"><Ratings></Ratings></div>
          <div class="kx"></div>
          <div class="rating-wrapper">
          <!--评价头部-->
          <div class="rating-title">
            <!-- v-if="food.rating" -->
            <div class="like-ratio" >
              <img class="p" src="../assets/sige/p.png" alt="">
              <span class="title">评价(1)</span>
            </div>
            <!-- v-if="food.rating" -->
          </div>
          <div class="kx"></div>
            <!-- v-if="food.rating" -->
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
                  匿名用户
                </div>
                <div class="time">
                  2020.11.04
                </div>
                <div class="content">
                  味道超级好，价格也实惠，一定会回购的。
                </div>
              </div>
            </li>
          </ul>
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
                  匿名用户
                </div>
                <div class="time">
                  2020.11.04
                </div>
                <div class="content">
                  味道超级好，价格也实惠，一定会回购的。
                </div>
                <div class="pjt">
                  <img src="../assets/bobo/list_2.jpg" alt="">
                  <img src="../assets/bobo/list_3.jpg" alt="">
                </div>
              </div>
            </li>
          </ul>
        </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="ef">
          <div class="articleItem">
              <div class="articleItem-wrapper">
                <div class="articleImg">
                  <img src="../assets/sige/10.jpg" alt="">
                </div>
                <div class="articleDes">
                  北京市通州区马驹桥镇环科中路2号29号楼
                </div>
              </div>
          </div>
          <div class="articleItem2">
              <div class="articleItem-wrapper">
                <div class="articleImg">
                  <img src="../assets/sige/8.jpg" alt="">
                </div>
                <div class="articleDes">
                  13734210429
                </div>
              </div>
          </div>
          <div class="kx"></div>
          <div class="articleItem">
              <div class="articleItem-wrapper">
                <div class="articleImg">
                  <img src="../assets/sige/11.jpg" alt="">
                </div>
                <div class="articleDes">
                  配送服务：由美团快送提供配送服务
                </div>
              </div>
          </div>
          <div class="articleItem2">
              <div class="articleItem-wrapper">
                <div class="articleImg">
                  <img src="../assets/sige/9.jpg" alt="">
                </div>
                <div class="articleDes">
                  配送时间：9：00-21：30
                </div>
              </div>
          </div>
          <div class="kx"></div>
          <div class="articleItem">
              <div class="articleItem-wrapper">
                <div class="articleImg">
                  <img src="../assets/sige/9.jpg" alt="">
                </div>
                <div class="articleDes">
                  商家服务：<img src="../assets/sige/5.png" alt=""> 跨天预订
                </div>
              </div>
          </div>
          <div class="articleItem2">
              <div class="articleItem-wrapper">
                <div class="articleImg">
                  <img src="../assets/sige/12.jpg" alt="">
                </div>
                <div class="articleDes">
                  提别提醒：亲爱的顾客，记的选定含糖度和包装盒
                </div>
              </div>
          </div>
          <div class="kx"></div>
          <div class="articleItem">
              <div class="articleItem-wrapper">
                <div class="articleImg2">
                  <img src="../assets/sige/6.png" alt="">
                </div>
                <div class="articleDes">
                  满38减21；满49减22；满59减23；满79减25；
                </div>
              </div>
          </div>
          <div class="articleItem">
              <div class="articleItem-wrapper">
                <div class="articleImg2">
                  <img src="../assets/sige/3.png" alt="">
                </div>
                <div class="articleDes">
                  折扣商品0.33折起；
                </div>
              </div>
          </div>
          <div class="articleItem2">
              <div class="articleItem-wrapper">
                <div class="articleImg2">
                  <img src="../assets/sige/4.png" alt="">
                </div>
                <div class="articleDes">
                  新人立减17元（本优惠与新人首单红包不可同享）
                </div>
              </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      </div>
    <!-- 面板区域结束 -->
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
      <mt-tab-item id="me" >
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
.main {
  margin-bottom: 55px;
}
.articleItem {
  padding: 4px 0;
  margin: 0 4px;
  border-bottom: 1px solid #999;
}
.articleItem2 {
  padding: 4px 0;
  margin: 0 4px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 1px;
  width: 100%;
}
.articleImg {
  margin-right: 7px;
}
.articleImg img {
  width: 30px;
  height: 30px;
}
.articleImg2 {
  margin-right: 10px;
  margin-left: 6px;
}
.articleImg2 img {
  width: 17px;
  height: 17px;
}

.articleDes img {
  width: 20px;
  height: 20px;
}
.articleDes {
  height: 22px;
  font-size: 13px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
  font-family:"华文行楷"
}
.kx{
  height: 11px;
  width: 100%;
  background-color: #ccc;
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

.mmn{
  height: 80px;
}
 .rating-wrapper .rating-title {
    padding: 16px 16px 16px 0;
  }

.p{
    width: 23px;
    height: 23px;
    margin-right: 13px;
    margin-left: 13px;
}
.rating-wrapper .rating-title .like-ratio{
  height: 21px;
}
.title{
  font-size: 13px;
}

 .rating-wrapper .comment-item {
    padding: 15px 14px 12px 16px;
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
import Header from '../components/Header'
import Ratings from '../components/Ratings';
export default {
  data() {
    return {
      // 默认被选定的顶部选项卡及面板
      active: "1",
      // 默认被选定的顶部选项卡
      tab: "ab",
      // 默认被选定的底部选项卡
      selectedTab: "index",
    };
  },
  components:{
    Header:Header,
    Ratings:Ratings
  },
  methods: {

    //用户注销
    logout(){
      this.$store.commit('logout_mutations');
      localStorage.clear();
    },
    
  },
  watch: {
    selectedTab(value){
      if (value=='index'){
        this.$router.push('/')
      }else {
        if(this.$store.state.isLogined == 1){
          this.$router.push('/historys')
        }else{
          this.$router.push('/history2')
        }
      }
    },
      active(newValue) {
        if (newValue == "1") {
          this.tab = "ab";
        } else if (newValue == "2") {
          this.tab = "cd";
        } else if (newValue == "3") {
          this.tab = "ef";
        }
      }
  },
  
};
</script>