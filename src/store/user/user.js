import { createStore } from 'vuex'
import { Login } from '../../api/request'
import VueCookies from 'vue-cookies'
const getDefaultState = () => {
    return {
        Token: "",
        UserName: '',
        UserId: ''
    }
}
const state = getDefaultState();
const mutations = {
    SET_TOKEN: (state, token) => {
        VueCookies.set("use_path_argument", token);
    },
    SET_USERINFO: (state, { Token, UserName, UserId }) => {
        state.Token = Token;
        state.UserName = UserName;
        state.UserId = UserId;
    }
};
const actions = {
    async getNowUser({ commit }) {
        let result = await Login();
        if (result.code == 0) {
            commit('SET_TOKEN', result.data.Token);
            commit('SET_USERINFO', result.data);
            return result;
        } else {
            return result;
        }

    }
};

export default createStore({
    state,
    mutations,
    actions
})