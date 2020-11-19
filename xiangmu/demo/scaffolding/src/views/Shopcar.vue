<template>
  <div>
        <mt-header>
            <router-link slot="left" to="/">
                <mt-button  icon="back"></mt-button>
            </router-link>
            <div slot="right" class="shortcut" v-if="this.$store.state.isLogined == 1">
                <span>您好,{{this.$store.state.userInfo.username}}</span>
            </div>
        </mt-header>
        <div class="articleItem">
            <div class="l">
              <input type="checkBox" class="i"  @click="selectProduct(isSelectAll)" v-bind:checked="isSelectAll"/>全选
              <button class="i1" @click="deleteProduct">删除</button>
            </div>
            <div class="articleItem-wrapper" v-for="(item,index) of productList" :key=index>
              <div class="ds">
                <label>
                  <input type="checkbox" v-bind:checked="item.isSelect" @click="item.isSelect=!item.isSelect" class="dis">
                  </label>
              </div>
              <!-- 图像开始  -->
              <div class="articleImg">
                <img src="../assets/bobo/list_15.jpg" alt="">
              </div>
              <!-- 图像结束 -->
            <div>
              <!-- 简介开始 -->
              <div class="articleDes">
                {{item.proNames}}
              </div>
              <div class="articleDes">
                {{item.proName}}
              </div>
              <!-- 简介结束 -->
              <div class="q">
                ￥{{item.proPrice}}
              </div>
              <div class="btn">
                <button class="ma" @click="item.proNum>1?item.proNum--:''">-</button>
                <span class="mb">{{item.proNum}}</span>
                <button class="mc"  @click="item.proNum++">+</button>
              </div>
            </div>
            </div>
             <div class="shopcart">
        <div class="shopcart-wrapper">
        <div class="content-left">
        <div class="logo-wrapper">
          <span class="logo"><img src="../assets/sige/13.png" alt=""></span>
          <i class="num">{{getTotal.totalNum}}</i>
        </div>
        <div class="desc-wrapper">
          <p class="total-price">￥{{getTotal.totalPrice}} | 另需配送费￥5</p>
        </div>
        </div>
        <div class="content-right2" v-if="getTotal.totalPrice>80">
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
  </div>
</template>
<script>
export default {
    data(){ 
        return{              
    productList:[
    {
      'proNames':'【人气爆棚】',
     'proName' :'草莓格格蛋糕',
     'proNum' : 1,
     'proPrice' :46,
    },
    {
      'proNames':'【人气爆棚】',
     'proName' :'爆浆蓝莓蛋糕',
     'proNum' : 1,
     'proPrice' :58,
    },
   ]}
   },
   methods:{
      selectProduct:function(_isSelect){
                //遍历productList，全部取反
                for (var i = 0, len = this.productList.length; i < len; i++) {
                    this.productList[i].isSelect = !_isSelect;
                }
            },
     deleteProduct:function () {
        this.productList=this.productList.filter(function (item) {return !item.isSelect})
            },
  },
  computed:{
   //检测是否全选
                isSelectAll:function(){
                //如果productList中每一条数据的isSelect都为true，返回true，否则返回false;
                return this.productList.every(function (val) { return val.isSelect});
            },
   getTotal:function(){
    var prolist = this.productList.filter(function (val) { return val.isSelect}),

    totalPri = 0;
    let totalNum = 0;
    for (var i = 0,len = prolist.length; i < len; i++) {

     totalPri+=prolist[i].proPrice*prolist[i].proNum;
     totalNum+=prolist[i].proNum;
    }
    return {totalNum:totalNum,totalPrice:totalPri}
   },
  },
  mounted:function () {
        var _this=this;
        //为productList添加select（是否选中）字段，初始值为true
        this.productList.map(function (item) {
            _this.$set(item, 'isSelect', false);
        })
     }
}
</script>
<style scoped>
.mint-header{
  background-color:rgb(148, 143, 143);
}
.shortcut a {
  color: #fff;
  padding-left: 20px;
}
.ppp{
  color: rgb(10, 10, 10);
}
.l{
    margin-top:1px;
    margin-left: 2px;
    font-size: 14px;
    flex: 1;
    font-size: 17px;
}
.i{
  margin-top: 6px;
  margin-right: 6px;
}
.i1{
  height: 26px;
  float: right;
  margin-right: 7px;
}
.a{
width: 93%;
height: 90px;
margin-top: 15px;
margin-left: 12px;
border-radius: 5px;
}
.b{
    margin-top: 12px;
    margin-bottom: 5px;
    border-bottom:1px solid #999; 
    font-size:16px;
}
.d{
    margin-top: 65px;
    text-align: center;
}
.mm{
    width: 93%;
    height: 35px;
    margin-top: 15px;
    margin-left: 12px;
    border-top:2px solid rgba(68, 68, 68, 0.61);
    border-left:2px solid rgba(68, 68, 68, 0.61);
    border-right:2px solid rgba(68, 68, 68, 0.61);
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
.ds{
    margin-right:10px;
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
  margin-top: 20px;
  width: 60px;
  height: 25px;
  font-size: 10px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  letter-spacing: normal;
  text-align: center;
}
.mb{
    width: 12px;
    height: 13px;
    border:1px solid #fff;
    text-align: center;
}
.ma,.mc{
    margin-left: 2px;
    margin-right: 1px;
    width: 33%;
    height: 19px;
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
.shopcart{
  position: absolute;
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