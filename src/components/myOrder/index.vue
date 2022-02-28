<template>
  <div class="orderContainer">
    <div class="orderContainer-hd">
      <span style="width: 453px">订单详情</span
      ><span style="width: 156px">实付金额</span
      ><span style="width: 217px">发放状态</span
      ><span style="width: 254px">发放对象</span>
    </div>
    <div
      class="orderContainer-bd"
      v-loading="loading"
      element-loading-text="拼命加载中..."
      :element-loading-spinner="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      element-loading-background="rgba(0, 0, 0, 0)"
    >
      <div
        class="rowBox"
        v-for="(value, name, index) in groupLists"
        v-bind:key="index"
      >
        <div class="rowBox-hd">
          <span v-if="value[0] != null">{{
            creatTime(value[0].CreateTime)
          }}</span>
          <span>
            <em>订单号:</em>
            <em>{{ name }}</em>
          </span>
          <span>
            <em>订单状态:</em>
            <em
              v-if="value[0] != null"
              v-bind:class="{ hasPay: value[0].Order_Pay_status == 0 }"
              >{{ value[0].Order_Pay_status == 0 ? "待付款" : "已付款" }}</em
            >
            <em class="payDetailBtn" v-on:click="_QueryOrderPayInfo(name)"
              >付款明细>></em
            >
          </span>
          <span class="fr">
            <em>订单金额:</em>
            <b v-if="value[0] != null">{{ `￥${value[0].Order_price}` }}</b>
          </span>
        </div>
        <ul>
          <li v-for="(item, index) in value" v-bind:key="index">
            <div class="row01">
              <div class="row01-img">
                <img v-bind:src="item.Goods_imgPath" />
              </div>
              <div class="row01-infor">
                <p>{{ item.Goods_name }}</p>

                <p>
                  <em>{{ `￥${item.Goods_price}` }}</em>
                  <em>(商品单价)</em>
                </p>
              </div>
              <div class="row01-number">{{ `*${item.Goods_count}` }}</div>
            </div>
            <div class="row02">{{ `￥${item.Goods_price}` }}</div>
            <div class="row3">
              {{ item.Order_Send_status == 0 ? "未发放" : "发放" }}
            </div>
            <div class="row4">{{ item.Receiver }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <transition name="fade">
    <div class="payForMoldel" v-show="payForFlag">
      <div class="in-payForDetail">
        <div class="payForDetail-hd">
          <span>付款明细</span>
          <em class="payForDetail-close" v-on:click="payForFlag = false">×</em>
        </div>
        <div class="payForDetail-main">
          <div class="payForDetail-mainHd">
            <div class="payFor-row">
              <span>订单号:</span>
              <span>{{ detailDataObj.OrderId }}</span>
            </div>
            <div class="payFor-row"></div>
            <div class="payFor-row">
              <span>订单价格:</span>
              <span class="fr">{{ `￥${detailDataObj.Order_price}` }} </span>
            </div>
            <div class="payFor-row">
              <span>优惠金额:</span>
              <span class="fr">{{ `￥${Pay_price}` }}</span>
            </div>
            <div class="payFor-row">
              <span>订单金额:</span>
              <span class="fr rd">{{
                `￥${(
                  Number(detailDataObj.Order_price) - Number(Pay_price)
                ).toFixed(2)}`
              }}</span>
            </div>
            <div class="payFor-row">
              <span>支付明细</span>
            </div>
          </div>
          <div class="payForDetail-mainbd">
            <div class="payFor-row">
              <span>通宝抵扣:</span>
              <span class="fr">{{ `￥${tongbaoPay_price}` }}</span>
            </div>
            <div class="payFor-row">
              <span>妖豆抵扣:</span>
              <span class="fr">{{ `￥${yaodouPay_price}` }}</span>
            </div>
            <div class="payFor-row">
              <span>现金支付:</span>
              <span class="fr">{{ `￥${detailDataObj.Order_Pay_price}` }}</span>
            </div>
          </div>
          <div class="payForDetail-sure" v-on:click="payForFlag = false">
            确定
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { QueryUserOrder, QueryOrderPayInfo } from "../../api/request";
export default {
  data() {
    return {
      groupLists: {},
      payForFlag: false,
      detailDataObj: {},
      Pay_price: 0,
      tongbaoPay_price: 0,
      yaodouPay_price: 0,
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
    this._QueryUserOrder();
  },

  methods: {
    creatTime(timestamp) {
      var date = new Date(
        parseInt(timestamp.replace("/Date(", "").replace(")/", ""), 10)
      );
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      var h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var m =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + "-" + D + h + m;
    },
    _QueryUserOrder() {
      QueryUserOrder().then((res) => {
        res.data.forEach((item) => {
          //console.log(item);
          //  debugger;
          if (!this.groupLists[item.Order_id]) {
            this.groupLists[item.Order_id] = [];
            this.groupLists[item.Order_id].push(item);
          } else {
            this.groupLists[item.Order_id].push(item);
          }
        });
        this.loading = false;
      });
      console.log(this.groupLists);
    },
    _QueryOrderPayInfo(oid) {
      this.Pay_price = 0;
      this.tongbaoPay_price = 0;
      this.yaodouPay_price = 0;
      QueryOrderPayInfo(oid).then((res) => {
        if (res.code == 0) {
          this.payForFlag = true;
          this.detailDataObj = res.data;
          if (res.data.Order_Pay_info.length == 0) {
            this.Pay_price = 0;
            this.tongbaoPay_price = 0;
            this.yaodouPay_price = 0;
          } else {
            let item = res.data.Order_Pay_info.find((item) => {
              return item.Pay_type == 1;
            });
            if (item) {
              this.Pay_price = item.Pay_price;
            } else {
              this.Pay_price = 0;
            }

            res.data.Order_Pay_info.map((current) => {
              if (current.Pay_type == 3) {
                this.tongbaoPay_price = current.Pay_price;
              } else if (current.Pay_type == 2) {
                this.yaodouPay_price = current.Pay_price;
              } else {
                this.tongbaoPay_price = 0;
                this.yaodouPay_price = 0;
              }
            });
          }
        }
      });
    },
  },
};
</script>

<style lang="less">
.fade-enter-active {
  //类名：隐藏到显示过程所需要的时间
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  //类名：显示到隐藏过程所需要的时间
  animation: bounce-in 0.5s reverse; //reverse表示和隐藏到显示动画相反
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.orderContainer {
  width: 100%;
  min-height: 800px;
  .orderContainer-hd {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #e3e4e6;
    margin-bottom: 10px;
    span {
      font-size: 12px;
      color: #3a3f4a;
      float: left;
      text-align: center;
      font-family: "微软雅黑";
    }
  }
  .orderContainer-bd {
    .rowBox {
      width: 1078px;
      overflow: hidden;
      zoom: 1;
      border: 1px solid #d6d6d6;
      margin-bottom: 10px;
      border-bottom: 0px;
      .rowBox-hd {
        width: 1026px;
        height: 45px;
        line-height: 45px;
        border-bottom: 1px solid #cccccc;
        background-color: #f0f0f0;
        font-size: 12px;
        color: #868686;
        font-family: "微软雅黑";
        padding-left: 29px;
        padding-right: 25px;
        span {
          float: left;
          height: 45px;
          line-height: 45px;
          margin-right: 40px;
          em {
            margin-right: 10px;
          }
          em.hasPay {
            color: #ff0808;
          }
          em.payDetailBtn {
            font-family: "微软雅黑";
            font-size: 12px;
            color: #0078ff;
            cursor: pointer;
          }
        }
        span.fr {
          float: right;
          margin-right: 0px;
        }
      }
      ul li {
        width: 100%;
        height: 88px;
        border-bottom: 1px solid #cccccc;
        background-color: #fff;
        .row01 {
          width: 422px;
          height: 66px;
          float: left;
          border-right: 1px solid #cccccc;
          padding: 11px 0px 11px 29px;
          .row01-img {
            width: 66px;
            height: 66px;
            background-color: #000;
            float: left;

            img {
              width: 66px;
              height: 66px;
              border-radius: 4px;
            }
          }
          .row01-infor {
            width: 240px;
            height: 66px;
            float: left;
            padding-left: 16px;
            p {
              font-size: 14px;
              color: #3a3f4a;
              font-family: "微软雅黑";
              margin-top: 9px;
              em {
                color: #a9a9a9;
                font-family: "微软雅黑";
                font-size: 12px;
              }
            }
          }
          .row01-number {
            width: 80px;
            height: 66px;
            line-height: 66px;
            text-align: center;
            font-family: Arial;
            color: #3a3f4a;
            font-size: 12px;
            float: left;
          }
        }
        .row02 {
          width: 155px;
          height: 88px;
          line-height: 88px;
          text-align: center;
          font-family: Arial;
          color: #3a3f4a;
          float: left;
          border-right: 1px solid #cccccc;
          font-size: 12px;
        }
        .row3 {
          width: 216px;
          height: 88px;
          line-height: 88px;
          text-align: center;
          font-family: "微软雅黑";
          color: #3a3f4a;
          float: left;
          border-right: 1px solid #cccccc;
          font-size: 12px;
        }
        .row4 {
          width: 253px;
          height: 88px;
          line-height: 88px;
          text-align: center;
          font-family: "微软雅黑";
          color: #3a3f4a;
          float: left;
          font-size: 12px;
        }
      }
    }
  }
}
.payForMoldel {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  .in-payForDetail {
    width: 392px;
    height: 377px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    background: url(../../assets/images/paydetail.png);
    border: 1px solid #2c5d77;
    border-radius: 2px;
    .payForDetail-hd {
      width: 100%;
      height: 26px;
      line-height: 26px;
      color: #fff;
      font-size: 12px;
      font-family: "微软雅黑";
      span {
        float: left;
        margin-left: 8px;
      }
      .payForDetail-close {
        width: 26px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        float: right;
        color: #fefffa;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
      }
    }
    .payForDetail-main {
      width: 320px;
      height: 350px;
      margin: 0 auto;
      padding: 0 35px;
      .payForDetail-mainHd {
        margin-top: 15px;
        height: 174px;
        width: 100%;
        .payFor-row {
          width: 100%;
          overflow: hidden;
          zoom: 1;
          margin-bottom: 14px;
          font-size: 12px;
          color: #868686;
          span {
            float: left;
          }
          span.fr {
            float: right;
          }
        }
      }
      .payForDetail-mainbd {
        width: 100%;
        height: 86px;
        padding-top: 14px;
        .payFor-row {
          width: 100%;
          overflow: hidden;
          zoom: 1;
          margin-bottom: 14px;
          font-size: 12px;
          color: #868686;
          span {
            float: left;
          }
          span.fr {
            float: right;
          }
        }
      }
      .payForDetail-sure {
        width: 105px;
        height: 28px;
        line-height: 28px;
        margin: 0 auto;
        text-align: center;
        font-family: "微软雅黑";
        background-color: #7799c2;
        color: #ffffff;
        font-size: 12px;
        border-radius: 6px;
        margin-top: 15px;
        cursor: pointer;
      }
    }
  }
}
</style>
