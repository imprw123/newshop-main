<template>
  <div class="nav-tab">
    <div v-if="breadCurmbName != 'shopRpgDt'">
      <span> <router-link :to="{ path: '/' }">首页</router-link></span>
      <em>/</em>
      <span>{{ breadCurmbName }}</span>
    </div>
    <div v-if="breadCurmbName == 'shopRpgDt'">
      <span> <router-link :to="{ path: '/' }">首页</router-link></span>
      <em>/</em>
      <span>
        <router-link :to="{ path: '/ShopRpg' }">RPG商店</router-link></span
      >
      <em>/</em>
      <span>{{ breadCurmbName }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["breadCurmbName"],
};
</script>

<style lang="less">
.nav-tab {
  width: 1080px;
  overflow: hidden;
  zoom: 1;
  color: #ffffff;
  font-size: 12px;
  padding: 4px 0px;
  border-bottom: 1px solid #fff;
  margin-top: 10px;
  font-family: "微软雅黑";
  margin-bottom: 12px;
  span {
    font-family: "微软雅黑";
    margin-bottom: 12px;
    color: #ffffff;
    font-size: 12px;
    a {
      font-family: "微软雅黑";
      color: #ffffff;
      font-size: 12px;
    }
    a:hover {
      color: #f74a4a;
    }
  }
  em {
    margin: 0 4px;
  }
}
</style>