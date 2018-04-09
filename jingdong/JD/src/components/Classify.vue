<template>
	<div id="classify">
		<!-- 搜索框组件 -->
		<Search></Search>
		<div class="content">
			<ul class="left">
				<li v-for="(item,index) in classify" :key="item.name + index" :class="{'active':item.id==1}" @click="show(item.id)">
					{{item.name}}
				</li>
			</ul>
			<div class="right">
				<div v-for="(list) in lists" :key="list.name">
					<h3>{{list.name}}</h3>
					<!-- <router-link to="buss/search"> -->
					<router-link to="/list">
						<ul>
							<li v-for="(value,index) in list.child" :key="value.name + index">
								<img :src="value.img" alt="">
								<div>{{value.name}}</div>
							</li>
						</ul>	
					</router-link>										
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	import $ from 'jquery'
	import Search from '@/components/Search'


	export default {
		data(){
			return {
				classify:[],//整个数据
				lists:[],//右半部分分类
			}
		},
		created(){
			console.log(this.$route)
			$.get(this.apiUrl + '/classify',(result)=>{//请求数据库数据
				this.classify = result.data
			},'json')

			$.get(this.apiUrl + '/classlists/',{id:1},(result)=>{//请求数据库数据
				this.lists = result.data
			},'json')

		},
		components:{
			Search
		},
		mounted(){
			$(window).ready(function(){
				$('footer .classify').addClass('b')
				$('footer a').not('.classify').removeClass('b')
			})
		},
		methods:{
			show(id){
				$.get(this.apiUrl + '/classlists/',{id:id},(result)=>{//请求数据库数据
					this.lists = result.data
				},'json')
				$('.active').removeClass('active')
				$(event.target).addClass('active')
			}
		}
	}
</script>

<style scoped>
	ul{
		list-style:none;
	}
	a{
		display:block;
	}
	.content{
		width:100%;
		border-top:1px solid rgb(211, 209, 209);
		overflow:hidden;
		position: relative;
	}
	.left{
		width:84px;
		height:auto;
		background:#f4f4f4;
		font-size:13px;
		color:#666;
		padding-bottom:130px;
	
	}
	.left li{
		height:48px;
		line-height:48px;
		border-bottom:1px solid #ebeef5;
		border-right:1px solid #ebeef5;
		padding-left:10px;
		text-overflow:ellipsis;
		overflow: hidden;
		white-space:nowrap;
	}
	.right{
		margin-left:94px;
		box-sizing:border-box;
		max-height:550px;
		overflow-x:hidden;
		overflow-y: auto;
		position: absolute;
		top:0;
		left:0;
	}
	.right h3{
		font-size:12px;
		color:#999;
		line-height:48px;
		height:48px;
		font-weight:300;
		
	}	
	.right li{
		display:inline-block;
		width:33%;
		text-align:center;
		font-size:12px;
		color:rgb(82, 81, 81);
		margin-bottom:20px;
	}
	.right img{
		width:60%;
		margin:0 auto 10px;
		display:block;
	}
	.item1,.active{
		background:#fff;
		border-left:2px solid #47b34f;
		color:#47b34f;
	}
</style>