import { createStore } from 'vuex'
const getDefaultState = () => {
    return {
        token: "",
        name: '',
        avatar: ''
    }
}
const mutations = {

};
const actions = {

};

const state = getDefaultState();

export default createStore({
    state,
    mutations,
    actions
})