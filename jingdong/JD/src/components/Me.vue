<template>
    <div class="me">
        <div class="header">
            <router-link to="/Mylogin">
                <span class="icon login"></span>
                <span  v-if="!usertel" class="ho">登录/注册</span>
                <div class="name" v-if="usertel">
                    <div class="username">jd_{{usertel.slice(0,7)}}lkh<a></a></div>
                    <span class="telname">{{usertel.slice(0,3)}}****{{usertel.slice(7)}}<a></a></span>
                </div>
                
            </router-link>           
            <div class="hint">
                <span class="h1 icon"></span>
                <span class="h2 icon"></span>
            </div>
        </div>
        <div class="user-wallet">
           <ul class="wallet p">
               <li>
                   <a href="javascript:void(0)">
                       <i class="w1 w"></i>
                       <b>我的钱包</b>
                   </a>
               </li>
               <li>
                   <a href="javascript:void(0)">
                       <i class="w">--</i>
                       <b>优惠券</b>
                   </a>
               </li>
                <li>
                   <a href="javascript:void(0)">
                       <i class="w3 w">--</i>
                       <b>白条</b>
                   </a>
               </li>
                <li>
                   <a href="javascript:void(0)">
                       <i class="w4 w">--</i>
                       <b>鲜豆</b>
                   </a>
               </li>
           </ul>
        </div>
        <div class="ad">
            <a href="javascript:void(0)">
                <img src="../../static/img/download1.png" alt="">
            </a>
        </div>
        <div class="use">
            <ul class="p">
                <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-1.png" alt="">
                        <b>我的关注</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-2.png" alt="">
                        <b>我的评价</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-3.png" alt="">
                        <b>我的地址</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-4.png" alt="">
                        <b>会员减运费</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-5.png" alt="">
                        <b>签到有惊喜</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-6.png" alt="">
                        <b>退款/售后</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-7.png" alt="">
                        <b>客服反馈</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-8.png" alt="">
                        <b>帮助中心</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-9.png" alt="">
                        <b>办公室超市</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                         <img src="../../static/img/use-10.png" alt="">
                        <b>配送员招募</b>
                    </a>
                </li>
                 <li>
                    <a href="javascript:void(0)">
                        <img src="../../static/img/use-11.png" alt="">
                        <b>关于我们</b>
                    </a>
                </li>
            </ul>
        </div>
        <div class="quit" v-if="usertel">
            <a href="javascript:void(0)" @click="quit">退出登录</a>
        </div>
    </div>
</template>


<script>
import $ from 'jquery'
import store from 'storejs'


export default {
    data(){
        return {
            usertel:this.$route.params.phone,
        }
    },
    created(){
        console.log(store.get('username')['tel'])
        if(store.get('username')['tel']){//缓存存在
            this.usertel = store.get('username').tel
        }else{
            var username = {}
            username['tel'] = this.usertel;
            store.set('username',username)
        }
    },
    mounted(){
        $(window).ready(function(){
            $('footer .my').addClass('b')
            $('footer a').not('.my').removeClass('b')
        })
    },
    methods:{
        quit:function(){
            store.remove('username')
            var username = {}
            this.usertel = ''
            username['tel'] = this.usertel;
            store.set('username',username)           
        }
    }

}
</script>

<style>
    b{
        font-weight:normal;
    }
    .me{
        height:100%;
        background:#f4f4f4;
    }
   .icon{
        width:22px;
        height:22px;
    }
    .header{
        position:relative;
        width:100%;
        min-height:91px;
        padding-top:24px;
        background:#fff url('../../static/img/my_bgnew.png') no-repeat center bottom;
        background-size:cover;
        overflow: hidden;
    } 
    .header .login{
        display:inline-block;
        width:61px;
        height:61px;
        border-radius:50%;
        background:url('../../static/img/bg_head_new.png') no-repeat;
        background-size:auto 61px;
        margin-left:16px;
        padding-left:0;
        vertical-align:middle;
    }
    .header a>.ho{
        color:#fff;
        font-size:14px;
        background: #69c575;
        height:16px;
        padding:7px 10px;
        display:inline-block;
        letter-spacing:1px;
        margin-left:5px;
        vertical-align:middle;
    }
    .header .hint{
        position:absolute;
        top:20px;
        right:10px;
        height:50px;
        z-index:20;
    }
    .header .h1{
        display:inline-block;
        background:url('../../static/img/icon_er.png') no-repeat ;
        background-size:22px;
        margin-right:10px;
    }
    .header .h2{
        display:inline-block;
        background:url('../../static/img/user_message_icon.png') no-repeat ;
        background-size:22px;
    }
    .user-wallet{
        background:#fff;
        height:70px;
        margin-bottom:10px;
        padding:10px 15px;
        box-sizing:border-box;
        white-space: nowrap;
    }
    .p{
        list-style:none;
        overflow: hidden;
    }
    .p li{
        float:left;
        width:25%;
    }
    .p>li>a{
        width:100%;
        color:#323232;
        line-height:25px;
        text-align:center;
        font-size:12px;
        display:inline-block;
    }
    .w1{
        background:url('../../static/img/icon_packet.png') no-repeat;
        background-size:25px 25px;
    }
    .p .w{
        display:block;
        width:25px;
        height:25px;
        margin:0 auto;  
    }
    .ad{
        height:75px;
        width:100%;
        background:#fff;
    }
    .ad a{
        display:inline-block;
        width:100%;
        height:75px;
        text-align:center;
    }
    .ad img{
        height:100%;
    }
    .use li{
        border-bottom:1px solid #e8e8e8;
        padding:1px 0 25px 0;
    }
    .use li a{
        line-height:35px;
    }
    .use{
        background:#fff;
        margin-bottom:20px;
    }
    .use img{
        width:47px;
        height:47px;
        display:block;
        margin:0 auto;
    }
    .name{
        display: inline-block;
        padding-left: 10px;
        vertical-align: middle;
        line-height: 25px;
        position: relative;
        top: 0;
        font-size: 13px  ;
        color:#fff;   
    }
    .telname{
        position:relative;
    }
    .telname a{
        display: inline-block;
        width: 14px;
        height: 14px;
        position: absolute;
        top: 3px;
        right: -20px;
        background: url('../../static/img/icon_edit.png') no-repeat;
        background-size: 14px 14px;
    }
    .username a{
        display:inline-block;
        height:22px;
        width:22px;
        color: #ffffff;
        font-size:11px;
        background:url('../../static/img/vip_icon_gray.png');
        padding-left:20px;
        background-size: 17px;
        background-repeat: no-repeat;
        background-position: 0 6px;
        margin-left: 4px;
        padding: 0 5px 4px 21px;
        vertical-align: top;

    }
    .quit{
        padding-bottom: 64px;
    }
    .quit a{
        display:block;
        height:46px;
        color:#ff5757;
        text-align:center;
        font-size:16px;
        line-height:46px;
        background:#fff;
    }
</style>
