import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Index from '../views/index.vue'
import PT from '../views/pt.vue'
import DOTA from '../views/dota.vue'
import IMBA from '../views/imba.vue'
import SHOPRPG from '../views/shopRpg.vue'
import SHOPRPGDT from '../views/shopRpgDt.vue'
import MYORDER from '../views/myOrder.vue'
import user from "../store/user/user"
import VueCookies from 'vue-cookies'
const routes = [{
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            cheakIsLogin: true
        }
    },
    {
        path: '/pt',
        name: 'PT',
        component: PT,
        meta: {
            cheakIsLogin: true
        }
    },
    {
        path: '/dota',
        name: 'DOTA',
        component: DOTA,
        meta: {
            cheakIsLogin: true
        }
    },
    {
        path: '/imba',
        name: 'IMBA',
        component: IMBA,
        meta: {
            cheakIsLogin: true
        }
    },
    {
        path: '/shopRpg',
        name: 'ShopRpg',
        component: SHOPRPG,
        meta: {
            cheakIsLogin: true
        }
    },
    {
        path: '/shopRpgDt',
        name: 'shopRpgDt',
        component: SHOPRPGDT,
        meta: {
            cheakIsLogin: true
        }
    },
    {
        path: '/myOrder',
        name: 'myOrder',
        component: MYORDER,
        meta: {
            cheakIsLogin: true
        }
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.cheakIsLogin) {
        user.dispatch('getNowUser').then(res => {
            if (res.code == 0) {
                next();
            } else {
                VueCookies.delete('use_path_argument');
                window.location.href = `//shop.5211game.com/Login?returnUrl=${escape(window.location.href)}`;
            }
        });

    }
})
export default router