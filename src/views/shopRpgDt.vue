<template>
  <div class="dotaContainer">
    <Header />
    <BreadCurmb v-bind:breadCurmbName="breadCurmbName"/>
   <RpgChilren/>
    <SiderBar />
  </div>
</template>
<script>
import mixinBase from "../mixin/mixin";
import RpgChilren from "../components/shopRpg/rpgChildren.vue"
export default {
  name: "IMBA",
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
      RpgChilren
  },
};
</script>
<style lang="less">
.dotaContainer {
  width: 1080px;
  margin: 0 auto;
}
</style>