<template>
  <div class="goods">
     <div class="menu-wrapper" ref="menuWrapper">
       <ul>
         <li v-for="(item,index) in goods"  class="menu-item" :class="{current: currentIndex == index}" @click="selectMenu(index,$event)" :key="index" >
           <span class="text border-1px">{{item.fname}}</span>
         </li>
       </ul>
     </div>
     <div class="foods-wrapper" ref="foodsWrapper">
       <ul>
         <li v-for="(item,index) in goods"   class="food-list food-list-hook" :key="index" >
           <h1 class="title">{{item.fname}}</h1>
              <div v-for="(food,index) in foods"  :key="index">
            <router-link :to="`/productdetail/${food.lid}`">  
                <ul   class="food-item border-1px" v-if="item.fid==food.cake_id">
                <div class="icon" @click="selectFood(food)">
                  <img width="57" height="57" v-lazy="food.cake_image">
                </div>
                <div class="content">
                  <h2 class="name">{{food.lname}}</h2>
                  <p class="description">{{food.short_detail}}</p >
                  <div class="extra">
                    <span class="count">月售{{food.sold_count}}份</span>
                    <span class="rating">好评率{{food.ratings}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old">￥{{food.old_price}}</span>
                  </div>
              </div>
            </ul>
                </router-link>
            </div>
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  
  data () {
    return {
      goods: [],
      foods:[],
      listHeight: [],
      scrollY: 0,
    }
  },
 computed: {
    // 计算得到当前分类下标
    currentIndex () {
    //第一种写法 有点繁琐 不推荐
    //   for (let i = 0; i < this.listHeight.length; i++) {
    //     let height1 = this.listHeight[i]
    //     let height2 = this.listHeight[i + 1]
    //     if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
    //       return i
    //     }
    //   }
    //   return 0
        //  解构赋值 
      
    // 第二种写法已改进   根据条件计算 产生一个结果 findIndex查找满足条件的下标 没找到返回-1
      const index=this.listHeight.findIndex((item,index)=>{
        //   如果滚动的距离>=左侧列表当前的高度并且 小于下一项的高度 
          return this.scrollY>=item && this.scrollY<this.listHeight[index + 1]
      })
     
        return index
    },
  },
  created(){
     //DOM已经更新
            this.$nextTick(() => {
              // 执行滚动方法
              this._initScroll()
              // 计算分类的区间高度
              this._calculateHeight()

            })
  },
  mounted () {

    //通过axios工具 //通过axios工具向web服务器发送请求以获蛋糕分类取数据
    this.axios.get('/type').then(res=>{
      this.goods=res.data.results;
    });

    //通过axios工具 //通过axios工具向web服务器发送请求以获蛋糕数据
    this.axios.get('/details').then(res=>{
      let data=res.data.results;
      data.forEach(item=>{
        item.cake_image=require('../../public/img/product/'+item.cake_image);
        this.foods.push(item);
      })
    })
  },
 methods: {
        //     设置两边列表可以滚动  内容区要比外层容器要高  列表先渲染 才可以滑动 
    _initScroll () {
        
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 2
      })
    //    右侧表绑定滑动监听 
      this.foodsScroll.on('scroll', (pos) => {
        //  获取每次滚动的值 绝对值
        this.scrollY = Math.abs(Math.round(pos.y))
      })
      //  右侧列表绑定滑动结束监听
      this.foodsScroll.on('scrollEnd', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        console.log(this.scrollY)
      })
    },
    
          
    _calculateHeight () {
        // 获取 所有左侧列表li  class 为 food-list-hook ul设置ref 
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')

          let height=0;
          this.listHeight.push(height)
      // 第一种写法 有点繁琐 不推荐 
        //  定义初始值 li可见高度为 0  
    //   let height = 0
    // //   初始值0 添加到listHeight数组
    //   this.listHeight.push(height)
    // //   循环遍历所有左侧列表 得到所有li可视区域高度 
    //   for (let i = 0; i < foodList.length; i++) {
    //     let item = foodList[i]
    //         // 高度+= 左侧列表当前项的可视高度
    //     height += item.clientHeight
    //     //  收集左侧列表所有li可见区域高度
    //     this.listHeight.push(height)
    //   }

        // 第二种写法以改进  伪数组转为真数组 并循环遍历
          Array.prototype.slice.call(foodList).forEach((i) =>{
               height += i.clientHeight
                 this.listHeight.push(height)
          })
    
    },
    //  点击左侧列表 右侧列表滑动到指定位置
    selectMenu (index,event) {
     if(!event._constructed){
       return;
     }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
    //   scrollToElement可以滑动到指定位置
      this.foodsScroll.scrollToElement(foodList[index],300)
    //    第一个参数对应的食品列表 
    //  第二个参数为滑动 动画时长
    },
  }
  
}
</script>

<style lang="scss" scoped>
    .goods{
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    max-width: 540px;
    display: flex;
    overflow: hidden;
    .menu-wrapper{
    flex: 0 0 80px;
    background: #f3f5f7;
    }
    }
    .menu-item{
    width: 56px;
    height: 54px;
    display: table;
    font-size: 12px;
    line-height: 14px;
    padding: 0 12px;
    font-weight: 200;
    &:last-child{
    .text:after{
    border-top: none;
    }          
    }
    &.current{
    position: relative;
    background-color: #fff;
    font-weight: 700;
    margin-top: -1px;
    color: aquamarine;
    z-index: 100;
    .text:after{
    border-top: 0;
    }           
    }
    .text{
    display: table-cell;
    vertical-align: middle;
    width: 56px;
    font-size: 12px;   
    .icon{
    vertical-align: top;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    }
    }  
    }
    .foods-wrapper{
    flex: 1;
    .title{
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    width: 420px;
    height: 26px;
    line-height: 26px;
    padding-left: 10px;
    margin-left: 12PX;
    background:#f0f0f0;
    color: rgb(147,153,159);
    p{
    background-color: #f3f5f7;
    }
    }      
        
    .food-item{
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    border:rgba(7,17,27,.1) 1PX solid;
    &:last-child:after{
        border-top: 0;
    }
            
    .icon{
    flex: 0 0 57px;
    margin-right: 10px;
    }
    .content{
        flex: 1;
    }       
    .name{
    margin: 2px 0 8px 0;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7,17,27);
    }                  
    .description,.extra{
    font-size: 10px ;
        line-height: 10px;
        color: rgb(147,153,159);
        margin-bottom: 8px;         
    }         
    .extra{
    .count{
    margin-right: 12px;
    line-height: 10px;
    }
    }      
    .rating{
    line-height: 10px;
    }        
    .price{
    .now{
    font-size: 14px;
    color: rgb(240,20,20);
    font-weight: 700;
    line-height: 24px;
    margin-right: 8px;
    }
    }                   
    .old{
        font-size: 10px;
        text-decoration: line-through;
        color: rgb(147,153,159);
        font-weight: 700;
        line-height: 24px;
        }          
        .cart-wrapper{
            position: absolute;
            right: 0;
            bottom: 12px;
            }
        }
        }                            
</style>