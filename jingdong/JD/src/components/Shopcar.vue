<template>
	<div id="shopcar">
		<!-- 购物车空的时候 -->
		<div class="empty" v-if="(leng.length<1) && user">
			<div class="nologin_empty empty-logo">
				<div class="empty-box">
					<p class="empty-txt">购物车空空如也~</p>
					<router-link to="/" class="goto-index">去首页逛逛</router-link>
				</div>	
			</div>					
		</div>
		<div class="unlogin" v-if="leng.length<1 && !user">
			<div class="nologin_empty unlogin-logo">
				<div class="empty-box">
					<p class="unlogin-txt">购物车还空空如也~</p>
					<p class="unlogin-txt">登录后将同步购物车中商品</p>
					<router-link to="mylogin" class="goto-login">立即登录</router-link>
				</div>	
			</div>					
		</div>
		<div class="current">
			<div class="top" v-if="leng.length>0 && !user">
				<span class="sync">登录后将同步购物车中商品</span>
				<router-link to="/Mylogin">
					<span class="login">登录</span>
				</router-link>
			</div>
			<div class="addr">
				<div class="add-wrap">
					<span class="ad1">幸福美地花园</span>
					<span class="ad2">(当前位置)</span>
				</div>
			</div>
			<div class="supmark" v-for="(car,i) in cars" :key="i + 'car'" v-if="car['item'].length>0">
				<div class="shopname" >
					<router-link :to="{path:'store',query:{id:i}}">
						<h3>{{car['shopname']}}-{{car["shopAddr"]}}店</h3>
					</router-link>
					<div class="good">
						<ul>
							<li v-for="(item,index) in car['item']" :key="index+ 'item'" v-if="index<3">
								<img :src="item['img']">
								<em>￥{{item['sprice']}}</em>
								<i class="nums" v-if="item['nums']>1">{{item['nums']}}</i>
							</li>
							<li class="cir" v-if="car['item'].length>3"></li>
						</ul>
						<div class="sum" v-if="car['item'].length>3">共{{sum[i]}}件</div>
					</div>					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import store from 'storejs'
	export default {
		data(){
			return {
				cars:[],
				nologin:false,//没有登录
				sum:{},//每家店总的商品数，超过3个出现在页面展示，用对象接受，html中可以传参数属性名调用
				leng:[],//放所有店铺商品信息  
				user:'',
			}
		},
		created(){		
			this.cars = store.get('cars')//所有的购物车里有东西的商家
			this.user = store.get('username')['tel']
			$.each(this.cars,(i,n)=>{//求各家店铺购物车商品总数sum
				// console.log(i)//i属性名，n属性值	
				var res = 0;
				n['item'].map((value,index)=>{	
					res+=value['nums']									
				})
				this.sum[i]=res;
			})
			
			this.leng = $.map(this.cars,(n,i)=>{//返回值就是一个数组，用length属性
				return n.item
			})
			// console.log(this.leng)
		},
		mounted(){
			$(window).ready(function(){
				$('footer .carshop').addClass('b')
				$('footer a').not('.carshop').removeClass('b')
			})
		}
	}
</script>

<style scoped>
	ul{
		list-style:none;
	}
	#shopcar{
		height:100%;
	}
	a{
		text-decoration:none;
	}
	p{
		color:#666;
		font-size:15px;		
	}
	.nologin_empty{
		position:relative;
		min-height:542px;		
		transform:translateY(-75px);		
	}
	.empty-logo{
		background:url('../../static/img/cart_empty.png') no-repeat center;
		background-size:100px;
	}
	.unlogin-logo{
		background:url('../../static/img/unlogin.png') no-repeat center;
		background-size:90px;
	}
	.empty-box{
		position:absolute;
		top:50%;
		left:50%;
		transform:translateX(-50%);
		padding-top:60px;
		text-align:center;
	}
	.nologin_empty .goto-index{
		display:block;
		background-color:#47b34f;
		padding:10px 8px;
		font-size:16px;
		border:1px solid #47b34f;
		border-radius:3px;
		margin-top:8px;
		color:#fff;
	}
	.goto-login{
		display:inline-block;
		color:#fff;
		padding:8px 8px;
		font-size:14px;
		background:#47b34f;
		border-radius:3px;
		margin-top:8px;
	}
	.current{
		padding:0 0 99px 0;
		text-align:center;
	}
	.current .top{
		padding:8px 0px 7px 0px ;
		height:20px;
		line-height:20px;
		overflow: hidden;
		border-bottom:1px solid #e1d0af;
		background:#fbf8e4;
		font-size:12px;
		color:#fb8217;
	}
	.current .login{
		display:inline-block;
		color:#fff;
		background-color:#fb8217;
		border-radius:3px;
		font-size:11px;
		margin-left:5px;
		padding:0 14px;
		vertical-align:top;
	}
	.current .addr{
		display:inline-block;
		vertical-align:top;
		padding:6px 7px;
		background:#d1e7d3;
		margin:15px 0 10px;
		border-radius:32px;
	}
	.current .add-wrap{
		line-height:22px;
		padding:0 14px 0 31px;
		color:#fff;
		background:#47b34f url('../../static/img/loc2.png') no-repeat;
		background-position:13px center;
		background-size:10px 12px;	
		border-radius:22px;	
	}
	.current .ad1{
		font-size:14px;
	}
	.current .ad2{
		font-size:12px;
	}
	.current .supmark{
		/* position:relative; */
		margin:0 6px 7px 6px;
		text-align:left;
		height:141px;
		overflow:hidden;
		padding:3px 4% 10px 1.6%;
		background:url('../../static/img/gc.png') no-repeat;
		background-size:100% 154px;
	}
	.supmark .shopname{
		overflow:hidden;
		padding-left:2.4%;
	}
	.shopname a{
		display:block;
		position:relative;
		z-index:3;
		line-height:44px;
		height:147px;
		margin-bottom:-103px;
		color:#333;
		font-size:15px;
		background:url('../../static/img/m.png') no-repeat right 17px;
		background-size:7px 11px;
	}
	.shopname h3{
		font-weight:normal;
		font-size:14px;
		text-decoration:none;
	}
	.shopname .good{
		height:97px;
		overflow: hidden;
		padding-right:50px;
		position: relative;
	}
	.shopname ul>li{
		position:relative;
		display:inline-block;
		width:53px;
		height:83px;
		color:#333;
		font-size:12px;
		text-align:center;
		padding-right:25px;
		margin-right:-15px;
		line-height:30px;
		margin-top:14px;
	}
	.shopname img{
		width:53px;
		height:53px;
		border-radius:5px;
		vertical-align:top;
	}
	.shopname .cir{
		width:50px;
		background:#fff url('../../static/img/ddd.png') no-repeat left 40px;
		background-size:22px 5px;
		margin-left:5px;
		margin-top:-15px;
	}
	.shopname .nums{
		display:block;
		position:absolute;
		top:-1px;
		right:25px;
		color:#fff;
		background:#ff5757;
		height:18px;
		border-radius:50%;
		min-width:18px;
		line-height:18px;
	}
	.shopname .sum{
		position:absolute;
		top:0;
		right:0;
		line-height:87px;
		color: #3c3c3c;
    	font-size: 14px;
	}
</style>