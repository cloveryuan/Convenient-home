<template>
  <div>
    <div class="header">
      <div class="addres">
        <a href="javascript:void(0)" class="tit">
          <span>大行宫</span>
          <i class="arrow"></i>
        </a>
        <a href="javascript:void(0)" class="search">
        </a>
        <a href="javascript:void(0)" class="message">
        </a>
      </div>      
      <div class="header-search">
        <span>思念汤圆</span>
      </div>
      <div class="header-nav">
        <ul>
          <li v-for="nav in headerNavname" :key="nav.id">
            <a href="javascript:void(0)">{{nav.navName.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-img">
       <a href="javascript:void(0)">
         <img src="../../../static/img/bigImage.gif">
       </a>
    </div>
    <div class="nav">
        <ul class="list">
          <li class="list" v-for="list in lists" :key="list.id">
            <a :href="list.href">
              <img :src="'../../../'+ list.img" :alt="list.text" onerror='this.src="//static-o2o.360buyimg.com/daojia/new/images/index_ball_default_2.0.png"' >
            </a>
             <p>{{list.text}}</p>
             <span class="sign" v-if="list.id==10">领鲜豆</span>
          </li>
        </ul>
        
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data(){
    return {
      lists:[],
      headerNavname:[]
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
  },
  methods:{
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var op = scrollTop/60;
      if(scrollTop>60){
        $('.addres .search').css('marginRight','15px')
        op=1
      }else{
         $('.addres .search').css('marginRight','-25px')
        op=scrollTop/60
      }
      $('.addres').css('backgroundColor','rgba(78,205,88,'+op +')')
      $('.header-nav li a').css('color','rgba(255,255,255,'+ (1-op) +')')
    }
  },
  created(){
    $.get('http://127.0.0.1/lists',(res)=>{
      // console.log(res.data)
        this.lists = res.data
    })
    $.get('http://127.0.0.1/headernav',(res)=>{
      // console.log(res.data)
        this.headerNavname = res.data
    })

  }
}


</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
.addres{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    z-index:999;
    height:44px;
    width:100%;
    line-height:44px;
  }
  .addres a{
    display:inline-block;
    max-width:40%;
    color:#fff;
    font-size:16px;
    text-align:left;
    text-decoration:none;  
  }
  .addres .tit{
    margin-left:13px; 
  }
  .addres a span{
    background:url('../../../static/img/index_icon_addres.png') no-repeat 0 14px;
    background-size:14px;
    padding-left:20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    /*vertical-align: top;*/
    max-width: 62%;
  }

  .addres a .arrow{
    background:url('../../../static/img/index_icon_down.png') no-repeat center;
    background-size:8px;
    width:10px;
    height:44px;
    display:inline-block;
  }

  .addres .message{
    background:url('../../../static/img/index_icon_message.png') no-repeat center;
    background-size:20px;
    float:right;
    height:44px;
    width:20px;
    margin-right:13px;
  }
  .addres .search{
    background:url('../../../static/img/index_icon24.png') no-repeat 5px -73px;
    background-size:27px;
    float:right;
    height:44px;
    width:27px;
    margin-right:-25px;
    color:#fff;
    transition:all 0.5s;
  }
.header{
  width:100%;
  background:url('../../../static/img/header-bg.png') no-repeat;
  overflow:hidden;
  height:auto;
}
/*搜索框*/
.header-search{
  width:95%;
  margin:49px auto 0px;
  border-radius:68px;
  height:34px;
  line-height:34px;
  text-align:center;
  background:rgb(255,255,255);
}
.header-search span{
  padding-left:20px;
  color:#999;
  font-size:14px;
  background:url(../../../static/img/index-header-search.png) no-repeat left center;
  background-size:15px;
}
/*导航*/
.header-nav ul{
  width:95%;
  margin:0 auto;
  overflow:hidden;
  height:27px;
  line-height:27px;
  text-align:center;
}
.header-nav li{
  display:inline-block;
  white-space:nowrap;
  overflow:hidden;
}
.header-nav li a{
  display:inline-block;
  padding:0 8px;
  color:#fff;
  font-size:0.7rem;
  text-decoration:none;
  white-space:nowrap;
  overflow:hidden
}
/*中间广告大图*/
.header-img{
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:auto;
}
.header-img>a img{
  height:100%;
  width:100%;
}
.nav{
  margin-bottom:30px;
}
.nav .list{
    position: relative;
    white-space: normal;
}
.nav .list li{
  width:20%;
  text-align:center;
  font-size:12px;
  color:#333;
  font-weight:400;
  display:inline-block;
  list-style:none;
  margin-top:8px;
}
.nav .list a{
  color:#333;
  margin-top: 15px;
  vertical-align: top;
  line-height: 12px;
  text-decoration:none;
}
.nav .list p{
  overflow:hidden;
  white-space:nowrap;
}
.nav a img{
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
    border-radius: 40px;
}
.nav .sign{
    position: absolute;
    right: 10%;
    top: 1%;
    background: #FF5757;
    font-size: 12px;
    color:#fff;
    height: 12px;
    line-height: 12px;
    overflow: hidden;
    border-radius: 33px;
    padding: 0 1px;
    white-space: nowrap;
    border: 1px #FF5757 solid
}
</style>
