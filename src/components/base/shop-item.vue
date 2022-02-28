<template>
  <div class="modelbox">
    <div class="img-box">
      <router-link :to="{ path: '/detail', query: { cid: item.Goods_id } }">
        <img v-bind:src="item.Goods_imgPath" class="pic" />
      </router-link>
      <div class="money">
        ￥ <b>{{ item.Goods_price }}</b
        ><span
          ><em>{{ item.Unit }}</em></span
        ><i class="quan" v-if="item.IsDiscount == 1"></i>
      </div>
      <div v-bind:title="item.Goods_disName" class="name">
        {{ item.Goods_disName }}
      </div>
      <div class="detail-type">{{ item.Tag }}</div>
      <div class="action">
        <span class="shopcar" v-if="item.Class_id != 583">+ 购物车</span>
        <span class="send" v-if="item.Class_id != 583">赠送</span>
        <span class="ljgm" v-bind:class="{ ljgmCurrent: item.Class_id == 583 }"
          >立即购买</span
        >
      </div>
      <div class="xian"></div>
      <div class="mapName">
        <i></i><span>{{ item.Class_name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.item);
  },
};
</script>

<style lang="less">
.modelbox {
  width: 162px;
  overflow: hidden;
  zoom: 1;
  .img-box {
    width: 160px;
    height: 285px;
    .pic {
      width: 160px;
      height: 160px;
      display: block;
      border-radius: 4px;
    }
    .pic:hover {
      transform: scale(1.05);
      transition: 1s ease;
    }
    .money {
      font-size: 12px;
      color: #f74a4a;
      font-family: "微软雅黑";
      b {
        font-size: 20px;
        color: #f74a4a;
        font-family: "微软雅黑";
      }
      span {
        font-size: 12px;
        color: #f74a4a;
        font-family: "微软雅黑";
      }
      .quan {
        width: 16px;
        height: 16px;
        background: url(../../assets/images/quan.png);
        display: inline-block;
        margin-left: 5px;
        position: relative;
        top: 3px;
      }
    }
    .name {
      width: 100%;
      font-size: 14px;
      font-family: "微软雅黑";
      color: #333333;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .detail-type {
      font-size: 12px;
      color: #9d9d9d;
      font-family: "微软雅黑";
      margin: 4px 0px;
      height: 16px;
      line-height: 16px;
    }
    .action {
      width: 160px;
      height: 21px;
      border: 1px solid #dbdbdb;
      margin: 2px 0px;

      span.shopcar {
        width: 56px;
        height: 21px;
        line-height: 21px;
        font-size: 12px;
        color: #333333;
        font-family: "微软雅黑";
        float: left;
        text-align: center;
      }
      span.send {
        width: 42px;
        height: 21px;
        line-height: 21px;
        font-size: 12px;
        color: #333333;
        font-family: "微软雅黑";
        float: left;
        text-align: center;
        border-left: 1px solid #dbdbdb;
        border-right: 1px solid #dbdbdb;
      }
      span.ljgm {
        width: 60px;
        height: 21px;
        line-height: 21px;
        font-size: 12px;
        color: #333333;
        font-family: "微软雅黑";
        float: left;
        text-align: center;
      }
      span.ljgmCurrent {
        width: 100%;
      }
      span:hover {
        background-color: #f74a4a;
        color: #fff;
        transition: 0.2s ease;
        cursor: pointer;
      }
    }
    .xian {
      width: 160px;
      height: 1px;
      background-color: #dbdbdb;
      margin-top: 7px;
    }
    .mapName {
      width: 160px;
      height: 25px;
      line-height: 25px;
      font-family: "微软雅黑";
      font-size: 12px;
      color: #9d9d9d;
    }
  }
}
</style>