<template>
  <div class="pt">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName" />
    <PtHome />
    <SiderBar />
  </div>
</template>
<script>
import mixinBase from "../mixin/mixin";
import PtHome from "../components/Pt/index.vue";
export default {
  name: "PT",
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
    PtHome,
  },
};
</script>
<style lang="less">
.pt {
  width: 1080px;
  margin: 0 auto;
}
</style>