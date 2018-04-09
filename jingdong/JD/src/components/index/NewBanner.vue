<template>
  <div class="newbanner">
    	<swiper :options="swiperOption" ref="mySwiper" >
		    <!-- slides -->
		    <swiper-slide v-for="(image,index) in images" :key="image.id">
          <img  :src="'../../../'+ image.img" alt="">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		   <!--  <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div> -->
		    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
		  </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'NewBanner',
    data() {
      return {
      	images:[],
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: {
            delay:1000,
            disableOnInteraction: false,//鼠标移开继续滑动
          },
          speed:2000,
          loop : true,
          // loopedSlides:1,
          // direction : 'vertical',
          // effect:"coverflow",
          // grabCursor : true,
          // setWrapperSize :true,
          // autoHeight: true,
          // paginationType:"bullets",
          pagination : {
          	el:'.swiper-pagination',
            clickable: true
          },
          // prevButton:'.swiper-button-prev',
          // nextButton:'.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          // mousewheelControl : true,
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          // debugger: true,
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          // onTransitionStart(swiper){
          //   console.log(swiper)
          // },
          // more Swiper configs and callbacks...
          // ...
        },
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    },
    created(){
	  	this.$.get('http://127.0.0.1/NewBanner',(res)=>{	  		
	  		this.images = res.data
	  		// console.log(this.images)
	  	},'json')
	  }
  }
</script>

<style>
  .newbanner{
  	width:95%;
  	margin:0 auto 30px;
  }
 .newbanner .swiper-container{
 	  position: relative;
    z-index: 8;
    white-space: nowrap;
    overflow:hidden;
    width:100%;
 }
 .newbanner .swiper-container img{
 	width:100%;
 }
.swiper-pagination .swiper-pagination-bullet{
  border:1px solid #fff;
  background:transparent;
  height:5px;
  width:5px;
  opacity:1;
}
.swiper-pagination .swiper-pagination-bullet-active{
  background:#fff;
}
</style>
