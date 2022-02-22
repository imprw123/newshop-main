import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import PT from '../views/pt.vue'
import DOTA from '../views/dota.vue'
import IMBA from '../views/imba.vue'
import SHOPRPG from '../views/shopRpg.vue'
const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/pt',
        name: 'PT',
        component: PT
    },
    {
        path: '/dota',
        name: 'DOTA',
        component: DOTA
    },
    {
        path: '/imba',
        name: 'IMBA',
        component: IMBA
    },
    {
        path: '/shopRpg',
        name: 'ShopRpg',
        component: SHOPRPG
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router