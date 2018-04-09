import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import Classify from '@/components/Classify'//分类
import OrderList  from '@/components/OrderList'//订单
import Mylogin from '@/components/Mylogin'
import Myreg from '@/components/Myreg'
import Shopcar from '@/components/Shopcar'//购物车
import Store from '@/components/index/Store'//详情里面的购物车
import Footer from '@/components/Footer'
import Buss from '@/components/index/Buss'//首页下半部分
import Search from '@/components/Search'
import Me from '@/components/Me'//我的
import List from '@/components/list'//分类跳转

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path:'',
      components:{
        default:Index,
        Footer
      },
      // props:true//直接用传的参数
    },
    {
      path:'/classify',
      components:{
        default:Classify,
        Footer
      }
    },
    {
    	path:'/shopcar',
      components:{
        default:Shopcar,
        Footer
      }
    },
    {
      path:'/orderList',
      components:{
        default:OrderList,
        Footer
      }
    },
    {
      name:'me',
      path: '/me',
      components: {
        default: Me,
        Footer
      }
    },
    {
      name:'mylogin',
      path:'/mylogin',
      components:{
        default:Mylogin,
        // Footer
      }
    },
    {
      path:'/myreg',
      component:Myreg
    },
    {
      path:'/store/',
      name:'store',
      component:Store,
    },
    // {
    //   path: '/buss',
    //   name: 'buss',
    //   component:Buss,
    //   children:[
    //     {path:'search',component:Search}
    //   ]
    // },
    {
      path:'/list',
      name:'list',
      component:List
    }
  ]
})
