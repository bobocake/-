<template>
  <transition name="food-detail">
    <!-- v-show="showFlag" -->
    <div class="food" ref="foodView" >
      <div class="food-wrapper">
        <div class="food-content">
          <div class="img-wrapper">
            <img class="food-img" :src="foods.cake_image"/>
            <!-- @click="closeView" -->
            <router-link slot="left" to="/">
                <mt-button class="close-bt" icon="back"></mt-button>
            </router-link>
            <router-link slot="right" to="/shopcar">
                <img class="share-bt" src="../assets/common/cart_enabled.png"/>
            </router-link>
            <router-link slot="right" to="/historys">
                <img class="more-bt" src="../assets/sige/xx.png"/>
            </router-link>
          </div>
          <div class="content-wrapper">
            <h3 class="name">{{foods.lname}}</h3>
            <p class="saled">{{foods.details}}</p>

            <!-- v-show="food.product_label_picture" -->

            <img class="product"  :src="foods.cake_image"/>    
            <p class="price">
              <span class="text">￥{{foods.price}}</span>
              <span class="unit">/1份</span>
            </p>
            <div class="cartcontrol-wrapper">
              <CartControl :food="food"></CartControl>
            </div>
          </div>
        </div>
        <Split></Split>
        <!--外卖评价-->
        <div class="rating-wrapper">
          <!--评价头部-->
          <div class="rating-title">
            <!-- v-if="food.rating" -->
            <div class="like-ratio" >
                <img class="p" src="../assets/sige/p.png" alt="">
              <span class="title">评价</span>
            </div>
            <!-- v-if="food.rating" -->
          </div>
            <!-- v-if="food.rating" -->
          <ul class="rating-content" v-for="(item,index) of rating" :key="index">
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
                  {{item.rat_ratings}}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
        </div>
  </transition>
</template>
<script>
  import BScroll from 'better-scroll'
  import Split from '../components/Split'
  import CartControl from '../components/CartControl'
  import Vue from "vue"

  export default {
    data() {
      return {
      foods:{},
      rating:[]
      }
    },
    props: {
      food: {
        type: Object
      }
    },
    mounted(){
    //获取URL的参数
      let lid = this.$route.params.lid;
       // 向服务器发送请求,以获取数据
      this.axios.get('/productdetail?lid='+ lid).then(res=>{
        this.foods = res.data.results;
        this.foods.cake_image = require('../../public/img/product/' + this.foods.cake_image);
        // console.log(res.data.results);
    });

    //获取蛋糕的评论
    this.axios.get('/rating?lid='+lid).then(res=>{
      this.rating=res.data.results;
    })
    },
    components: {
      CartControl: CartControl,
      Split: Split
    }
  }

</script>
<style>
  .food {
    position: relative;
    left: 0;
    top: 0;
    bottom: 51px;
    background: white;
    width: 100%;
    z-index: 90;
  }

  .food-detail-enter-active, .food-detail-leave-active {
    transition: 1.0s
  }

  .food-detail-enter, .food-detail-leave-to {
    transform: translateX(100%);
  }

  .food .food-wrapper .food-content .img-wrapper {
    position: relative;
    width: 100%;
    height: 200px;
  }

  .food .food-wrapper .food-content .img-wrapper .food-img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .food .food-wrapper .food-content .img-wrapper .close-bt {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 10px;
    top: 1px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color:rgb(128, 185, 238);
    background: transparent;
  }

  .food .food-wrapper .food-content .img-wrapper .share-bt,
  .food .food-wrapper .food-content .img-wrapper .more-bt {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 12px;
    margin-right: 7px;
  }

  .food .food-wrapper .food-content .img-wrapper .share-bt {
    right: 50px;
  }

  .food .food-wrapper .food-content .img-wrapper .more-bt {
    right: 10px;
  }

  .food .food-wrapper .food-content .content-wrapper {
    /* padding: 0 0 16px 16px; */
    position: relative;
  }

  .food .food-wrapper .food-content .content-wrapper .name {
    font-size: 1px;
    color: #333333;
    line-height: 30px;
    font-weight: bold;
  }

  .food .food-wrapper .food-content .content-wrapper .saled {
    font-size: 13px;
    color: #9d9d9d;
    height:50px;
    margin-bottom: 6px;
    margin-left: 6px;
  }

  .food .food-wrapper .food-content .content-wrapper .product {
    height: 30px;
    margin-bottom: 16px;
    margin-left: 20px;
  }

  .food .food-wrapper .food-content .content-wrapper .price {
    font-size: 0;
  }

  .food .food-wrapper .food-content .content-wrapper .price .text {
    font-size: 17px;
    color: #FB4E44;
  }

  .food .food-wrapper .food-content .content-wrapper .price .unit {
    font-size: 11px;
    color: #9D9D9D;
  }

  .food .food-wrapper .food-content .cartcontrol-wrapper {
    position: absolute;
    right: 12px;
    bottom: 10px;
    padding: 2px;
  }

  .food .food-wrapper .rating-wrapper {
    padding-left: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .food .food-wrapper .rating-wrapper .rating-title {
    padding: 16px 16px 16px 0;
  }

  .food .food-wrapper .rating-wrapper .comment-item {
    padding: 15px 14px 17px 0;
    border-bottom: 1px solid #F4F4F4;
    width: 100%;
    box-sizing: border-box;
    display: flex;
  }

  .food .food-wrapper .rating-wrapper .comment-item .comment-header {
    flex: 0 0 41px;
    margin-right: 10px;
  }

.p{
    width: 26px;
    height: 26px;
    margin-right: 13px;
}
  .food .food-wrapper .rating-wrapper .comment-item .comment-header img {
    width: 41px;
    height: 41px;
    border-radius: 50%;
  }

  .food .food-wrapper .rating-wrapper .comment-item .comment-main {
    flex: 1;
    margin-top: 6px;
  }

  .food .food-wrapper .rating-wrapper .comment-item .comment-main .user {
    width: 50%;
    float: left;
    font-size: 14px;
    color: #333333;
  }

  .food .food-wrapper .rating-wrapper .comment-item .comment-main .time {
    width: 50%;
    float: right;
    text-align: right;
    font-size: 10px;
    color: rgb(148, 143, 143);
  }

  .food .food-wrapper .rating-wrapper .comment-item .comment-main .content {
    margin-top: 17px;
    font-size: 11px;
    line-height: 19px;
  }
</style>
