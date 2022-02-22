<template>
  <div class="nav-tab">
    <span> 首页 </span>
    <em>/</em>
    <span>{{breadCurmbName}}</span>
  </div>
</template>
<script>
export default{
  props:['breadCurmbName']
}
</script>

<style lang="less">
.nav-tab {
  width: 1080px;
  overflow: hidden;
  zoom: 1;
  color: #ffffff;
  font-size: 12px;
  padding: 4px 0px;
  border-bottom: 1px solid #fff;
  margin-top: 10px;
  font-family: "微软雅黑";
  margin-bottom: 12px;
  span {
    font-family: "微软雅黑";
    margin-bottom: 12px;
    color: #ffffff;
    font-size: 12px;
  }
  em {
    margin: 0 4px;
  }
}
</style>