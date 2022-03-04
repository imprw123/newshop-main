<template>
  <div class="yhq">
    <div class="yhqTab">
      <span
        v-bind:class="{ current: isCurrent == 1 }"
        v-on:click="_changeType(1)"
        >可用优惠券</span
      >
      <span
        v-bind:class="{ current: isCurrent == 2 }"
        v-on:click="_changeType(2)"
        >已过期</span
      >
      <span
        v-bind:class="{ current: isCurrent == 3 }"
        v-on:click="_QueryUserCouponOrder"
        >已使用</span
      >
    </div>
    <div class="yhqBox">
      <!-- 可用优惠券 -->
      <div
        class="yhq-has"
        v-loading="loading1"
        element-loading-text="拼命加载中..."
        :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(0, 0, 0, 0)"
      >
        <ul v-show="isCurrent == 1">
          <li
            v-for="(item, index) in yhqlist"
            v-bind:class="{
              all:
                item.Coupon_type == 1 ||
                (item.Coupon_type == 2 && item.Cfg_Package_id == 0),
            }"
            v-bind:key="index"
            v-show="
              item.Coupon_type == 1 ||
              (item.Coupon_type == 2 && item.Cfg_Package_id == 0) ||
              item.Coupon_type == 3 ||
              (item.Coupon_type == 4 && item.Cfg_Package_id > 0)
            "
          >
            <div class="yhq_box_left">
              <div class="lottry">
                <div class="inlottry-hd">
                  <div class="priceHd">
                    <span
                      v-if="item.Coupon_type == 2 || item.Coupon_type == 4"
                      >{{ `￥${item.Cfg_Params_1 / 100}` }}</span
                    >
                    <span
                      v-if="item.Coupon_type == 1 || item.Coupon_type == 3"
                      >{{ `${item.Cfg_Params_1 / 10}折` }}</span
                    >
                    <em v-show="item.Cfg_Params_2 > 0">{{
                      `满${item.Cfg_Params_2 / 100}`
                    }}</em>
                  </div>
                  <div class="priceCenter" v-if="item.Cfg_Use_type == 1">
                    <em>{{ creatTime(item.Cfg_Use_stime) }}</em>
                    <em style="padding: 0 2px">至</em>
                    <em v-bind:title="creatTime(item.Cfg_Use_etime)">{{
                      creatTime(item.Cfg_Use_etime)
                    }}</em>
                  </div>
                  <div class="priceCenter" v-if="item.Cfg_Use_type == 2">
                    {{ recTime(item.Rec_time, item.Cfg_Use_times) }}
                  </div>
                </div>
                <div class="inlottry-bd">
                  <em v-if="item.Coupon_type == 3 || item.Coupon_type == 4"
                    >[限品类]</em
                  >
                  <em class="rd" v-bind:title="item.Coupon_name">{{
                    item.Coupon_name
                  }}</em>
                </div>
              </div>
            </div>
            <div class="yhq_box_right">
              <router-link
                v-show="
                  item.Coupon_type == 3 ||
                  (item.Coupon_type == 4 && item.Cfg_Package_id > 0)
                "
                :to="{
                  name: 'YHQPRODUCT',
                  query: {
                    groupId: item.Cfg_Package_id,
                    Coupon_name: item.Coupon_name,
                    Cfg_Params_2:
                      item.Cfg_Params_2 > 0
                        ? `满${item.Cfg_Params_2 / 100}`
                        : '',
                  },
                }"
              ></router-link>
            </div>
          </li>
        </ul>
      </div>
      <!-- 可用优惠券 -->
      <!-- 已过期 -->
      <div v-show="isCurrent == 2">
        <div class="exp-hd">
          <span>优惠券</span>
          <span>类型</span>
          <span>到期日期</span>
        </div>
        <ol
          class="exp-bd"
          v-loading="loading2"
          element-loading-text="拼命加载中..."
          :element-loading-spinner="svg"
          element-loading-svg-view-box="-10, -10, 50, 50"
          element-loading-background="rgba(0, 0, 0, 0)"
        >
          <li v-for="(item, index) in ExpiredLists" v-bind:key="index">
            <span>{{ item.Coupon_name }}</span>
            <span v-if="item.Coupon_type == 2 || item.Coupon_type == 4"
              >满减券</span
            >
            <span v-if="item.Coupon_type == 1 || item.Coupon_type == 3"
              >折扣券</span
            >
            <div
              class="endTime"
              v-if="item.Cfg_Use_type == 1"
              style="float: right"
            >
              <em>{{ creatTime(item.Cfg_Use_stime) }}</em>
              <em>至</em>
              <em>{{ creatTime(item.Cfg_Use_etime) }}</em>
            </div>
            <div
              class="endTime"
              v-if="item.Cfg_Use_type == 2"
              style="float: right"
            >
              {{ recTime(item.Rec_time, item.Cfg_Use_times) }}
            </div>
          </li>
        </ol>
      </div>
      <!-- 已过期 -->
      <!-- 已使用 -->
      <div class="use-yhq" v-show="isCurrent == 3">
        <div class="use-yhq-hd">
          <span>优惠券</span>
          <span>类型</span>
          <span>使用日期</span>
          <span>使用订单</span>
        </div>
        <div
          class="use-yhq-bd"
          v-loading="loading3"
          element-loading-text="拼命加载中..."
          :element-loading-spinner="svg"
          element-loading-svg-view-box="-10, -10, 50, 50"
          element-loading-background="rgba(0, 0, 0, 0)"
        >
          <div class="row" v-for="(item, index) in useLists" v-bind:key="index">
            <span>{{ item.Coupon_name }}</span>
            <span v-if="item.Coupon_type == 2 || item.Coupon_type == 4"
              >满减券</span
            >
            <span v-if="item.Coupon_type == 1 || item.Coupon_type == 3"
              >折扣券</span
            >
            <div class="timer">{{ creatTime(item.Use_time) }}</div>
            <span>{{ item.Use_Order_id }}</span>
          </div>
        </div>
      </div>
      <!-- 已使用 -->
    </div>
  </div>
</template>

<script>
import { QueryUserCoupon, QueryUserCouponOrder } from "../../api/request";
export default {
  data() {
    return {
      yhqlist: [],
      isCurrent: 1,
      ExpiredLists: [],
      useLists: [],
      loading1: true,
      loading2: true,
      loading3: true,
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
    this._QueryUserCoupon();
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
    modelFixed(val) {
      this.flag = val;
    },
    recTime(time1, time2 = 0) {
      var date = new Date(
        parseInt(time1.replace("/Date(", "").replace(")/", ""), 10)
      );
      // console.log(date.getTime())
      if (time2) {
        var ms = date.getTime() + time2 * 1000;
      } else {
        var ms = date.getTime();
      }

      return this.getDateStr(ms);
    },
    getDateStr(ms) {
      if (ms) {
        var date = new Date(ms);
      } else {
        var date = new Date();
      }
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minute =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var second =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      var currentTime =
        year + "-" + month + "-" + day + "  " + hour + ":" + minute;
      // +
      // ":" +
      // second;
      return currentTime;
    },
    //时间比较
    comptime(nowDate, lastDate) {
      var a = (Date.parse(nowDate) - Date.parse(lastDate)) / 3600 / 1000;
      if (a < 0) {
        return "lastDate";
      } else if (a >= 0) {
        return "nowDate";
      }
    },
    _QueryUserCoupon() {
      QueryUserCoupon().then((res) => {
        this.yhqlist = res.data.list.filter((current) => {
          console.log(current);
          this.loading1 = false;
          if (current.Cfg_Use_type == 1) {
            if (
              this.comptime(
                this.getDateStr(),
                this.recTime(current.Cfg_Use_etime)
              ) == "lastDate"
            ) {
              return true;
            }
          } else if (current.Cfg_Use_type == 2) {
            if (
              this.comptime(
                this.getDateStr(),
                this.recTime(current.Rec_time, current.Cfg_Use_times)
              ) == "lastDate"
            ) {
              return true;
            }
          }
        });
        this.yhqlistLen = this.yhqlist.length;
      });
    },
    _changeType(val) {
      this.isCurrent = val;
      QueryUserCoupon()
        .then((res) => {
          this.loading2 = false;
          //console.log(res);
          if (val == 1) {
            this.yhqlist = res.data.list.filter((current) => {
              console.log(current);
              if (current.Cfg_Use_type == 1) {
                if (
                  this.comptime(
                    this.getDateStr(),
                    this.recTime(current.Cfg_Use_etime)
                  ) == "lastDate"
                ) {
                  return current;
                }
              } else if (current.Cfg_Use_type == 2) {
                if (
                  this.comptime(
                    this.getDateStr(),
                    this.recTime(current.Rec_time, current.Cfg_Use_times)
                  ) == "lastDate"
                ) {
                  return current;
                }
              }
            });
          } else if (val == 2) {
            this.ExpiredLists = res.data.list.filter((current) => {
              console.log(current);
              if (current.Cfg_Use_type == 1) {
                if (
                  this.comptime(
                    this.getDateStr(),
                    this.recTime(current.Cfg_Use_etime)
                  ) == "nowDate"
                ) {
                  return current;
                }
              } else if (current.Cfg_Use_type == 2) {
                if (
                  this.comptime(
                    this.getDateStr(),
                    this.recTime(current.Rec_time, current.Cfg_Use_times)
                  ) == "nowDate"
                ) {
                  return current;
                }
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //已经使用优惠券
    _QueryUserCouponOrder() {
      this.isCurrent = 3;
      QueryUserCouponOrder().then((res) => {
        console.log(res);
        this.loading3 = false;
        this.useLists = res.data.list;
      });
    },
  },
};
</script>
<style>
.use-yhq {
  width: 100%;
  overflow: hidden;
  zoom: 1;
}
.use-yhq-hd {
  width: 100%;
  height: 36px;
  line-height: 36px;
  border: 1px solid #ccc;
}
.use-yhq-hd span {
  width: 25%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  float: left;
  font-size: 14px;
  font-family: "微软雅黑";
  color: #666;
}
.use-yhq-bd .row {
  width: 100%;
  height: 46px;
  line-height: 46px;
  border: 1px solid #e3e4e6;
  border-bottom: 1px solid #ccc;
}
.use-yhq-bd .row span {
  width: 25%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  float: left;
  font-size: 14px;
  font-family: "微软雅黑";
  color: #000;
  float: left;
}
.use-yhq-bd .row .timer {
  width: 25%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  float: left;
  font-size: 14px;
  font-family: "微软雅黑";
  color: #000;
  float: left;
}
.exp-hd {
  width: 100%;
  height: 36px;
  border: 1px solid #ccc;
}
.exp-hd span {
  width: 33.3%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  float: left;
  font-size: 14px;
  font-family: "微软雅黑";
  color: #666;
}
.exp-bd li {
  width: 100%;
  height: 46px;
  line-height: 46px;
  border: 1px solid #e3e4e6;
  border-bottom: 1px solid #ccc;
}
.exp-bd li span {
  width: 33.3%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  float: left;
  font-size: 14px;
  font-family: "微软雅黑";
  color: #000;
}
.endTime {
  width: 33.3%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 14px;
  font-family: "微软雅黑";
  color: #000;
}
.yhq {
  width: 1080px;
  overflow: hidden;
  zoom: 1;
  margin: 0 auto;
}
.nav-tab {
  width: 1080px;
  overflow: hidden;
  zoom: 1;
  color: #ffffff;
  font-size: 12px;
  padding: 4px 0px;
  border-bottom: 1px solid #fff;
  margin-top: 10px;
  font-family: "微软雅黑";
  margin-bottom: 12px;
}
.nav-tab em {
  margin: 0 4px;
}
.yhqTab {
  width: 1078px;
  height: 38px;
  border: 1px solid #d6d6d6;
  background-color: #e3e4e6;
  margin-bottom: 10px;
}
.yhqBox {
  width: 1034px;
  min-height: 320px;
  border: 1px solid #d6d6d6;
  background-color: #e3e4e6;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}
.yhqTab span {
  font-size: 12px;
  color: #85888f;
  font-family: "微软雅黑";
  height: 38px;
  line-height: 38px;
  display: inline-block;
  margin: 0 28px;
  cursor: pointer;
}
.yhqTab span:hover {
  color: #48b5ed;
}
.yhqTab span.current {
  color: #48b5ed;
  font-weight: bold;
}
.yhqBox ul li {
  width: 227px;
  height: 72px;
  background: url(../../assets/images/yhqlqbg.png);
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
}
.yhqBox ul li.all {
  background: url(../../assets/images/all.png);
}
.yhqBox ul li.hasOver {
  background: url(../../assets/images/yhq02.png);
}
.yhqBox ul li.hasOpen {
  background: url(../../assets/images/yhq03.png);
}
.yhqraw {
  width: 46px;
  height: 40px;
  text-indent: 19px;
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  color: #e3cf5a;
  font-family: "微软雅黑";
  font-size: 12px;
  background: url(../../assets/images/yhqRaw.png);
}
</style>