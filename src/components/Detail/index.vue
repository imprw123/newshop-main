<template>
  <div
    class="productInfor"
    v-loading="loading"
    element-loading-text="拼命加载中..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <div class="productInfor_left" v-show="detailObj">
      <div class="borderBox">
        <img v-bind:src="detailObj.Goods_imgPath" class="imgShow" />
      </div>
    </div>
    <div class="productInfor_right" v-show="detailObj">
      <div class="rows">
        <span style="letter-spacing: 32px">名称</span>
        <b>{{ detailObj.Goods_disName }}</b>
      </div>
      <div class="rows">
        <span>分类/标签</span>
        <em>{{ detailObj.Class_name }}</em>
        <em>/</em>
        <em>{{ detailObj.Tag }}</em>
      </div>
      <div class="inforBg">
        <div class="rows">
          <span style="letter-spacing: 32px">价格</span>
          <div style="float: left" class="saleCount">
            <b class="price">{{ `￥${detailObj.Goods_price}` }}</b>
            <i>{{ detailObj.Unit }}</i>
            <em class="discount" v-if="detailObj.IsDiscount == 1"></em>
          </div>
        </div>
        <div class="rows" v-if="goodsid == 27161 || goodsid == 27162">
          <span style="letter-spacing: 10px">优惠券</span>
          <p>
            <em
              class="yhq-icon"
              v-for="(item, index) in CouponLists"
              v-bind:key="index"
              v-on:click="_ReceiveCoupon(item.Coupon_id)"
              v-bind:title="item.Coupon_name"
              >{{ item.Coupon_name }}</em
            >
          </p>
        </div>
        <div class="rows">
          <span style="letter-spacing: 32px">简介</span>
          <p>{{ detailObj.Goods_profile }}</p>
        </div>
      </div>
      <div class="UserCation">
        <p class="addNumber" v-show="addFlag">
          <i>数 量</i>
          <span class="changeNum">
            <em class="leftBtn" @click="leftBtn">-</em>
            <input type="text" id="count" v-model="count" />
            <em class="rightBtn" @click="rightBtn">+</em>
          </span>
        </p>
        <p>
          <a
            href="javascript:;"
            class="back_Gm"
            @click="gmFn(detailObj.Goods_id, 1, 0)"
            >立即购买</a
          >
          <a
            href="javascript:;"
            class="sure_Gm"
            v-if="detailObj.Class_id != 583"
            @click="AddWebCartGoods()"
            >加入购物车</a
          >
          <a
            v-if="detailObj.Class_id != 583"
            href="javascript:;"
            class="sure_Zs"
            @click="
              sendParentCartGods(
                detailObj.Goods_imgPath,
                detailObj.Goods_disName
              )
            "
            >赠送</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="detailInforMation">
    <div class="detailInforMation-name">详情介绍</div>
    <div v-html="detailObj.Goods_details"></div>
  </div>
</template>
<script>
import { QueryGoodsById } from "../../api/request";
export default {
  data() {
    return {
      detailObj: "",
      goodsid: 0,
      count: 0,
      addFlag: true,
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
  watch: {
    $route: {
      handler() {
        this.goodsid = this.$route.query.cid;
        //console.log(this.$route.query.goodsId)
        if (
          this.$route.query.cid == 18108 ||
          this.$route.query.cid == 18107 ||
          this.$route.query.cid == 18106 ||
          this.$route.query.cid == 17674
        ) {
          this.addFlag = false;
        }
        if (this.$route.query.cid) {
          this._QueryGoodsById(this.goodsid);
        }
        //this._QueryCouponByGoodsId();
        //深度监听，同时也可监听到param参数变化
      },
      deep: true,
    },
  },
  mounted() {
    this.goodsid = this.$route.query.cid;
    if (this.$route.query.cid) {
      this._QueryGoodsById(this.goodsid);
    }
  },
  methods: {
    _QueryGoodsById(goodsid) {
      QueryGoodsById(goodsid).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.detailObj = res.data;
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style lang="less">
.productInfor {
  width: 1058px;
  height: 305px;
  border: 1px solid #ebebeb;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;
  padding: 38px 0px 0px 20px;
  position: relative;
  .productInfor_left {
    width: 300px;
    height: 300px;
    background-color: #fff;
    float: left;
    .borderBox {
      width: 200px;
      height: 200px;
      position: relative;
      background-color: #fff;
      margin: 0 auto;
      img.imgShow {
        width: 200px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: -100px;
        border-radius: 8px;
      }
    }
  }
  .productInfor_right {
    height: 300px;
    float: left;
    padding-left: 20px;
    position: relative;
    .rows {
      width: 100%;
      overflow: hidden;
      zoom: 1;
      font-family: "微软雅黑";
      span {
        color: #999999;
        font-size: 14px;
        width: 95px;
        height: 30px;
        line-height: 30px;
        padding-left: 8px;
        float: left;
      }
      em {
        color: #999999;
        font-size: 14px;
        float: left;
        height: 30px;
        line-height: 30px;
      }
      b {
        text-align: center;
        font-size: 20px;
        color: #333;
        float: left;
        height: 30px;
        line-height: 30px;
        position: relative;
      }
      b.price {
        font-size: 24px;
        color: #f74a4a;
        font-weight: normal;
        float: left;
        height: 30px;
        line-height: 30px;
        position: relative;
        font-family: "微软雅黑";
      }
      p {
        float: left;
        width: 545px;
        font-size: 14px;
        color: #666666;
        margin-top: 5px;
      }
      i {
        color: #333333;
        font-size: 14px;
        margin-left: 5px;
        float: left;
        height: 30px;
        line-height: 30px;
        font-family: "微软雅黑";
      }
    }
    .inforBg {
      height: 122px;
      width: 682px;
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: #edf6fc;
      .saleCount {
        font-size: 24px;
        color: #f74a4a;
        font-weight: normal;
        font-family: "微软雅黑";
        em.discount {
          width: 20px;
          height: 14px;
          background: url("../../assets/images/Z.png");
          float: left;
          margin-left: 5px;
          margin-top: 10px;
        }
      }
    }
    .UserCation {
      width: 100%;
      overflow: hidden;
      zoom: 1;
      position: absolute;
      bottom: 20px;
      p {
        position: relative;
        font-size: 14px;
        color: #3d3d3d;
        margin-bottom: 5px;
        i {
          display: inline-block;
          width: 95px;
          text-align: left;
          letter-spacing: 13px;
          color: #999999;
          font-size: 14px;
        }
        a {
          font-family: "微软雅黑";
        }
        a.back_Gm {
          width: 158px;
          height: 36px;
          line-height: 36px;
          background-color: #ff4a00;
          border: 1px solid #ff4a00;
          font-size: 14px;
          color: #fff;
          text-align: center;
          margin-right: 20px;
          border-radius: 4px;
          float: left;
        }
        a.sure_Gm {
          width: 158px;
          height: 36px;
          line-height: 36px;
          background-color: #fedabc;
          border: 1px solid #f0cbb6;
          font-size: 14px;
          color: #e6551b;
          text-align: center;
          float: left;
          border-radius: 4px;
          margin-right: 20px;
        }
        a.sure_Zs {
          width: 158px;
          height: 34px;
          line-height: 34px;
          background-color: #ffb373;
          border: 1px solid #f0cbb6;
          font-size: 14px;
          color: #f32a42;
          text-align: center;
          float: left;
          border-radius: 4px;
        }
      }
      p.addNumber {
        width: 100%;
        margin-bottom: 12px;
        padding-left: 10px;
        i {
          display: inline-block;
          width: 103px;
          text-align: left;
          letter-spacing: 13px;
          color: #999999;
          font-size: 14px;
        }
        span.changeNum {
          width: 86px;
          height: 18px;
          display: block;
          position: absolute;
          top: 0px;
          left: 103px;
          border: 1px solid #cccccc;
          margin-top: 0px;
          em.leftBtn {
            width: 14px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            background-color: #ebebeb;
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            cursor: pointer;
            color: #3d3d3d;
          }
          input {
            position: absolute;
            width: 56px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            background-color: #fff;
            font-size: 14px;
            color: #3d3d3d;
            left: 14px;
            top: 0px;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            display: block;
            outline-style: none;
          }
          em.rightBtn {
            width: 14px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            background-color: #ebebeb;
            display: block;
            position: absolute;
            top: 0px;
            right: 0px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.detailInforMation {
  width: 1038px;
  min-height: 600px;
  border: 1px solid #ebebeb;
  background-color: #fff;
  padding: 20px;
  margin-top: 28px;
  .detailInforMation-name {
    height: 30px;
    line-height: 30px;
    width: 100%;
    text-align: left;
    font-size: 18px;
    color: #676767;
    font-family: "微软雅黑";
  }
}
</style>