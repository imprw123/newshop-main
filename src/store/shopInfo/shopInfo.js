import { QueryUserWebCartGoods } from '../../api/request'
const shopInformation = () => {
    return {
        totalNumber: 0,
        totalMoney: 0,
        shopCarBox: []
    }
}
const state = shopInformation();
const getters = {
    totalNumberFn(state) {
        return state.totalNumber;
    },
    totalMoneyFn(state) {
        return state.totalMoney;
    },
    shopCarBoxFn(state) {
        return state.shopCarBox;
    }
}

const mutations = {
    set_info(state, { totalNumber, totalMoney, shopCarBox }) {
        // debugger;
        state.totalNumber = totalNumber;
        state.totalMoney = totalMoney;
        state.shopCarBox = shopCarBox;
    }
}

const actions = {
    shop_Car({ commit }) {
        //  debugger
        let totalMoneyAll = 0;
        let totalNumberAll = 0;
        QueryUserWebCartGoods().then((res) => {
            console.log(res);
            if (res.data.length > 0) {
                res.data.map((item) => {
                    totalMoneyAll =
                        Number(item.Goods_price) * Number(item.Goods_amount);
                    totalNumberAll += Number(item.Goods_amount);
                });
                totalMoneyAll = totalMoneyAll.toFixed(2);
            } else {
                totalNumber = 0;
                totalMoney = 0;
            }

            commit('set_info', { 'totalNumber': totalNumberAll, 'totalMoney': totalMoneyAll, 'shopCarBox': res.data });
        });
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}