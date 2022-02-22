<template>
  <div class="dotaContainer">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName"/>
    <DotaView/>
    <SiderBar />
  </div>
</template>
<script>
import mixinBase from "../mixin/mixin";
import DotaView from "../components/dota/index.vue"
export default {
  name: "DOTA",
  mixins: [mixinBase],
  data() {
      return{
          breadCurmbName:''
      }
  },
  mounted(){
      this.breadCurmbName=this.$route.name;
     // console.log(this.$route.name)
  },
  components: {
      DotaView
  },
};
</script>
<style lang="less">
.dotaContainer {
  width: 1080px;
  margin: 0 auto;
}
</style>