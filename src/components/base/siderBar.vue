<template>
  <div class="siderBox siderBoxCurrent">
    <div class="siderBar">
      <div class="silderBtn">
        <ul>
          <li class="silder01" style=""></li>
          <li class="silder02"><i class="ci-count">0</i></li>
          <li class="silder03"></li>
          <li class="silder04"></li>
          <li class="silder05"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.siderBox {
  position: fixed;
  top: 0px;
  right: 0px;
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
      ul li.silder03 {
        background: url(../../assets/images/silder03.png);
      }
      ul li.silder04 {
        background: url(../../assets/images/silder04.png);
      }
      ul li.silder05 {
        background: url(../../assets/images/silder05.png);
      }
    }
  }
}
.siderBoxCurrent {
  right: -300px;
  transition: 0.5s ease;
}
</style>