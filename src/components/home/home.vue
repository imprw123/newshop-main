<template>
  <div class="Home">
    <div class="main-banner">
      <div class="advertisement" id="mydiv"></div>
      <div class="bannerShow_right">
        <h1>
          <i class="icon01"></i>
          <span>新品推荐</span>
        </h1>
        <div class="tpic_show">
          <em class="jingxi"></em>
          <div class="imgContainer">
            <img v-bind:src="newRecomment.Goods_imgPath" />
          </div>
          <h4>{{ newRecomment.Goods_disName }}</h4>
          <p>
            <em>秒杀价：</em>
            <b>
              ￥
              <i>{{ newRecomment.Goods_price }}</i>
            </b>
            <i>{{ newRecomment.Unit }}</i>
          </p>
          <a href="javascript:;" class="qg">立即抢购</a>
        </div>
      </div>
    </div>
    <!-- 限时抢购部分 -->
    <div class="limit-buy">
      <div class="limit-buy-left">
        <span class="limintBg"> </span>
        <ul class="model01">
          <li v-for="(item, index) in lts" :key="index">
            <shopItem v-bind:item="item" />
          </li>
        </ul>
      </div>
      <div class="limit-buy-right">
        <div class="tabchange">
          <span
            v-bind:class="{ current: currentFlag }"
            v-on:click="tabchangebat('热门排行')"
            >热门排行</span
          >
          <span
            v-bind:class="{ current: !currentFlag }"
            v-on:click="tabchangebat('畅销排行')"
            >畅销排行</span
          >
        </div>
        <ol>
          <li v-for="(item, index) in rankList" :key="index">
            <div class="img-left">
              <img v-bind:src="item.Goods_imgPath" />
            </div>
            <div class="infor-right">
              <h2>{{ item.Goods_disName }}</h2>
              <p>
                价格:
                <em>
                  <i>{{ `￥${item.Goods_price}` }}</i>
                  <i>{{ item.Unit }}</i>
                </em>
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
    <!-- 限时抢购部分 -->

    <!-- dota商品推荐 -->
    <div class="dota">
      <h1><em>Dota推荐商品</em> <span class="more">进入Dota商店</span></h1>
      <ul class="model01">
        <li
          v-for="(item, index) in dotaLts"
          v-bind:key="index"
          v-bind:style="{
            'margin-right': (index + 1) % 5 == 0 ? '0px' : '10px',
          }"
        >
          <shopItem v-bind:item="item" />
        </li>
      </ul>
    </div>
    <!-- dota商品推荐 -->

    <!-- rpg底图推荐 -->
    <div class="rpg">
      <h1><em>RPG推荐地图</em> <span class="more">进入RPG地图</span></h1>
      <ul>
        <li
          v-for="(item, index) in rpgList"
          v-bind:key="index"
          v-bind:class="(index + 1) % 4 == 0 ? 'current' : ''"
        >
          <rpgItem v-bind:item="item" />
        </li>
      </ul>
    </div>
    <!-- rpg底图推荐 -->

    <!-- 平台推荐服务 -->
    <div class="dota">
      <h1><em>平台推荐服务</em> <span class="more">进入平台服务</span></h1>
      <ul class="model01">
        <li
          v-for="(item, index) in ptLts"
          v-bind:key="index"
          v-bind:style="{
            'margin-right': (index + 1) % 5 == 0 ? '0px' : '10px',
          }"
        >
          <shopItem v-bind:item="item" />
        </li>
      </ul>
    </div>
    <!-- 平台推荐服务 -->
  </div>
</template>
<script>
import shopItem from "../base/shop-item.vue";
import rpgItem from "../base/rpg-item.vue";
import {
  limtBuy,
  hotRank,
  dotaRecomment,
  ptRecoment,
  goodsByFlag,
} from "../../api/request";
import {YYAD} from "../../plugins/YYAD";
export default {
  data() {
    return {
      lts: [],
      rankList: [],
      currentFlag: true,
      dotaLts: [],
      rpgList: [],
      ptLts: [],
      newRecomment: "",
    };
  },
  mounted() {
    this._hotRank();
    this._limtBuy();
    this._dotaRecomment();
    this.rpg();
    this._ptRecoment();
    this._YYAD('mydiv',1436);
    this._goodsByFlag();
  },
  methods: {
    //新品推荐
    _goodsByFlag() {
      goodsByFlag().then((res) => {
        if (res.code == 0) {
          this.newRecomment = res.data.list[0];
        } else {
          this.newRecomment = "";
        }
      });
    },
    //限时抢购
    _limtBuy() {
      limtBuy().then((res) => {
        this.lts = res.data.list;
      });
    },
    tabchangebat(val) {
      if (val == "热门排行") {
        this._hotRank();
        this.currentFlag = true;
      } else if (val == "畅销排行") {
        this.fastRank();
        this.currentFlag = false;
      }
    },
    //广告
    _YYAD(name,tid) {
      document.getElementById(""+name+"").innerHTML="";
      var script = document.createElement("script");
      script.type = "text/javascript";
      try {
        var jsCodeNode = document.createTextNode(
          `${YYAD.LoadAds(tid, null, null, "#"+name+"")}`
        );
        script.appendChild(jsCodeNode);
      } catch (e) {
        script.text = code;
      }
      document.getElementById(""+name+"").appendChild(script);
    },
    //畅销排行
    fastRank() {
      var _that = this;
      $.getScript(
        "//g.5211game.com/5211/Rpg/Prop/Script/shopHotRank2.js",
        function () {
          // console.log("121");
          // console.log(HotRank);
          _that.rankList = HotRank.data.list;
        }
      );
    },
    //热门排行
    _hotRank() {
      hotRank().then((res) => {
        //console.log(res);
        this.rankList = res.data.list;
      });
    },
    //dota商品推荐
    _dotaRecomment() {
      dotaRecomment(3, 4).then((res) => {
        console.log(res);
        this.dotaLts = res.data.list;
      });
    },
    //rpg推荐
    rpg() {
      var _that = this;
      $.getScript(
        "//g.5211game.com/5211/Rpg/Prop/Script/shopHotRank2.js",
        function () {
          _that.rpgList = rpgObj.data;
        }
      );
    },
    //平台服务商品推荐
    _ptRecoment() {
      ptRecoment().then((res) => {
        console.log(res);
        this.ptLts = res.data.list;
      });
    },
  },
  components: {
    shopItem,
    rpgItem,
  },
};
</script>

<style lang="less">
.Home {
  width: 1080px;
  overflow: hidden;
  zoom: 1;
  .main-banner {
    width: 1080px;
    height: 360px;
    margin-top: 10px;
    .advertisement {
      width: 790px;
      height: 360px;
      float: left;
      background-color: #000;
    }
    .bannerShow_right {
      width: 278px;
      height: 358px;
      background-color: #fff;
      float: right;
      border: 1px solid #dbdbdb;
      h1 {
        width: 258px;
        height: 34px;
        border-bottom: 1px solid #f2f2f2;
        padding-left: 20px;
        i.icon01 {
          width: 20px;
          height: 20px;
          background: url("../../assets/images/icon.png");
          float: left;
          margin-top: 7px;
        }
        span {
          float: left;
          font-size: 14px;
          color: #2bb8aa;
          margin-top: 7px;
          margin-left: 14px;
        }
      }
      .tpic_show {
        width: 278px;
        overflow: hidden;
        zoom: 1;
        padding-top: 19px;
        position: relative;
        em {
          color: #666666;
        }
        .jingxi {
          width: 24px;
          height: 66px;
          background: url("../../assets/images/jingxi.png");
          display: block;
          position: absolute;
          top: -1px;
          right: 20px;
        }
        .imgContainer {
          width: 158px;
          height: 158px;
          margin: 0 auto;
          position: relative;
          img {
            width: 158px;
            height: 158px;
            display: block;
          }
        }
        h4 {
          text-align: center;
          color: #3d3d3d;
          font-size: 16px;
          margin-top: 9px;
        }
        p {
          font-size: 12px;
          color: #333;
          text-align: center;
          margin-top: 25px;
          b {
            color: #f74a4a;
            font-size: 18px;
            font-family: Arial;
          }
        }
        .qg {
          width: 238px;
          height: 30px;
          margin: 0 auto;
          display: block;
          text-align: center;
          line-height: 30px;
          background-color: #ff6633;
          border: 1px solid #ea450e;
          color: #fff;
          font-size: 14px;
          margin-top: 18px;
        }
      }
    }
  }
  .limit-buy {
    width: 1080px;
    height: 320px;
    margin-top: 20px;
    .limit-buy-left {
      width: 768px;
      height: 304px;
      border: 1px solid #dbdbdb;
      background-color: #fff;
      float: left;
      padding-top: 14px;
      padding-left: 16px;
      position: relative;
      .limintBg {
        width: 92px;
        height: 24px;
        background: url(../../assets/images/limint.png);
        position: absolute;
        top: 3px;
        left: 6px;
      }
      ul li {
        width: 160px;
        height: 285px;
        background-color: #fff;
        padding: 15px 14px 0px 14px;
        float: left;
      }
    }
    .limit-buy-right {
      width: 243px;
      height: 318px;
      border: 1px solid #dbdbdb;
      background-color: #fff;
      float: right;
      padding: 0px 20px 0px 15px;
      .tabchange {
        width: 243px;
        height: 35px;
        line-height: 35px;
        display: flex;
        span {
          flex: 1;
          text-align: left;
          height: 35px;
          line-height: 35px;
          font-size: 14px;
          color: #666666;
          border-bottom: 1px solid #e6e6e6;
          cursor: pointer;
        }
        span.current {
          border-bottom: 1px solid #3dbeff;
          font-family: "微软雅黑";
          color: #3dbeff;
          font-weight: bold;
        }
      }
      ol li {
        width: 243px;
        height: 57px;
        border-bottom: 1px dashed #e6e6e6;
        padding-top: 10px;
        .img-left {
          width: 50px;
          height: 50px;
          float: left;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .infor-right {
          width: 175px;
          padding-left: 17px;
          height: 50px;
          float: left;
          h2 {
            width: 175px;
            font-size: 14px;
            font-weight: normal;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            font-family: "微软雅黑";
            margin-bottom: 10px;
          }
          p {
            font-size: 12px;
            color: #4c4c4c;
            font-family: "微软雅黑";
          }
        }
      }
    }
  }
  .dota {
    width: 1080px;
    margin-top: 20px;
    overflow: hidden;
    zoom: 1;
    h1 {
      font-size: 18px;
      color: #fff;
      font-family: "微软雅黑";
      height: 30px;
      line-height: 30px;
      font-weight: 500;
      margin-bottom: 2px;
      .more {
        width: 131px;
        height: 28px;
        line-height: 28px;
        background: url("../../assets/images/more.png");
        float: right;
        font-size: 14px;
        color: #fff;
        font-family: "微软雅黑";
        padding-left: 30px;
      }
    }
    ul.model01 li {
      width: 160px;
      height: 285px;
      background-color: #fff;
      padding: 15px 24px 0px 24px;
      float: left;
      margin-right: 10px;
    }
  }
  .rpg {
    width: 1080px;
    margin-top: 20px;
    overflow: hidden;
    zoom: 1;
    ul li {
      width: 253px;
      height: 93px;
      background-color: #fff;
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 15px 0px 0px 8px;
    }
    ul li.current {
      margin-right: 0px;
    }
    h1 {
      font-size: 18px;
      color: #fff;
      font-family: "微软雅黑";
      height: 30px;
      line-height: 30px;
      font-weight: 500;
      margin-bottom: 2px;
      .more {
        width: 131px;
        height: 28px;
        line-height: 28px;
        background: url(../../assets/images/more.png);
        float: right;
        font-size: 14px;
        color: #fff;
        font-family: "微软雅黑";
        padding-left: 30px;
      }
    }
  }
}
</style>