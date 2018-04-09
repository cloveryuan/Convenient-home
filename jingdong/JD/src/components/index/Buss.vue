<template>
  <div class="buss">      
    <!-- <router-view></router-view> -->
    <ul class="b2" v-infinite-scroll="loadmore">
      <li v-for="bussinfo in bussInfos" :key="bussinfo.gid" class="shop">
        <router-link :to="{path:'store',query:{id:bussinfo.id}}" class="logo">
          <span>
            <img :src="bussinfo.logo + bussinfo.img + '.jpg'">
          </span>
        </router-link>
          <div class="details">
            <!-- 详情 -->
            <!-- 详情上半部分 -->
            <router-link :to="{path:'store',query:{id:bussinfo.id,sname:bussinfo.name,saddr:bussinfo.addr}}" class="buss-title">
              <h3>{{bussinfo.name}}-{{bussinfo.addr}}店</h3>
              <div class="pict" >
                <span class="seven" v-if="bussinfo.seven"></span>
                <span class="tenfour" v-if="!bussinfo.seven&&bussinfo.tenfour"></span>
                <span class="paid" v-if="bussinfo.paid"></span>
              </div>           
               <!-- 达达专送 express快递意思 -->
              <div class="express" v-if="bussinfo.selfSend">
                <strong class="kh" v-if="Number(bussinfo.time)<=16">
                  <span class="da">达达专送</span> 
                  <span class="db">-</span>
                  <span class="aea ">{{bussinfo.minute}}分钟</span>
                </strong>
                <div v-else>
                  <!-- rest休息 -->
                  <strong class="rest">
                      <span>明日9点起送</span> 
                  </strong>
                  <strong class="kh">
                    <span class="da">达达专送</span> 
                  </strong>
                </div>             
              </div>
               <!-- 商家自送 -->
               <div class="selfsend" v-else>
                  <strong class="rest">
                    <span class="da">商家自送</span> 
                    <span class="db">-</span>
                    <span class="aea ">{{bussinfo.minute}}分钟</span>
                  </strong>
               </div>
              <div class="start">
                <p class="start1">{{bussinfo.start}}</p>
                <p class="start2 text"><span></span>月售{{bussinfo.num}}单</p>
              </div>
              <p class="distance text">0元起送 ,距离{{bussinfo.distance}}km , <span v-if="Number(bussinfo.time)<23||Number(bussinfo.time)>5">{{bussinfo.free}}</span> <span v-else>夜间基础运费7元</span></p>
            </router-link> 
            <!-- 详情下半部分优惠信息 -->
            <div class="sale" >               
                  <div class="menu">
                   <router-link :to="{path:'store',jquery:{id:bussinfo.id}}">
                      <div class="sa" v-if="bussinfo.selfSend">
                        <i class="red">领券</i>
                        <span>{{bussinfo.salecoupon | obj}}</span>
                      </div>
                      <div class="sa" v-if="bussinfo.menushow">
                        <i class="red">首单</i>
                        <span>立减{{bussinfo.first}}</span>
                      </div>
                      <div class="sa" v-if="bussinfo.paid">
                        <i class="blue">运费</i>
                        <span>{{bussinfo.freight}}</span>
                      </div>
                      <div class="sa" v-if="bussinfo.menushow" v-for="(off,index) in bussinfo.MoneyOff" :key="'off'+index">
                        <i>满减</i>
                        <span>{{off}}</span>
                      </div>  
                    </router-link>              
                    <i class="buss-arrow"></i>
                  </div>               
            </div>       
          </div>
      </li>
    </ul>
    <p class="more" @click="loadmore">↑ 加载更多 ···</p>
    
    <!-- 悬浮广告 -->
    <div class="av">
      <a class="close" @click="avclose()"></a>
    </div>
    <!-- 活动养花图标 -->
    <div class="flower">
      <img src="../../../static/img/index-flower.png" alt="超值活动来袭">
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
// import store from 'storejs'

export default {
  directives: {infiniteScroll},//infiniteScroll插件  指令集
  data(){
    return {
      bussInfos:[],
      
    }
  },
  mounted(){
    // 触摸时触发，让图标往右移动
    $(window).on('touchmove',function(){
     $('.flower').addClass('flower-active')
    })


    // 停止触摸，并且页面刷新完时触发
    $(window).on('touchend',function(){
      $(window).ready(function(){
        setTimeout(function(){
          $('.flower').removeClass('flower-active')
        },1500)
        
      })
    })
  
  },
  updated(){
    this.$nextTick(function(){
      $('.menu').each(function(i,value){
        var count = $(this).find('.sa').length
        // console.log(count)
        if(count>2){//优惠超过两个，小箭头出现
          $(this).find('.buss-arrow').css('display','block')
          $(this).find('.sa').slice(2).css('display','none')
        }else if(count==0){//如果没有优惠，这个模块隐藏
          $(this).parent().css('display','none')
        }
      })
    }) 

    $('.menu').map(function(i,value){
      var drop = false//初始值为false，下拉是隐藏的，点击后变true
      $(this).find('.buss-arrow')[0].onclick = function(event){
        if(drop==false){
          $(this).css('backgroundPosition','2px -163px') 
          $(this).parent().find('.sa').slice(2).css('display','block')
          drop = true 
           //下拉

        }else{
          $(this).css('backgroundPosition','2px -183px') 
          $(this).parent().find('.sa').slice(2).css('display','none')
          drop = false  
        }       
      }
    })
  },
  methods:{
    loadmore(){
      $.get(this.apiUrl+'/Buss',(res) =>{
          this.bussInfos = this.bussInfos.concat(res.data)
          
      },'json')
    },
    avclose(){//悬浮广告消失
      $('.av').css('display','none')
    }
  },
  created(){
    this.loadmore()
    // console.log($('.sa').parent())
    $('.sa').parent().find('.sa').slice(2).css('block','none')
  }
}


// 遍历对象，把对象属性值拼接起来，以逗号隔开
Vue.filter('obj',function(value){
  var str = ''
  for(var i in value){
    str += value[i] + ','
  }
  return str.slice(0,str.length-1)//去除最后一个逗号
})
 


</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 12px;
  display: inline-block;
}
ul {
  list-style: none;
}
i {
  font-style: normal;
}
.buss {
  width: 100%;
  background:#fff;
}

/*list start*/
.menu {
  padding-top: 6px;
}
#index .b2{
  padding-top:0;
}
ul.b2{
  padding-top:48px;
}
.b2 .shop {
  position: relative;
  padding: 15px 10px;
  min-height: 70px;
  border-top: 1px solid #e7e9e4;
}
.b2 .logo {
  float: left;
}
.b2 .logo img {
  width: 64px;
  height: 64px;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  display: inline-block;
}
.b2 .details {
  display: inline-block;
  margin-left: 12px;
  color: #999;
  clear: both;
  width: calc(100% - 80px);
  position: relative;
}
.b2 .buss-title {
  position: relative;
  display: block;
  min-height: 66px;
}
.buss-title h3 {
  color: #333;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  max-width: 50%;
}
.buss-title .pict {
  position: absolute;
  top: 2px;
  right: 10px;
  min-width: 20px;
  height: 20px;
}
.buss-title .seven {
  background: url("../../../static/img/index-paid-seven.png") no-repeat;
  background-size: 80%;
  display: inline-block;
  width: 20px;
  height: 100%;
}
.buss-title .tenfour {
  background: url("../../../static/img/index-paid-tenfour.png") no-repeat;
  background-size: 80%;
  display: inline-block;
  width: 20px;
  height: 100%;
}
.buss-title .paid {
  background: url("../../../static/img/index-paid.png") no-repeat;
  background-size: 80%;
  display: inline-block;
  width: 20px;
  height: 100%;
}
.express,
.selfsend {
  padding-top: 10px;
  overflow: hidden;
}
.buss-title .kh,
.buss-title .rest {
  display: inline-block;
  border: 1px solid #16a9ff;
  border-radius: 2px;
  color: #16a9ff;
  overflow: hidden;
  font-size: 10px;
  padding: 1px 2px;
  font-weight: 400;
}
.buss-title .rest {
  color: #999;
  border-color: #b6b6b6;
}
.start {
  color: #ffa251;
}
.start p {
  display: inline-block;
}
.start .start1 {
  height: 15px;
  font-size: 15px;
}
.start .start2 span {
  display: inline-block;
  background: url("../../../static/img/icon_line_split.jpg") no-repeat center
    2px;
  width: 8px;
  height: 10px;
}
.text {
  font-size: 11px;
  height: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
  display: inline-block;
}
.distance {
  margin-top: 8px;
  display: block;
}
.sale:before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px dotted #cccccc;
}
.sale {
  margin-top: 12px;
  position: relative;
}
.sale a {
  color: #999;
  font-size: 10px;
  display: inline-block;
  width: 86%;
}
.sa {
  font-size: 10px;
  color: #999;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sa i {
  display: inline-block;
  padding: 0 2px;
  font-size: 10px;
  border-radius: 2px;
  margin-right: 4px;
  color: #fff;
  background: #5fbc65;
}
.sa i.red {
  background: #ff6c57;
}
.sa i.blue {
  background: #5ca7ff;
}
/*侧面小箭头，点击出现更多优惠*/
.buss-arrow {
  position: absolute;
  top: 12px;
  right: 10px;
  display: inline-block;
  width: 18px;
  height: 10px;
  background: url("../../../static/img/index.png") no-repeat;
  background-position: 2px -183px;
  background-size: 20px 200px;
  display: none;
}
/*加载更多*/
.more {
  margin-top: 10px;
  text-align: center;
  width: 100%;
  font-size: 14px;
  color: #999;
}
/*list end*/

/*悬浮的广告av*/
.av {
  height: 82px;
  color: #fff;
  background: url("../../../static/img/download.png") no-repeat;
  background-size: 100%;
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  z-index: 100;
}
.av .close {
  position: absolute;
  top: 0;
  right: 0;
  height: 82px;
  width: 30px;
}
/*养花活动图标*/
.flower {
  width: 75px;
  height: auto;
  position: fixed;
  bottom: 20%;
  right: 0;
  /*opacity:1;*/
  z-index: 99;
  text-align: center;
  transition: all 1.75s;
}
.flower img {
  width: 100%;
}
.flower-active {
  opacity: 0.4;
  right: -45px;
}
</style>
