<template>
  <InfoView v-bind:InforObj2="InforObj" v-if="InforObj" />
  <div
    style="min-height: 200px"
    v-loading="loading2"
    element-loading-text="拼命加载中..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <HotRecomd v-bind:lts="hotRecommedLts" v-bind:flagid="4" />
  </div>

  <div
    style="min-height: 600px"
    v-loading="loading"
    element-loading-text="拼命加载中..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <searchItem
      v-bind:shopLtsMore="shopLtsMore"
      v-bind:searchName="searchName"
      v-bind:total="total"
      @seachFlagPagerParent="_seachParent"
      v-bind:sortName="sortName"
      @_typeTagchangeBtnParent="_typeTagchangeBtn"
      @changeCurrentPageParent="changeCurPage"
    >
      <template v-slot:action-search>
        <div class="in-tab-change-model">
          <span
            v-for="(item, index) in productTypeLts"
            v-bind:key="index"
            v-bind:class="{ current: item.Class_id == classid }"
            @click="_changeCid(item.Class_id)"
          >
            <i>{{ item.Class_name }}</i>
            <em>({{ item.Goods_count }})</em>
          </span>
        </div>
        <div class="pf" v-show="classid == 69">
          <!--力量 -->
          <div class="userAction">
            <p>力量</p>
            <div class="boxHero boxHeroLl">
              <div class="in_boxHero" style="display: none">
                <ul id="liliang">
                  <li data-id="大地之灵">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="孽主">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="亚巴顿">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="军团指挥官">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="凤凰">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="上古巨神">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="钢背兽">
                    <em></em>
                  </li>
                  <li data-id="巨牙海民">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="伐木机">
                    <em></em>
                  </li>
                  <li data-id="马格纳斯">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="不朽尸王">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="混沌骑士">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="狼人">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="裂魂人">
                    <em></em>
                  </li>
                  <li data-id="末日使者">
                    <em></em>
                  </li>
                  <li data-id="暗夜魔王">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="噬魂鬼">
                    <em></em>
                  </li>
                  <li data-id="半人马战行者">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="艾欧">
                    <em></em>
                  </li>
                  <li data-id="树精卫士">
                    <em></em>
                  </li>
                  <li data-id="酒仙">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="炼金术师">
                    <em></em>
                  </li>
                  <li data-id="哈斯卡">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="全能骑士">
                    <em></em>
                  </li>
                  <li data-id="发条技师">
                    <em></em>
                  </li>
                  <li data-id="龙骑士">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="兽王">
                    <em></em>
                  </li>
                  <li data-id="昆卡">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="冥魂大帝">
                    <em></em>
                  </li>
                  <li data-id="潮汐猎人">
                    <em></em>
                  </li>
                  <li data-id="斯拉达">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="小小">
                    <em></em>
                  </li>
                  <li data-id="斯温">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="撼地者">
                    <em></em>
                  </li>
                  <li data-id="沙王">
                    <em></em>
                  </li>
                  <li data-id="帕吉">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="斧王">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="玛尔斯">
                    <em style="display: block"></em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 力量 -->
          <!-- 敏捷 -->
          <div class="userAction">
            <p>敏捷</p>
            <div class="boxHero boxHeroMJ">
              <div class="in_boxHero" style="display: none">
                <ul id="minjie">
                  <li data-id="恐怖利刃">
                    <em></em>
                  </li>
                  <li data-id="天穹守望者">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="灰烬之灵">
                    <em></em>
                  </li>
                  <li data-id="巨魔战将">
                    <em></em>
                  </li>
                  <li data-id="美杜莎">
                    <em></em>
                  </li>
                  <li data-id="赏金猎人">
                    <em></em>
                  </li>
                  <li data-id="复仇之魂">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="熊战士">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="圣堂刺客">
                    <em></em>
                  </li>
                  <li data-id="卓尔游侠">
                    <em></em>
                  </li>
                  <li data-id="矮人直升机">
                    <em></em>
                  </li>
                  <li data-id="力丸">
                    <em></em>
                  </li>
                  <li data-id="米拉娜">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="幻影长矛手">
                    <em></em>
                  </li>
                  <li data-id="娜迦海妖">
                    <em></em>
                  </li>
                  <li data-id="变体精灵">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="露娜">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="德鲁伊">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="主宰">
                    <em></em>
                  </li>
                  <li data-id="虚空假面">
                    <em></em>
                  </li>
                  <li data-id="斯拉克">
                    <em></em>
                  </li>
                  <li data-id="冥界亚龙">
                    <em></em>
                  </li>
                  <li data-id="剃刀">
                    <em></em>
                  </li>
                  <li data-id="米波">
                    <em></em>
                  </li>
                  <li data-id="剧毒术士">
                    <em></em>
                  </li>
                  <li data-id="幽鬼">
                    <em></em>
                  </li>
                  <li data-id="影魔">
                    <em></em>
                  </li>
                  <li data-id="幻影刺客">
                    <em></em>
                  </li>
                  <li data-id="编织者">
                    <em></em>
                  </li>
                  <li data-id="司夜刺客">
                    <em></em>
                  </li>
                  <li data-id="育母蜘蛛">
                    <em></em>
                  </li>
                  <li data-id="克林克兹">
                    <em></em>
                  </li>
                  <li data-id="嗜血狂魔">
                    <em></em>
                  </li>
                  <li data-id="狙击手">
                    <em></em>
                  </li>
                  <li data-id="敌法师">
                    <em></em>
                  </li>
                  <li data-id="齐天大圣">
                    <em></em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 敏捷 -->
          <!-- 智力 -->
          <div class="userAction">
            <p style="color: #ff7800">智力</p>
            <div class="boxHero">
              <div class="in_boxHero" style="display: none">
                <ul id="zhili">
                  <li data-id="神谕者">
                    <em></em>
                  </li>
                  <li data-id="寒冬飞龙">
                    <em></em>
                  </li>
                  <li data-id="工程师">
                    <em></em>
                  </li>
                  <li data-id="天怒法师">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="双头龙">
                    <em></em>
                  </li>
                  <li data-id="魅惑魔女">
                    <em></em>
                  </li>
                  <li data-id="先知">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="维萨吉">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="修补匠">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="暗影恶魔">
                    <em></em>
                  </li>
                  <li data-id="暗影萨满">
                    <em style="display: block"></em>
                  </li>
                  <li data-id="食人魔魔法师">
                    <em></em>
                  </li>
                  <li data-id="沉默术士">
                    <em></em>
                  </li>
                  <li data-id="祈求者">
                    <em></em>
                  </li>
                  <li data-id="陈">
                    <em></em>
                  </li>
                  <li data-id="光之守卫">
                    <em></em>
                  </li>
                  <li data-id="干扰者">
                    <em></em>
                  </li>
                  <li data-id="拉比克">
                    <em></em>
                  </li>
                  <li data-id="黑暗贤者">
                    <em></em>
                  </li>
                  <li data-id="殁境神蚀者">
                    <em></em>
                  </li>
                  <li data-id="拉席克">
                    <em></em>
                  </li>
                  <li data-id="蝙蝠骑士">
                    <em></em>
                  </li>
                  <li data-id="远古冰魄">
                    <em></em>
                  </li>
                  <li data-id="戴泽">
                    <em></em>
                  </li>
                  <li data-id="莉娜">
                    <em></em>
                  </li>
                  <li data-id="宙斯">
                    <em></em>
                  </li>
                  <li data-id="风行者">
                    <em></em>
                  </li>
                  <li data-id="风暴之灵">
                    <em></em>
                  </li>
                  <li data-id="帕克">
                    <em></em>
                  </li>
                  <li data-id="帕格纳">
                    <em></em>
                  </li>
                  <li data-id="水晶室女">
                    <em></em>
                  </li>
                  <li data-id="死亡先知">
                    <em></em>
                  </li>
                  <li data-id="痛苦女王">
                    <em></em>
                  </li>
                  <li data-id="·术士">
                    <em></em>
                  </li>
                  <li data-id="瘟疫法师">
                    <em></em>
                  </li>
                  <li data-id="谜团">
                    <em></em>
                  </li>
                  <li data-id="巫医">
                    <em></em>
                  </li>
                  <li data-id="莱恩">
                    <em></em>
                  </li>
                  <li data-id="巫妖">
                    <em></em>
                  </li>
                  <li data-id="祸乱之源">
                    <em></em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 智力 -->
        </div>
      </template>
    </searchItem>
  </div>
</template>
<script>
import searchItem from "../../components/base/search-item.vue";
import HotRecomd from "../base/hotRecomd.vue";
import BaseFn from "../../mixin/baseFn";
export default {
  mixins: [BaseFn],
  data() {
    return {
      productTypeLts: [],
      classid: 3,
      pid: 3,
    };
  },
  mounted() {
    this._dotaRecomment(this.classid, 4);
    this._seachFlagPager();
    this._ClassInfoByCid();
    var _that = this;
    $(document).on("mouseenter", ".boxHero", function () {
      $(this).children(".in_boxHero").css("display", "block");
    });

    $(document).on("mouseleave", ".boxHero", function () {
      $(this).children(".in_boxHero").css("display", "none");
    });
    $(document).on("mouseenter", ".in_boxHero ul li", function () {
      $(this).children("em").css("display", "none");
    });

    $(document).on("mouseleave", ".in_boxHero ul li", function () {
      $(this).children("em").css("display", "block");
    });

    $(document).on("click", ".in_boxHero ul li", function () {
      $(".in_boxHero ul li").removeClass("current");
      $(this).addClass("current");
      _that.searchName = $(this).attr("data-id");
      _that._seachFlagPager();
    });
  },
  methods: {},
  components: {
    HotRecomd,
    searchItem,
  },
};
</script>
<style lang="less">
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
  }
  ul.model01 li {
    width: 160px;
    height: 285px;
    background-color: #fff;
    padding: 15px 24px 0px 24px;
    float: left;
    margin-right: 10px;
  }
  // ul.model01 li:hover {
  //   -webkit-transform: translateY(-5px);
  //   -moz-transform: translateY(-5px);
  //   -ms-transform: translateY(-5px);
  //   -o-transform: translateY(-5px);
  //   transform: translateY(-5px);
  //   transition: 0.5s ease;
  // }
}
.pf {
  height: 30px;
  margin: 20px 0px;
}
.tab-change-model {
  width: 1080px;
  min-height: 120px;
  font-size: 12px;
  color: #fff;
  margin-top: 25px;
  font-family: "微软雅黑";
  .tabBox {
    width: 1080px;
    height: 33px;
    margin-bottom: 10px;
    span {
      width: 540px;
      height: 33px;
      float: left;
      line-height: 33px;
      text-align: center;
      font-family: "微软雅黑";
      font-size: 18px;
      color: #5f94be;
      cursor: pointer;
    }
    span.current01 {
      color: #fff;
    }
  }
  .tabBoxCurrent01 {
    background: url("../../assets/images/tagbg01.png");
  }
  .tabBoxCurrent02 {
    background: url("../../assets/images/tagbg02.png");
  }
  .in-tab-change-model {
    width: 100%;
    overflow: hidden;
    zoom: 1;
    margin-bottom: 10px;
    span {
      display: inline-block;
      overflow: hidden;
      zoom: 1;
      margin-right: 15px;
      margin-bottom: 5px;
      cursor: pointer;
    }
    span.current {
      color: #ff3434;
      font-weight: bold;
    }
    span:hover {
      color: #ff3434;
    }
  }
  .action-search {
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
    .action-search-left {
      width: 640px;
      height: 30px;
      float: left;
      .inpt-search {
        width: 510px;
        height: 32px;
        input {
          width: 462px;
          height: 32px;
          float: left;
          border-radius: 6px 6px 6px 6px;
          padding-left: 10px;
          color: #333;
        }
        .sou {
          width: 38px;
          height: 32px;
          background: url("../../assets/images/searchBnt.png");
          float: left;
        }
      }
    }
    .action-search-right {
      width: 440px;
      overflow: hidden;
      zoom: 1;
      float: left;
      span {
        width: 110px;
        height: 38px;
        display: block;
        float: left;
        text-align: center;
        line-height: 38px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        position: relative;
        z-index: 1;
      }
      span.weightChange {
        i {
          width: 10px;
          height: 9px;
          display: block;
          background: url("../../assets/images/pay_num.png");
          position: absolute;
          top: 16px;
          right: 28px;
        }
        i.current {
          background: url("../../assets/images/pay_num_hover.png");
        }
      }
      span.Sales {
        i {
          width: 10px;
          height: 9px;
          display: block;
          background: url("../../assets/images/pay_num.png");
          position: absolute;
          top: 16px;
          right: 28px;
        }
        i.current {
          background: url("../../assets/images/pay_num_hover.png");
        }
      }
      span.price {
        i {
          width: 10px;
          height: 12px;
          display: block;
          background: url("../../assets/images/jg.png");
          position: absolute;
          top: 14px;
          right: 27px;
        }
        i.currentUp {
          background: url("../../assets/images/jg_up.png");
        }
        i.currentDown {
          background: url("../../assets/images/jg_down.png");
        }
      }
      span.shelves {
        i {
          width: 10px;
          height: 9px;
          display: block;
          background: url("../../assets/images/pay_num.png");
          position: absolute;
          top: 16px;
          right: 13px;
        }
        i.current {
          background: url("../../assets/images/pay_num_hover.png");
        }
      }
      span.current {
        color: #ff3434;
      }
    }
  }
  .listContent {
    width: 1080px;
    overflow: hidden;
    zoom: 1;
    ul.model01 {
      overflow: hidden;
      zoom: 1;
      li {
        width: 160px;
        height: 285px;
        background-color: #fff;
        padding: 15px 24px 0px 24px;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
      }
      // li:hover {
      //   -webkit-transform: translateY(-5px);
      //   -moz-transform: translateY(-5px);
      //   -ms-transform: translateY(-5px);
      //   -o-transform: translateY(-5px);
      //   transform: translateY(-5px);
      //   transition: 0.5s ease;
      // }
    }
  }
}
.userAction {
  width: 192px;
  text-align: center;
  float: left;
  height: 30px;
  margin-right: 10px;
}

.userAction p {
  text-align: center;
  font-size: 14px;
  font-family: 微软雅黑;
  float: left;
  height: 30px;
  line-height: 30px;
  margin-right: 5px;
}

.boxHero {
  width: 150px;
  height: 30px;
  background: url(../../assets/images/Zhili.jpg);
  position: relative;
  z-index: 100;
  float: left;
}

.boxHeroMJ {
  width: 150px;
  height: 30px;
  background: url(../../assets/images/Minjie.jpg);
  position: relative;
  z-index: 100;
}

.boxHeroLl {
  width: 150px;
  height: 30px;
  background: url(../../assets/images/Liliang.jpg);
  position: relative;
  z-index: 100;
}

.in_boxHero {
  width: 150px;
  height: 240px;
  position: absolute;
  top: 0px;
  left: 50%;
  margin-left: -75px;
  z-index: 1;
  display: none;
}

.in_boxHero ul li {
  width: 30px;
  height: 30px;
  float: left;
  background: #ccc;
  cursor: pointer;
}

.in_boxHero ul li.current {
  position: relative;
}

.in_boxHero ul li.current::after {
  content: "";
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0px;
  left: 0px;
  background: url(../../assets/images/selectCurrent.png);
}

.in_boxHero ul li em {
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.5);
  display: block;
}
/*智力*/

#zhili li:nth-child(1) {
  background: url(../../assets/images/bigZhili.png);
  background-position: 0px 0px;
}

#zhili li:nth-child(2) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -30px 0px;
}

#zhili li:nth-child(3) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -60px 0px;
}

#zhili li:nth-child(4) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -90px 0px;
}

#zhili li:nth-child(5) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -120px 0px;
}

#zhili li:nth-child(6) {
  background: url(../../assets/images/bigZhili.png);
  background-position: 0px -30px;
}

#zhili li:nth-child(7) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -30px -30px;
}

#zhili li:nth-child(8) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -60px -30px;
}

#zhili li:nth-child(9) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -90px -30px;
}

#zhili li:nth-child(10) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -120px -30px;
}

#zhili li:nth-child(11) {
  background: url(../../assets/images/bigZhili.png);
  background-position: 0px -60px;
}

#zhili li:nth-child(12) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -30px -60px;
}

#zhili li:nth-child(13) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -60px -60px;
}

#zhili li:nth-child(14) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -90px -60px;
}

#zhili li:nth-child(15) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -120px -60px;
}

#zhili li:nth-child(16) {
  background: url(../../assets/images/bigZhili.png);
  background-position: 0px -90px;
}

#zhili li:nth-child(17) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -30px -90px;
}

#zhili li:nth-child(18) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -60px -90px;
}

#zhili li:nth-child(19) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -90px -90px;
}

#zhili li:nth-child(20) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -120px -90px;
}

#zhili li:nth-child(21) {
  background: url(../../assets/images/bigZhili.png);
  background-position: 0px -120px;
}

#zhili li:nth-child(22) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -30px -120px;
}

#zhili li:nth-child(23) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -60px -120px;
}

#zhili li:nth-child(24) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -90px -120px;
}

#zhili li:nth-child(25) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -120px -120px;
}

#zhili li:nth-child(26) {
  background: url(../../assets/images/bigZhili.png);
  background-position: 0px -150px;
}

#zhili li:nth-child(27) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -30px -150px;
}

#zhili li:nth-child(28) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -60px -150px;
}

#zhili li:nth-child(29) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -90px -150px;
}

#zhili li:nth-child(30) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -120px -150px;
}

#zhili li:nth-child(31) {
  background: url(../../assets/images/bigZhili.png);
  background-position: 0px -180px;
}

#zhili li:nth-child(32) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -30px -180px;
}

#zhili li:nth-child(33) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -60px -180px;
}

#zhili li:nth-child(34) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -90px -180px;
}

#zhili li:nth-child(35) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -120px -180px;
}

#zhili li:nth-child(36) {
  background: url(../../assets/images/bigZhili.png);
  background-position: 0px -210px;
}

#zhili li:nth-child(37) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -30px -210px;
}

#zhili li:nth-child(38) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -60px -210px;
}

#zhili li:nth-child(39) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -90px -210px;
}

#zhili li:nth-child(40) {
  background: url(../../assets/images/bigZhili.png);
  background-position: -120px -210px;
}
/*智力*/
/*力量*/

#liliang li:nth-child(1) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: 0px 0px;
}

#liliang li:nth-child(2) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -30px 0px;
}

#liliang li:nth-child(3) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -60px 0px;
}

#liliang li:nth-child(4) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -90px 0px;
}

#liliang li:nth-child(5) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -120px 0px;
}

#liliang li:nth-child(6) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: 0px -30px;
}

#liliang li:nth-child(7) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -30px -30px;
}

#liliang li:nth-child(8) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -60px -30px;
}

#liliang li:nth-child(9) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -90px -30px;
}

#liliang li:nth-child(10) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -120px -30px;
}

#liliang li:nth-child(11) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: 0px -60px;
}

#liliang li:nth-child(12) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -30px -60px;
}

#liliang li:nth-child(13) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -60px -60px;
}

#liliang li:nth-child(14) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -90px -60px;
}

#liliang li:nth-child(15) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -120px -60px;
}

#liliang li:nth-child(16) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: 0px -90px;
}

#liliang li:nth-child(17) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -30px -90px;
}

#liliang li:nth-child(18) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -60px -90px;
}

#liliang li:nth-child(19) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -90px -90px;
}

#liliang li:nth-child(20) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -120px -90px;
}

#liliang li:nth-child(21) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: 0px -120px;
}

#liliang li:nth-child(22) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -30px -120px;
}

#liliang li:nth-child(23) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -60px -120px;
}

#liliang li:nth-child(24) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -90px -120px;
}

#liliang li:nth-child(25) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -120px -120px;
}

#liliang li:nth-child(26) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: 0px -150px;
}

#liliang li:nth-child(27) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -30px -150px;
}

#liliang li:nth-child(28) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -60px -150px;
}

#liliang li:nth-child(29) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -90px -150px;
}

#liliang li:nth-child(30) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -120px -150px;
}

#liliang li:nth-child(31) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: 0px -180px;
}

#liliang li:nth-child(32) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -30px -180px;
}

#liliang li:nth-child(33) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -60px -180px;
}

#liliang li:nth-child(34) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -90px -180px;
}

#liliang li:nth-child(35) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -120px -180px;
}

#liliang li:nth-child(36) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: 0px -210px;
}

#liliang li:nth-child(37) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -30px -210px;
}

#liliang li:nth-child(38) {
  background: url(../../assets/images/bigLiliang.png);
  background-position: -60px -210px;
}
/*力量*/
/*敏捷*/

#minjie li:nth-child(1) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: 0px 0px;
}

#minjie li:nth-child(2) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -30px 0px;
}

#minjie li:nth-child(3) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -60px 0px;
}

#minjie li:nth-child(4) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -90px 0px;
}

#minjie li:nth-child(5) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -120px 0px;
}

#minjie li:nth-child(6) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: 0px -30px;
}

#minjie li:nth-child(7) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -30px -30px;
}

#minjie li:nth-child(8) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -60px -30px;
}

#minjie li:nth-child(9) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -90px -30px;
}

#minjie li:nth-child(10) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -120px -30px;
}

#minjie li:nth-child(11) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: 0px -60px;
}

#minjie li:nth-child(12) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -30px -60px;
}

#minjie li:nth-child(13) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -60px -60px;
}

#minjie li:nth-child(14) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -90px -60px;
}

#minjie li:nth-child(15) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -120px -60px;
}

#minjie li:nth-child(16) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: 0px -90px;
}

#minjie li:nth-child(17) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -30px -90px;
}

#minjie li:nth-child(18) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -60px -90px;
}

#minjie li:nth-child(19) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -90px -90px;
}

#minjie li:nth-child(20) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -120px -90px;
}

#minjie li:nth-child(21) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: 0px -120px;
}

#minjie li:nth-child(22) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -30px -120px;
}

#minjie li:nth-child(23) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -60px -120px;
}

#minjie li:nth-child(24) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -90px -120px;
}

#minjie li:nth-child(25) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -120px -120px;
}

#minjie li:nth-child(26) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: 0px -150px;
}

#minjie li:nth-child(27) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -30px -150px;
}

#minjie li:nth-child(28) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -60px -150px;
}

#minjie li:nth-child(29) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -90px -150px;
}

#minjie li:nth-child(30) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -120px -150px;
}

#minjie li:nth-child(31) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: 0px -180px;
}

#minjie li:nth-child(32) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -30px -180px;
}

#minjie li:nth-child(33) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -60px -180px;
}

#minjie li:nth-child(34) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -90px -180px;
}

#minjie li:nth-child(35) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -120px -180px;
}

#minjie li:nth-child(36) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: 0px -210px;
}

#minjie li:nth-child(37) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -30px -210px;
}

#minjie li:nth-child(38) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -60px -210px;
}

#minjie li:nth-child(39) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -90px -210px;
}

#minjie li:nth-child(40) {
  background: url(../../assets/images/bigMinjie.png);
  background-position: -120px -210px;
}
/*敏捷*/
</style>
