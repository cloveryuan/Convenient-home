<template>
  <div id="curr">
      <router-view>
          
      </router-view>
      <router-view name="Footer">  
        
      </router-view>

  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',

}


</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-style: normal;
}
body {
  font-family: "Microsoft YaHei", Verdana, Arial, Helvetica, sans-serif;
  background:#f4f4f4;
  height:100%;
}
#curr{
  background:#fff;
  height:100%;
}
html{
  font-size:10px;
  height:100%;
}


/* buss/search里面的样式   end*/
.rightgroup .list {
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
  padding-bottom:170px;
  border:1px solid #e8e8e8;
}
/* 一级手风琴 */
.el-collapse{
  background:#f4f4f4;
}
.el-collapse-item__header.is-active,.colorClick{
  color:#47b34f;
  border-left:3px solid #47b34f;
  box-sizing:border-box;
}
.el-icon-arrow-right{
  display:none;
}
/* .icon{
  padding-left:24px;
} */
.mark .el-collapse-item__header{
   padding-left:24px;
}
.el-collapse-item__header{
  padding-left:10px;
  font-size:13px;
  color:#666;
  border-left:3px solid transparent;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  background: #f4f4f4;
}
.el-collapse-item__content{
  padding-bottom:0;
}
.el-collapse-item__content div{
  padding-left:10px;
  width:70px;
  height:46px;
  padding-right:4px;
  line-height:46px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-size:12px;
  background:#fff;
  padding-top:1px;
  border-top:1px solid #f4f4f4;
}
.header-icon{
  background:url('../static/img/store_sprites_4.6.png') no-repeat;
  background-size:220px auto;
  position:absolute;
  left:0;
  top:12px;
  width:24px;
  height:22px;
  background-position:-10px -187px;
  transform:scale(0.9)
}
</style>
