<template>
   <router-view />
    <ul class="bg-bubbles">
      <li v-for="(item, index) in bubbles" :key="index"></li>
    </ul>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      bubbles: 12,
    };
  },
  components: {},
};
</script>

<style lang="less">
@import "https://img.5211game.com/Base/css/base.css";
#app {
  height: 100%;
  min-height: 960px;
  margin: 0 auto;
  padding-top: 50px;
  position: relative;
  background: url(./assets/images/bg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
  padding-bottom: 50px;
  font-family: "微软雅黑";
}

::-webkit-scrollbar {
  width: 10px;
  background-color: rgb(29, 34, 46);
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: rgb(29, 34, 46);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(15, 17, 24);
}
// .All {
//   width: 100%;
//   position: relative;
// }
.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  z-index: 0;
  li {
    position: absolute;

    bottom: -160px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.105);
    list-style: none;

    animation: square 15s infinite;
    transition-timing-function: linear;
    &:nth-child(1) {
      left: 10%;
    }
    &:nth-child(2) {
      left: 20%;
      width: 90px;
      height: 90px;
      animation-delay: 2s;
      animation-duration: 7s;
    }
    &:nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-duration: 8s;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(5) {
      left: 70%;
    }
    &:nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;
      animation-delay: 3s;
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;
      animation-delay: 2s;
    }
    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
      animation-duration: 15s;
    }
    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;
      animation-delay: 2s;
      animation-duration: 12s;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(10) {
      left: 85%;
      width: 160px;
      height: 160px;
      animation-delay: 5s;
    }
  }
  // 自定义 square 动画；
  @keyframes square {
    0% {
      opacity: 0.5;
      transform: translateY(0px) rotate(45deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(90deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(135deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-1000px) rotate(180deg);
    }
  }
}
</style>
