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
    },
    update_num_money(state, { totalNumber, totalMoney }) {
        state.totalNumber = totalNumber;
        state.totalMoney = totalMoney;
    }
}

const actions = {
    shop_Car({ commit }) {
        //  debugger
        let totalMoneyAll = 0;
        let totalNumberAll = 0;
        QueryUserWebCartGoods().then((res) => {
            // debugger;
            if (res.data.length > 0) {
                res.data.map((item) => {
                    item.isChecked = true;
                    totalMoneyAll += Number(item.Goods_price) * Number(item.Goods_amount);
                    totalNumberAll += Number(item.Goods_amount);
                });
                totalMoneyAll = totalMoneyAll.toFixed(2);
            } else {
                totalNumberAll = 0;
                totalMoneyAll = 0;
            }
            // console.log(res);
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