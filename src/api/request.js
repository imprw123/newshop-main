import { post, get } from '../axios/Http';
import api from './api'
// -----------首页接口
//限时抢购
export function limtBuy() {
    return get(`${api.home.QueryWebGoodsByFlagTopN}?classid=${0}&flag=${2}&topN=${4}`)
}
//热门排行
export function hotRank() {
    return get(`${api.home.hot}?topN=${4}`)
}
//推荐服务
export function dotaRecomment(cid) {
    return get(`${api.home.QueryWebGoodsByFlagTopN}?classid=${cid}&flag=${4}&topN=${5}`)
}
//平台推荐服务
export function ptRecoment() {
    return get(`${api.home.QueryWebGoodsByFlagTopN}?classid=${1}&flag=${4}&topN=${5}`)
}
// -----------平台页面接口
export function ClassInfoByCid(pid) {
    return get(`${api.dota.QueryWebClassInfoByCid}?classid=${pid}`)
}
// 商品列表
export function seachFlagPager(classid, flagId, searchName, sortName, pi, ps) {
    return get(`${api.dota.QueryWebGoodsBySeachFlagPager}?classid=${classid}&flag=${flagId}&search=${escape(searchName)}&sort=${sortName}&pi=${pi}&ps=${ps}`)
}

//rpg商店
export function QueryRPGBySearchPager(category, firstword, valName, pi, ps) {
    return get(`${api.rpgMap.QueryRPGBySearchPager}?category=${category}&firstword=${firstword}&search=${escape(valName)}&pi=${pi}&ps=${ps}`)
}