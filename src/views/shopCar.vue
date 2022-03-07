<template>
  <div class="shopCar">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName"/>
    <carView/>
    <SiderBar />
  </div>
</template>
<script>
import mixinBase from "../mixin/mixin";
import carView from "../components/shopCar/index.vue"
export default {
  mixins: [mixinBase],
  data() {
    return {
      breadCurmbName: "",
    };
  },
  mounted() {
    this.breadCurmbName = this.$route.name;
    // console.log(this.$route.name)
  },
  components: {
      carView
  },
  
};
</script>
<style lang="less">
.shopCar {
  width: 1080px;
  overflow: hidden;
  zoom: 1;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
</style>