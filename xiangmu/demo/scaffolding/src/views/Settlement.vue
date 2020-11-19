<template>
    <div class="bobocake">
        <!-- 顶部确认订单 -->
      <div>
       <router-link to="/shopcar" slot="left">
         <mt-button class="icon" icon="back"></mt-button>
       </router-link>
      </div>  
        <!-- 收货地址 -->
      <div class="address" > 
          <!-- 地图地址 -->
          <div class="address-img" >
              <img class="address-imgs" src="../assets/sige/dd.png" alt="">
          </div>
          <!-- 收货人信息 -->
          <div >
              <b>郭亮亮</b>
                <b class="phone">15555555555</b>
              <p class="p">北京北京市通州区马驹桥镇环科中路2号院29号楼员宿公寓;北京亦庄马驹桥店;</p>
              <a class="a">收货不便时，可选择暂存服务</a>
          </div>
      </div>

        <!--商品信息  -->
    
      
          <!-- 店铺名字 -->
          <div class="bobo">
            <div class="bobo-tao">
                <img class="img-tao" src="../assets/sige/tt.jpg" >
                <p class="bobo-p">啵啵开了一家店</p>
            </div>
          </div>
          <!-- 购买商品 -->
      <div class="tou">
          <div class="dangao">
              <img class="dangaos" src="../assets/bobo/list_15.jpg" alt="">
          </div>
          <div class="tou-text">
                  <div class="tou-text-p">
                    <p class="tou-p">朵颐HD欧式粗陶水果沙拉碗斗笠碗家用复古创意陶瓷大碗大号拉面碗</p>
                    <p class="tou-pp">颜色分类:HD斗笠碗;</p>
                  </div>
                  <div class="span">
                    <p class="span-p">￥:36.00</p>
                    <p class="span-pp">*1</p>
                  </div>
          </div>
      </div>      
         
          <!-- 配送方式 -->
          <div class="peisong">
              <p class="peisong-p">普通配送</p>
              <p class="peisong-pp">快递费：￥8元</p>
          </div>
          <!-- 准时保证 -->
           <div class="ontime">
              <p class="ontime-p">准时保证：</p>
              <p class="ontime-pp">卖家赠送，保障在规定时间内送货到您的手中。</p>
          </div>
          <!-- 订单备注 -->
          <div class="remarks">
              <p class="remarks-p">订单备注：</p>
              <p class="remarks-pp">选填，请跟啵啵协商一致</p>
          </div>
          <!-- 小计 -->
          <div class="subtotal">
              <div class="subtotal-w"></div>
             
              <p class="subtotal-p">小计：</p>
              <p class="subtotal-pp">￥44.00</p>
             
          </div>
      
        <!-- 立即结算 -->
      <div class="foot">
          <b class="foot-b">合计：</b>
          <p class="foot-p">￥44.00</p>
          <button class="foot-but">立即结算</button>
      </div>
    </div>
</template>

<style scoped>
.icon{
    background:rgb(237, 237, 237);
}
    .bobocake{
        background: rgb(237, 237, 237);
        height: 1000px;
        margin-top: -7px;
    }
    .address{
      background:rgb(255, 255, 255) ;
      display: flex;
      align-items: center;
      padding-top:20px;
      padding-left:40px;
      padding-bottom:20px;
      margin-left: 5px;
      margin-right: 10px;
      border-radius:30px;
      
    }
    .address-img{
      padding-top: 10px;
      padding-bottom: 20px;
      width:30%; 
    }
    .address-imgs{
      padding-top: 10px;
      width:50%; 
    }
    .phone{
        align-self: flex-end; 
        margin-left: 10px; 
        height: auto; 
        color: rgb(153, 153, 153); 
        font-size: 13px; 
    }
    .p{
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2; 
        line-height: 14px; 
        overflow: hidden; 
        margin-top: 5px;
        margin-right: 20px;
        font-size: 12px;
    }
    .a{
        display: -webkit-box; 
        margin-top: 10px;
        font-size: 12px;
        color: rgb(235, 69, 18);
    }
    .img-tao{
       height: 20px;
       margin-top: 3px;
       display: inline-block;

    }
    .bobo{
        
        height: 30px; 
        padding-top:10px;
        padding-left:40px;
        margin-left: 5px;
        margin-right: 10px;
        border-top-left-radius:30px;
        border-top-right-radius:30px;
        border-bottom-right-radius:0em;
        border-bottom-left-radius:0em;
        background: rgb(255, 255, 255);
    }
    .bobo-p{
        font-size: 12px;
        display: inline-block;
       
    }
    .tou{
        display: flex; 
        margin-left: 5px;
        margin-right: 10px;
        height: auto; 
        background:rgb(255, 255, 255);
        height: 80px;
        padding-left:40px;
        padding-bottom:20px;
    }
    .dangao{
       height: 100px;
       width: 20%;
       margin-top: 10px;
       float: left;
    }
    .dangaos{
       width: 100%;
       height: 60%;
       display: inline-block;
    }
    .tou-p{
        overflow: hidden; 
        display: -webkit-box; 
        line-height: 14px;
        display: inline-block;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2; 
        margin-top: 10px;
        margin-left: 5px;
        margin-right: 10px;
        font-size: 10px;

    }
    .tou-pp{
         margin-top: 10px;
        margin-left:10px;
        font-size: 12px;
        color:  rgb(153, 153, 153);
    }
    .tou-text{
        overflow: hidden;
        width:80% ;
       float: left;
        
    }
    .tou-text-p{
        width: 70%;
       float: left;

    }
    .span{
        width: 30%;
        display: flex; 
        overflow: hidden; 
        height: auto; 
        flex-direction: column; 
    }
    .span-p{
        margin-top: 10px;
        font-size: 10px;
        margin-left: 15px;
    }
    .span-pp{
       font-size: 10px;
        margin-left: 50px; 
    }
    .but{
        width: 30%;
    }
     .peisong{
        display: flex; 
        margin-left: 5px;
        margin-right: 10px; 
        background:rgb(255, 255, 255);
        height: 40px;
        padding-left:40px;
        padding-bottom:20px;
        margin-left: 5px;
        margin-right: 10px;
    }
    .peisong-p{
        width: 70%;
        margin-top: 10px;
    }
    .peisong-pp{
        width: 30%;
        font-size: 10px;
        margin-top: 10px;
    }
    .ontime{
        display: flex; 
        margin-left: 5px;
        margin-right: 10px;
        background:rgb(255, 255, 255);
        height: 40px;
         padding-left:40px;
        padding-bottom:20px;
    }
    .ontime-p{
        width: 30%;
        margin-top: 10px;
    }
    .ontime-pp{
        width: 70%;
        margin-top: 10px;
        font-size: 12px;
        margin-right: 5px;
    }
    .remarks{
        display: flex; 
        margin-left: 5px;
        margin-right: 10px;
        background:rgb(255, 255, 255);
        height: 40px;
         padding-left:40px;
        padding-bottom:20px;
    }
    .remarks-p{
        width: 30%;
        margin-top: 10px;
    }
    .remarks-pp{
        width: 70%;
        margin-left: 20px;
        margin-top: 15px;
        font-size: 12px;
        margin-right: 5px;
    }
    .subtotal{
        display: flex; 
        
        background:rgb(255, 255, 255);
        height: 40px;
        border-top-left-radius:0;
        border-top-right-radius:0;
        border-bottom-right-radius:30px;
        border-bottom-left-radius:30px;
        padding-left:40px;
        margin-left: 5px;
        margin-right: 10px;
           
    }

    .subtotal-p{
        font-size:14px;
        margin-top: 10px;
        width: 15%;
    }
    .subtotal-pp{
        margin-top: 12px;
        font-size:12px;
        width: 10%;

    }
    .subtotal-w{
        width: 70%;
    }
    .foot{
      background:rgb(255, 255, 255) ;
      display: flex;
      align-items: center;
      padding-top:20px;
      padding-left:40px;
      padding-bottom:20px;
      margin-left: 5px;
      margin-right: 10px;
      border-radius:30px;
      
    }
    .foot-b{
        font-size: 20px;
        margin-left:auto;
    }
    .foot-p{
        font-size: 14px;
        color: red;
        margin-left: -10px;
    }
    .foot-but{
        display: flex; 
        background: tomato;
        color: rgb(250, 250, 250);
        font-size: 16px; 
        border-radius: 60px;
        justify-content: center;
         -webkit-box-pack: center;
         align-items: center; 
         -webkit-box-align: center;
        height: 40px;
        margin-left: 20px;
        margin-right: 10px;

    }
</style>