<template>
  <div class="siderBd">
    <div class="totalBox">
      <div class="totalBox-left">
        <p style="height: 47px; line-height: 47px">
          全部搜藏 <b>{{ collect_numFn }}</b>
        </p>
      </div>
      <div class="totalBox-right">
        <router-link :to="{ path: '/myMap' }">查看全部搜藏</router-link>
      </div>
    </div>
    <div class="sider-rpg">
      <ul>
        <li v-for="(item, index) in collect_boxFn" v-bind:key="index">
          <rpgItem v-bind:item="item" v-if="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { QueryUserCollectedRPG } from "../../../api/request";
import rpgItem from "../../base/rpg-item.vue";
import { mapActions,mapGetters} from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("collectInfo", {
      collect_numFn: "collect_numFn",
      collect_boxFn: "collect_boxFn",
    }),
  },
  mounted() {
    this._QueryUserCollectedRPG();
  },
  methods: {
    ...mapActions("collectInfo", {
      CollectedRPG_Fn: "CollectedRPG_Fn",
    }),
    _QueryUserCollectedRPG() {
      this.CollectedRPG_Fn({ pi: 1, ps: 10 });
    },
  },
  components: {
    rpgItem,
  },
};
</script>
