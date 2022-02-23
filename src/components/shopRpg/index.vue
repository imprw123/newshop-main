<template>
  <div class="adver-rpg">
    <div class="adver-rpg-left" id="mydivRpg"></div>
    <div class="adver-rpg-right">
      <ul>
        <li id="mydivRpg01"></li>
        <li class="current" id="mydivRpg02"></li>
        <li id="mydivRpg03"></li>
        <li class="current" id="mydivRpg04"></li>
      </ul>
    </div>
  </div>
  <div class="rpgShop">
    <b>RPG商店</b>
    <div class="searchRpg">
      <input
        type="text"
        name=""
        id=""
        placeholder="请输入地图名称"
        v-model="valName"
        @input="_QueryRPGBySearchPager"
      />
      <!-- <div class="rpgBtn" >搜索商店</div> -->
    </div>
  </div>
  <div class="rpgMapList">
    <div class="rpgMapListHd">
      <span
        v-for="(item, index) in typeListName"
        :key="index"
        v-bind:class="{ current: item.categoryid == category }"
        @click="categoryChange(item.categoryid)"
        >{{ item.name }}</span
      >
    </div>
    <div class="rpgMapListCenter">
      <span>筛选</span>
      <em
        v-for="(item, index) in stirngFirstWords"
        :key="index"
        @click="firstWordSearch(item)"
        v-bind:class="{ current: item == firstword }"
        >{{ item }}</em
      >
    </div>
    <div class="mapListRpg">
      <ul>
        <li
          v-for="(item, index) in itemlts"
          v-bind:key="index"
          v-bind:style="{
            'margin-right': (index + 1) % 4 == 0 ? '0px' : '12px',
          }"
        >
          <rpgItem v-bind:item="item" v-if="item" />
        </li>
      </ul>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
      v-if="itemlts.length > 0"
    >
    </el-pagination>
  </div>
</template>
<script>
import rpgItem from "../base/rpg-item.vue";
import { QueryRPGBySearchPager } from "../../api/request";
import { YYAD } from "../../plugins/YYAD";
export default {
  data() {
    return {
      category: 0,
      firstword: "",
      valName: "",
      pi: 1,
      ps: 12,
      itemlts: [],
      total: 0,
      typeListName: [
        { name: "全部", categoryid: 0 },
        { name: "防守类", categoryid: 1 },
        { name: "休闲类", categoryid: 2 },
        { name: "塔防类", categoryid: 3 },
        { name: "生存类", categoryid: 4 },
        { name: "对抗类", categoryid: 5 },
        { name: "ORPG", categoryid: 6 },
        { name: "会员类", categoryid: 7 },
        { name: "DOTA", categoryid: 8 },
      ],
      stirngFirstWords: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  mounted() {
    this._QueryRPGBySearchPager();
    this.$nextTick(() => {
      this._YYAD("mydivRpg", 1467);
      this._YYAD("mydivRpg01", 1468);
      this._YYAD("mydivRpg02", 1469);
      this._YYAD("mydivRpg03", 1470);
      this._YYAD("mydivRpg04", 1471);
    });
  },
  methods: {
    _YYAD(name, tid) {
      document.getElementById("" + name + "").innerHTML = "";
      let script = document.createElement("script");
      script.type = "text/javascript";
      try {
        let jsCodeNode = document.createTextNode(
          `${YYAD.LoadAds(tid, null, null, "#" + name + "")}`
        );
        script.appendChild(jsCodeNode);
      } catch (e) {
        console.log(e);
      }

      document.getElementById("" + name + "").appendChild(script);
    },
    _QueryRPGBySearchPager() {
      console.log(this.valName);
      QueryRPGBySearchPager(
        this.category,
        this.firstword,
        this.valName,
        this.pi,
        this.ps
      ).then((res) => {
        console.log(res);
        this.itemlts = res.data.list;
        this.total = res.data.count;
      });
    },
    firstWordSearch(word) {
      if (this.firstword == word) {
        this.firstword = "";
      } else {
        this.firstword = word;
      }

      this.pi = 1;
      this._QueryRPGBySearchPager();
    },
    categoryChange(id) {
      this.category = id;
      this.pi = 1;
      this.valName = "";
      this._QueryRPGBySearchPager();
    },
    handleCurrentChange(val) {
      this.pi = val;
      this._QueryRPGBySearchPager();
    },
  },
  components: {
    rpgItem,
  },
};
</script>

<style lang="less">
.adver-rpg {
  width: 1080px;
  height: 310px;
  margin-top: 17px;
  .adver-rpg-left {
    width: 542px;
    height: 310px;
    float: left;
    overflow: hidden;
    // background-color: #000;
  }
  .adver-rpg-right {
    width: 526px;
    height: 310px;
    float: right;
    // background-color: #000;
    ul li {
      width: 258px;
      height: 151px;
      float: left;
      margin-right: 10px;
      margin-bottom: 7px;
    }
    ul li.current {
      margin-right: 0px;
    }
  }
}
.rpgShop {
  width: 100%;
  height: 33px;
  margin: 36px 0px;
  b {
    float: left;
    width: 120px;
    height: 33px;
    line-height: 33px;
    text-align: left;
    font-size: 18px;
    color: #fff;
    font-weight: normal;
  }
  .searchRpg {
    input {
      width: 697px;
      line-height: 33px;
      height: 33px;
      float: left;
      text-align: center;
      font-family: "微软雅黑";
      border-radius: 4px;
    }
    .rpgBtn {
      width: 102px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background-color: #7799c2;
      color: #fff;
      float: left;
      margin-left: 11px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
.rpgMapList {
  width: 100%;
  overflow: hidden;
  zoom: 1;
  .rpgMapListHd {
    width: 1080px;
    height: 23px;
    line-height: 23px;
    background-color: #5da0cf;
    span {
      width: 100px;
      height: 23px;
      line-height: 23px;
      text-align: center;
      color: #fff;
      float: left;
      font-size: 14px;
      cursor: pointer;
    }
    span.current {
      color: #ff3434;
    }
  }
  .rpgMapListCenter {
    height: 19px;
    line-height: 19px;
    margin: 12px 0px;
    span {
      float: left;
      color: #fff;
      height: 19px;
      line-height: 19px;
      margin-right: 25px;
      margin-left: 25px;
    }
    em {
      width: 22px;
      height: 19px;
      line-height: 19px;
      text-align: center;
      color: #fff;
      margin: 0 5px;
      float: left;
      font-size: 12px;
      background-color: #929ba2;
      border-radius: 4px;
      cursor: pointer;
    }
    em.current {
      background-color: #ff3434;
    }
  }
}
.mapListRpg {
  width: 100%;
  overflow: hidden;
  zoom: 1;
  ul li {
    width: 253px;
    height: 93px;
    background-color: #fff;
    float: left;
    margin-right: 12px;
    margin-bottom: 12px;
    padding: 15px 0px 0px 8px;
  }
}
</style>