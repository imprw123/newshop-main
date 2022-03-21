<template>
  <div class="modelbox">
    <div class="img-box">
      <router-link :to="{ path: '/detail', query: { cid: item.Goods_id } }">
        <div class="img-model">
          <img v-bind:src="item.Goods_imgPath" class="pic" />
          <div class="pr-info" v-if="item.Goods_profile.length <= 100">
            {{ item.Goods_profile }}
          </div>
          <div class="pr-info" v-if="item.Goods_profile.length > 100">
            {{ `${item.Goods_profile.substring(0, 100)}...` }}
          </div>
        </div>
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
        <span
          class="shopcar"
          v-if="item.Class_id != 583"
          @click="_AddWebCartGoods(item.Goods_id, 1, 0)"
          >+ 购物车</span
        >
        <span
          class="send"
          v-if="item.Class_id != 583"
          @click="
            _sendParentCartGods(
              item.Goods_id,
              item.Goods_imgPath,
              item.Goods_disName
            )
          "
          >赠送</span
        >
        <span
          class="ljgm"
          v-bind:class="{ ljgmCurrent: item.Class_id == 583 }"
          @click="gmFn(item.Goods_id, 1, 0)"
          >立即购买</span
        >
      </div>
      <div class="xian"></div>
      <div class="mapName">
        <i></i><span>{{ item.Class_name }}</span>
      </div>
    </div>
  </div>
  <SendDiv ref="child" />
  <payView ref="payChildren" />
</template>
<script>
import { AddWebCartGoods } from "../../api/request";
import SendDiv from "./send.vue";
import payView from "./pay.vue";
import { mapActions } from "vuex";
import { ElMessage } from "element-plus";
import { ElLoading } from "element-plus";
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      totalNumber: 0,
      totalMoney: 0,
    };
  },
  mounted() {
    // console.log(this.item);
  },
  methods: {
    ...mapActions("shopInfo", {
      shop_Car: "shop_Car",
    }),
    //加入购物车接口
    _AddWebCartGoods(goodsid, count, uid) {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.5)",
      });
      AddWebCartGoods(goodsid, count, uid).then((res) => {
        if (res.code == 0) {
          loading.close();
          ElMessage({
            message: "加入购物车成功!",
            type: "success",
          });
          this.shop_Car();
        } else {
          loading.close();
          ElMessage.error(`加入购物车失败,${res.msg}!`);
        }
      });
    },
    gmFn(val, c, u) {
      this.$refs.payChildren.payChildren(val, c, u);
    },
    //赠送好友
    _sendParentCartGods(gid, img, name) {
      this.$refs.child.childrenPram(gid, img, name);
    },
  },
  components: {
    SendDiv,
    payView,
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
    .img-model {
      width: 160px;
      height: 160px;
      position: relative;
      .pic {
        width: 160px;
        height: 160px;
        display: block;
        border-radius: 4px;
      }

      .pr-info {
        width: 140px;
        height: 140px;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        padding: 10px;
        text-align: justify;
        display: none;
        font-size: 12px;
      }
    }
    .img-model:hover .pic {
      transform: scale(1.05);
      transition: 1s ease;
    }
    .img-model:hover .pr-info {
      display: block;
      transition: 0.2s;
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