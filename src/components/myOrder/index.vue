<template>
  <div class="orderContainer">
    <div class="orderContainer-hd">
      <span style="width: 453px">订单详情</span
      ><span style="width: 156px">实付金额</span
      ><span style="width: 217px">发放状态</span
      ><span style="width: 254px">发放对象</span>
    </div>
    <div class="orderContainer-bd">
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
            <em class="payDetailBtn" v-on:click="QueryOrderPayInfo(name)"
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
  <div class="payForMoldel"></div>
</template>
<script>
import { QueryUserOrder } from "../../api/request";
export default {
  data() {
    return {
      groupLists: {},
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
      });
      console.log(this.groupLists);
    },
  },
};
</script>

<style lang="less">
.orderContainer {
  width: 100%;
  overflow: hidden;
  zoom: 1;
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
</style>
