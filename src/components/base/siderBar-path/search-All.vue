<template>
  <div class="siderBd">
    <input
      type="text"
      placeholder="请输入你想要查找的道具名称"
      class="pageSearch"
      v-model="val"
    />
    <div class="quickSearch">
       <router-link :to="{path:'/searchMainView',query:{'name':val}}" >搜索商品</router-link>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        val:''
      }
    }
  }
</script>

<style lang="less">

</style>