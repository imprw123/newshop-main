<template>
  <transition name="fade">
    <div class="payModel" v-show="payFlag">
      <div class="pay">
        <i class="close" @click="closePay"></i>
        <iframe
          class="iframeBox"
          width="604"
          height="420"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          v-bind:src="url"
          @load="pageShow"
        ></iframe>
      </div>
    </div>
  </transition>
</template>


<script >
import { PaymentRequest } from "../../api/request";
import { ElMessage } from "element-plus";
import { ElLoading } from "element-plus";
export default {
  name: "pay",
  data() {
    return {
      payFlag: false,
      url: "",
      payShowFlag: false,
    };
  },
  methods: {
    encode(str) {
      // 对编码的字符串转化base64
      var base64 = btoa(str);
      // console.log(base64);
      // 对字符串进行编码
      var encode = encodeURI(base64);
      // console.log(encode);
      return encode;
    },
    payChildren(val, c, u) {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.5)",
      });
      //console.log(val, c, u);
      var payData = `[{"I":${val},"C":${c},"U":${u}}]`;
      var dataEnCode = this.encode(payData);
      PaymentRequest(dataEnCode).then((res) => {
        if (res.code == 0) {
          this.payShowFlag = true;
          this.url = "";
          this.$nextTick(() => {
            this.url = res.data.Url;
            loading.close();
          });
        } else if (res.code < 0) {
          loading.close();
          ElMessage({
            message: res.msg,
            type: "warning",
          });
        }
      });
    },
    pageShow() {
      if (this.payShowFlag) {
        this.payFlag = true;
      }
    },
    payChildrenLists(data) {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.5)",
      });
      var dataEnCode = this.encode(data);
      PaymentRequest(dataEnCode).then((res) => {
        if (res.code == 0) {
          this.payShowFlag = true;
          this.url = "";
          this.$nextTick(() => {
            loading.close();
            this.url = res.data.Url;
          });
        } else if (res.code < 0) {
          loading.close();
          ElMessage({
            message: res.msg,
            type: "warning",
          });
        }
      });
    },
    closePay() {
      this.payFlag = false;
      this.payShowFlag = false;
      this.$emit("rushWebCar");
    },
  },
};
</script>


<style>
.payModel {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1000;
}
.pay {
  overflow: hidden;
  width: 604px;
  height: 420px;
  margin-left: -302px;
  margin-top: -210px;
  border: 1px solid #b1b3b4;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
}
.close {
  width: 20px;
  height: 18px;
  display: block;
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
  z-index: 1;
}
.iframeBox {
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>