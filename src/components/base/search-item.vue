<template>
  <div class="tab-change-model">
    <slot name="tabBox"></slot>
    <slot name="action-search"></slot>

    <div class="action-search">
      <div class="action-search-left">
        <div class="inpt-search">
          <input
            type="text"
            placeholder="请填写搜索内容……"
            v-model="searchname"
            @change="_seachFlagPagerChild"
          />
        </div>
      </div>
      <div class="action-search-right">
        <span
          class="weightChange"
          v-bind:class="{ current: sortname == 'weight' }"
          @click="_typeTagchangeBtnChild('综合')"
        >
          综合
          <i v-bind:class="{ current: sortname == 'weight' }"></i>
        </span>
        <span
          class="Sales"
          v-bind:class="{ current: sortname == 'sale' }"
          @click="_typeTagchangeBtnChild('销量')"
        >
          销量
          <i v-bind:class="{ current: sortname == 'sale' }"></i>
        </span>
        <span
          class="price"
          v-bind:class="{
            current: sortname == 'priceup' || sortname == 'pricedown',
          }"
          @click="_typeTagchangeBtnChild('价格')"
        >
          价格
          <i
            v-bind:class="{
              currentUp: sortname == 'priceup',
              currentDown: sortname == 'pricedown',
            }"
          ></i>
        </span>
        <span
          class="shelves"
          v-bind:class="{ current: sortname == 'uptime' }"
          @click="_typeTagchangeBtnChild('上架时间')"
        >
          上架时间
          <i v-bind:class="{ current: sortname == 'uptime' }"></i>
        </span>
      </div>
    </div>
    <div class="listContent" v-show="shopLtsMore.length > 0">
      <ul class="model01">
        <li
          v-for="(item, index) in shopLtsMore"
          v-bind:key="index"
          v-bind:style="{
            'margin-right': (index + 1) % 5 == 0 ? '0px' : '10px',
          }"
        >
          <shopItem v-bind:item="item" />
        </li>
      </ul>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="10"
        :total="total"
        @current-change="handleCurrentChange"
        v-show="total > 0"
      >
      </el-pagination>
    </div>
    <div class="listContent" v-show="shopLtsMore.length == 0">
      <img class="noPain" src="../../assets/images/noPain.png" alt="" />
    </div>
  </div>
</template>

<script>
import shopItem from "./shop-item.vue";
export default {
  name: "search-item",
  props: {
    shopLtsMore: {
      type: Array,
      default: null,
    },
    searchName: {
      type: String,
      default: "",
    },
    sortName: {
      type: String,
      default: "weight",
    },
    total: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      searchname: this.searchName,
      sortname: this.sortName,
    };
  },
  methods: {
    _seachFlagPagerChild() {
      // debugger;
      this.$emit("seachFlagPagerParent", this.searchname);
    },
    _typeTagchangeBtnChild(name) {
      if (name == "综合") {
        this.sortname = "weight";
        this.$emit("_typeTagchangeBtnParent", this.sortname);
      } else if (name == "销量") {
        this.sortname = "sale";
        this.$emit("_typeTagchangeBtnParent", this.sortname);
      } else if (name == "价格") {
        if (this.sortname != "priceup" && this.sortname != "pricedown") {
          this.sortname = "priceup";
          this.$emit("_typeTagchangeBtnParent", this.sortname);
        } else if (this.sortname == "priceup") {
          this.sortname = "pricedown";
          this.$emit("_typeTagchangeBtnParent", this.sortname);
        } else if (this.sortname == "pricedown") {
          this.sortname = "priceup";
          this.$emit("_typeTagchangeBtnParent", this.sortname);
        }
      } else if (name == "上架时间") {
        this.sortname = "uptime";
        this.$emit("_typeTagchangeBtnParent", this.sortname);
      }
    },
    handleCurrentChange(val) {
     // console.log(val);
      this.$emit("changeCurrentPageParent", val);
    },
  },
  mounted() {
    // console.log(pager);
  },
  components: {
    shopItem,
  },
};
</script>
<style lang="less">
.listContent {
  min-height: 400px;
  position: relative;
}
.listContent img.noPain{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
