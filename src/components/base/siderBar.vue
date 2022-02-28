<template>
  <div
    class="siderBox"
    v-bind:class="{ siderBoxCurrent: Flag01 || Flag02 || Flag03 || Flag04 }"
  >
    <div class="siderBar">
      <div class="silderBtn">
        <ul>
          <li
            class="silder01"
            v-show="Flag01 || Flag02 || Flag03 || Flag04"
            v-on:click="closeFixed"
          ></li>
          <li
            class="silder02"
            v-on:click="openFixed('购物车')"
            v-bind:class="{ silder02Current: Flag01 }"
          >
            <i class="ci-count">0</i>
          </li>
          <li
            class="silder03"
            v-on:click="openFixed('搜索')"
            v-bind:class="{ silder03Current: Flag02 }"
          ></li>
          <li
            class="silder04"
            v-on:click="openFixed('搜藏')"
            v-bind:class="{ silder04Current: Flag03 }"
          ></li>
          <li
            class="silder05"
            v-on:click="openFixed('优惠券')"
            v-bind:class="{ silder05Current: Flag04 }"
          ></li>
        </ul>
      </div>
      <div class="siderHd">
          <span>购物车</span>
      </div>
      <div class="sider-xian"></div>
      <div class="siderBd">
        <div class="totalBox">
          <div class="totalBox-left">
            <p>
              <em>1</em>
            </p>
            <p>
              共计
              <b>￥188.00</b>
            </p>
          </div>
          <div class="totalBox-right">
            <a href="#/shopCar" class="">去购物车结算</a>
          </div>
        </div>
        <div class="silder-shop"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Flag01: false,
      Flag02: false,
      Flag03: false,
      Flag04: false,
    };
  },
  methods: {
    closeFixed() {
      this.Flag01 = false;
      this.Flag02 = false;
      this.Flag03 = false;
      this.Flag04 = false;
    },
    openFixed(val) {
      if (val == "购物车") {
        this.Flag01 = true;
        this.Flag02 = false;
        this.Flag03 = false;
        this.Flag04 = false;
      } else if (val == "搜索") {
        this.Flag01 = false;
        this.Flag02 = true;
        this.Flag03 = false;
        this.Flag04 = false;
      } else if (val == "搜藏") {
        this.Flag01 = false;
        this.Flag02 = false;
        this.Flag03 = true;
        this.Flag04 = false;
      } else if (val == "优惠券") {
        this.Flag01 = false;
        this.Flag02 = false;
        this.Flag03 = false;
        this.Flag04 = true;
      }
    },
  },
};
</script>

<style lang="less">
.siderBox {
  position: fixed;
  top: 0px;
  right: -300px;
  transition: 0.5s ease;
  z-index: 1;
  .siderBar {
    width: 300px;
    height: 914px;
    background-color: #f3f3f3;
    box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.5);
    position: relative;
    .silderBtn {
      width: 56px;
      height: 221px;
      position: absolute;
      top: 50%;
      margin-top: -110px;
      left: -56px;
      ul li {
        width: 56px;
        height: 56px;
        margin-bottom: 7px;
        cursor: pointer;
      }
      ul li.silder01 {
        background: url(../../assets/images/bigBack.png);
      }
      ul li.silder01:hover {
        background: url(../../assets/images/bigBack-hover.png);
        transition: 0.2s ease;
      }
      ul li.silder02 {
        background: url(../../assets/images/silder02.png);
        position: relative;
        .ci-count {
          position: absolute;
          top: -1px;
          left: -3px;
          display: inline-block;
          padding: 2px;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: -1px;
          color: #fff;
          background-color: #da1026;
          border-radius: 7px;
          min-width: 16px;
          font-family: Arial;
          text-align: center;
        }
      }
      ul li.silder02:hover {
        background: url(../../assets/images/silder02-hover.png);
        transition: 0.2s ease;
      }
      ul li.silder02Current {
        background: url(../../assets/images/silder02-hover.png);
      }
      ul li.silder03 {
        background: url(../../assets/images/silder03.png);
      }
      ul li.silder03:hover {
        background: url(../../assets/images/silder03-hover.png);
        transition: 0.2s ease;
      }
      ul li.silder03Current {
        background: url(../../assets/images/silder03-hover.png);
      }
      ul li.silder04 {
        background: url(../../assets/images/silder04.png);
      }
      ul li.silder04:hover {
        background: url(../../assets/images/silder04-hover.png);
        transition: 0.2s ease;
      }
      ul li.silder04Current {
        background: url(../../assets/images/silder04-hover.png);
      }
      ul li.silder05 {
        background: url(../../assets/images/silder05.png);
      }
      ul li.silder05:hover {
        background: url(../../assets/images/silder05-hover.png);
        transition: 0.2s ease;
      }
      ul li.silder05Current {
        background: url(../../assets/images/silder05-hover.png);
      }
    }
  }
}
.siderBoxCurrent {
  right: 0px;
  transition: 0.5s ease;
}
.siderHd{
  width: 300px;
    height: 21px;
    background-color: #053249;
    font-size: 12px;
    color: #dfdfdf;
    font-family: "微软雅黑";
}
</style>