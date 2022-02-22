<template>
  <div class="rpgBox-item" v-if="this.$route.name == 'Index'">
    <img
      v-bind:src="`//img.5211game.com/5211/shop/RPG/${item.id}.jpg`"
      alt=""
      class="imgShow"
    />
    <div class="rpg-left">
      <p>{{ item.Name }}</p>
      <div class="typeName">
        <span class="lf">{{ item.type }}</span>
      </div>
      <div class="enterShop">
        <a href="#/rpg?cid=1592" class="">进入商店</a>
      </div>
    </div>
  </div>

  <div class="rpgBox-item" v-if="this.$route.name == 'ShopRpg'">
    <img
      v-bind:src="`//img.5211game.com/5211/shop/RPG/${item.Class_id}.jpg`"
      alt=""
      class="imgShow"
    />
    <div class="rpg-left">
      <p>{{ item.Class_name }}</p>
      <div class="typeName">
        <span class="lf">{{ typeName(item.Category) }}</span>
      </div>
      <div class="enterShop">
        <a href="#/rpg?cid=1592" class="">进入商店</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route.name);
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  methods: {
    typeName(val) {
      if (val == 1) {
        return "防守类";
      } else if (val == 2) {
        return "休闲类";
      } else if (val == 3) {
        return "塔防类";
      } else if (val == 4) {
        return "生存类";
      } else if (val == 5) {
        return "对抗类";
      } else if (val == 6) {
        return "ORPG";
      } else if (val == 7) {
        return "会员类";
      } else if (val == 8) {
        return "DOTA";
      }
    },
  },
  data() {
    return {
    
    };
  },
};
</script>

<style lang="less">
.rpgBox-item {
  width: 253px;
  height: 93px;
  .imgShow {
    width: 127px;
    height: 79px;
    display: block;
    float: left;
  }
  .rpg-left {
    width: 96px;
    height: 79px;
    float: left;
    margin-left: 15px;
    p {
      width: 100%;
      font-size: 14px;
      color: #333333;
      font-family: "微软雅黑";
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
    .typeName {
      overflow: hidden;
      zoom: 1;
      width: 100%;
      display: flex;
      margin: 10px 0px;
      span.lf {
        text-align: left;
      }
    }
    .enterShop {
      width: 86px;
      height: 20px;
      background-color: #fdece3;
      color: #aa2828;
      border: 1px solid #aa2828;
      border-radius: 10px;
      font-family: "微软雅黑";
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>