export default {
    getNowUser: {
        login: 'Login/GetNowUser'
    },
    home: {
        QueryWebGoodsByFlagTopN: 'query/QueryWebGoodsByFlagTopN',
        hot: 'Query/QueryWebGoodsRankingBySalesVolumeTopN'
    },
    dota: {
        QueryWebGoodsBySeachFlagPager: 'query/QueryWebGoodsBySeachFlagPager',
        QueryWebClassInfoByCid: 'query/QueryWebClassInfoByCid'
    },
    rpgMap: {
        QueryRPGBySearchPager: 'Query/QueryRPGBySearchPager'
    },
    order: {
        QueryUserOrder: 'Query/QueryUserOrder',
        QueryOrderPayInfo: 'query/QueryOrderPayInfo'
    },
    detail: {
        QueryGoodsById: 'Query/QueryGoodsById'
    },
    shopCar: {
        QueryUserWebCartGoods: 'Query/QueryUserWebCartGoods',
        AddWebCartGoods: 'do/AddWebCartGoods',
        DeductWebCartGoods: 'do/DeductWebCartGoods',
        RemoveWebCartGoods: 'do/RemoveWebCartGoods'
    },
}