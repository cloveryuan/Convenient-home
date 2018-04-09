<template>
  <div class="kill">      
      <div class="kill-top">
        <span>更多</span>
      </div> 
      <div class="kill-content">
        <ul>
          <li v-for="(info) in infos" :key="info.id">
            <p class="img">
              <img :src="'../../../'+ info.img" alt="">
              <span>{{info.name}}-{{info.addr}}</span>
            </p>
            <p class="kill-pr">
              ￥
              <i v-if="info.price<info.lineprice">{{info.price}}</i>
              <i v-else>{{info.lineprice}}</i>
            </p>
            <p class="kill-line">
              ￥
              <i v-if="info.price<info.lineprice">{{info.lineprice}}</i>
              <i v-else>{{info.price}}</i>
            </p>
          </li>
          <li class="more">
            <a href="">查看更多</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data(){
    return {
      infos:[],
    }
  },
  created(){
    $.get('http://127.0.0.1/kill',(res)=>{
      // console.log(res.data)
        this.infos = res.data
    })
  }
}


</script>

<style scoped>
  a{
    text-decoration:none;
    color:#ff5757;
    font-size:12px;
  }
  .kill{
    width:100%;
  }
  .kill .kill-top{
    width:90%;
    margin:0 auto;
    text-align:right;
    height:30px;
    line-height:30px;
    background:url('../../../static/img/index-kill.png') no-repeat center left;
    background-size:auto 20px;
    margin:20px auto 10px;
  }
  .kill-top span{
    background:url('../../../static/img/inedx-kill-right.png') no-repeat right center;
    color:#ff5757;
    font-size:12px;
    background-size:6px;
    padding-right:10px;
  }
  .kill-content{
    margin-top: 5px;
    padding-bottom: 5px;
    /*自动宽度*/
    width:auto;
    white-space: nowrap;
    overflow: auto;
    position: relative;
    padding-right: 10px;
    text-align:center;
  }
  .kill-content li{
    width:20%;
    display:inline-block;
    margin-right:10px;
  }
  .kill-content img{
    width:100%;
  }
  .kill-content .img{
    position:relative;
  }
  .kill-content .img span{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    z-index:10;
    height:11px;
    line-height:11px;
    font-size:9px;
    color:#fff;
    background:rgba(255,87,87,0.6);
    padding:1px 5px;
    border-radius:10px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
 .kill-content .kill-pr{
    color:#ff5757;
    font-size:12px;
    margin-top:5px;
 }
 .kill-content .kill-pr i{
  font-weight:bold;
  font-size:16px;

 }
 .kill-line{
  text-decoration:line-through;
  font-size:12px;
  color:#999;
 }
 .kill i{
    font-style:normal;
 }
 .kill .more{
  position:absolute;
  top:16px;
 }
 .kill .more a{
  width:12px;
  white-space:normal;
  display:inline-block;
  font-size:12px;
  background:url('../../../static/img/index-kill-more.png') no-repeat center left;
  background-size: 20px;
  padding-left:30px;
  color:#999;
 }
</style>
