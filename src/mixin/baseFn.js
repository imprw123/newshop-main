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
            hotRecommedLts: []
        }
    },
    methods: {
        //dota商品推荐
        _dotaRecomment(cid, flagid) {
            dotaRecomment(cid, flagid).then((res) => {
                console.log(res);
                this.hotRecommedLts = res.data.list;
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
                this.productTypeLts = res.data.Class_GoodsInfo;
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