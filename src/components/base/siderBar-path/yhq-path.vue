<template>
  <div class="siderBd">
    <div class="totalBox">
      <div class="totalBox-left">
        <p style="height: 47px; line-height: 47px">
          优惠券
          <b>{{ yhqlistLen }}</b>
          张
        </p>
      </div>
      <div class="totalBox-right">
        <router-link :to="'YHQ'">查看全部优惠券</router-link>
      </div>
    </div>
    <div class="yhq_box">
      <div class="yhq_box_hd"></div>
      <ul>
        <li
          v-for="(item, index) in yhqlist"
          v-bind:key="index"
          v-bind:class="{
            all:
              item.Coupon_type == 1 ||
              (item.Coupon_type == 2 && item.Cfg_Package_id == 0),
          }"
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
                  <span v-if="item.Coupon_type == 2 || item.Coupon_type == 4">{{
                    `￥${item.Cfg_Params_1 / 100}`
                  }}</span>
                  <span v-if="item.Coupon_type == 1 || item.Coupon_type == 3">{{
                    `${item.Cfg_Params_1 / 10}折`
                  }}</span>
                  <em v-show="item.Cfg_Params_2 > 0">{{
                    `满${item.Cfg_Params_2 / 100}`
                  }}</em>
                </div>
                <div class="priceCenter" v-if="item.Cfg_Use_type == 1">
                  <em>{{ creatTime(item.Cfg_Use_stime) }}</em>
                  <em style="padding: 0 2px">至</em>
                  <em>{{ creatTime(item.Cfg_Use_etime) }}</em>
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
                    item.Cfg_Params_2 > 0 ? `满${item.Cfg_Params_2 / 100}` : '',
                },
              }"
            ></router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { QueryUserCoupon } from ".././../../api/request";
export default {
  data() {
    return {
      yhqlist: [],
      yhqlistLen: 0,
    };
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
    //时间比较
    comptime(nowDate, lastDate) {
      var a = (Date.parse(nowDate) - Date.parse(lastDate)) / 3600 / 1000;
      if (a < 0) {
        return "lastDate";
      } else if (a >= 0) {
        return "nowDate";
      }
    },
    recTime(time1, time2 = 0) {
      var date = new Date(
        parseInt(time1.replace("/Date(", "").replace(")/", ""), 10)
      );
    //  console.log(date.getTime());
      var ms = date.getTime() + time2 * 1000;
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
    _QueryUserCoupon() {
      QueryUserCoupon().then((res) => {
        this.yhqlist = res.data.list.filter((current) => {
         // console.log(current);
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
  },
};
</script>
<style lang="less">
.siderBd {
  width: 300px;
  height: 864px;
  position: relative;
  .totalBox {
    width: 300px;
    height: 45px;
    background-color: #053249;
    .totalBox-left {
      padding-left: 10px;
      float: left;
      color: #fff;
      font-size: 14px;
      p {
        height: 22px;
        line-height: 25px;
        b {
          color: #f74a4a;
        }
      }
    }
    .totalBox-right {
      width: 97px;
      height: 47px;
      line-height: 47px;
      margin-right: 10px;
      float: right;
      a {
        width: 94px;
        height: 22px;
        background-color: #7799c2;
        border: 1px solid #778da6;
        display: inline-block;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        line-height: 22px;
        text-align: center;
        font-family: "微软雅黑";
      }
    }
  }
}

.yhq_box ul {
  width: 227px;
  margin: 0 auto;
}
.yhq_box ul li {
  width: 227px;
  height: 72px;
  background: url(../../../assets/images/yhqlqbg.png);
  margin-bottom: 18px;
}
.yhq_box ul li.all {
  background: url(../../../assets/images/all.png);
}
.yhq_box_hd {
  width: 292px;
  height: 22px;
  background: url(../../../assets/images/kyyhq.png);
  margin: 10px 0px;
}
.yhq_box_left {
  float: left;
  width: 149px;
  height: 72px;
}
.yhq_box_right {
  float: right;
  width: 78px;
  height: 72px;
}
.yhq_box_right a {
  width: 100%;
  height: 100%;
  display: block;
}
.lottry {
  width: 143px;
  height: 62px;
  padding: 10px 0px 0px 6px;
}
.inlottry-hd {
  width: 143px;
  height: 40px;
}
.inlottry-bd {
  width: 100%;
  height: 21px;
  line-height: 21px;
  font-size: 12px;
  font-family: "微软雅黑";
  color: #3a3f4a;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.inlottry-bd em.rd {
  color: #d42626;
}
.lottry .priceHd {
  color: #fff;
  overflow: hidden;
  font-family: "微软雅黑";
}
.lottry .priceHd span {
  font-size: 16px;
  margin-right: 10px;
}
.lottry .priceHd em {
  font-size: 12px;
}
.priceCenter {
  width: 171px;
  color: #fff;
  font-size: 12px;
  transform: scale(0.8);
  overflow: hidden;
  font-family: "微软雅黑";
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  left: -16px;
}
</style>