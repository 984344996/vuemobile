import Vue from 'vue';
import Router from 'vue-router';
import {getUser} from "./common/userStorage";

Vue.use(Router);

const  CLogin = () => import('./views/Login');
const CHome = () => import('./views/Home');

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: CLogin
        },
        {
            path: '/home',
            name: 'home',
            component: CHome,
            meta: {
                "requireAuth":true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        let user = getUser();
        if (user == null) {
            next({
                path: '/login',
                query: { redirect: to.path }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
});

export default router;
