<template>
  <div
    class="mapListRpg-box"
    v-loading="loading"
    element-loading-text="拼命加载中..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(0, 0, 0, 0)"
    v-show="itemlts.length > 0"
  >
    <div class="mapListRpg">
      <ul>
        <li
          v-for="(item, index) in itemlts"
          v-bind:key="index"
          v-bind:style="{
            'margin-right': (index + 1) % 4 == 0 ? '0px' : '12px',
          }"
        >
          <rpgItem v-bind:item="item" v-if="item" />
        </li>
      </ul>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
      v-if="itemlts.length > 0"
    >
    </el-pagination>
  </div>

  <div class="mapListRpg-box" v-show="itemlts.length == 0"></div>
</template>
<script>
import { QueryUserCollectedRPG } from "../../api/request";
import rpgItem from "../base/rpg-item.vue";
export default {
  data() {
    return {
      itemlts: [],
      pi: 1,
      ps: 10,
      loading: true,
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
    };
  },
  mounted() {
    this._QueryUserCollectedRPG();
  },
  methods: {
    _QueryUserCollectedRPG() {
      return QueryUserCollectedRPG(this.pi, this.ps).then((res) => {
        console.log(res);
        this.loading = false;
        this.itemlts = res.data.list;
        this.total = res.data.count;
      });
    },
    handleCurrentChange(val) {
      this.pi = val;
      this._QueryUserCollectedRPG();
    },
  },
  components: {
    rpgItem,
  },
};
</script>
<style lang="less">
.mapListRpg {
  overflow: hidden;
  zoom: 1;
}
.mapListRpg ul {
  min-height: 300px;
}
.mapListRpg-box {
  min-height: 400px;
  position: relative;
}
.mapListRpg-box img.noPain {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>