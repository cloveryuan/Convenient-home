<template>
  <div id="mylogin" class="mylogin">	
  		<header id="header">
        <span class="icon header-icon" @click="history"></span> 
        <span class="header-text">京东登录</span>
      </header>
      <section class="page">
        <div class="login-tab">
          <p class="username-login selected-login" @click="selUser()">
            <span id="username_login_txt">账号密码登录</span>
          </p>  
          <p class="sms-login" @click="seleSms()">
            <span id="sms_login_txt">短信验证码登录</span>
          </p>        
        </div>
        <div class="wrapper">
          <!-- 账号密码登录 -->
          <div id="username-login">
            <div class="input-container">
              <div class="username-txt">账号</div>
              <input type="text" placeholder="用户名/邮箱/已验证手机" autocomplete="off" class="userinput" :value="$route.params.tel?$route.params.tel:''">
              <i class="icon"></i>
            </div>
            <div class="input-container passbox">
              <div class="username-passw">密码</div>
              <input type="password" placeholder="请输入密码" autocomplete="off" class="password">
              <i class="icon"></i>
              <label class="checkbox">
                <input id="onOff_pwd" type="checkbox">
                <div class="checkbtn"></div>
              </label>
            </div>
          </div>
          <!--短信验证登录-->
            <!-- 图片验证 -->
          <div id="sms-login">
            <div class="sms-input-box">
              <div class="input-container telCode" v-if="showimg">             
                <input type="text" placeholder="请输入图片验证码" id="piccode">
                <i class="icon code"></i>
                <span class="pic">
                  <img src="https://plogin.m.jd.com/cgi-bin/m/authcode?mod=smslogin&v=0.8961802648612729" alt="">
                </span>
              </div>
                <!-- 号码获取验证码 -->
              <div class="input-container tel">
                <label for="tel" class="tel-box">
                   <span>+86</span>
                    <i class="area_icon"></i>
                </label>              
                <input type="text" placeholder="请输入手机号" id="tel">
                <i class="icon"></i>
                <button class="telbtn" type="button">获取验证码</button>
              </div>
                <!-- 输入手机验证码 -->
              <div class="input-container telCode">             
                <input type="text" placeholder="请输入收到的验证码" id="telcode">
                <i class="icon"></i>
              </div>
            </div>
          </div>
          <!-- 通知 -->
          <div class="notice">&nbsp;</div>
          <!-- 登录按钮-->
          <a href="javascript:void(0)" class="btnlogin abtn" @click="login">登录</a>
          <a href="javascript:void(0)" class="btnlogin onebtn">一键登录</a>
          <!-- 提示消息  格式输入错误 -->
          <input type="hidden" value="格式有误" class="hint">
          <!-- 忘记密码 -->
          <div class="quick-nav clearfix">
            <a href="javascript:void(0)" class="quick-pass">
              <i class="icon passicon"></i>
              <span class="quick-txt">
                <a>忘记密码</a>
              </span>
            </a>
            <a href="javascript:void(0)" class="quick-tel">
              <i class="icon telicon"></i>
              <span class="quick-txt"><router-link to="myreg">手机快速注册</router-link></span>
            </a>
          </div>
          <div class="quick-login">
            <h4>其他登录方式</h4>
            <a href="javascript"><i class="icon qq-icon"></i></a>
            <a href="javascript"><i class="icon weixin-icon"></i></a>
            <a href="javascript"><i class="icon wallet-icon"></i></a>
            <p class="agreemessage">登录即代表您已同意<a href="//in.m.jd.com/help/app/private_policy.html" class="Policy">京东隐私政策</a></p>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import $ from 'jquery'
import store from 'storejs'

export default {
  name:'mylogin',
  data(){
    return {
      showimg:false,
      
    }
  },
  props:['redlogin'],
  created(){
    
  },
  mounted(){ 
    $('.abtn').addClass('user')
    
    $('.input-container input').focus(function(){//获取焦点时叉号出现
      $(this).parent().find('.icon').css('display','inline')
    })

    $('.input-container input').blur(function(){//失去焦点时如果输入框为空叉号消失
      if($(this).val()==''){
        $(this).parent().find('.icon').css('display','none')
      }
    })

    $('.input-container input').keyup(function(){//键盘按下时时叉号出现
      $(this).parent().find('.icon').css('display','inline')
    })

    $('.input-container .checkbtn').click(function(){//点击眼睛切换显示密码还是隐藏密码
      $(this).toggleClass('showcheckbtn')
      if($(this).hasClass('showcheckbtn')){
        $('.password').prop('type','text')
      }else{
        $('.password').prop('type','password')
      }
    })

    $('.passbox .icon').click(function(){
      $(this).parent().find('input').val('')
    })


    $('.input-container .icon').map(function(i,item){
      $(item).click(function(){
        $(this).parent().find('input').val('');//为空
        $(this).parent().find('input').focus();//删除输入框内容后，自动获取焦点
        $(this).parent().find('.icon').css('display','none')//删除输入框内容后，自动获取焦点,让叉号消失，再键盘按下再出现

        // 有一个输入框为空登录就不显示出红色，意思不可登录
        if($('.userinput').val()=='' || $('.password').val()==''|| $('#tel').val()=='' || $('#telcode').val()==''){
          $('.abtn').removeClass('redlogin')
        }
      })
    })

    // 手机号码符合正则，并且两个输入框都有值，就会出现登录变成红色，可以登录
      $('input').keyup(()=>{
          this.test()
      }) 
  },
  methods:{
    selUser(){//选中下划线变成红的
      $('.username-login').addClass('selected-login')
      $('.sms-login').removeClass('selected-login')
      $('#username-login').css('display','block')
      $('#sms-login').css('display','none')
      $('.abtn').addClass('user').removeClass('sms')

      var loginrgx =  /^((1[3-8][0-9])\d{8})$/
      var reg1 =  loginrgx.test($('.userinput').val()) && $('.password').val()!==''
      if( reg1 ){
        $('.abtn').addClass('redlogin')
      } else{
        $('.abtn').removeClass('redlogin')
      } 
    },
    seleSms(){//选中下划线变成红的
      $('.sms-login').addClass('selected-login')
      $('.username-login').removeClass('selected-login')
      $('#username-login').css('display','none')
      $('#sms-login').css('display','block')
      $('.abtn').removeClass('user').addClass('sms')
      var loginrgx =  /^((1[3-8][0-9])\d{8})$/
      var reg2 =  loginrgx.test($('#tel').val()) && $('#telcode').val()!==''
      if( reg2 ){
        $('.abtn').addClass('redlogin')
      } else{
        $('.abtn').removeClass('redlogin')
      } 
    },
    history(){//左上方小箭头，后退
      history.go(-1)
    },
    test(){//测试
        var loginrgx =  /^((1[3-8][0-9])\d{8})$/
        var reg1 =  loginrgx.test($('.userinput').val()) && $('.password').val()!==''
        var reg2 =  loginrgx.test($('#tel').val()) && $('#telcode').val()!==''
        if( reg1 || reg2 ){
          $('.abtn').addClass('redlogin')
        }    
    },
    login(){
       if($('.user').length>0){
         $.post(this.apiUrl + '/banklogin',{phone:$('.userinput').val(),password:$('.password').val()},(result)=>{
           if(result.error==0){
              this.$router.push({name:'me',params:{phone:$('.userinput').val()}})
           }else{
             $('.notice').html(result.message)
           }
         })
       }
    }
  }
}

</script>

<style scoped>
  #mylogin{
    color:#333;
    background:#fff;
  }
  /*更改placeholder颜色*/
  input::-webkit-input-placeholder{
    color:#ccc;
  }
  a{
    text-decoration:none;
  }

.clearfix::before,.clearfix::after { 
  content: " "; 
  display: table; 
} 
.clearfix::after {
  clear: both; 
} 
.clearfix { 
  *zoom: 1;
}
/*头部*/
	header{
    box-sizing:border-box;
    width:100%;
    height:4.5rem;
    line-height:4.5rem;
    background:#f9f9f9;
    text-align:center;
    color:#616161;
    font-size:1.7rem;
    border-bottom:1px solid #bbb;
    z-index:999;
    position:relative;
   }
   .icon{
    display:inline-block;
    width:2.2rem;
    height:2.2rem;
    overflow:hidden;
    position:absolute;
    background:url('../../static/img/reg-iconBg.png') no-repeat;
    background-size:100% auto;
   }
  .header-icon{
    top:50%;
    left:12px;
    margin-top:-1.1rem;
    background-position:center -64px;
   }
/*section*/
  .page{
    overflow-y:auto;
    width:100%;
  }
  .login-tab{
    width:100%;
    height:4.4rem;
    line-height:4.4rem;
    font-size:1.4rem;
    border-bottom:1px solid #d7d7d7;
  }
  .username-login,.sms-login{
    display:inline-block;
    width:50%;
    text-align:center;
  }
  .username-login{
    float:left;
  }
  /*选中那个的下划线变成红色*/
  .selected-login span{
    border-bottom:0.2rem solid #f23030;
    padding:1.3rem 1rem;
  }
  /*中间模块*/
  .wrapper{
    width:90%;
    margin:0 auto;
  }
  .input-container{
    width:100%;
    border-bottom:1px solid #d7d7d7;
    height:4.8rem;
    line-height:4.8rem;
    font-size:1.4rem;
    text-indent:0.2rem;
    position:relative;
    overflow:hidden;
    box-sizing:border-box;
  }
  .sms-input-box .pic{
      width:8rem;
  }
  .pic img{
    width:90%;
    display:block;
    height:3rem;
    padding-left:2rem;
  }
  .sms-input-box .input-container .code{
    right:8.2rem;
  }
  .input-container div,.tel-box{
    display:inline-block;
    /*必须定位不占空间*/
    position:absolute;
    width:6rem;
    text-align:left
  }
  .input-container{
    width:100%;
    position:relative;
  }
  .input-container input{
    width:100%;
    display:inline-block;
    border:none;
    outline:none;
    padding:0.3rem 6rem;
    box-sizing:border-box
  }
  .input-container .icon{
    top:50%;
    right:1rem;
    margin-top:-1.1rem;
    display:none;
  }
  .passbox .icon{
    right:5rem;
  }
  .checkbox{
    width:3rem;
    height:1.8rem;
    line-height:1.8rem;
    position:absolute;
    top:50%;
    margin-top:-0.8rem;
    right:1rem;
    overflow: hidden;
    z-index:99;
  }
  .checkbox input{
    display:none;
  }
  .checkbox .checkbtn{  
    display:block;
    width:3rem;
    height:1.8rem;  
    background:url('../../static/img/hide_password.png') no-repeat;
    background-size:100% auto;
  }
  .checkbox .showcheckbtn{
    background:url('../../static/img/show_password.png') no-repeat;
    background-size:100% auto;
  }
  #sms-login{
    display:none;
  }
  /*号码旁倒三角*/
  .area_icon{
    width:0;
    height:0;
    border-left:0.4rem solid transparent;
    border-right:0.4rem solid transparent;
    border-top:0.4rem solid #ababab;
    display:inline-block;
    margin:0.2rem 0;
  }
  .input-container.tel input{
    padding-right:13rem;
    box-sizing:border-box
  }
  .input-container.tel .icon{
      right:12rem;
  }
  .telbtn,.pic{
    position:absolute;
    right:0rem;
    top:1rem;
    height:2.2rem;
    width:11.8rem;
    line-height:2.2rem;
    border:0;
    outline:0;
    background:#fff;
    color:#848689;
    font-size:14px;
    border-left:1px solid #d7d7d7;
  }
  .input-container.telCode input{
    padding-right:0;
    padding-left:0;
  }
  /*通知*/
  .notice{
    width:100%;
    line-height:3rem;
    color:#f23030;
    min-height:0.15rem;
    text-align:left
  }
  /*登录按钮*/
  .btnlogin{
    width:100%;
    height:4.5rem;
    line-height:4.5rem;
    font-size:1.4rem;
    display:block;
    text-align:center;
    border-radius:0.3rem;
  }
  .btnlogin.abtn{
    color:#848689;
    background:#eee;
  }
  .btnlogin.onebtn{
    margin-top:1rem;
    color:#f23030;
    border:1px solid #f23030;
  }
  /*都有值时，且手机号符合规范，登录变成红色*/
  .btnlogin.redlogin{
    color:#fff;
    background:#f23030;
  }
  /*错误格式提示*/
  .hint{
    width:10rem;
    height:4rem;
    margin:2rem auto;
    border-radius:0.5rem;
    border:0;
    outline:0;
    display:block;
    text-align:center;
    color:#fff;
    font-size:1.4rem;
    background:rgba(0,0,0,0.7);
  }
  /*忘记密码*/
  .quick-nav{
    margin-top:2rem;
    text-align:center;
    font-size:1.2rem;
  }
  .quick-nav a{
    line-height:2.4rem;
    display:inline-block;
    color:#333;
  }
  .quick-pass{
    float:left;
  }
  .quick-tel{
    float:right;
  }
  .quick-nav .quick-txt{
    text-indent:2.4rem;
    padding-left:0.3rem;
  }
  .quick-pass .passicon{
    background-position:center -22px; 
  }
  .quick-tel .telicon{
    background-position:center -42px; 
  }
  /*底部其他登录方式*/
  .quick-login{
    margin-top:10rem;
    width:100%;
    /*height:8.5rem;*/
    position:relative;
    padding:2.5rem 1rem 0 1rem;
    text-align:center;
    border-top:1px solid #d7d7d7;
    box-sizing:border-box;
  }
  .quick-login h4{
    color:#bfbfbf;
    font-size:1.4rem;
    font-weight:400;
    background:#fff;
    padding:0 1rem;
    position:absolute;
    top:-0.8rem;
    left:50%;
    transform:translateX(-50%);
    letter-spacing:0.12rem
  }
  .quick-login a{
    display:inline-block;
    width:8.2rem;
    white-space:nowrap;
    color:#616161;
    margin:2rem 1rem;
  }
  a.Policy{
    margin-left:0
  }
  .quick-login .qq-icon{
    background-position:center -129px;
  }
  .quick-login .weixin-icon{
    background-position:center -154px;
  }
  .quick-login .wallet-icon{
    background-position:center -221px;
  }
  .agreemessage{
    font-size:1.4rem
  }
  .agreemessage a{
    text-decoration:underline;
  }
</style>
