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
  mounted() {
    this.breadCurmbName = this.$route.name;
  },
  components:{
      DetailView
  }
};
</script>
