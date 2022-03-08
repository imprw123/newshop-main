import { QueryUserCollectedRPG } from "../../api/request"
const collectInfo = () => {
    return {
        collect_num: 0,
        collect_box: []
    }
}
const state = collectInfo();

const getters = {
    collect_numFn(state) {
        return state.collect_num;
    },
    collect_boxFn(state) {
        return state.collect_box;
    }
}

const mutations = {
    set_collect_info(state, { collect_num, collect_box }) {
        state.collect_num = collect_num;
        state.collect_box = collect_box;
    }
}

const actions = {
    CollectedRPG_Fn({ commit }, { pi, ps }) {
        QueryUserCollectedRPG(pi, ps).then(res => {
            commit('set_collect_info', { collect_num: res.data.count, collect_box: res.data.list });
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}