<template>
  <div class="detail">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName" />
    <DetailView/>
    <SiderBar />
  </div>
</template>
<script>
import mixinBase from "../mixin/mixin";
import DetailView from "../components/Detail/index.vue"
export default {
  mixins: [mixinBase],
  data(){
      return{
          breadCurmbName:''
      }
  },
  mounted() {
    this.breadCurmbName = this.$route.name;
  },
  components:{
      DetailView
  }
};
</script>
<style lang="less">
.detail{
    width: 1080px;
    overflow: hidden;
    zoom: 1;
    margin: 0 auto;
    position: relative;
    z-index:2;
}
</style>