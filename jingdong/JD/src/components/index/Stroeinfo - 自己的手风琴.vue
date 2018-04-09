<template>
    <div class="rightgroup">
        <ul class="list">
            <li :class="[{active:item.show}]" v-for="(item,index) in groups" :key="'item' + index" @click="changeli(index,item)">    
                {{item.name}}            
                    <ul v-show="item.show"> 
                        <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
                        <li :class="[{show:item.show}]" v-for="(a,index) in item.children" v-on:click.stop="doThis(index,a)" :key="'a'+index">{{a.name}}</li>
                    </ul>
              
            </li>
        </ul>
        <div class="rightlist">
            <div class="pic1" v-if="prolists.selfSend" >
                <div class="midd">
                    <p class="colo1">6张优惠券</p>
                    <p class="colo2">{{prolists.salecoupon | obj}}</p>
                </div>
                <div class="middimg"></div>	
                <div class="sale-right">
                    <span>领券</span>
                </div>
            </div>
            <div class="bannerimg">
                <a href="javascript:void(0)">
                    <img src="../../../static/img/stroe-title1.jpg" alt="">
                </a>
                 <a href="javascript:void(0)">
                    <img src="../../../static/img/stroe-title2.jpg" alt="">
                </a>
            </div>
            <h3 class="listTitle">直降</h3>
            <div class="partinfo">
                <div class="storePromptWrap a2" v-if="parts" style="display: none;">
                    没找到
                    <span>“<span class="searchKey"></span>”</span>,为您推荐<span>“<span class="searchPrompt"></span>”</span>
                </div>
                <div class="all">
                    <ul>
                        <li v-for="part in parts" :key="part.id">
                            <a href="javascript:void(0)" class="infoimg">
                                <span>
                                    <img :src="part.img" alt="">
                                </span>
                                <dl>
                                    <dt>{{part.title}}</dt>
                                    <dd>
                                        <strong class="line_pre">月销售{{part.volumn}}件</strong>
                                        <i class="line_split"></i>
                                        <strong class="line_after">好评100%</strong>
                                    </dd>
                                    <dd>
                                        <span class="part_sale">{{part.sale}}</span>

                                    </dd>
                                    <dd>
                                        <label>
                                            <em>￥</em>
                                            <i class="price">{{part.price}}</i>
                                        </label>
                                        <strong>
                                            <em>￥</em>
                                            <i class="sprice">{{part.sprice}}</i>
                                        </strong>
                                    </dd>
                                </dl>
                            </a>
                            <div class="box">
                                <span class="reduce hide"></span>
                                <label class="show-arr hide">0</label>
                                <span class="add"></span>
                            </div>
                        </li>
                    </ul>
                    <p class="ct">努力加载中<i></i></p>
                    <div class="goToelse">
                        <span>去看看那其他分类吧</span>   
                   </div>
                </div>
            </div>         
        </div>
        <div class="nav">
            <div class="navlist">
                <a class="zr" href="#searchIndex">搜索</a>
                <a class="zs" href="#index">首页</a>
                <a class="zt" href="#homeCategorySearch">分类</a>
                <a class="zu" href="#shopCartList">购物车</a>
                <a class="zv" href="#orderlist">订单</a>
                <a class="zw" href="#user">我的</a>
                <i class="zx"></i></div>
            </div>
        </div>
    </div>
</template>


<script>
import $ from 'jquery'
import Vue from 'vue'
export default {
    props:['prolists'],
    data(){
        return {
            groups:[],//请求的分组
            parts:[],//获取对应的分类信息存放这里
        }
    },
    created(){
        $.get(this.apiUrl+ '/group',(result)=>{
            this.groups = result.data
        }) 
        
    },
    mounted(){
       $('.nav').click(()=>{
            $('.nav .navlist').toggleClass('show')
        }) 
    },
    methods:{
        changeli:function(index,item){
            this.groups.forEach(i =>{
                if (i.show !== this.groups[index].show){
                    i.show = false;
                };
            })
            item.show = !item.show;//控制二级菜单出现
            this.showPage(item.id)  //li被点击时，出现对应的菜单   
        },
        doThis:function(index,a){
            $('.show').eq(index).addClass('borderRight').siblings('li').removeClass('borderRight') 
            // 点击跳转到对应分类
            this.showPage(a.id)
        },
        showPage:function(id){
            $.get(this.apiUrl+ '/part',{id:id},(result)=>{
                this.parts = result.data                
            })
        }
    }
}


</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
strong {
  font-weight: normal;
}
em {
  font-style: normal;
}
.rightgroup {
  width: 100%;
  min-height: 600px;
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  overflow: hidden;
  background: #fff;
}
.rightgroup .list {
  background: #f4f4f4;
  font-size: 14px;
  line-height: 16px;
  color: #666;
  width: 84px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
  float: left;
}
.list > li {
  /* height: 46px; */
  line-height: 46px;
  border-bottom: 1px solid #d5d5d5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  padding-left: 10px;
}
.list > li > ul > li {
  text-align: left;
  padding-left: 10px;
  font-size: 12px;
  background: #fff;
  margin-left: -10px;
  width: 100%;
  height: 46px;
  line-height: 46px;
  overflow: hidden;
  padding-top: -1px;
  border-top: 1px solid rgba(241, 240, 240, 0.918);
  border-left: 3px solid #fff;
}
.borderRight {
  border-left: 3px solid #43b34f !important;
  color: #43b34f;
}
.rightlist {
  padding-left: 84px;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
}
.pic1 {
  width: 90%;
  margin: 10px auto;
  height: 70px;
  border-radius: 3px;
  border-left: 3px solid #ff5757;
  border-right: 1px solid #ff9d9d;
  border-top: 1px solid #ff9d9d;
  border-bottom: 1px solid #ff9d9d;
  box-sizing: border-box;
  position: relative;
}
.colo1,
.colo2 {
  padding-left: 5px;
  font-size: 15px;
  color: #ff5757;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.colo2 {
  font-size: 11px;
  color: #666;
  margin-top: 4px;
}
.midd {
  width: 67%;
  height: 68px;
  text-align: left;
  float: left;
  padding: 16px 10px 0 12px;
  box-sizing: border-box;
  /* border-top: 1px solid #ff9d9d;
  border-bottom: 1px solid #ff9d9d; */
}
.midd:after {
  clear: both;
  content: "";
  display: inline-block;
  height: 0;
  font-size: 0;
  visibility: hidden;
}
.colo3 {
  font-size: 11px;
  color: #666;
}
.middimg {
  position: absolute;
  top: -1px;
  left: 72%;
  height: 70px;
  width: 4%;
  background: #fff url("../../../static/img/conpon.png") no-repeat;
  background-size: 10px 100%;
}
.sale-right {
  display: inline-block;
  width: 28%;
  font-size: 12px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  box-sizing: border-box;
  border-radius: 3px;
  position: absolute;
  right: 0;
}
.sale-right span {
  display: inline-block;
  color: #fff;
  height: 20px;
  width: 50px;
  background: #ff5757;
  border-radius: 20px;
  line-height: 20px;
}
/* 领取优惠券结束广告位 */
/* 两张宣传图 */
.bannerimg {
  padding: 0 10px 10px;
}
.bannerimg a {
  display: block;
  padding-top: 10px;
}
.bannerimg a > img {
  width: 100%;
  display: block;
}
.listTitle {
  font-weight: 400;
  color: #666;
  height: 31px;
  line-height: 31px;
  font-size: 12px;
  background: #f4f4f4;
  text-indent: 10px;
}
.partinfo {
  position: relative;
  height: auto;
}
.storePromptWrap {
  margin: 31px 10px;
  text-align: center;
  font-size: 13px;
  color: #666666;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 18px;
  line-height: 18px;
  position: relative;
  display: none;
}
.storePromptWrap span {
  color: #ff8203;
}
.all {
  padding-bottom: 20px;
}
.all > ul > li {
  position: relative;
  padding-left: 10px;
}
.infoimg {
  display: block;
  overflow: hidden;
  padding: 10px 10px 10px 0;
}
.infoimg:after {
  content: "";
  width: 100%;
  height: 0px;
  border-bottom: 1px solid #e8e8e8;
  position: absolute;
  right: 0;
  z-index: 10;
  padding-bottom: 10px;
}
.infoimg > span {
  float: left;
  padding-top: 4px;
}
.infoimg > span > img {
  width: 65px;
  height: 65px;
  display: inline-block;
  border-radius: 2px;
  padding-top: 6px;
}
.infoimg dl {
  padding-left: 70px;
}
.infoimg dl dt {
  font-size: 14px;
  color: #333;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 5px;
  max-height: 42px;
  line-height: 21px;
  padding-top: 3px;
  padding-bottom: 1px;
}
.infoimg dl dd {
  padding-left: 5px;
  overflow: hidden;
  padding-bottom: 1px;
  color: #999;
}
.line_pre,
.line_after {
  display: inline-block;
  font-size: 11px;
}
.line_split {
  display: inline-block;
  height: 10px;
  width: 8px;
  background: url("../../../static/img/icon_line_split.jpg") no-repeat center
    2px;
}
.line-_after {
  padding-left: 2px;
}
dd > label {
  font-size: 16px;
  color: #ff3434;
  padding-top: 2px;
  white-space: nowrap;
  display: inline-block;
  font-size: 0;
}
dd strong {
  font-size: 0;
}
.sprice {
  text-decoration: line-through;
}
dd > label .price {
  font-size: 16px;
}
strong .sprice {
  font-size: 13px;
}
label em,
strong em {
  font-style: normal;
  font-size: 11px;
}
.part_sale {
  background: #ff5959;
  color: #fff;
  padding: 1px 2px;
  font-size: 10px;
  line-height: 14px;
  border-radius: 2px;
  font-weight: 200;
}
.box {
  position: absolute;
  right: 0;
  bottom: 42px;
}
.box span {
  position: absolute;
  right: 52px;
  padding: 6px;
  text-indent: -999999999px;
  background: url("../../../static/img/addNumSprite.png") no-repeat;
  background-size: 400% 100%;
  border: 0 none;
  width: 28px;
  height: 28px;
  vertical-align: top;
  background-origin: content-box;
}
.hide {
  display:none;
}
.nav .navlist.show{
     display:block;
}
.box span.reduce {
  background-position: -42px 0;
}
.box span.add {
  right: 0;
  background-position: 0 0;
}
.show-arr {
  display: inline-block;
}
.box label {
  position: absolute;
  right: 35px;
  margin-top: 6px;
  color: #333333;
  font-size: 12px;
  padding: 0;
  width: 24px;
  height: 28px;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  line-height: 28px;
  vertical-align: top;
  background-origin: content-box;
  background-color: transparent;
}
.ct {
  width: 90;
  display: none;
  margin: 0 auto 10px;
  position: relative;
  color: #999;
  text-align: center;
  line-height: 30px;
  font-size: 11px;
}
.goToelse {
  text-align: center;
}
.goToelse span {
  margin-top: 10px;
  z-index: 2;
  background-color: #fff;
  display: inline-block;
  padding: 0 8px;
  position: relative;
  line-height: 30px;
  font-size: 14px;
  color: rgb(139, 138, 138);
}
.goToelse span:before {
  content: "";
  height: 0px;
  border-top: 1px solid #d9d9d9;
  width: 16%;
  position: absolute;
  top: 50%;
  left: -15%;
}
.goToelse span:after {
  content: "";
  height: 0;
  border-top: 1px solid #d9d9d9;
  width: 16%;
  position: absolute;
  top: 50%;
  right: -15%;
}
/* 侧边小导航 */
.nav {
  position: fixed;
  z-index: 20;
  right: 0;
  bottom: 60px;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.8) url("../../../static/img/bm.png") no-repeat;
  background-size: 80px 25px;
  background-position: 5px center;
  border-radius: 4px 0 0 4px;
  border: 1px solid #757575;
}
.navlist {
  position: absolute;
  right: -1px;
  bottom: 42px;
  width: 95px;
  border: 1px solid #757575;
  background: rgba(0, 0, 0, 0.8);
  display:none;
}
.navlist a{
    color:#fff;
    display:block;
    height:35px;
    line-height:35px;
    padding-left:38px;
    border-bottom:1px solid #4b4b4b;
    background:url('../../../static/img/bmenu.png') no-repeat ;
    background-size:16px 300px;
}
.navlist a.zr{
    background-position:10px 0;
}
.navlist a.zs{
    background-position:10px -50px;
}
.navlist a.zt{
    background-position:10px -100px;
}
.navlist a.zu{
    background-position:10px -150px;
}
.navlist a.zv{
    background-position:10px -200px;
}
.navlist a.zw{
    background-position:10px -250px;
}
.navlist i.zx{
   display:block;
   height:0;
   width:0;
   border-color: rgba(0,0,0,.8) transparent transparent transparent;
   border-width:6px;
   border-style:solid;
   position:absolute;
   bottom:-12px;
   right:10px;
   z-index:15px;
}
</style>


