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
    myMap: {
        QueryUserCollectedRPG: 'Query/QueryUserCollectedRPG',
        AddCollectedRPG: 'Do/AddCollectedRPG',
        RemoveCollectedRPG: 'Do/RemoveCollectedRPG'
    },
    yhq: {
        QueryUserCoupon: 'Query/QueryUserCoupon',
        QueryCouponByGoodsId: 'Query/QueryCouponByGoodsId',
        ReceiveCoupon: 'Do/ReceiveCoupon',
        QueryWebGoodsByGroupId: 'Query/QueryWebGoodsByGroupId',
        QueryUserCouponOrder: 'Query/QueryUserCouponOrder'
    },
    send: {
        Queryfriends: 'Query/Queryfriends',
        CheckAccount: 'Query/QueryUser'
    },
    pay: {
        PaymentRequest: 'Pay/PaymentRequest'
    },
}