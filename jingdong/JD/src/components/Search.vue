<template>
    <header>
        <div class="back" @click="goback()"></div>
        <div class="search">
            <span>搜索附近的商品和门店</span>
        </div>
    </header>
</template>

<script>
export default {
    methods:{
        goback(){
            history.go(-1)
        }
    }
}
</script>

<style scoped>
    header{
		height:48px;
        color:#999;
        background:rgb(236, 235, 235);
        padding:10px 10px;         
        box-sizing:border-box;
        width:100%;
    }
    .back{
        display:none;
        width:10px;
        height:100%;
        line-height:48px;
        padding-left:20px;  
        height:30px;
        background:url('../../static/img/reg-iconBg.png')  no-repeat;
        background-size:25px 300px;  
        background-position: center -74px;
    }
    .search{
        background:#fff;
        line-height:28px;
        border-radius:2px;
        width:100%;
    }
    .search span{
        margin-left:10px;
        background:url('../../static/img/index-header-search.png') no-repeat left center;
        background-size:18px;
        padding-left:25px;
        font-size:14px;
    }
</style>


