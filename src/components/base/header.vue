<template>
  <div
    class="header"
    id="searchBar"
    v-bind:class="{ isFiexed: searchBarFixed }"
  >
    <div class="inHeader">
      <span v-bind:class="{ current: currentName == 'Index' }">
        <router-link :to="{ path: '/' }">首页</router-link>
      </span>
      <span v-bind:class="{ current: currentName == 'PT' }">
        <router-link :to="{ path: '/pt' }">平台</router-link>
      </span>
      <span v-bind:class="{ current: currentName == 'DOTA' }">
        <router-link :to="{ path: '/dota' }">DOTA</router-link>
      </span>
      <span v-bind:class="{ current: currentName == 'IMBA' }">
        <router-link :to="{ path: '/IMBA' }">IMBA</router-link>
      </span>
      <span
        v-bind:class="{
          current: currentName == 'ShopRpg' || currentName == 'shopRpgDt',
        }"
      >
        <router-link :to="{ path: '/shopRpg' }">RPG商店</router-link>
      </span>
    </div>
    <div class="my-order">
      <span v-bind:class="{ current: currentName == 'myOrder' }">
        <router-link :to="{ path: '/myOrder' }">我的订单</router-link>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentName: "",
      searchBarFixed: false,
    };
  },
  mounted() {
    this.currentName = this.$route.name;

     window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // debugger;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector("#searchBar").offsetTop;
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  },
};
</script>

<style lang="less">
.isFiexed {
  position: fixed;
  top: 0px;
  z-index: 999;
  -webkit-animation: shake-data 0.5s linear;
  animation: shake-data 0.5s linear;
}
@keyframes shake-data {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
.header {
  width: 1080px;
  height: 45px;
  box-shadow: 2.86px 6.67px 16.29px rgba(0, 0, 0, 0.5);
  background: #053249;

  .inHeader {
    width: 790px;
    height: 45px;
    line-height: 45px;
    display: flex;
    float: left;
    span {
      flex: 1;
      text-align: center;
      color: #dfdfdf;
      font-size: 18px;
      font-family: "微软雅黑";
      cursor: pointer;
      a {
        width: 100%;
        height: 100%;
        font-family: "微软雅黑";
        color: #dfdfdf;
        display: block;
        cursor: pointer;
      }
      a:hover {
        color: #3dbeff;
        font-weight: bold;
      }
    }
    span.current {
      a {
        color: #3dbeff;
        font-weight: bold;
      }
    }
  }
  .my-order {
    width: 240px;
    height: 45px;
    line-height: 45px;
    float: right;
    text-align: right;
    span {
      text-align: center;
      color: #dfdfdf;
      font-size: 18px;
      font-family: "微软雅黑";
      cursor: pointer;
      a {
        width: 100%;
        height: 100%;
        font-family: "微软雅黑";
        color: #dfdfdf;
        display: block;
        cursor: pointer;
      }
      a:hover {
        color: #3dbeff;
        font-weight: bold;
      }
    }
    span.current {
      a {
        color: #3dbeff;
        font-weight: bold;
      }
    }
  }
}
</style>

