<template>
<div id="list">
    <Search></Search>
    <Buss></Buss>
</div>
  
</template>

<script>
import $ from 'jquery'
import Search from '@/components/Search'
import Buss from '@/components/index/Buss'
export default {
    components:{
        Search,
        Buss
    },
}
</script>

<style>
/* 加载子路由search进来设置back样式 */
header{
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
}
/* buss/search里面的样式 */
header{
  white-space: nowrap;
}
#list .back{
  display:inline-block;
}
#list .search{
  width:90%;
  display:inline-block;
  vertical-align:10px;
}
</style>


