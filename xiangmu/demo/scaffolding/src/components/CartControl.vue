<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
        class="cart-decrease icon-remove_circle_outline"
      ></div>
    </transition>
    <div class="cart-count">
      <router-link to="/shopcar" class="emm">
        <div class="abc">加入购物车</div>
      </router-link>
      <button class="ma" @click="proNum>1?proNum--:''">-</button>
			<span class="mb">{{proNum}}</span>
			<button class="mc"  @click="proNum++">+</button>
    </div>
    
        <!--底部-->
        <div class="shopcart">
        <div class="shopcart-wrapper">
        <div class="content-left">
        <div class="logo-wrapper">
          <span class="logo"><img src="../assets/sige/13.png" alt=""></span>
          <i class="num">{{proNum}}</i>
        </div>
        <div class="desc-wrapper">
          <p class="total-price">￥{{proNum*proPrice}} | 另需配送费￥5</p>
        </div>
        </div>
        <div class="content-right2" v-if="proNum*proPrice>80">
         <router-link to="/settlement">
          <div class="ppp">
              去结算
          </div>
        </router-link>
        </div>
        <div class="content-right" v-else>
          ￥80起送
        </div>
        </div>
        </div>
  </div>
</template>
<style>
.emm{
  color: #000;
}
.abc{
  background-color: #c4c4c4;
  border-radius: 45%;
  width: 68px;
  margin-left: -5px;
  margin-bottom: 4px;
}
.mb{
    width: 12px;
    height: 13px;
    border:1px solid #fff;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    
}
.ma,.mc{
    margin-left: 2px;
    margin-right: 1px;
    width: 34%;
    height: 19px;
    background: #FFD161;
    border-radius: 25%;
    
}
  .cartcontrol {
    font-size: 0;
  }

  .cartcontrol .cart-decrease {
    display: inline-block;
    width: 26px;
    height: 26px;
    font-size: 26px;
    color: #b4b4b4;
  }


  .cartcontrol .cart-count {
    margin-top: -14px;
    margin-right: 11px;
    display: inline-block;
    width: 60px;
    text-align: center;
    font-size: 12px;
    line-height: 26px;
    vertical-align: top;
  }

  .cartcontrol .cart-add {
    display: inline-block;
    width: 26px;
    height: 26px;
    font-size: 26px;
    color: #ffd161;
    position: relative;
  }

  .move-enter-active, .move-leave-active {
    transition: all 0.3s linear;
  }

  .move-enter, .move-leave-to {
    transform: translateX(20px) rotate(180deg);
  }
  .shopcart-wrapper {
    width: 100%;
    height: 46px;
    background: #514f4f;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    z-index: 99;
  }

  .shopcart-wrapper .content-left {
    flex: 1;
  }

  .shopcart-wrapper .content-right {
    flex: 0 0 110px;
    font-size: 16px;
    line-height: 51px;
    text-align: center;
    font-weight: bold;
    color:#fdefef94
  }
  .shopcart-wrapper .content-right2 {
    background-color: #fcb32cc5;;
    flex: 0 0 110px;
    font-size: 16px;
    line-height: 51px;
    text-align: center;
    font-weight: bold;
  }

  .shopcart-wrapper .content-left .logo-wrapper {
    width: 50px;
    height: 50px;
    background: #666666;
    border-radius: 50%;
    position: relative;
    top: -14px;
    left: 10px;
    text-align: center;
    float: left;
  }

  .shopcart-wrapper .content-left .logo-wrapper .logo {
    font-size: 28px;
    color: #c4c4c4;
    line-height: 50px;
  }

  .shopcart-wrapper .content-left .desc-wrapper {
    float: left;
    margin-left: 13px;
  }

  .shopcart-wrapper .content-left .desc-wrapper .tip {
    font-size: 12px;
    color: #bab9b9;
    line-height: 51px;
  }

  .shopcart-wrapper .content-left .logo-wrapper.highligh {
    background: #ffd161;
  }

  .shopcart-wrapper .content-left .logo-wrapper .logo.highligh {
    color: #2D2B2A;
  }

  .shopcart-wrapper .content-left .logo-wrapper .num {
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    font-size: 9px;
    color: white;
    background: red;
    position: absolute;
    right: 0;
    top: 0;
  }

  .shopcart-wrapper .content-left .desc-wrapper .tip.highligh {
    line-height: 12px;
  }

  .shopcart-wrapper .content-right.highligh {
    background: #FFD161;
    color: #2D2B2A;
  }

  .shopcart-wrapper .content-left .desc-wrapper .total-price {
    margin-top: 5px;
    margin-left: 3px;
    font-size: 15px;
    line-height: 33px;
    color: white;
  }

  .shopcart-wrapper .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
  }

  .shopcart-wrapper .shopcart-list.show {
    transform: translateY(-100%);
  }

  .shopcart-wrapper .shopcart-list .list-top {
    height: 30px;
    text-align: center;
    font-size: 11px;
    background: #f3e6c6;
    line-height: 30px;
    color: #646158;
  }

  .shopcart-wrapper .shopcart-list .list-header {
    height: 30px;
    background: #F4F4F4;
  }

  .shopcart-wrapper .shopcart-list .list-header .title {
    float: left;
    border-left: 4px solid #53c123;
    padding-left: 6px;
    line-height: 30px;
    font-size: 12px;
  }

  .shopcart-wrapper .shopcart-list .list-header .empty {
    float: right;
    line-height: 30px;
    margin-right: 10px;
    font-size: 0;
  }

  .shopcart-wrapper .shopcart-list .list-header .empty img {
    height: 14px;
    margin-right: 9px;
    vertical-align: middle;
  }

  .shopcart-wrapper .shopcart-list .list-header .empty span {
    font-size: 12px;
    vertical-align: middle;
  }

  .shopcart-wrapper .shopcart-list .list-content {
    max-height: 360px;
    overflow: hidden;
    background: white;
  }

  .shopcart-wrapper .shopcart-list .list-content .food-item {
    height: 38px;
    padding: 12px 12px 10px 12px;
    border-bottom: 1px solid #F4F4F4;
  }

  .shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper {
    float: left;
    width: 240px;
  }

  .shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-left {
    float: left;
    width: 170px;
  }

  .shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-left .name {
    font-size: 16px;
    margin-bottom: 8px;

    /* 超出部分隐藏*/
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 16px;
  }

  .shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-left .unit {
    font-size: 12px;
    color: #B4B4B4;
  }

  .shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-left .description {
    font-size: 12px;
    color: #B4B4B4;

    /* 超出部分隐藏*/
    overflow: hidden;
    height: 12px;
  }

  .logo img{
    width: 38px;
  }
  .shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-right {
    float: right;
    width: 70px;
    text-align: right;
  }

  .shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper .desc-right .price {
    font-size: 12px;
    line-height: 38px;
  }

  .shopcart-wrapper .shopcart-list .list-content .food-item .cartcontrol-wrapper {
    float: right;
    margin-top: 6px;
  }

  .shopcart .shopcart-mask {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
    background: rgba(7, 17, 27, 0.6);
  }
</style>
<script>
export default {
  data(){
    return{
      proNum:1,
      proPrice:46
    }
  },
}
</script>