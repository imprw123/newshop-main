<template>
  <div class="detailInfor">
    <div class="detail-img">
      <img v-bind:src="InforObj2.Class_imgPath" alt="" />
    </div>
    <div class="indetail-infor">
      <div class="detail-name">
        <span>{{ InforObj2.Class_name }}</span>
        <div
          class="scGame"
          v-if="rpg == 'shopRpgDt'"
          v-show="InforObj2.IsCollected == 0"
          @click="AddCollectedRPG(InforObj2.Class_id)"
        ></div>
        <div
          class="ysc"
          v-if="rpg == 'shopRpgDt'"
          v-show="InforObj2.IsCollected != 0"
          @click="RemoveCollectedRPG(InforObj2.Class_id)"
        ></div>
      </div>
      <div class="quanBox"></div>
      <div class="detailtypeName">
        <span v-if="InforObj2.Class_category">{{
          InforObj2.Class_category
        }}</span>
      </div>
      <div class="num-infor">
        <span>{{ `普通商品(${commonShopCount})` }}</span>
        <span v-if="msg">{{ `定制商品(${orderShopCount})` }}</span>
      </div>
    </div>
    <a
      class="jryx"
      href="qfyygame:///type=enter_game_channel/?channelId=1"
      v-if="this.$route.name == 'DOTA'"
    ></a>
    <a
      class="jryx"
      href="qfyygame:///type=enter_game_channel/?channelId=6"
      v-if="this.$route.name == 'IMBA'"
    ></a>
    <a
      class="jryx"
      v-bind:href="InforObj2.Agreement"
      v-if="this.$route.name == 'shopRpgDt'"
    ></a>
  </div>
</template>
<script>
import { AddCollectedRPG, RemoveCollectedRPG } from "../../api/request";
import { ElMessage } from "element-plus";
import { ElLoading } from "element-plus";
export default {
  props: {
    InforObj2: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      rpg: this.$route.name,
      msg: false,
      orderShopCount: 0,
      commonShopCount: 0,
      CountLts: [],
    };
  },
  mounted() {
    //  debugger
    if (this.InforObj2.Class_GoodsCount) {
      this.InforObj2.Class_GoodsCount.map((obj, index) => {
        // debugger;
        if (obj.Flag == 128) {
          this.msg = true;
          this.orderShopCount = obj.Count;
        } else if (obj.Flag == 0) {
          this.msg = false;
          this.commonShopCount = obj.Count;
        }
      });
    } else {
      this.commonShopCount = 0;
      this.orderShopCount = 0;
      this.msg = false;
    }
  },
  methods: {
    AddCollectedRPG(val) {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.5)",
      });
      AddCollectedRPG(val).then((res) => {
        if (res.code == 0) {
          loading.close();
          ElMessage({
            message: "收藏成功!",
            type: "success",
          });
        } else {
          loading.close();
          ElMessage.error(`收藏失败,${res.msg}!`);
        }

        this.$emit("initInfo");
      });
    },
    RemoveCollectedRPG(val) {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.5)",
      });
      RemoveCollectedRPG(val).then((res) => {
        if (res.code == 0) {
          loading.close();
          ElMessage({
            message: "取消收藏成功!",
            type: "success",
          });
        } else {
          loading.close();
          ElMessage.error(`取消收藏失败,${res.msg}!`);
        }
         this.$emit("initInfo");
      });
    },
  },
};
</script>

<style lang="less">
.detailInfor {
  width: 1035px;
  height: 143px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  padding: 14px 20px 0px 23px;
  position: relative;
  .detail-img {
    width: 205px;
    height: 129px;
    float: left;
    img {
      width: 205px;
      height: 129px;
      border-radius: 4px;
    }
  }
  .indetail-infor {
    width: 798px;
    height: 115px;
    float: left;
    padding-top: 14px;
    padding-left: 32px;
    .detail-name {
      height: 25px;
      span {
        color: #000;
        font-size: 14px;
        float: left;
      }
      .scGame {
        width: 49px;
        height: 15px;
        background: url("../../assets/images/sc.png");
        float: left;
        margin-left: 10px;
        position: relative;
        top: 2px;
        cursor: pointer;
      }
      .scGame:hover {
        background: url("../../assets/images/sc-hover.png");
      }
      .ysc {
        width: 49px;
        height: 15px;
        float: left;
        margin-left: 10px;
        position: relative;
        top: 2px;
        cursor: pointer;
        background: url("../../assets/images/ysc.png");
      }
    }
    .quanBox {
      height: 20px;
      width: 100%;
      margin: 5px 0px 10px 0px;
    }
    .detailtypeName {
      width: 100%;
      overflow: hidden;
      zoom: 1;
      margin-bottom: 15px;
      span {
        padding: 0 4px;
        background-color: #a56262;
        color: #fff;
        font-size: 12px;
        font-family: "微软雅黑";
      }
    }
    .num-infor {
      color: #9d9d9d;
      font-size: 12px;
      font-family: "微软雅黑";
      span {
        margin-right: 10px;
      }
    }
  }
  .jryx {
    width: 134px;
    height: 33px;
    background: url("../../assets/images/jryx.png");
    position: absolute;
    top: 72px;
    right: 20px;
    cursor: pointer;
  }
}
</style>