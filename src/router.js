import Vue from 'vue';
import Router from 'vue-router';

import MainNavbar from '@/layout/MainNavbar.vue';
import MainFooter from '@/layout/MainFooter.vue';

import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: Home,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400, navbarTransparent: true }
            }
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ],
    mode: 'history'
});
