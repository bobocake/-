<template>
    <div>
    <div class="ratings" ref="rateView">
        <div class="ratings-wrapper">
            <div class="overview">
                <div class="overview-left">
                    <div class="comment-score">
                        <p class="score">4.8</p>
                        <p class="text">商家评分</p>
                    </div>
                    <div class="other-score">
                        <div class="quality-score item">
                            <span class="text">口味</span>
                                <span class="star"> 
                                <img src="../assets/star/1.png" alt="">
                                <img src="../assets/star/1.png" alt="">
                                <img src="../assets/star/1.png" alt="">
                                <img src="../assets/star/1.png" alt="">
                                <img src="../assets/star/2.png" alt="">
                                </span>
                            <span class="score"></span>
                        </div>
                        <div class="pack-score item">
                            <span class="text">包装</span>
                            <span class="star"> 
                                <img src="../assets/star/1.png" alt="">
                                <img src="../assets/star/1.png" alt="">
                                <img src="../assets/star/1.png" alt="">
                                <img src="../assets/star/2.png" alt="">
                                <img src="../assets/star/3.png" alt="">
                            </span>
                            <span class="score"></span>
                        </div>
                    </div>
                </div>
                <div class="overview-right">
                    <div class="delivery-score">
                        <p class="score">
                            <img src="../assets/sige/30.png" alt="">
                        </p>
                        <p class="text">配送评分</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
  .ratings {
    position: absolute;
    left: 0;
    top: 0px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }

  .ratings .ratings-wrapper .overview {
    padding: 20px 0 18px 0;
    display: flex;
  }

  .ratings .ratings-wrapper .overview .overview-left {
    flex: 1;
    padding-left: 26px;
  }

  .ratings .ratings-wrapper .overview .overview-left .comment-score {
    float: left;
    width: 48px;
    text-align: center;
    margin-right: 26px;
  }

  .ratings .ratings-wrapper .overview .overview-left .comment-score .score {
    font-size: 23px;
    font-weight: 800;
    color: #ffb000;
    margin-bottom: 9px;
  }

  .ratings .ratings-wrapper .overview .overview-left .comment-score .text {
    font-size: 11px;
    color: #666666;
  }

  .ratings .ratings-wrapper .overview .overview-left .other-score {
    float: left;
    margin-top: 2px;
  }

  .ratings .ratings-wrapper .overview .overview-left .other-score .item {
    height: 11px;
  }

  .ratings .ratings-wrapper .overview .overview-left .other-score .item .text {
    font-size: 11px;
    color: #666666;
    margin-right: 11px;
    float: left;
    margin-top: 3px;
  }

  .ratings .ratings-wrapper .overview .overview-left .other-score .item .star {
    float: left;
    margin-right: 11px;
  }

  .ratings .ratings-wrapper .overview .overview-left .other-score .item .star  img{
      height: 14.5px;
      /* margin-bottom: 14px; */
  }

  .ratings .ratings-wrapper .overview .overview-left .other-score .item .score {
    font-size: 11px;
    color: #FFB000;
    float: left;
  }

  .ratings .ratings-wrapper .overview .overview-left .other-score .quality-score {
    margin-bottom: 14px;
  }

  .ratings .ratings-wrapper .overview .overview-right {
    flex: 0 0 100px;
    text-align: center;
    border-left: 1px solid #9D9D9D;
  }

  /* .ratings .ratings-wrapper .overview .overview-right .delivery-score {
  } */

  .ratings .ratings-wrapper .overview .overview-right .delivery-score .score {
    font-size: 19px;
    font-weight: 500;
    color: #999999;
    margin-bottom: 10px;
    margin-top: 2px;
  }
.ratings .ratings-wrapper .overview .overview-right .delivery-score .score img{
    height: 24px;
}
  .ratings .ratings-wrapper .overview .overview-right .delivery-score .text {
    font-size: 11px;
    color: #999999;
  }
</style>