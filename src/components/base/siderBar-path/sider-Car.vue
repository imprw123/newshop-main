<template>
     <div class="siderBd" >
        <div class="totalBox">
          <div class="totalBox-left">
            <p>
              <em>1</em>
            </p>
            <p>
              共计
              <b>￥188.00</b>
            </p>
          </div>
          <div class="totalBox-right">
            <a href="#/shopCar" class="">去购物车结算</a>
          </div>
        </div>
        <div class="silder-shop">
          <ul>
            <li>
              <div class="shop-left">
                <img
                  src="https://img.5211game.com/5211/shop/Goods/Basic/29955.jpg"
                  alt=""
                />
              </div>
              <div class="shop-right">
                <h4>苏生大帝·骷髅王</h4>
                <p><b>￥188.00</b></p>
                <p><em>苏生大帝·骷髅王</em></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>
<script>
export default{
  
}
</script>

<style lang="less">
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