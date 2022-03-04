<template>
  <div class="dotaContainer">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName" />
    <ImbaView />
    <SiderBar />
  </div>
</template>
<script>
import mixinBase from "../mixin/mixin";
import ImbaView from "../components/imba/index.vue";
export default {
  name: "IMBA",
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
    ImbaView,
  },
};
</script>
<style lang="less">
.dotaContainer {
  width: 1080px;
  margin: 0 auto;
  position: relative;
  z-index:2;
}
</style>