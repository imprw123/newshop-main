<template>
  <div
    class="siderBox"
    v-bind:class="{ siderBoxCurrent: Flag01 ||  Flag02 || Flag03 || Flag04 }"
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
            <i class="ci-count">{{totalNumberFn}}</i>
          </li>
          <li
            class="silder03"
            v-on:click="openFixed('搜索')"
            v-bind:class="{ silder03Current: Flag02 }"
          ></li>
          <li
            class="silder04"
            v-on:click="openFixed('收藏')"
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
        <span>{{titleName}}</span>
      </div>
      <div class="sider-xian"></div>
     <component v-bind:is="showBox"></component>
    </div>
  </div>
</template>
<script>
import SiderCar from './siderBar-path/sider-Car.vue'
import SearchAll from './siderBar-path/search-All.vue'
import Collected from './siderBar-path/collected.vue'
import YhqPath from './siderBar-path/yhq-path.vue'
import {  mapGetters } from "vuex";
export default {
  data() {
    return {
      Flag01: false,
      Flag02: false,
      Flag03: false,
      Flag04: false,
      showBox:"SiderCar",
      titleName:'购物车'
    };
  },
   computed: {
    ...mapGetters("shopInfo",{
      totalNumberFn:"totalNumberFn"
    })
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
        this.showBox="SiderCar"
        this.titleName="购物车"
      } else if (val == "搜索") {
        this.Flag01 = false;
        this.Flag02 = true;
        this.Flag03 = false;
        this.Flag04 = false;
        this.showBox="SearchAll"
        this.titleName="搜索"
      } else if (val == "收藏") {
        this.Flag01 = false;
        this.Flag02 = false;
        this.Flag03 = true;
        this.Flag04 = false;
         this.titleName="收藏"
       this.showBox="Collected"
      } else if (val == "优惠券") {
        this.Flag01 = false;
        this.Flag02 = false;
        this.Flag03 = false;
        this.Flag04 = true;
        this.showBox="YhqPath"
        this.titleName="优惠券"
      }
    },
  },
  components:{
    SiderCar,
    SearchAll,
    Collected,
    YhqPath
  }
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
.siderHd {
  width: 300px;
  height: 21px;
  background-color: #053249;
  font-size: 12px;
  color: #dfdfdf;
  font-family: "微软雅黑";
  span {
    float: left;
    height: 21px;
    line-height: 21px;
    color: #4a819d;
    font-family: "微软雅黑";
    font-size: 12px;
    margin-left: 10px;
  }
}
.sider-xian {
  width: 300px;
  height: 1px;
  background: url(../../assets/images/xian.jpg);
}
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
  .silder-shop {
    width: 284px;
    padding: 8px;
    height: 796px;
    overflow-y: auto;
    overflow-x: hidden;
    ul li {
      width: 265px;
      height: 74px;
      margin: 0 auto;
      background-color: #fff;
      border: 1px solid #ebebeb;
      padding: 9px 0px 0px 9px;
      margin-bottom: 5px;
      .shop-left {
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
      .shop-right {
        width: 186px;
        height: 66px;
        float: left;
        padding-left: 10px;
        h4 {
          font-size: 14px;
          color: #3a3f4a;
          font-weight: normal;
          font-family: "微软雅黑";
          margin-bottom: 5px;
        }
        p {
          color: #a9a9a9;
          font-size: 12px;
          font-family: "微软雅黑";
          margin-bottom: 5px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          b {
            color: #ff0808;
          }
        }
      }
    }
  }
  .pageSearch {
    width: 274px;
    height: 32px;
    line-height: 32px;
    display: block;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: #a9a9a9;
    font-family: "微软雅黑";
    font-size: 14px;
    text-align: center;
  }
  .quickSearch {
    width: 102px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: #fff;
    font-family: "微软雅黑";
    background-color: #7799c2;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 4px;
    a {
      color: #fff;
      font-family: "微软雅黑";
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .sider-rpg {
    width: 284px;
    padding: 8px;
    height: 796px;
    overflow-y: auto;
    overflow-x: hidden;
    ul li {
      width: 274px;
      height: 93px;
      background-color: #fff;
      float: left;
      padding: 15px 0px 0px 8px;
      margin: 0 auto;
      border: 1px solid #ebebeb;
      margin-bottom: 5px;
    }
  }
}
</style>