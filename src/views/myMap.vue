<template>
  <div class="myMap">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName" />
    <div class="map-title">全部搜藏</div>
    <myMapView />
    <SiderBar />
  </div>
</template>

<script>
import mixinBase from "../mixin/mixin";
import myMapView from "../components/myMap/index.vue";
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
    myMapView,
  },
};
</script>
<style lang="less">
.myMap {
  width: 1080px;
  margin: 0 auto;
  position: relative;
  z-index:2;
}
.main {
  width: 100%;
  min-height: 800px;
}
.map-title {
  width: 1080px;
  height: 38px;
  line-height: 38px;
  background-color: #fff;
  border: 1px solid #d6d6d6;
  text-indent: 40px;
  font-size: 12px;
  color: #3a3f4a;
  font-weight: bold;
  font-family: "微软雅黑";
  margin-bottom: 10px;
}
</style>