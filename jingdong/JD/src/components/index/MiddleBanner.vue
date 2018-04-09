<template>
  <div class="MiddleBanner">
       <Swiper v-if="lists.length > 0" :autoPlay='false'>
        <Slide v-for="(tag,key) in lists" :key="key">
            <img :src="'../../../'+ tag.img" alt="">
        </Slide>
      </Swiper>
      <div class="b1-title">
        <span>附近的店铺</span>
      </div>
  </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
     name: 'MiddleBanner',
    data() {
      return {
      	lists:[],
      }
    },
    components: {
      Swiper,
      Slide
    },
    created(){
	  	this.$.get('http://127.0.0.1/MiddleBanner',(res)=>{	  		
	  		this.lists = res.data
	  		// console.log(this.lists)
	  	},'json')
	  },
  }
</script>

<style>
/*title  start*/
.MiddleBanner .b1-title {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #70704e;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.MiddleBanner .b1-title span {
  font-size: 17px;
  font-weight: bold;
  color: #333;
  display: inline-block;
  background: #fff;
  padding: 0 5px;
  height: 50px;
  line-height: 50px;
  position: relative;
}
.MiddleBanner .b1-title:before {
  content: "";
  display: inline-block;
  border-top: 1px solid #333;
  margin-top: -1px;
  height: 0;
  width: 76%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}
/*title  end*/
.MiddleBanner{
  	width:95%;
  	margin:0 auto;
    border-radius:2px;
    overflow:hidden;
  }
.MiddleBanner img{
 	width:100%;
  margin-left:1px
 }
.MiddleBanner .wh_indicator .wh_indicator_item{
  border:1px solid #fff;
  background:transparent;
  width:5px;
  height:5px;
}
.MiddleBanner .wh_indicator_item.wh_show_bgcolor{
  background:#fff;
}
</style>
