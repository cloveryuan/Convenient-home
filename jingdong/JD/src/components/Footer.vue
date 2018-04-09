<template>
   	 <footer>
      <router-link to="/" class="index b">首页</router-link>
      <router-link to="/classify" class="classify">分类</router-link>
      <router-link to="/shopcar" class="carshop">购物车</router-link>
      <router-link to="/orderList" class="orderList ">订单</router-link>
      <router-link to="/Me" class="my">我的</router-link>
    </footer>

</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',
  mounted(){
    $('footer a').click(function(){
      $(this).addClass('b')
      $('footer a').not(this).removeClass('b')
    })
  }
}


</script>

<style>
*{
  margin:0;
  padding:0;
}
html{
  font-size:10px
}
a{
  text-decoration:none;
}
#app {
  font-family: "Helvetica Neue",Helvetica,Tahoma,sans-serif
}

/*footer*/
  footer{
    width:100%;
    position:fixed;
    z-index:999;
    bottom:0;
    left:0;
    height:50px;
    border-top:1px solid #d9d9d9;
    font-size:12px;
    background:#fff;
    white-space:nowrap;
  }
  footer a{
    display:inline-block;
    width:19%;
    line-height: 17px;
    text-align: center;
    padding-top: 30px;
    color:#555;
    background-repeat: no-repeat;
    background-size: 24px 600px;
  }
  footer a:nth-child(1){
     background-image: url(//static-o2o.360buyimg.com/daojia/new/images/nav4.png);
  }
  footer a:nth-child(2){
     background-image: url(//static-o2o.360buyimg.com/daojia/new/images/nav4.png);
  }
  footer a:nth-child(3){
     background-image: url(//static-o2o.360buyimg.com/daojia/new/images/nav4.png);
  }
  footer a:nth-child(4){
     background-image: url(//static-o2o.360buyimg.com/daojia/new/images/nav4.png);
  }
  footer a:nth-child(5){
     background-image: url(//static-o2o.360buyimg.com/daojia/new/images/nav4.png);
  }
  /*首页*/
  a.index {
    background-position:center -250px;
  }
  a.b.index{
    background-position:center 0px;
    color: #39ac69;
  }
  /*分类*/
  a.classify{
    background-position:center -300px;
  }
  a.b.classify{
    background-position:center -50px;
    color: #39ac69;
  }
  /*购物车*/
  a.carshop{
    background-position:center -350px;
  }
  a.b.carshop{
    background-position:center -100px;
    color: #39ac69;
  }
  /*订单*/
  a.orderList{
    background-position:center -400px;
  }
  a.b.orderList{
    background-position:center -150px;
    color: #39ac69;
  }
  /*我的*/
  a.my{
    background-position:center -450px;
  }
  a.b.my{
    background-position:center -200px;
    color: #39ac69;
  }
</style>
