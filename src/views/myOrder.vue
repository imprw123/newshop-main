<template>
  <div class="order">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName" />
    <myOrderView/>
    <SiderBar />
  </div>
</template>
<script>
import mixinBase from "../mixin/mixin";
import myOrderView from "../components/myOrder/index.vue"
export default {
  mixins: [mixinBase],
  data() {
    return {
      breadCurmbName: "",
    };
  },
  mounted(){
      this.breadCurmbName=this.$route.name;
  },
  components:{
      myOrderView
  }
};
</script>

<style lang="less">
.order {
  width: 1080px;
  overflow: hidden;
  zoom: 1;
  margin: 0 auto;
}
</style>