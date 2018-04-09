<template>
	<div id="store">
    <div class="cover"></div>  
		<div class="sales">
			<div class="header">
				<img :src="prolists.logo + prolists.img + '.jpg'" alt="">
				<!-- title -->
				 <div class="title-txt clearfix">
					<p class="title">{{prolists.name}}<i class="al"></i>{{prolists.addr}}</p>
					<div class="express" v-if="prolists.selfSend">						
						<div v-if="Number(prolists.time)>16">
							<span>达达专送</span>
							<i class="line"></i>
							<span class="time">明日9点起送</span>
						</div>
						<div v-else>
							<span>达达专送</span>
							<i class="line"></i>
							<span class="time">{{prolists.minute}}分钟</span>
						</div>
					</div>
					<div class="selfsend" v-else>
						<span>商家自送</span>
						<i class="line"></i>
						<span  class="time">{{prolists.minute}}分钟</span>
		            </div>		               
		      	    <div class="distance text">
		              	<span v-if="Number(prolists.time)>5">{{prolists.free}}</span> 
		              	<span v-else>夜间基础运费7元</span>
		            </div>
				</div>
				<!-- 爱心收藏 -->
				 <div class="love">
					<i class="icon collect"></i>
				</div>
        <div class="shopinfo" @click="showSale" >
          店铺信息
        </div>
        <div class="moreactive" v-if="Fullreduce>5" @click="activemore()">
          查看更多
        </div>
        <div class="active shopinfo" v-if="Fullreduce>0">
          {{Fullreduce}}<span>个活动</span>
        </div>
			</div>

            <div class="menu">               
                <div class="sa" v-if="prolists.selfSend">
                    <i class="red">领券</i>
                    <span>{{prolists.salecoupon | obj}}</span>
                </div>
                <div class="sa" v-if="prolists.menushow">
                    <i class="red">首单</i>
                    <span>立减{{prolists.first}}</span>
                </div>
                <div class="sa" v-if="prolists.paid">
                    <i class="blue">运费</i>
                    <span>{{prolists.freight}}</span>
                </div>
                <div class="sa" v-if="prolists.rest" v-for="(off,index) in prolists.MoneyOff" :key="'off'+index">
                    <i>满减</i>
                    <span>{{off}}</span>                    
                </div>  
                <i class="buss-arrow"></i>
            </div> 
            <div class="notice">
            	<i>公告</i>
            	<p class="notice-txt">亲！感谢各位一直以来的支持，我家价格只低不高，相信老品牌，我们为您提供优质的服务，以及优质的商品，希望大家一如既往的继续支持，如有发漏或质量问题请及时联系15251708271</p>
            </div>                      

		<div class="wrap1" v-if="prolists.selfSend">
			<div class="coupon">
				<h2>店铺优惠券</h2>
			</div>
			<ul class="pics">
				<li v-if="sale!==''"  >
					<p class="colo1">{{sale}}</p>
					<div class="midd">
						<p class="colo2">满{{prolists.small}}~{{prolists.big}}元享受折扣</p>
						<p class="colo3">领取后当日有效</p>
					</div>
					<div class="middimg"></div>	
					<div class="sale-right">
						<span>领券</span>
					</div>	
				</li>
				<li class="pic1" v-for="(item,index) in newsale" :key="'item' + index">			
					<p class="colo1">{{item.reduce}}元</p>
					<div class="midd">
						<p class="colo2">{{item.big}}可用</p>
					</div>
					<div class="middimg"></div>	
					<div class="sale-right">
						<span>领券</span>
					</div>	
				</li>
			</ul>
		</div>
		<div class="wrap1 wrap2">
			<div class="coupon">
				<h2>店铺评价</h2>
			</div>
			<div class="evaluate">
				<div class="num">
					<h3>{{prolists.float}}</h3>
					<h4>综合评分</h4>
				</div>
				<div class="num leftbor">
					<h3>{{prolists.num}}</h3>
					<h4>评论数</h4>
				</div>
				<div class="username">
					<div class="icon"></div>
					<div class="name">
						<p>{{prolists.uname}}**子</p>
						<p class="start">{{prolists.start}}</p>
					</div>
					<div class="time">2017-2-19 09:34:30</div>
				</div>
				<div class="look">
					查看用户的全部评价 >
				</div>
			</div>
		</div>	
		<div class="wrap1 wrap2">
			<div class="coupon">
				<h2>店铺信息</h2>
			</div>
			<div class="evaluate shop">
				<ul>
					<li>
						<span>商品数量：</span>
						<span>{{prolists.minute}}件</span>
					</li>
					<li>
						<span>月销总量：</span>
						<span>{{prolists.big}}单</span>
					</li>
					<li>
						<span>关注人数：</span>
						<span>{{prolists.small}}人</span>
					</li>
					<li>
						<span>营业时间：</span>
						<span>09：:3-20:00</span>
					</li>
					<li>
						<span>门店地址:</span>
						<span>{{prolists.addr2}}</span>
					</li>
					<li>
						<span>门店号码:</span>
						<span class="tel">025-33562537</span>
					</li>
					<li class="apti">
						<span>商家资质</span>
						<i class="left">></i>
					</li>
					<li class="repot">
						<span>举报商家得红包</span>
						<i class="left">最高奖100元 ></i>
					</li>
				</ul>
			</div>
		</div>
  	</div>
		<!-- 详情 -->
		<div class="content">
			<div class="search">
				<div class="searchbox">
					<span>搜索店内商品</span>
				</div>
			</div>
       <div class="rightgroup">
        <el-collapse accordion class="list">
          <el-collapse-item v-for="(item,index) in groups" :key="'item' + index" :tit="item.name"  :item="item.id"  class="one" :class="(item.name=='单品优惠')?'mark':''">
            <template slot="title">
              <i class="header-icon" v-if="item.name=='单品优惠'"></i>
                {{item.name}}
            </template>
            <div v-for="(a,index) in item.children" :key="'a'+index" class="two" @click.stop="showPage(a.id,a.name)" :item="a.id" :name="a.name">{{a.name}}</div>
          </el-collapse-item>
        </el-collapse>


        <div class="rightlist">
            <div class="pic1" v-if="(prolists.selfSend)">
                <div class="center">
                    <p class="p1">{{couponNum}}张优惠券</p>
                    <p class="p2">{{prolists.salecoupon | obj}}</p>
                </div>
                <div class="centerimg"></div>	
                <div class="sale-right other">
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
            <h3 class="listTitle">{{markTitle?markTitle:'秒杀'}}</h3>
            <div class="partinfo">
                <div class="storePromptWrap a2" v-if="parts" style="display: none;">
                    没找到
                    <span>“<span class="searchKey"></span>”</span>,为您推荐<span>“<span class="searchPrompt"></span>”</span>
                </div>
                <div class="all">
                    <ul>
                        <li v-for="part in parts" :key="'part' + part.id">
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
                                            <em>&yen;</em>
                                            <i class="price">{{part.sprice}}</i>
                                        </label>
                                        <strong>
                                            <em>￥</em>
                                            <i class="sprice">{{part.price}}</i>
                                        </strong>
                                    </dd>
                                </dl>
                            </a>
                            <div class="box">
                                <span class="reduce" v-if="part.nums>0&&cars.length>0" @click="reduceCar(part)"></span>
                                <label class="show-arr" v-if="part.nums>0&&cars.length>0">{{part.nums}}</label>
                                <span class="add" @click="addCar(part)"></span>
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
    </div>
		</div>
		<footer>
      <div class="hide totop">
        	<span class="toparrow" @click="goToshoping"></span>
			    <h4>点击继续购物</h4>
      </div>
      <div id="carshop">
          <i class="san"></i>
          <div class="cs1" v-if="cars.length>0">
            <div class=" carshop-sel cs1-l">全选</div>
            <p class="cs1-p">(已选{{shoplength}}件，共{{weights}}kg)</p>
            <div class="cs1-r" @click="clear">清空购物车</div>
          </div>
          <table class="cs2">
            <tr v-for="(item,index) in cars" :key="'car'+index">
              <th><span class="carshop-sel cs2-check"></span></th>
              <th class="carImg"><img :src="item.img" alt=""></th>
              <th class="car-info">
                <div class="cartitle">{{item.title}}</div>
                <div class="carsale">
                  <div class="sale-name">
                    <span class="part_sale">{{item.sale}}</span>
                  </div>
                  <label class="carlabel">
                      <em>&yen;</em>
                      <i class="price">{{item.sprice}}</i>
                  </label>
                  <strong>
                      <em>￥</em>
                      <i class="sprice">{{item.price}}</i>
                  </strong>
                </div>
                <div class="box">
                  <span class="reduce" @click="reduceCar(item)"></span>
                  <label class="show-arr">{{item.nums}}</label>
                  <span class="add" @click="addCar(item)"></span>
                </div>
              </th>
              <th class="warn1" v-if="item.nums == item.stock">库存为{{item.stock}}</th>
            </tr>
          </table>       
        </div>   
      <div class="bot-cart ">
          <a href="javascript:void(0)" class="cart" :class="shoplength>0?'addstore':''" @click="Slideup()">
            <i class="i" v-if="shoplength>0">{{shoplength}}</i>
          </a>
          <i class="empty" v-if="shoplength<1">购物车是空的</i>
          <i class="empty total" v-if="shoplength>0">￥{{total}}</i>
          <router-link to="/shopcar" class="go" :class="shoplength>0?'goelse':''">
              去结算
          </router-link>
      </div>
		</footer>	
    <div class="nav">
      <div class="navlist">
          <a class="zr">搜索</a>
          <router-link to="/" class="zs">首页</router-link>
          <router-link to="/classify" class="zt">分类</router-link>
          <router-link to="/shopcar" class="zu">购物车</router-link>
          <router-link to="/orderList" class="zv">订单</router-link>
          <router-link to="/Me" class="zw" >我的</router-link>
          <i class="zx"></i>
      </div>
  </div>     	
	</div>
	
</template>

<script>
	import $ from 'jquery'
  import Vue from 'vue'
  // import Stroeinfo from './Stroeinfo'
  import store from 'storejs'

	export default{
    // props:['shopId'],
		data(){
			return {
				prolists:[],
        shopId:this.$route.query.id,
        storeName:this.$route.query.sname,//店铺名字
        storeAddr:this.$route.query.saddr,//店铺地址
				big:'',//优惠券满减里面的大头
				reduce:'',//优惠券满减里面的减多少
				sale:'',//优惠券打折的数据
				newsale:[],//存放获取的新的展示方式券信息
        Fullreduce:0,//活动个数
        num:[],
        vals:[],
        groups:[],//请求的分组
        parts:[],//获取对应的分类信息存放这里
        couponNum:[],//存放优惠券，以便知道几个优惠
        list:{},
        markTitle:'',//右边抬头分类名，点击左边哪个，右边就是哪个名字
        cars:[],//存放购物车商品
        shoplength:0,//存放加入购物车的商品数量
        total:0,//总价
        weights:0,//总的重量
			}
    },
		created(){
      // console.log(this.shopId)
      if(!store.get('cars')){//外面缓存的购物车数据的cars是否存在，不存在就创建
        store.set('cars',{})
      } 
      var Cachcars = store.get('cars')[this.shopId]
      if(Cachcars){//存在缓存区,里面并且与数据
        this.cars = Cachcars.item
        this.storeName = Cachcars.shopname
        this.storeAddr = Cachcars.shopAddr
        this.shoplength = this.Cachcar//computed计算里面得到
        this.weight()
        this.totalPrice()
      }          
// ----------------------------------------------------------------     
			$.get(this.apiUrl+ '/Buss',(res)=>{
				var allData = res.data;//全部商家信息
				var currentData = allData.map((item,index)=>{//当前的店家信息
					for(var i in item){					
						if(item.id==this.shopId){
							// console.log(item.id)
							// console.log(item)
              this.prolists = item
              this.storeName = this.prolists.name;
              this.storeAddr = this.prolists.addr;
							return item
						}
					}
				})

       // 活动个数
        if(this.prolists.selfSend==true){
          this.num.push(this.prolists.selfSend)
        } 
        if(this.prolists.menushow==true){
          this.num.push(this.prolists.menushow)
        }
         if(this.prolists.paid==true){
          this.num.push(this.prolists.paid)
        }

        if(this.prolists.rest==true){
          this.vals = $.map( this.prolists.MoneyOff, function(val,i) {
              return val 
          });//对象转成数组，好用他的长度属性，Object.keys(this.prolists.MoneyOff).length,也可以，不过只兼容ie9以上
          // console.log(vals.length)//把对象MoneyOff转化为数组，方便用他的长度
            
        }   
         this.Fullreduce = this.num.length + this.vals.length  

				var salecoupon = this.prolists.salecoupon
				for(var i in salecoupon){
					// console.log(salecoupon[i])
					var start = salecoupon[i].indexOf('满')
					var end = salecoupon[i].indexOf('减')
					var sale = salecoupon[i].indexOf('折')
					if(start > -1 && end>-1){
						this.big = salecoupon[i].slice(start,end);
						this.reduce = salecoupon[i].slice(end+1);
						var obj = {big:this.big,reduce:this.reduce}
						this.newsale.push(obj)
					}else if(sale>0){
						this.sale = salecoupon[i];
					}
				}	
				// console.log(this.newsale)//重新装换的优惠券信息格式，方便页面展示
      })

      $.get(this.apiUrl+ '/group',(result)=>{//请求数据，得到左侧分类,如果是秒杀系列，自动出现领券
          this.groups = result.data
            // console.log(this.groups)
          if(this.groups[0].children.length>0){
              this.showPage(this.groups[0].children[0].id,this.groups[0].children[0].name)             
          }else{
              this.showPage(this.groups[0].id,this.groups[0].name)
          }           
      })  
    },
    updated(){ 
      if(this.prolists.selfSend==true){//优惠券张数
          this.couponNum = $.map( this.prolists.salecoupon,function(num,i) {
              return num 
          }).length;//对象转成数组，好用他的长度属性，Object.keys(this.prolists.MoneyOff).length,也可以，不过只兼容ie9以上    
      }
      $('.menu .sa').slice(5).css('display','none');
      
      // 一级菜单点击
        // this.$nextTick(function(){
        //   $('.one').each((i,value)=>{                   
        //     $(value).click(()=>{
        //       var count = $(value).find('.two').length//获取是否有分类，个数
        //       var parentId = $(value).attr('item')
        //       var childrenId = $(value).find('.two').eq(0).attr('item')
        //       var parentname = $(value).attr('tit')
        //       var childrenname = $(value).find('.two').eq(0).attr('name')
              
        //       if(count>0){//分类存在        
        //         $(value).find('.two').css('background','#fff')
        //         this.markTitle = childrenname;
        //         $.get(this.apiUrl+ '/part',{id:childrenId},(result)=>{
        //           this.parts = result.data             
        //         })
        //       }else if(count==0){
        //         $(value).css('background','#fff')
        //         this.markTitle = parentname;
        //         $.get(this.apiUrl+'/part',{id:parentId},(result)=>{
        //           this.parts = result.data   
        //           // console.log(this.parts)             
        //         })
        //       }


        //       if($('.one').attr('tit') =='单品优惠'){
        //         $('.pic1,.bannerimg').css('display','block')
        //       }else{
        //         $('.pic1,.bannerimg').css('display','none')
        //       }   
        //     }) 
        //   })
        // })
    }, 
    computed:{
      Cachcar(){//循环缓存，得到购物车货品个数
        var res = 0;
        this.cars.map((item)=>{
            res+=item.nums;
        })
        return res
      }
    },
    mounted(){
       $('.nav').click(()=>{//右侧小导航
            $('.nav .navlist').toggleClass('show')
        }) 
        $(window).ready(function(){
            if($('.one').eq(0).find('.two').length>0){
              $('.el-collapse-item__wrap').eq(0).css('display','block') 
              this.markTitle = $('.one').eq(0).find('.two').eq(0).attr('name')
            }  
        })
    },
		methods:{
			goToshoping:function(){
        $('.content').css('transform','translate3d(0,0,0)')
        $('footer .totop').addClass('hide')
        $('footer .bot-cart').removeClass('hide')
        $('#store .sales').css('position','fixed')
        $('.shopinfo').removeClass('hide')
			},
      showSale:function(){
          $('.content').css('transform','translate3d(0,140%,0)')
          $('footer .totop').removeClass('hide')
          $('footer .bot-cart').addClass('hide')
          $('#store .sales').css('position','relative')
          $('.shopinfo').addClass('hide')
      },
      activemore:function(){
          if($('.moreactive').text().trim()=='查看更多'){
            $('.sa').map(function(i,item){
              $(item).css('display','block').removeClass('dropmore')
            })
           var menH =  $('.menu').innerHeight() + 60
            $('.moreactive').text('点击收起').css('top',menH).addClass('dropmore')          
          }else{
            $('.sa').slice(5).css('display','none')
            $('.moreactive').text('查看更多').css('top','175px').removeClass('dropmore')
          }
      },
      showPage:function(id,name){//获取页面
          $.get(this.apiUrl+ '/part',{id:id},(result)=>{
              this.parts = result.data                
          })
          this.markTitle = name;  
          if(name =='秒杀'){
            $('.rightlist .pic1,.bannerimg').css('display','block')
          }else{
             $('.rightlist .pic1,.bannerimg').css('display','none')
          }  
          $(event.target).css('borderLeft','3px solid #47b34f')
          $('.two').not(event.target).css('borderLeft','3px solid transparent') 
          $('.one').css('borderLeft','3px solid transparent')   
      },
      Slideup(){
        var topHei = $('#carshop').height() + 48;
        if(this.shoplength<1){
          return 
        }          
        if($('#carshop.rise').length<1){           
          this.changeStyle1()
          $('#carshop').addClass('rise')
          $('.addstore').css('transform','translateY(-'+ topHei +'px)')
        }else{
          $('.cover').css('zIndex',-1)
          $('#carshop').removeClass('rise')
          $('.bot-cart').find('.empty').css('transform','translateX(-30px)')
          $('.addstore').css('transform','translateY(0)')
        }
      },
      selshopS(part){//选中的加入购物车
          if(this.cars.length>0){             
            for(var i = 0;i<this.cars.length;i++){
              if(this.cars[i].id==part.id){
                  this.cars[i].nums++//如果购物车里面有了，就在数量上加1
                  if(this.cars[i].nums>part.stock){
                    this.cars[i].nums = part.stock;
                    this.shoplength--;
                    return 
                  }              
                  this.cars.splice(i,1,this.cars[i])//实现双向绑定，实时改变页面上的数据
                  return
              }
            }
            part.nums = 1
            this.cars.push(part)//如果购物车里面没有，就把选中的商品放进购物车      
        }else{
          part.nums = 1;
          this.cars.push(part)//如果购物车里面没有，就把选中的商品放进购物车 
        }
      },
      totalPrice(){// 计算总价
        this.total=0;
        this.cars.forEach((item)=>{
          this.total += item.sprice * item.nums
        })
        this.total = this.total.toFixed(2)
        return this.total
      },
      addCar(part){//点击每个商品触发 增加    
        this.selshopS(part);
        this.shoplength++;    
        this.totalPrice() ;
        this.weight();
        if($('#carshop.rise').length<1){
           // 飞的小圆圈的样式
          var fly = '<i class="fly"></i>';
          $(fly).appendTo($('#store'));
          $('.fly').css({
            'position':'absolute',
            'top': $(event.target).offset().top + 'px',
            'left':$(event.target).offset().left + 'px',
            'z-index':999,
            'background':'red',
            'height':'20px',
            'width':'20px',
            'border-radius':50 + '%'
          })
          //飞的小圆圈的运动
          $('.fly').animate({
              'top':  $(event.target).offset().top - 20 + 'px',
              'left': $(event.target).offset().left -80 + 'px',
            },200,function(){
              $('.fly').animate({
                'top': $('.cart').offset().top  + 'px',
                'left':$('.cart').width() - 25+ 'px',
                'height':0,
                'width':0,
              },400,function(){
                  $('.fly').remove()
              })
          })
        }
      },
      changeStyle1(){
        $('#carshop').addClass('rise')
        $('.cover').css('zIndex',5)//遮罩层出现
        $('.bot-cart').find('.empty').css('transform','translateX(-80px)')
      },
      changeStyle2(){
          $('.cover').css('zIndex',-1)
          $('#carshop').removeClass('rise')
          $('.bot-cart').find('.empty').css('transform','translateX(-20px)')
          $('.addstore').css('transform','translateY(0)')
      },
      reduceCar(part){//减少
        this.shoplength--;
        for(var i = 0;i<this.cars.length;i++){
            if(this.cars[i].id==part.id){
                this.cars[i].nums--//如果购物车里面有了，就在数量上减1
                this.cars.splice(i,1,this.cars[i])//实现双向绑定，实时改变页面上的数据
                if(this.cars[i].nums<1){
                  this.cars.splice(i,1)
                  if($('#carshop.rise').length>0){
                    var tohei = $('#carshop').innerHeight()                 
                    if(tohei > 300){
                      tohei=  $('#carshop').innerHeight()+48
                    } else{
                      tohei = $('#carshop').innerHeight()-35 
                    }      
                    $('.addstore').css('transform','translateY(-'+ tohei+'px)')
                  }             
                }
            }
        }
        this.totalPrice(part)
        this.weight(); 
        if(this.shoplength<1){
          this.changeStyle2()
        }
      },
      clear(){//清空购物车
          this.cars.forEach((item)=>{
            item.nums=0;
          })
          this.cars = [];
          this.shoplength = 0;
          this.total = 0;
          this.changeStyle2()     
      },
      weight(){//合计重量
          this.weights = 0;
          this.cars.forEach((item)=>{  
            this.weights += item.weight * item.nums
          })
          this.weights = this.weights.toFixed(2)
          return this.weights
      }
    },
    watch:{
      cars(newVal,oldVal){
        // var cars = {//给每家店铺的购物车标记，后面好分开读取每家店铺的购物车
        //   this.shopId:newVal
        // }这样报错
        if(store.get('?cars')){
          var cars = store.get('cars')
        }else{
          var cars = {};
        }
        var items = {}      
          items['item'] = newVal;
          items['shopname'] = this.storeName;
          items['shopAddr'] = this.storeAddr;
          cars[this.shopId] = items
          // console.log(newVal)
          store.set('cars',cars)
      }
    }
  }


</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  height: 100%;
  width: 100%;
  font-family: "Microsoft YaHei", Verdana, Arial, Helvetica, sans-serif;
  overflow-y: auto;
}
i {
  font-style: normal;
}
a {
  color: #ccc;
  text-decoration: none;
}
.al {
  display: inline-block;
  width: 6px;
  height: 0;
  padding-top: 5px;
  margin: 0 2px;
  border-top: 1px solid #fff;
}
#store {
  width: 100%;
  /* height: 100%; */
  min-height: 649px;
  background: url("../../../static/img/store_industry_1.jpg") no-repeat 0 0;
}
.sales {
  padding: 12px 10px 10px;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
}
.menu span {
  color: #fff;
  font-size: 10px;
}
.header img {
  height: 52px;
  width: 52px;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  float: left;
}
.header .title-txt {
  padding-left: 10px;
  padding-right: 58px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title-txt .title {
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
}
.title-txt span {
  font-size: 10px;
  color: #fff;
  line-height: 15px;
  font-weight: 400;
}

.title-txt .line {
  height: 8px;
  width: 1px;
  background: url("../../../static/img/icon_line_split.jpg");
  display: inline-block;
  margin: 0 5px;
}
.express,
.selfsend,
.distance {
  line-height: 13px;
}
.title-txt .time {
  display: inline-block;
  height: 12px;
  line-height: 12px;
  padding: 1px 2.5px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
}
.icons {
  position: fixed;
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  line-height: 30px;
  padding-top: 10px;
}
.icon {
  width: 100%;
  height: 100%;
}
.love {
  position: absolute;
  top: 10px;
  right: 0px;
  height: 30px;
  width: 30px;
}
.shopinfo {
  width: 54px;
  height: 16px;
  background: rgba(70, 70, 70, 0.5);
  color: #fff;
  font-size: 10px;
  border-radius: 4px;
  line-height: 14px;
  position: absolute;
  right: 10px;
  top: 55px;
  text-align: center;
  padding-right: 6px;
}
.shopinfo:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 15px;
  background: url("../../../static/img/store_sprites_4.6.png") no-repeat;
  background-size: 220px auto;
  background-position: -150px -146px;
}
.active {
  top:85px;
  background:transparent;
}
.collect {
  background: url("../../../static/img/focus.png");
  background-size: 64px 64px;
  background-position: 0 -2px;
  position: absolute;
  right: 0px;
  top: 12px;
}
.sales a {
  color: #999;
  font-size: 10px;
  display: inline-block;
  width: 86%;
}
.sa {
  font-size: 10px;
  color: #999;
  margin-top: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.menu {
  margin-top: 15px;
}
.notice{
  margin-top:-4px;
}
.sa i,
.notice i {
  display: inline-block;
  padding: 0 2px;
  font-size: 10px;
  border-radius: 2px;
  margin-right: 4px;
  color: #fff;
  background: #5fbc65;
}
.sa i.red {
  background: #ff6c57;
}
.sa i.blue {
  background: #5ca7ff;
}
/*侧面小箭头，点击出现更多优惠*/
.moreactive{
  position: absolute;
  top: 175px;
  right: 20px;
  font-size: 11px;
  width: 64px;
  padding-left: 6px;
  line-height: 19px;
  color: #FFF;
  background-color: rgba(0,0,0,0.5);
  border-radius: 2px;
}

.moreactive:after{
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 15px;
  background: url("../../../static/img/store_sprites_4.6.png") no-repeat;
  background-size: 220px auto;
  background-position: -150px -146px;
}
.dropmore:after{
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 15px;
  background: url("../../../static/img/store_sprites_4.6.png") no-repeat;
  background-size: 220px auto;
  background-position: -176px -144px;
}
.notice i {
  color: #333;
  background: #fff;
  float: left;
  margin-top: 2px;
}
.notice-txt {
  font-size: 10px;
  color: #fff;
  padding: 0 20px 0 30px;
  margin-top: 20px;
  line-height: 16px;
}
.notice:after {
  content: "";
  clear: both;
  display: block;
  height: 0;
  font-size: 0;
  visibility: hidden;
}
/*店铺优惠券*/
.wrap {
  width: 100%;
}
.coupon {
  width: 100%;
  color: #fff;
  position: relative;
  padding: 10px 10px;
  box-sizing: border-box;
  margin-top: 10px;
}
.coupon:before,
.coupon:after {
  content: "";
  position: absolute;
  top: 9px;
  right: 64%;
  left: 10px;
  height: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}
.coupon:after {
  right: 10px;
  left: 64%;
}
.coupon h2 {
  width: 32%;
  font-size: 15px;
  margin-top: -10px;
  line-height: 18px;
  text-align: center;
  margin: -10px auto;
  font-weight: 400;
}
li {
  list-style: none;
}
.pics li,.pic1 {
  margin: 10px auto;
  height: 70px;
  border-radius: 3px;
  border-left: 3px solid #ff5757;
  box-sizing: border-box;
  position: relative;
  white-space: nowrap;
}
.rightlist .pic1{
  width:90%;
}
.rightlist .pic1,.bannerimg{
  display:none;
}
.colo1 {
  color: #ff4f64;
  height: 70px;
  font-size: 18px;
  font-family: Arial, "Microsoft YaHei", Verdana, Arial, Helvetica, sans-serif;
  float: left;
  width: 15%;
  text-align: center;
  line-height: 70px;
  background: #fffbfb;
  border-top: 1px solid #ff9d9d;
  border-bottom: 1px solid #ff9d9d;
  box-sizing: border-box;
  padding-left: 5px;
}
.two{
  border-left:3px solid transparent;
  box-sizing:border-box;
}
.midd {
  width: 60%;
  height: 70px;
  text-align: left;
  float: left;
  padding: 20px;
  background: #fffbfb;
  box-sizing: border-box;
  border-top: 1px solid #ff9d9d;
  border-bottom: 1px solid #ff9d9d;
}  
.midd:after,.center:after {
  clear: both;
  content: "";
  display: inline-block;
  height: 0;
  font-size: 0;
  visibility: hidden;
}
.colo2 {
  color: #ff4f64;
  font-size: 14px;
  color: #333;
  margin-bottom: 3px;
}
.colo3 {
  font-size: 11px;
  color: #666;
}
.nowrap {
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
}
.middimg {
  float: left;
  height: 70px;
  width: 10px;
  background: url("../../../static/img/conpon.png") no-repeat;
  background-size: 10px 100%;
}
.sale-right {
  display: inline-block;
  clear: both;
  width: 20%;
  font-size: 12px;
  height: 68px;
  text-align: center;
  line-height: 70px;
  background: #fffbfb;
  border-top: 1px solid #ff9d9d;
  border-bottom: 1px solid #ff9d9d;
  box-sizing: border-box;
  border-radius: 3px;
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
.wrap2 {
  padding: 10px 0;
  box-sizing: border-box;
}
.evaluate {
  border-radius: 3px;
  padding: 15px 10px 0;
  background: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 15px;
}
.evaluate .num {
  text-align: center;
  width: 50%;
  float: left;
  color: #fff;
  box-sizing: border-box;
}
.leftbor {
  border-left: 1px solid #ccc;
}
.num h3 {
  font-size: 25px;
}
.num h4 {
  font-size: 15px;
  font-weight: normal;
}
.username {
  clear: both;
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px dotted #ccc;
  width: 100%;
  box-sizing: border-box;
}
.username .icon {
  float: left;
  height: 40px;
  width: 40px;
  background: url("../../../static/img/evaluateHeader.jpg") no-repeat;
  background-size: 40px;
  border-radius: 50%;
}
.username .name {
  color: #fff;
  float: left;
  padding-left: 10px;
}
.username .start {
  color: #fea14f;
  font-size: 16px;
}
.look {
  text-align: center;
  color: #fff;
  font-size: 16px;
  padding: 15px 0;
}
.username .time {
  float: right;
  line-height: 30px;
  color: #fff;
  font-size: 12px;
}
.shop {
  margin-bottom: 30px;
}
.shop ul {
  padding: 10px;
  color: #fff;
  line-height: 34px;
  font-size: 16px;
}
.shop ul .tel {
  text-decoration: underline;
}
.shop ul .apti {
  border-bottom: 1px dotted #ccc;
  border-top: 1px dotted #ccc;
  padding: 5px 0;
  margin: 2px 0;
}
.shop .left {
  float: right;
}
/*footer*/
footer {
  width: 100%;
  height:47px;
  background: #f2f8f3;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  z-index: 10;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0/2);
}
footer .totop {
  padding: 10px;
}
footer .toparrow {
  width: 15px;
  height: 8px;
  display: block;
  margin: 0 auto;
  background: url("../../../static/img/store_sprites_4.6.png") no-repeat;
  background-size: 220px;
  background-position: -15px -18px;
}
footer h4 {
  color: #666;
  font-weight: normal;
  margin-top: 6px;
}
/* content */
.content {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 104px;
  left: 0;
  box-shadow: 0, 0, 0, 9px reba(0, 0, 0, 0.4);
  background: #fff;
  overflow: hidden;
  transition: all 400ms ease-in-out;
  z-index:1;
}
.search {
  width: 100%;
  height: 40px;
  line-height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  background: #eaeaea;
  font-size: 12px;
  color: #999;
  border-bottom: 1px solid #d5d5d5;
}
.searchbox {
  background: #fff;
}
.search span {
  display: block;
  background: url("../../../static/img/search_bar_sprites.png") no-repeat;
  padding-left: 40px;
  background-size: 44px 175px;
  background-position: left -6px;
}
.column {
  width: 100%;
  min-height: 600px;
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  overflow: hidden;
  background: #fff;
}
.column .list {
  background: #f4f4f4;
  font-size: 16px;
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
  padding: 0 10px 80px;
  box-sizing: border-box;
}
.list .group {
  height: 46px;
  line-height: 46px;
  border-bottom: 1px solid #d5d5d5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hide {
  display: none;
}
footer .bot-cart {
  background: #fff;
  height: 47px;
  border-top: 1px solid #d9d9d9;
  position:fixed;
  z-index:1001;
  left:0;
  right:0;
  bottom:0;
}
.bot-cart .cart {
  position:absolute;
  z-index:10;
  left:0;
  top:0;
  height: 48px;
  min-width: 80px;
  text-decoration: none;
  background: url("../../../static/img/cart.png") 10px 5px no-repeat;
  background-size: 50px 125px;
  text-align: left;
  padding-left: 70px;
}
.bot-cart .empty{
  color: #999;
  font-size: 15px;
  line-height: 48px;
}
footer .bot-cart .goelse{
  background:#47b34f;
}
.bot-cart .addstore{
  top:-13px;
  background-position:10px -70px;
  height:58px;
  transition:transform 0.5s ease-out
}
.addstore .i{
  position: absolute;
  top: 3px;
  left: 40px;
  padding: 0 5px;
  height: 15px;
  line-height: 15px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background-color: #ff5d5c;
  border-radius: 7px;
  font-size: 10px;
  z-index:20;
}
.bot-cart .go {
  height: 100%;
  padding: 0 30px;
  background: #bebebe;
  color: #fff;
  float: right;
  line-height: 50px;
  font-size:15px;
}
#carshop.rise{
  transform: translateY(-100%);
  /* top:-48px; */
}
#carshop .san{
  position: absolute;
  left: 26px;
  top: -7px;
  width: 0;
  height: 0;
  border-width:0 10px 10px;
  border-style:solid;
  border-color:transparent transparent #fbfbfb;


  /* background: url(//static-o2o.360buyimg.com/daojia/new/images/minicart/a.png) 0 0 no-repeat;
  background-size: 11px 7px; */
}
.bot-cart .total{
  display:inline-block;
  line-height: 48px;
  font-size: 18px;
  color: #ff3434;
  transform: translateX(-30px)
}
/* 中间一大块 */
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
}
.borderRight {
  border-left: 3px solid #43b34f !important;
  color: #43b34f;
}
.rightlist {
  position: absolute;
  top: 0;
  left: 84px;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
}
.p1,
.p2 {
  padding-left: 5px;
  font-size: 15px;
  color: #ff5757;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.p2 {
  font-size: 11px;
  color: #666;
  margin-top: 4px;
}
.center {  
  width: 70%;
  height: 68px;
  text-align: left;
  float: left;
  padding: 16px 10px 0 12px;
  box-sizing: border-box;
  border-top: 1px solid #ff9d9d;
  border-bottom: 1px solid #ff9d9d;
}
.centerimg {
  position: absolute;
  top: 0px;
  left: 70%;
  height: 68px;
  width: 10px;
  background: #fff url("../../../static/img/conpon.png") no-repeat;
  background-size: 10px 100%;
  z-index: 999;
}
.sale-right.other{
  width: 29%;
  position: absolute;
  right: 0;
  border-right: 1px solid #ff9d9d;
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
  padding-bottom: 180px;
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
dd > label,table .carlabel {
  font-size: 16px;
  color: #ff3434;
  padding-top: 2px;
  white-space: nowrap;
  display: inline-block;
  font-size: 0;
}
dd strong,tr strong {
  font-size: 0;
}
.carlabel em{
  font-size:12px;
  padding-right:5px;
}
.sprice {
  text-decoration: line-through;
}
label .price {
  font-size: 16px;
  font-weight:400;
}
strong .sprice {
  font-size: 13px;
}
label em,
strong em {
  font-style: normal;
  font-size: 11px;
}
.all dd>strong {
  line-height:20px;
}
.part_sale {
  background: #ff5959;
  color: #fff;
  padding: 1px 2px;
  font-size: 10px;
  line-height: 12px;
  height:12px;
  border-radius: 2px;
  font-weight: 200;
  overflow:hidden;
}
.sale-name{
  line-height:0;
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
.nav .navlist a{
  font-size:14px;
}
.nav .navlist.show {
  display: block;
}
.box span.reduce {
  background-position: -42px 0;
}
.box span.add {
  right: 0;
  background-position: 0 0;
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
  font-size: 12px;
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
  z-index: 1;
  right: 0;
  bottom: 125px;
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
  display: none;
}
.navlist a {
  color: #fff;
  display: block;
  height: 35px;
  line-height: 35px;
  padding-left: 38px;
  border-bottom: 1px solid #4b4b4b;
  background: url("../../../static/img/bmenu.png") no-repeat;
  background-size: 16px 300px;
}
.navlist a.zr {
  background-position: 10px 0;
}
.navlist a.zs {
  background-position: 10px -50px;
}
.navlist a.zt {
  background-position: 10px -100px;
}
.navlist a.zu {
  background-position: 10px -150px;
}
.navlist a.zv {
  background-position: 10px -200px;
}
.navlist a.zw {
  background-position: 10px -250px;
}
.navlist i.zx {
  display: block;
  height: 0;
  width: 0;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
  border-width: 6px;
  border-style: solid;
  position: absolute;
  bottom: -12px;
  right: 10px;
  z-index: 15px;
}
/* 购物车 */
#carshop{
  position:absolute;
  left:0;
  right:0;
  /* top:49px; */
  transition:transform 0.5s ease-out ;
  background:#fbfbfb;
  z-index:40;
  padding:0 10px;
}
.cover{
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,.4);
  z-index:-1;
}
.cs1{
  line-height:40px;
  width:100%;
  height:40px;
  color:#666;
  border-bottom:1px solid #ebebeb;
  font-size:12px;
}
.carshop-sel{
  background:url('../../../static/img/ck.png') no-repeat;
  background-size:20px 220px ;
  width:10px;
  height:40px; 
  padding-left:30px;
  display:inline-block;
}
.cs1-l{
  float:left; 
  background-position:5px -190px;
  width:50px;
  height:40px; 
  padding-left:30px;
  color:#333;
}
.cs1 .cs1-p{
  position: absolute;
  left: 84px;
  top: 1px;
  font-size: 12px;
  color: #666;
}
.cs1-r{
  background:url('../../../static/img/delete.png') no-repeat center left;
  float:right;
  padding-left:20px;
  background-size:13px 12px
} 
#carshop tr{
  border-top:1px solid #ebebeb;
  width:100%;
  position:relative;
  display:block;
  padding-bottom:10px;
 
}
#carshop tr th{
  text-align:left;
}
.cs2{
  display:block;
  max-height:260px;
  overflow: scroll;
  width:100%;
}
.cs2-check{
  background-position:0 -200px;
}
.carImg img{
  width:52px;
  height:52px;
  margin-top:10px;
  vertical-align:top;
}
.car-info{
  padding-left:10px;
}
.cartitle{
  min-height:36px;
  line-height:36px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  border-collapse: collapse;
  color:#555;
  font-weight:400;
  font-size:14px;
}
.warn1{
  color: #ff5757;
  width: 240px;
  font-size: 10px;
  font-weight:400;
  display:block;
  padding-left:40px;
}
</style>