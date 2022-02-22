<template>
  <div class="header">
    <div class="inHeader">
      <span v-bind:class="{ current: currentName == 'Index' }">
        <router-link :to="{ path: '/' }">首页</router-link>
      </span>
      <span v-bind:class="{ current: currentName == 'PT' }">
        <router-link :to="{ path: '/pt' }">平台</router-link>
      </span>
      <span v-bind:class="{ current: currentName == 'DOTA' }">
        <router-link :to="{ path: '/dota' }">DOTA</router-link>
      </span>
      <span v-bind:class="{ current: currentName == 'IMBA' }">
        <router-link :to="{ path: '/IMBA' }">IMBA</router-link>
      </span>
      <span v-bind:class="{ current: currentName == 'ShopRpg' }">
        <router-link :to="{ path: '/shopRpg' }">RPG商店</router-link>
      </span>
      <span>我的订单</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentName: "",
    };
  },
  mounted() {
    this.currentName = this.$route.name;
    console.log(this.$route);
  },
};
</script>

<style lang="less">
.header {
  width: 1080px;
  height: 45px;
  background: #053249;
  .inHeader {
    width: 790px;
    height: 45px;
    line-height: 45px;
    display: flex;
    float: left;
    span {
      flex: 1;
      text-align: center;
      color: #dfdfdf;
      font-size: 18px;
      font-family: "微软雅黑";
      cursor: pointer;
      a {
        width: 100%;
        height: 100%;
        font-family: "微软雅黑";
        color: #dfdfdf;
        display: block;
        cursor: pointer;
      }
    }
    span.current {
      a {
        color: #3dbeff;
        font-weight: bold;
      }
    }
  }
}
</style>

