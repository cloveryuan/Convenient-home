<template>
	<div id="orderlist">
		<!-- 没有订单的时候 -->
		<div class="empty">
			<div class="unlogin">
				<div class="nologin_empty empty-logo" v-if="user">
					<div class="empty-box">
						<p class="unlogin-txt">还没有您的订单哦，赶快去购物吧</p>
						<router-link to="/" class="goto-login">去逛逛</router-link>
					</div>	
				</div>
				<div class="nologin_empty no-login" v-if="!user">
					<div class="empty-box">
						<p class="unlogin-txt">登录后才能查看订单哦</p>
						<router-link to="/" class="goto-login">立即登录</router-link>
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
			return{
				cars:[],//购物车里的东西，通过缓存得到
				user:'',//判断是否登录了，缓存得到用户

			}
		},
		created(){
			this.user = store.get('username')['tel']
			this.cars = store.get('cars')//所有的购物车里有东西的商家
		},
		mounted(){
			$(window).ready(function(){
				$('footer .orderList').addClass('b')
				$('footer a').not('.orderList').removeClass('b')
			})
		}
	}
</script>

<style scoped>
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
	.empty-box{
		position:absolute;
		top:50%;
		left:50%;
		transform:translateX(-50%);
		padding-top:60px;
		text-align:center;
	}
	.unlogin-txt{
		white-space: nowrap;
	}
	.nologin_empty .goto-index{
		display:block;
		color:#47b34f;
		padding:10px 8px;
		font-size:16px;
		border:1px solid #47b34f;
		border-radius:3px;
		margin-top:8px;
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
	.no-login{
		background:url('../../static/img/unlogin.png') no-repeat center;
		background-size:100px;
	}

</style>