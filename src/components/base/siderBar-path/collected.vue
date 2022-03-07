<template>
  <div class="siderBd">
    <div class="totalBox">
      <div class="totalBox-left">
        <p style="height: 47px; line-height: 47px">全部搜藏 <b>{{count}}</b></p>
      </div>
      <div class="totalBox-right">
        <router-link :to="{ path: '/myMap' }">查看全部搜藏</router-link>
      </div>
    </div>
    <div class="sider-rpg">
      <ul>
        <li v-for="(item, index) in rpgList" v-bind:key="index">
          <rpgItem v-bind:item="item" v-if="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { QueryUserCollectedRPG } from "../../../api/request";
import rpgItem from "../../base/rpg-item.vue";
export default {
  data() {
    return {
      rpgList: [],
      count: 0,
    };
  },
  mounted() {
    this._QueryUserCollectedRPG();
  },
  methods: {
    _QueryUserCollectedRPG() {
      QueryUserCollectedRPG(1, 10).then((res) => {
        //console.log(res);
        this.rpgList = res.data.list;
        this.count = res.data.count;
      });
    },
  },
  components: {
    rpgItem,
  },
};
</script>
