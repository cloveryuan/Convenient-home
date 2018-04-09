<template>
  <div id="index">	
	 <!-- 头部 -->
    <HeaderNav></HeaderNav>
    <NewBanner></NewBanner>
    <!-- 中间分栏展示图片 -->
    <Columns></Columns>
    <!-- 秒杀 -->
		<kill></kill>
		<!-- middle banner -->
		<MiddleBanner></MiddleBanner>
		<!-- 店铺title -->
		<Buss></Buss>
  </div>
</template>

<script>
import $ from 'jquery'
import HeaderNav from '@/components/index/Headernavlist'
import NewBanner from '@/components/index/NewBanner'
import Columns from '@/components/index/Columns'
import kill from '@/components/index/kill'
import MiddleBanner from '@/components/index/MiddleBanner'
import Buss from '@/components/index/Buss'



export default {
  name: 'Index',
  components:{
    HeaderNav,
    NewBanner,
    Columns,
    kill,
    MiddleBanner,
    Buss
  },
  mounted(){
    $(window).ready(function(){
      $('footer .index').addClass('b')
      $('footer a').not('.index').removeClass('b')
    })
    
  }
}


</script>

<style scoped>
  #index{
    background:#fff;
  }
</style>
