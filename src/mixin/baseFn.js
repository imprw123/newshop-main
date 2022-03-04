import { ptRecoment, ClassInfoByCid, seachFlagPager, dotaRecomment } from "../api/request";
import InfoView from "../components/base/info.vue";
let BaseFn = {
    data() {
        return {
            flagId: 0,
            searchName: "",
            sortName: "weight",
            pi: 1,
            ps: 10,
            shopLtsMore: [],
            total: 0,
            InforObj: null,
            hotRecommedLts: [],
            loading: true,
            loading2: true,
            svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
        }
    },
    methods: {
        //dota商品推荐
        _dotaRecomment(cid, flagid) {
            dotaRecomment(cid, flagid).then((res) => {
                console.log(res);
                this.hotRecommedLts = res.data.list;
                this.loading2 = false;
            });
        },
        //平台服务商品推荐
        _ptRecoment() {
            ptRecoment().then((res) => {
                // console.log(res);
                this.ptLts = res.data.list;
            });
        },
        //商品内容
        _ClassInfoByCid() {
            ClassInfoByCid(this.pid).then((res) => {
                console.log('13213213213');
                console.log(res);
                this.InforObj = res.data;
                if (res.data.Class_GoodsInfo) {
                    this.productTypeLts = res.data.Class_GoodsInfo;
                } else {
                    this.productTypeLts = [];
                }

                console.log(1234556)
                console.log(this.InforObj)
            });
        },
        //搜索商品
        _seachParent(val) {
            // console.log(val)
            this.searchName = val;
            this._seachFlagPager();
        },
        //  商品列表
        _seachFlagPager() {
            seachFlagPager(
                this.classid,
                this.flagId,
                this.searchName,
                this.sortName,
                this.pi,
                this.ps
            ).then((res) => {
                console.log("1231");
                console.log(res);
                this.total = res.data.count;
                this.shopLtsMore = res.data.list;
                this.loading = false;
            });
        },
        _changeCid(val) {
            this.classid = val;
            this.searchName = "";
            this._seachFlagPager();
        },
        _typeTagchangeBtn(val) {
            this.sortName = val;
            console.log(val);
            this._seachFlagPager();
        },
        changeCurPage(val) {
            this.pi = val;
            this._seachFlagPager();
        },
    },
    components: {
        InfoView
    }
}

export default BaseFn