<template>
    <div class="columns">      
      <ul class="col1">
        <li v-for="column in columns1" :key="column.id">
          <a :href="column.href">
            <img :src="'../../../'+column.img" alt="">
          </a>
        </li>
      </ul>
      <ul class="col2">
        <li v-for="column in columns2" :key="column.id">
          <a :href="column.href">
            <h3>{{column.title}}</h3>
            <span>{{column.info}}</span>
            <img :src="'../../../'+column.img" alt="">
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data(){
    return {
      columns1:[],
      columns2:[]
    }
  },
  created(){
    $.get('http://127.0.0.1/Columns',(res)=>{
      // console.log(res.data1)
        this.columns1 = res.data1
        this.columns2 = res.data2
    })
  }
}


</script>

<style scoped>
  a{
    text-decoration:none;
    color:#ff5757;
    font-size:12px;
  }
  .columns{
    width:100%;
  }
  .columns ul{
    width:95%;
    margin:0 auto;
    white-space:nowrap;
  }
  .columns li{
    display:inline-block;
  }
  ul li{
    text-align:center;
  }
  .col1{
    position:relative;
  }
  .col1 li{
    width:48%;
  }
  .col1 li:last-child{
    position:absolute;
    right:0;
    top:0;
  }
  .col1 img{
    width:100%;
  }
  .col2{
    display:flex;
    justify-content:space-between;
    -webkit-box-pack: justify;
    background:#fff;
  }
  .col2 li{
    width:24%;
    background:#FBFBFB;
  }
  .col2 h3{
    margin-top:13px;
    color:#333;
    font-size:14px;
    font-weight:normal;
  }
  .col2 span{
    margin-top:5px;
    font-size:12px;
    display:block;
    height:12px;
    line-height:12px
  }
  .col2 img{
    width:60px;
    height:60px;
    margin:10px auto 0;
  }

</style>
