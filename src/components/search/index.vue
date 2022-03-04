<template>
  <div>
    <searchItem
      v-bind:shopLtsMore="shopLtsMore"
      v-bind:searchName="searchName"
      v-bind:total="total"
      @seachFlagPagerParent="_seachParent"
      v-bind:sortName="sortName"
      @_typeTagchangeBtnParent="_typeTagchangeBtn"
      @changeCurrentPageParent="changeCurPage"
      v-loading="loading"
      element-loading-text="拼命加载中..."
      :element-loading-spinner="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      element-loading-background="rgba(0, 0, 0, 0)"
    >
    </searchItem>
  </div>
</template>
<script>
import searchItem from "../../components/base/search-item.vue";
import BaseFn from "../../mixin/baseFn";
export default {
  mixins: [BaseFn],
  data() {
    return {
      classid: 0,
      pid: 0,
    };
  },
  mounted() {
    if (this.$route.query.name) {
      this.searchName = this.$route.query.name;
    } else {
      this.searchName = "";
    }

    this._seachFlagPager();
  },
  methods: {},
  components: {
    searchItem,
  },
};
</script>
