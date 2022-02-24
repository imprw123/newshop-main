<template>
  <div class="productInfor">
    <div class="productInfor_left">
      <div class="borderBox">
        <img src="//img.5211game.com/5211/shop/Goods/Basic/29955.jpg" alt="" />
      </div>
    </div>
    <div class="productInfor_right">
      <div class="row">
        <span>名称</span>
        <b>苏生大帝·骷髅王</b>
      </div>
      <div class="inforBg">
        <div class="rows">
          <span>价格</span>
          <div class="saleCount">
            <b class="price"> ￥188.00 </b>
            <i>永久</i>‘
            <em class="discount"></em>
          </div>
        </div>
      </div>
      <div class="UserCation">
        <p class="addNumber">
          <i>数量</i>
          <span class="changeNum">
            <em class="leftBtn">-</em>
            <input type="text" id="count" />
            <em class="rightBtn">+</em>
          </span>
        </p>
        <p>
          <a href="javascript:;" class="back_Gm">立即购买</a
          ><a href="javascript:;" class="sure_Gm">加入购物车</a
          ><a href="javascript:;" class="sure_Zs">赠送</a>
        </p>
      </div>
    </div>
  </div>
  <div class="detailInforMation">
    <div class="detailInforMation-name">详情介绍</div>
    <div></div>
  </div>
</template>
<style lang="less">
.productInfor {
  width: 1058px;
  height: 305px;
  border: 1px solid #ebebeb;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;
  padding: 38px 0px 0px 20px;
  position: relative;
  .productInfor_left {
    width: 300px;
    height: 300px;
    background-color: #fff;
    float: left;
    .borderBox {
      width: 200px;
      height: 200px;
      position: relative;
      background-color: #fff;
      margin: 0 auto;
      img.imgShow {
        width: 200px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: -100px;
      }
    }
  }
  .productInfor_right {
    height: 300px;
    float: left;
    padding-left: 20px;
    position: relative;
    .rows {
      width: 100%;
      overflow: hidden;
      zoom: 1;
      font-family: "微软雅黑";
      span {
        color: #999999;
        font-size: 14px;
        width: 95px;
        height: 30px;
        line-height: 30px;
        padding-left: 8px;
        float: left;
      }
      em {
        color: #999999;
        font-size: 14px;
        float: left;
        height: 30px;
        line-height: 30px;
      }
      b {
        width: 77px;
        text-align: center;
        font-size: 20px;
        color: #333;
        float: left;
        height: 30px;
        line-height: 30px;
        position: relative;
      }
      i {
        color: #333333;
        font-size: 14px;
        margin-left: 5px;
        float: left;
        height: 30px;
        line-height: 30px;
        font-family: "微软雅黑";
      }
      b.price {
        font-size: 24px;
        color: #f74a4a;
        font-weight: normal;
        float: left;
        height: 30px;
        line-height: 30px;
        position: relative;
        font-family: "微软雅黑";
      }
    }
    .inforBg {
      height: 122px;
      width: 682px;
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: #edf6fc;
      .saleCount {
        font-size: 24px;
        color: #f74a4a;
        font-weight: normal;
        font-family: "微软雅黑";
      }
    }
    .UserCation {
      overflow: hidden;
      zoom: 1;
      position: absolute;
      bottom: 20px;
      p {
        position: relative;
        font-size: 14px;
        color: #3d3d3d;
        margin-bottom: 5px;
        i {
          display: inline-block;
          width: 95px;
          text-align: left;
          letter-spacing: 13px;
          color: #999999;
          font-size: 14px;
        }
      }
      p.addNumber {
        margin-bottom: 12px;
        padding-left: 10px;
        i {
          display: inline-block;
          width: 95px;
          text-align: left;
          letter-spacing: 13px;
          color: #999999;
          font-size: 14px;
        }
        span.changeNum {
          width: 86px;
          height: 18px;
          display: block;
          position: absolute;
          top: 0px;
          left: 150px;
          border: 1px solid #cccccc;
          margin-top: 0px;
          em.leftBtn {
            width: 14px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            background-color: #ebebeb;
            display: block;
            position: absolute;
            top: 0px;
            left: -15px;
            cursor: pointer;
            color: #3d3d3d;
          }
          input {
            position: absolute;
            width: 56px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            background-color: #fff;
            font-size: 14px;
            color: #3d3d3d;
            left: 14px;
            top: 0px;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            display: block;
            outline-style: none;
          }
          em.rightBtn {
            width: 14px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            background-color: #ebebeb;
            display: block;
            position: absolute;
            top: 0px;
            right: 0px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>