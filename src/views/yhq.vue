<template>
  <div class="searchMain">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName" />
    <yhqMainView />
    <SiderBar />
  </div>
</template>

<script>
import mixinBase from "../mixin/mixin";
import yhqMainView from "../components/yhqMain/index.vue";
export default {
  name: "searchMainView",
  mixins: [mixinBase],
  data() {
    return {
      breadCurmbName: "",
      classid: 0,
      pid: 0,
    };
  },
  mounted() {
    this.breadCurmbName = this.$route.name;
  },
  components: {
    yhqMainView,
  },
};
</script>
<style lang="less">
.searchMain {
  width: 1080px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.main {
  width: 100%;
  min-height: 800px;
}
</style>