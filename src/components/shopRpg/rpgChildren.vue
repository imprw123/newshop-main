<template>
  <InfoView v-bind:InforObj2="InforObj" v-if="InforObj" />
  <HotRecomd v-bind:lts="hotRecommedLts" v-bind:flagid="512" v-if="hotRecommedLts.length>0"/>
  <searchItem
    v-bind:shopLtsMore="shopLtsMore"
    v-bind:searchName="searchName"
    v-bind:total="total"
    @seachFlagPagerParent="_seachParent"
    v-bind:sortName="sortName"
    @_typeTagchangeBtnParent="_typeTagchangeBtn"
    @changeCurrentPageParent="changeCurPage"
  >
    <template v-slot:tabBox>
      <div
        class="tabBox"
        v-bind:class="{
          tabBoxCurrent01: flagId == 0,
          tabBoxCurrent02: flagId == 128,
        }"
      >
        <span
          v-bind:class="{ current01: flagId == 0 }"
          @click="tabCustomShop('普通商品')"
          >普通商品</span
        >
        <span
          v-bind:class="{ current01: flagId == 128 }"
          @click="tabCustomShop('定制商品')"
          >定制商品</span
        >
      </div>
    </template>
  </searchItem>
</template>
<script>
import searchItem from "../../components/base/search-item.vue";
import HotRecomd from "../base/hotRecomd.vue";
import BaseFn from "../../mixin/baseFn";
export default {
  mixins: [BaseFn],
  data() {
    return {
      productTypeLts: [],
      classid: this.$route.query.cid,
      flagId: 0,
      pid:this.$route.query.cid
    };
  },
  mounted() {
    this._dotaRecomment(this.classid, 512);
    this._seachFlagPager();
     this._ClassInfoByCid(); 
  },
  methods: {
    tabCustomShop(val) {
      if (val == "普通商品") {
        this.flagId = 0;
        this.searchName = "";
        this._seachFlagPager();
      } else if (val == "定制商品") {
        this.flagId = 128;
        this.searchName = "";
        this._seachFlagPager();
      }
    },
  },
  components: {
    HotRecomd,
    searchItem,
  },
};
</script>
<style lang="less">
.dota {
  width: 1080px;
  margin-top: 20px;
  overflow: hidden;
  zoom: 1;
  h1 {
    font-size: 18px;
    color: #fff;
    font-family: "微软雅黑";
    height: 30px;
    line-height: 30px;
    font-weight: 500;
    margin-bottom: 2px;
  }
  ul.model01 li {
    width: 160px;
    height: 285px;
    background-color: #fff;
    padding: 15px 24px 0px 24px;
    float: left;
    margin-right: 10px;
  }
}
.tab-change-model {
  width: 1080px;
  min-height: 120px;
  font-size: 12px;
  color: #fff;
  margin-top: 25px;
  font-family: "微软雅黑";
  .tabBox {
    width: 1080px;
    height: 33px;
    margin-bottom: 10px;
    span {
      width: 540px;
      height: 33px;
      float: left;
      line-height: 33px;
      text-align: center;
      font-family: "微软雅黑";
      font-size: 18px;
      color: #5f94be;
      cursor: pointer;
    }
    span.current01 {
      color: #fff;
    }
  }
  .tabBoxCurrent01 {
    background: url("../../assets/images/tagbg01.png");
  }
  .tabBoxCurrent02 {
    background: url("../../assets/images/tagbg02.png");
  }
  .in-tab-change-model {
    width: 100%;
    overflow: hidden;
    zoom: 1;
    margin-bottom: 10px;
    span {
      display: inline-block;
      overflow: hidden;
      zoom: 1;
      margin-right: 15px;
      margin-bottom: 5px;
      cursor: pointer;
    }
    span.current {
      color: #ff3434;
    }
  }
  .action-search {
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
    .action-search-left {
      width: 640px;
      height: 30px;
      float: left;
      .inpt-search {
        width: 510px;
        height: 32px;
        input {
          width: 462px;
          height: 32px;
          float: left;
          border-radius: 6px 6px 6px 6px;
          padding-left: 10px;
          color: #333;
        }
        .sou {
          width: 38px;
          height: 32px;
          background: url("../../assets/images/searchBnt.png");
          float: left;
        }
      }
    }
    .action-search-right {
      width: 440px;
      overflow: hidden;
      zoom: 1;
      float: left;
      span {
        width: 110px;
        height: 38px;
        display: block;
        float: left;
        text-align: center;
        line-height: 38px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        position: relative;
        z-index: 1;
      }
      span.weightChange {
        i {
          width: 10px;
          height: 9px;
          display: block;
          background: url("../../assets/images/pay_num.png");
          position: absolute;
          top: 16px;
          right: 28px;
        }
        i.current {
          background: url("../../assets/images/pay_num_hover.png");
        }
      }
      span.Sales {
        i {
          width: 10px;
          height: 9px;
          display: block;
          background: url("../../assets/images/pay_num.png");
          position: absolute;
          top: 16px;
          right: 28px;
        }
        i.current {
          background: url("../../assets/images/pay_num_hover.png");
        }
      }
      span.price {
        i {
          width: 10px;
          height: 12px;
          display: block;
          background: url("../../assets/images/jg.png");
          position: absolute;
          top: 14px;
          right: 27px;
        }
        i.currentUp {
          background: url("../../assets/images/jg_up.png");
        }
        i.currentDown {
          background: url("../../assets/images/jg_down.png");
        }
      }
      span.shelves {
        i {
          width: 10px;
          height: 9px;
          display: block;
          background: url("../../assets/images/pay_num.png");
          position: absolute;
          top: 16px;
          right: 13px;
        }
        i.current {
          background: url("../../assets/images/pay_num_hover.png");
        }
      }
      span.current {
        color: #ff3434;
      }
    }
  }
  .listContent {
    width: 1080px;
    overflow: hidden;
    zoom: 1;
    ul.model01 {
      overflow: hidden;
      zoom: 1;
      li {
        width: 160px;
        height: 285px;
        background-color: #fff;
        padding: 15px 24px 0px 24px;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
