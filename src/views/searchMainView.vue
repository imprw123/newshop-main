<template>
  <div class="searchMain">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName" />
    <searchView/>
    <SiderBar />
  </div>
</template>

<script>
import mixinBase from "../mixin/mixin";
import searchView from "../components/search/index.vue";
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
    searchView,
  },
};
</script>
<style lang="less">
.searchMain {
  width: 1080px;
  margin: 0 auto;
   position: relative;
  z-index:2;
}
.main {
  width: 100%;
  min-height: 800px;
}
</style>