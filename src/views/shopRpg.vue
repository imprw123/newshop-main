<template>
  <div class="rpgMap">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName" />
    <ShopView/>
    <SiderBar />
  </div>
</template>
<script>
import mixinBase from "../mixin/mixin";
import ShopView from "../components/shopRpg/index.vue"
export default {
  mixins: [mixinBase],
  data() {
    return {
      breadCurmbName: "",
    };
  },
  mounted() {
    this.breadCurmbName = this.$route.name;
  },
  components:{
      ShopView
  }
};
</script>
<style lang="less">
.rpgMap {
  width: 1080px;
  overflow: hidden;
  zoom: 1;
  margin: 0 auto;
}
</style>
