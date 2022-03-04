<template>
    <div class="container">
        <Header/>
        <Home/>
        <SiderBar/>
    </div>
</template>
<script>
    import mixinBase from '../mixin/mixin'
    import Home from '../components/home/home.vue'
    export default{
        mixins:[mixinBase],
        components:{
            Home
        }
    }
    
</script>
<style lang="less">
    .container{
        width:1080px;
        margin:0 auto;
        position: relative;
        z-index: 2;
    }
</style>
