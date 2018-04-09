<template>
  <div class="MiddleBanner">
    	<swiper :options="swiperOption" ref="mySwiper" >
		    <!-- slides -->
		    <swiper-slide v-for="(image) in images" :key="image.id">
		    	<img :src="'../../../'+ image.img" alt="">
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
     name: 'MiddleBanner',
    data() {
      return {
      	images:[],
        swiperOption: {
          notNextTick: true,
          loop:true,
          setWrapperSize :true,
          pagination : {
          	el:'.swiper-pagination'
          },
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    created(){
	  	this.$.get('http://127.0.0.1/MiddleBanner',(res)=>{	  		
	  		this.images = res.data
	  		// console.log(this.images)
	  	},'json')
	  }
  }
</script>

<style scoped>
  .MiddleBanner{
  	width:95%;
  	margin:0 auto;
  }
 .MiddleBanner .swiper-container{
 	position: relative;
    z-index: 8;
    white-space: nowrap;
    overflow:hidden;
    width:100%;
 }
 .MiddleBanner .swiper-container img{
 	width:100%;
 }

</style>
