import { createStore } from 'vuex'
import user from './user/user'
import shopInfo from './shopInfo/shopInfo'
import collectInfo from './collected/collected'

export default createStore({
    modules: {
        user,
        shopInfo,
        collectInfo
    }
})