<template>
  <div class="shopCarBox">
    <div class="shopCarBox-title">
      <span style="width: 104px">
        <el-checkbox
          v-model="checkedAll"
          label=""
          size="large"
          @change="changeAllBtn"
        ></el-checkbox>
      </span>
      <span style="width: 230px">商品信息</span>
      <span style="width: 206px">单价(人民币)</span>
      <span style="width: 120px">数量</span>
      <span style="width: 210px">小计(人民币)</span>
      <span style="width: 200px">操作</span>
    </div>
    <div class="shopCarList">
      <ul>
        <li v-for="(item, index) in shopCarBoxFn" v-bind:key="index">
          <div class="shopCar-row01" style="width: 104px">
            <el-checkbox
              v-model="item.isChecked"
              label=""
              size="large"
              @change="changeThings"
            ></el-checkbox>
          </div>
          <div class="shopCar-row02" style="width: 230px">
            <div class="imgBox-shopCar">
              <img v-bind:src="item.Goods_imgPath" alt="" />
              <i
                class="zen"
                v-show="item.BeGiven_userid > 0"
                @click.self="_CheckAccount(item.BeGiven_userid)"
              ></i>
            </div>
            <div class="shopCar-row02-infor">
              <h5 v-bind:title="item.Goods_disName">
                {{ item.Goods_disName }}
              </h5>
              <p>
                所属分类:
                <em v-bind:title="item.Goods_profile">{{
                  item.Goods_profile
                }}</em>
              </p>
              <p>
                <em>{{ `￥${item.Goods_price}` }}</em
                >（商品单价）
              </p>
            </div>
          </div>
          <div class="shopCar-row03" style="width: 206px">
            {{ `￥${item.Goods_price}` }}
          </div>
          <div class="shopCar-row04" style="width: 120px">
            <span class="changeNum">
              <em
                class="leftBtn"
                @click="
                  _DeductWebCartGoods(
                    item.Goods_id,
                    item.Goods_amount,
                    item.BeGiven_userid,
                    item.isChecked
                  )
                "
                >-</em
              >
              <input
                type="text"
                v-model="item.Goods_amount"
                readonly="readonly"
              />
              <em
                class="rightBtn"
                @click="
                  _AddWebCartGoods(
                    item.Goods_id,
                    1,
                    item.BeGiven_userid,
                    item.isChecked
                  )
                "
                >+</em
              >
            </span>
          </div>
          <div class="shopCar-row05" style="width: 210px">
            <span>{{ `￥${item.Goods_price * item.Goods_amount}` }}</span>
          </div>
          <div class="shopCar-row06" style="width: 200px">
            <span
              @click="
                _RemoveWebCartGoods(
                  item.Goods_id,
                  item.BeGiven_userid,
                  item.isChecked
                )
              "
              >删除</span
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="shopCarBt">
      <div class="gmNoBtn" v-show="!isPay">立即购买</div>
      <div class="gmBtn" v-show="isPay" @click="gmFn">立即购买</div>
      <p>
        总价:<b>{{ `￥${totalMoneyFn}` }}</b>
      </p>
      <p>
        已选择: <b>{{ totalNumberFn }}</b> 件商品
      </p>
    </div>
  </div>
  <payView ref="payChildren" />
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import {
  AddWebCartGoods,
  DeductWebCartGoods,
  RemoveWebCartGoods,
  CheckAccount,
} from "../../api/request";
import payView from "../../components/base/pay.vue";
import { ElMessage } from "element-plus";
import { ElLoading } from "element-plus";
export default {
  data() {
    return {
      checkedAll: true,
      checked: false,
      total_num: 0,
      total_money: 0,
      isPay: true,
    };
  },
  computed: {
    ...mapGetters("shopInfo", {
      totalMoneyFn: "totalMoneyFn",
      totalNumberFn: "totalNumberFn",
      shopCarBoxFn: "shopCarBoxFn",
    }),
  },
  methods: {
    ...mapActions("shopInfo", {
      shop_Car: "shop_Car",
    }),
    ...mapMutations("shopInfo", {
      update_num_money: "update_num_money",
      set_info: "set_info",
    }),
    //查询赠送的用户
    _CheckAccount(valName) {
      CheckAccount(valName).then((res) => {
        ElMessage({
          message: `赠送给${res.data.UserName}`,
          type: "success",
        });
      });
    },
    //删除购物车商品
    _RemoveWebCartGoods(goodsid, uid, val) {
      if (val) {
        const loading = ElLoading.service({
          lock: true,
          text: "Loading",
          background: "rgba(0, 0, 0, 0.5)",
        });
        RemoveWebCartGoods(goodsid, uid).then((res) => {
          if (res.code == 0) {
            loading.close();
            ElMessage({
              message: "删除商品数量成功!",
              type: "success",
            });
            this.shop_Car();
          } else {
            loading.close();
            ElMessage.error(`删除商品数量失败,${res.msg}!`);
          }
        });
      } else {
        ElMessage({
          message: "请先勾选商品!",
          type: "warning",
        });
      }
    },
    //减少购物车数量
    _DeductWebCartGoods(goodsid, count, uid, val) {
      if (val) {
        if (count > 1) {
          const loading = ElLoading.service({
            lock: true,
            text: "Loading",
            background: "rgba(0, 0, 0, 0.5)",
          });
          DeductWebCartGoods(goodsid, uid).then((res) => {
            if (res.code == 0) {
              loading.close();
              ElMessage({
                message: "减少商品数量成功!",
                type: "success",
              });
              this.shop_Car();
            } else {
              loading.close();
              ElMessage.error(`减少商品数量失败,${res.msg}!`);
            }
          });
        } else {
          ElMessage({
            message: "商品数量仅有一件不能再少了!",
            type: "warning",
          });
        }
      } else {
        ElMessage({
          message: "请先勾选商品!",
          type: "warning",
        });
      }
    },
    //加入购物车接口
    _AddWebCartGoods(goodsid, count, uid, val) {
      if (val) {
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
      } else {
        ElMessage({
          message: "请先勾选商品!",
          type: "warning",
        });
      }
    },
    //全选和反选
    changeAllBtn() {
      if (this.checkedAll == true) {
        this.isPay = true;
        this.shop_Car();
      } else if (this.checkedAll == false) {
        this.isPay = false;
        this.shopCarBoxFn.map((item) => {
          item.isChecked = false;
        });
        this.set_info({
          totalNumber: 0,
          totalMoney: 0,
          shopCarBox: this.shopCarBoxFn,
        });
      }
    },
    //单件商品勾选
    changeThings() {
      debugger;
      const ltsChecked = [];
      this.total_money = 0;
      this.total_num = 0;
      this.shopCarBoxFn.map((item) => {
        if (item.isChecked) {
          this.total_money +=
            Number(item.Goods_price) * Number(item.Goods_amount);
          this.total_num += Number(item.Goods_amount);
        }
        ltsChecked.push(item.isChecked);
      });
      if (ltsChecked.includes(true)) {
        this.isPay = true;
        this.total_money = this.total_money.toFixed(2);
        this.update_num_money({
          totalNumber: this.total_num,
          totalMoney: this.total_money,
        });
      } else {
        this.isPay = false;
        this.update_num_money({
          totalNumber: 0,
          totalMoney: 0,
        });
      }

      if (ltsChecked.includes(false)) {
        this.checkedAll = false;
      } else {
        this.checkedAll = true;
      }
    },
    //立即购买
    gmFn() {
      const _data = [];
      this.shopCarBoxFn.map((item) => {
        if (item.isChecked) {
          var _obj = new Object();
          _obj.I = item.Goods_id;
          _obj.C = item.Goods_amount;
          _obj.U = item.BeGiven_userid;
        }
        _data.push(_obj);
      });
      const jsonStr = JSON.stringify(_data);
      console.log(_data);
      this.$refs.payChildren.payChildrenLists(jsonStr);
    },
  },
  components: {
    payView,
  },
};
</script>

<style lang="less">
.shopCarBox {
  width: 100%;
  overflow: hidden;
  zoom: 1;
  padding-bottom: 49px;
  background-color: #f0f0f0;
  position: relative;
  .shopCarBox-title {
    width: 1078px;
    height: 38px;
    line-height: 38px;
    color: #3a3f4a;
    font-size: 12px;
    font-family: "微软雅黑";
    background-color: #e3e4e6;
    border: 1px solid #ccc;
    span {
      height: 38px;
      line-height: 38px;
      float: left;
      text-align: center;
      font-size: 12px;
      color: #3a3f4a;
      font-family: "微软雅黑";
    }
  }
  .shopCarList {
    width: 1078px;
    height: 624px;
    border: 1px solid #cccccc;
    border-bottom: 0px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #f0f0f0;
    ul li {
      width: 100%;
      height: 88px;
      border-bottom: 1px solid #cccccc;
      .shopCar-row01 {
        height: 88px;
        line-height: 88px;
        text-align: center;
        float: left;
      }
      .shopCar-row02 {
        float: left;
        height: 78px;
        padding-top: 10px;
        .imgBox-shopCar {
          width: 66px;
          height: 66px;
          position: relative;
          float: left;
          img {
            width: 66px;
            height: 66px;
            float: left;
          }
          i.zen {
            width: 29px;
            height: 29px;
            position: absolute;
            top: 0px;
            left: 0px;
            display: block;
            background: url(../../assets/images/zen.png);
            cursor: pointer;
          }
        }
        .shopCar-row02-infor {
          float: left;
          width: 150px;
          padding-left: 14px;
          h5 {
            font-size: 14px;
            color: #3a3f4a;
            font-family: "微软雅黑";
            margin-bottom: 5px;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          p {
            font-size: 12px;
            color: #a9a9a9;
            font-family: "微软雅黑";
            margin-bottom: 5px;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            em {
              font-weight: normal;
            }
          }
        }
      }
      .shopCar-row03 {
        float: left;
        height: 88px;
        line-height: 88px;
        text-align: center;
        color: #3d3d3d;
        font-size: 12px;
        font-family: "微软雅黑";
      }
      .shopCar-row04 {
        float: left;
        height: 88px;
        line-height: 88px;
        position: relative;
        .changeNum {
          width: 86px;
          height: 18px;
          display: block;
          position: absolute;
          top: 50%;
          margin-top: -9px;
          left: 50%;
          margin-left: -43px;
          border: 1px solid #cccccc;
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
      .shopCar-row05 {
        float: left;
        height: 88px;
        line-height: 88px;
        text-align: center;
        span {
          color: #ff0808;
          font-size: 12px;
        }
      }
      .shopCar-row06 {
        float: left;
        height: 88px;
        line-height: 88px;
        text-align: center;
        color: #3d3d3d;
        font-size: 12px;
        font-family: "微软雅黑";
        cursor: pointer;
      }
      .shopCar-row06 span:hover {
        color: #ff0808;
        cursor: pointer;
      }
    }
  }
  .shopCarBt {
    width: 100%;
    position: absolute;
    bottom: 0px;
    right: 0px;
    .gmNoBtn {
      width: 108px;
      line-height: 49px;
      height: 49px;
      text-align: center;
      background-color: #b8b8b8;
      color: #fff;
      font-size: 12px;
      font-family: "微软雅黑";
      cursor: pointer;
      float: right;
      margin-left: 20px;
    }
    .gmBtn {
      width: 108px;
      line-height: 49px;
      height: 49px;
      text-align: center;
      background-color: #ff4a00;
      color: #fff;
      font-size: 12px;
      font-family: "微软雅黑";
      cursor: pointer;
      float: right;
      margin-left: 20px;
    }
    p {
      height: 49px;
      line-height: 49px;
      font-size: 12px;
      color: #3d3d3d;
      float: right;
      margin-left: 20px;
      b {
        font-size: 18px;
        color: #ff0808;
        font-family: "微软雅黑";
        font-weight: normal;
      }
    }
  }
}
</style>