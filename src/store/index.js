import { createStore } from 'vuex'
import user from './user/user'
import shopInfo from './shopInfo/shopInfo'

export default createStore({
    modules: {
        user,
        shopInfo
    }
})