<template>
  <div id="myreg">	
  		<header id="header">
        <span class=" header-icon" @click="history()"></span> 
        <span class="header-text">京东注册</span>
      </header>
      <section class="page">
          <div class="regPage">
            <div class="input-container">
              <label for="tel" class="regbox">
                <span>+86</span>
                <i class="area_icon"></i>
              </label>
              <input type="text" class="tel" placeholder="请输入手机号">
              <i class="icon" @click="clear"></i>
            </div>
          </div>
          <div class="input-container captcha">
            <img src="../../static/img/init.gif" alt="验证">
            <span @click="test" class="test">点击完成验证</span>
          </div>
          <div class="wrapcap">
            <div class="inport">
              <p>请输入{{tel}}收到的验证码：</p>
              <div class="input-container">
                <input type="text" class="telcode" placeholder="请输入手机验证码">
                <i class="icon" @click="clear"></i>
              </div>
              <button class="mes-code" @click="send">获取验证码</button>
              <a href="javascript:void(0)" class="next" @click="next">下一步</a>
            </div>
            <div class="passbox">
              <div class="input-container">
                  <input type="password" placeholder="请设置6-20位登录密码" autocomplete="off" class="password">
                  <i class="icon" @click="clear"></i>
                  <label class="checkbox">
                  <input id="onOff_pwd" type="checkbox">
                  <div class="checkbtn"></div>
                 </label>
              </div>
              <div class="pass-text">
                  <span>密码由6-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写</span>
              </div> 
              <div class="psd-err">登录密码长度需在6-20位字符之间</div>
              <a href="javascript:void(0)" class="next" @click="over">完成 </a>          
            </div>
            <div class="question-box">
                <span>遇到问题? 请 <a href="tel=4006065500">联系客服</a></span>
            </div>
          </div>
      </section>
      <div class="hint">
        <span>手机号格式错误</span>
      </div>
      <div class="verify">
        <div class="safe">
          <div class="safe-header">
             <h3>安全设置</h3>
             <img src="../../static/img/refresh.png" alt="" @click="refresh">
          </div>
          <div class="safe-body">
            <span>{{verify}}</span>
          </div>
          <div class="safe-bottom">
            <div class="safe-text">请输入上述验证码：<p class="hi">(不区分大小写)</p></div>
            <div class="box">
              <input type="text" @keyup.enter="sure" autofocus>
            </div>
          </div>
          <p class="result" @click="sure">确定</p>
        </div>
        <div class="info">
          <div class="img">
            <img src="../../static/img/icon_warn.png" alt="">
          </div>
          <p class="pop-msg">我们将发送短信/语音验证码至：<br>{{tel}}</p>
          <div class="pop-btns" >
            <a href="javascript:;" class="btn-pop btn-cancel" @click="cancle">取消</a>
            <a href="javascript:;" class="btn-pop btn-continue" @click="btncontinue">确定</a>
          </div>
        </div>
      </div>
      <div class="agreement-dialog">
          <div class="agreement-body">
            <h3 class="agreement-title">注册协议及隐私政策</h3>
            <div class="agreement-content">
              <p>在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，<span class="important-tip">请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：</span>
              </p>
              <div class="link-wrap">
                <p class="link-top">
                  <a href="http://m.jd.com//help/app/register.html">《京东用户注册协议》</a>
                </p>
                <p class="link-content">
                  <a href="//in.m.jd.com/help/app/private_policy.html">《用户隐私政策》</a>
                </p>
                <p class="link-bottom">
                  <a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a>
                </p>
              </div>
              <p>
                <span class="important-tip">【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。</span>如您对以上协议内容有任何疑问，您可随时与京东客服联系。
                </p>
            </div>
            <div class="agreement-btn-wrap">
                <p class="agreement-notice">
                  <span>点击同意即表示您已阅读并同意
                    <a href="https://m.jd.com//help/app/register.html">《京东用户注册协议》</a>与
                    <a href="//in.m.jd.com/help/app/private_policy.html">《京东隐私政策》</a>并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于
                    <a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a>
                  </span>
                </p>
                <div class="agreement-btns">
                  <a href="javascript:;" @click="history" class="agreement-btn btn-cancel agreement-btn-cancel clearfix">不同意</a>
                  <a href="javascript:;" @click="complete" class="agreement-btn btn-complete clearfix">同意</a>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name:'mylogin',
  data(){
    return {
      showimg:true,//控制确认按钮点击是哪种点击
      loginrgx:/^((1[3-8][0-9])\d{8})$/,
      verify:'',//随机生成的验证码
      tel:'',//输入的手机号码
      time:120,
      disabled:true,//控制定时器倒计时
      inter:0,
      codes:'',//随机的手机验证码
    }
  },
  props:['redlogin'],
  created(){
     clearInterval(this.inter)
  },
  beforeRouteLeave(to,from,next){
    next()
    clearInterval(this.inter) 
  },
  beforeUpdeted(){
     clearInterval(this.inter) 
  },
  mounted(){   
    $('.input-container input').focus(function(){//获取焦点时叉号出现
      $(this).parent().find('.icon').css('display','inline')
    })

    $('.input-container input').blur(function(){//失去焦点时如果输入框为空叉号消失
      if($(this).val()==''){
        $('.icon').css('display','none')
      }
    })

    $('.input-container input').keyup(function(){//键盘按下时时叉号出现
      $(this).parent().find('.icon').css('display','inline')
    })


    $('.telcode').keyup(function(){//获取焦点验证手机号验证码
       $(this).parent().find('.icon').css('display','inline')
      if($('.telcode').val().trim()!==''){
        $('.inport .next').css('opacity',1)
      }else{
        $('.inport .next').css('opacity',0.3)
      }
    })

    $('.password').keyup(function(){//键盘按下验证手机号验证码
      var passReg1 = /^[0-9A-Za-z\u0020-\u007e]{6,20}$/                         
      $(this).parent().find('.icon').css('display','inline')
      if($(this).val().trim()!==''){
        $('.passbox .next').css('opacity',1)
        $('.pass-text span').addClass('hide')
        if(!passReg1.test($('.password').val())){
          $('.psd-err').addClass('appear')
        }else{
          $('.psd-err').removeClass('appear')
        }     
      }else{
        $('.passbox .next').css('opacity',0.3)
        $('.pass-text span').removeClass('hide')
      }
    })

     $('.password').focus(function(){//获取焦点验证手机号验证码
        if($(this).val().trim()!==''){
          $('.passbox .next').css('opacity',1)
          $('.psd-err').addClass('appear')
          $('.pass-text span').addClass('hide')
        }else{
          $('.passbox .next').css('opacity',0.3)
          $('.psd-err').removeClass('appear')
          $('.pass-text span').removeClass('hide')
        }
     })

     $('.input-container .checkbtn').click(function(){//点击眼睛切换显示密码还是隐藏密码
      $(this).toggleClass('showcheckbtn')
      if($(this).hasClass('showcheckbtn')){
        $('.password').prop('type','text')
      }else{
        $('.password').prop('type','password')
      }
    })
  },
  methods:{
    history:function(){//不同意
      history.go(-1)
    },
    complete:function(){//同意
      $('.agreement-dialog').addClass('hide')
    },
    clear:function(){//清除input
      $('.input-container .tel,.telcode,.password').val('')
      $('.tel,.telcode,.password').focus();//删除输入框内容后，自动获取焦点
      $('.next').css('opacity',0.3)
      $('.icon').css('display','none')//删除输入框内容后，自动获取焦点,让叉号消失，再键盘按下再出现

    },
    test:function(){//测试手机号
        var loginrgx =  /^((1[3-8][0-9])\d{8})$/
        var reg =  loginrgx.test($('.tel').val())
        if(reg){
          $('.test').text('安全验证中')
          $('.captcha img').prop('src',"../../static/img/loading.gif")
          $('.verify').addClass('appear')
          $('.safe').addClass('appear')
          this.refresh()   
        }else{
          $('.hint').addClass('appear')  
          $('.hint').animate({'opacity':1},1000);
          $('.hint').animate({'opacity':0.7},1000);
          $('.hint').animate({'opacity':0},2000,function(){
          $('.hint').removeClass('appear')  
          });
        }
    },
    refresh:function(){//刷新验证码随机出现4位数或者字母
      this.verify='';
      for(var i = 0;i<4;i++){
        var n= Math.floor(Math.random()*62);
            if(n<10){//1-10
              this.verify += n;
            } else if(n<36){ //A-Z
              this.verify += String.fromCharCode(n+55);
            }else{//a-z
              this.verify += String.fromCharCode(n+61); 
            }
      }
      return this.verify; 
    },
    sure:function(){//随机数的点击确认，发送验证码
        if(this.verify.toLowerCase()==$('.box input').val().trim().toLowerCase()){
          $('.test').text('通过验证')
          $('.captcha img').prop('src','../../static/img/success.gif')
          $('.safe').removeClass('appear')
          setTimeout(() => {
            $('.safe').addClass('hide')
            $('.info').addClass('appear')
            this.tel = $('.tel').val()
          }, 1000);
        }else{
          $('.safe-text').html('验证码错误请重试').css('color','red');
          $('.box input').val('')
          this.refresh() 
        }
    },
    cancle:function(){//取消
      if( this.showimg == false){
        $('.pop-msg').html('我们将发送短信/语音验证码至：<br>' + this.tel)
        $('.btn-cancel').html('取消')
         this.showimg = true;
         return 
      }
      $('.btn-cancel').html('返回')
      $('.pop-msg').text('点击“确定”将中断注册，确定中断？')
      $('.box input').val('')
      this.showimg = false;
    },
    btncontinue:function(){//给手机号发送验证码
      clearInterval(this.inter) 
      if(this.showimg){//这里面是确定发送验证码要执行的代码
        // 查重手机号
        $.get(this.apiUrl + '/Sametel',{tel:this.tel},(result)=>{
            if(!result){
              alert('该手机号已注册,可以直接登录')
              this.$router.push({name:'mylogin',params:{tel:this.tel}})      
            }else{
              $('.regPage,.captcha').addClass('hide')
              $('.inport').addClass('appear')
              $('.question-box').addClass('appear')
              // setTimeout(() => {
              //   this.send()
              // }, 1000);

                $('.verify,.info').removeClass('appear')
                $('.test').text('点击完成验证')
                $('.captcha img').prop('src',"../../static/img/init.gif")
                $('.pop-msg').html('我们将发送短信/语音验证码至：<br>' + this.tel)
                $('.btn-cancel').html('取消')
                this.showimg = true;
            }
        })
      }else{
        $('.verify,.info').removeClass('appear')
        $('.test').text('点击完成验证')
        $('.captcha img').prop('src',"../../static/img/init.gif")
        $('.pop-msg').html('我们将发送短信/语音验证码至：<br>' + this.tel)
        $('.btn-cancel').html('取消')
        this.showimg = true;
      }    
    },
    send:function(){//给手机号发送验证码      
      if(this.disabled==true){
        clearInterval(this.inter)
        this.time=120;
        $('.mes-code').text('重新发送('+this.time+')s').css('color','#848689')
        this.inter = setInterval(this.interval,1000)
        var th = this
        $.get(this.apiUrl + '/getCode',function(result){
            th.codes = result.code
            console.log(th.codes)
        })
      }
      this.disabled = false;
    },
    interval:function(){//定时器
        this.time--;
        if(this.time<=0){
          this.disabled = true;
          $('.mes-code').text('获取验证码').css('color','#333'); 
          clearInterval(this.inter) 
          return  
        }
        // console.log(this.time)
        $('.mes-code').text('重新发送('+this.time+')s').css('color','#848689')
    },
    next:function(){//判断验证码
      if($('.telcode').val()!==''){
          if(this.codes!==$('.telcode').val()){
            $('.hint').addClass('appear').find('span').html('验证码错误')  
            $('.hint').animate({'opacity':1},1000);
            $('.hint').animate({'opacity':0.7},1000);
            $('.hint').animate({'opacity':0},2000,function(){
              $('.hint').removeClass('appear')  
            });
            return
          }  
          // 验证通过执行以下代码
          $('.passbox').addClass('appear')
          $('.inport').removeClass('appear')  
      }
    },
    over(){
      if($('.telcode').val()!==''){
          var passReg = /(?!\d{10})[0-9A-Za-z\u0020-\u007e]{6,20}$/
              if(passReg.test($('.password').val())){
              $.post(this.apiUrl+ '/passw',{tel:this.tel,password:$('.password').val()},()=>{  
                this.$router.push({name:'mylogin',params:{tel:this.tel}})           
              })
          }
      }
    }
  }
}

</script>

<style scoped>
  #myreg .hide{
    display:none;
  }
  #myreg .appear{
    display:block;
  }
  #myreg{
    background:#f7f7f7;
    height:100%;
  }
  /*更改placeholder颜色*/
  input::-webkit-input-placeholder{
    color:#ccc;
  }
  a{
    text-decoration:none;
  }

.clearfix::before,.clearfix::after { 
  content: ""; 
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
   .header-icon{
      display:inline-block;
      width:2.2rem;
      height:2.2rem;
      overflow:hidden;
      position:absolute;
      background:url('../../static/img/reg-iconBg.png') no-repeat;
      background-size:22px 250px;
      top:50%;
      left:12px;
      margin-top:-1.1rem;
      background-position:center -64px;
   }
   .icon{
    display:inline-block;
    width:2.2rem;
    height:2.2rem;
    overflow:hidden;
    position:absolute;
    background:url('../../static/img/reg-iconBg.png') no-repeat;
    background-size:22px 250px;
   }
  .page{
    display:block;
    width:100%;
    padding:1.5rem;
    overflow:auto;
    box-sizing:border-box;
  }
  .regPage{
    max-width:75rem;
    margin:0 auto;
    position:relative;
  }
  .input-container{
    width:100%;
    height:4.5rem;
    line-height:4.5rem;
    background:#fff;
    margin-top:1.5rem;
    padding:0 0.5rem;
    box-sizing:border-box;
    position: relative;
  }
  .regbox{
    width:6.2rem;
    text-align:right;
    cursor:default;
    position: absolute;
    font-size:1.4rem;
  }
  .area_icon{
    width: 0;
    height: 0;
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-top: 0.5rem solid #ababab;
    display: inline-block;
    margin:0.2rem 0.7rem 0.2rem 0.2rem;
  }
  .input-container .tel,.telcode,.password{
    border:0;
    outline:0;
    width:100%;
    display:inline-block;
    padding:0;
    font-family:PingFang-SC-Regular;
    box-sizing:border-box;
    font-size:1.4rem;
  }
  .input-container .icon{
    right:1rem;
    top:1.1rem;
    display:none;
  }
  .question-box{
    display:none;
  }
  /* 验证码 */
  .captcha{
    border:1px solid #409eff;
    cursor: pointer;
    line-height:4.5rem;
    height:4.5rem;
    border-radius:0.2rem;
    position: relative;
  }
  .captcha>img{
    height:2.2rem;
    box-sizing:border-box;
    position: absolute;
    top:1.1rem;
    left:0.9rem;
  }
  .captcha span{
    font-size:1.4rem;
    color: #409eff;
    padding-left:3.2rem;
  }
  .agreement-dialog,.verify{
    position:fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background:rgba(0,0,0,.5);
    z-index:1000;
    overflow: hidden;
    font-family:PingFangSC-Regular;
  }
  .verify{
    display:none;
  }
  .agreement-body{
    position:absolute;
    bottom:0;
    background:#f8f8f8;
    width:100%;
  }
  .agreement-title{
    width:100%;
    text-align:center;
    font-size:1.8rem;
    font-weight:bold;
    padding:1.25rem 0;
    border-bottom:.01rem solid #d7d7d7;
  }
  .agreement-content{
    width:100%;
    height:19rem;
    color:#000;
    font-size:1.3rem;
    overflow-x:hidden;
    overflow-y:scroll;
    box-sizing:border-box;
    padding:1.25rem 1rem 0rem;
  }
  .agreement-content p{
    font-size:1.3rem;
    line-height:1.8rem;
  }
  .important-tip{
    font-weight:bold;
    text-decoration:underline;
  }
  .link-wrap{
    margin:1rem 0;
  }
  .link-wrap a{
    color:#000;
  }
  .agreement-btn-wrap{
    padding:1rem;
  }
  .agreement-notice span{
    font-weight:bold;
    line-height:1.3rem;
    font-size:1.3rem;
  }
  .agreement-notice a{
    text-decoration:underline;
    color:#e93b3d;
  }
  .agreement-btns{
    height:5.5rem;
    line-height:5.5rem;
    text-align:center;
    font-size:1.6rem;
  }
  .agreement-btns .agreement-btn{
    display:inline-block;
    width:40%;
    height:4.4rem;
    line-height:4.4rem;
    border-radius:0.3rem;
    margin-top:0.5rem;
  }
  .agreement-btns .btn-cancel{
    color:#000;
    border:1px solid #d7d7d7;
    float:left;
  }
  .agreement-btns .btn-complete{
    color:#fff;
    background:#e93b3d;
    border:0.1rem solid #e93b3d;
    float:right;
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix:after, .clearfix:before {
    content: "";
    display: table;
  }
  /* 手机号格式错误 */
  .hint{
    width:100%;
    text-align:center;
    display:none;
  }
  /* .hint.fadeout{
    animation:makefadeOut 3s linear 1; 
  }
  @keyframes makefadeOut{
    0%,80%{
      opacity:1;
    }
    100%{
      opacity:0;
    }
  } */
  .hint span{
    display:inline-block;
    padding:1.1rem 1.5rem;
    background:#2b2b2b;
    color:#fff;
    border-radius:0.3rem;
    font-size:1.2rem;  
    animation:fadeIn 3s ease 1;
    transition:all .3s ease;
  }
  @keyframes fadeIn{
    0%{
      opacity:.7;
    }
    50%{
      opacity:1
    }
    100%{
      opacity:.7
    }
  }
  .safe,.info{
    width:80%;
    position:fixed;
    top:50%;
    right:10%;
    text-align:center;
    background:#f8f8f8;
    z-index:9999;
    border-radius:.4rem;
    transform:translate(0%,-50%);
  }
  .safe>.safe-header{
    font-size:1.8rem;
    line-height:4.5rem;
    position: relative;
  }
  .safe-header>h3{
    color:#333;
    font-weight:normal;
  }
  .safe-header>img{
    position: absolute;
    top:1.2rem;
    right:1rem;
    width:2rem;
  }
  .safe-body{
    width:90%;
    border-radius:.4rem;
    background:#F0FFF0;
    margin:1rem auto;
    height:6rem;
    line-height:6rem;
    border:1px solid #ddd;
    
  }
  .safe-body>span{
    font-size:3.5rem;
    letter-spacing:2rem;
    font-style:italic;
    color:#006699;
    font-weight:bold;
  }
  .safe-bottom{
    width:90%;
    margin:1rem auto;
    text-align:left;
    font-size:1.4rem;
    height:3.6rem;
    white-space: nowrap;
  }
  .safe-bottom>div{
    display:inline-block;    
    vertical-align:top; 
  }
  .safe-bottom>.safe-text{
    width:53%;
    margin-top:0.5rem;
  }
  .safe-text>.hi{
    font-size:1rem;
  }
  .safe-bottom>.box{
    border:1px solid #ddd;
    width:47%;
    height:3.6rem;
    line-height:3.6rem; 
  }
  .box>input{
    width:100%;
    height:100%;
    border:none;
    outline:0;
    font-size:1.4rem;
    line-height:3.6rem;
    padding-left:1rem;
    box-sizing:border-box;
    letter-spacing: 1rem;
  }
.result{
  background:#337AB7;
  width:100%;
  height:4rem;
  line-height:4rem;
  color:#fff;
  font-size:2rem;
  font-weight:300;
  letter-spacing:0.5rem;
}
.info{
  width:70%;
  right:15%;
  display:none;
  padding:2rem 0;
  background:#fff;
  padding-bottom:0;
}
.info img{
  width:5rem;
  height:5rem;
  margin-top:1rem;
  margin-bottom:1.25rem;
}
.info .pop-msg{
  font-size:1.6rem;
  line-height:2.4rem;
  margin-bottom:2rem;
  color:#333;
}
.pop-btns{
  width:100%;
  white-space: nowrap;
}
.btn-pop{
  width:50%;
  height:4.4rem;
  font-size:1.4rem;
  line-height:4.4rem;
  border-top:1px solid #e5e5e5;
  box-sizing:border-box;
  display:inline-block;
}
.btn-pop.btn-cancel{
  color:#333;
  border-right:1px solid #e5e5e5;
}
.btn-pop.btn-continue{
  color:#E93B3D;
}
/*手机号收到的验证码然后输入验证码inport */
.inport{
  position:relative;
  display:none;
}
.input-container .tel{
  padding-left:6.2rem;
}
.inport .input-container .icon{
  right:11.4rem;
}
.inport>p{
  font-size:1.5rem;
}
.mes-code{
  border:0;
  border-left:1px solid #d7d7d7;
  position:absolute;
  right:0;
  top:4.8rem;
  background:#fff;
  font-size:1.4rem;
  outline:0;
  height:2.3rem;
  line-height:2.3rem;
  width:11rem;
}
.inport .next,.passbox .next{
  display:block;
  width:100%;
  margin-top:1.5rem;
  background:#E93B3D;
  font-size:1.6rem;
  opacity:0.3;
  height:4.5rem;
  line-height:4.6rem;
  border-radius:0.4rem;
  text-align:center;
  color:#fff;
}
.passbox .next{
  margin-top:0.5rem;
}
.question-box{
  margin-top:1rem;
  font-size:1.4rem;
  color:#848689;
}
.question-box>span>a{
  color:#616161;
  text-decoration:underline;
}
/* 密码 */
.passbox{
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
.pass-text{
  font-size:1.2rem;
  line-height:3rem;
  color:#999;
  text-align:left;
}
.psd-err{
  display:none;
    font-size: 1.3rem;
    line-height: 3rem;
    color: #E93B3D;
    min-height: 1.5rem;
    text-align: left;
}
</style>
