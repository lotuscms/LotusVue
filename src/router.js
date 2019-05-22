import Vue from 'vue';
import Router from 'vue-router';

import MainNavbar from '@/layout/MainNavbar.vue';
import MainFooter from '@/layout/MainFooter.vue';

import Home from '@/views/Home.vue';

Vue.use(Router);

const defaultProps = {
  header: { colorOnScroll: 400, navbarTransparent: true }
};

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
      props: defaultProps
    },
    {
      path: '/how-to-connect',
      name: 'howToConnect',
      components: {
        default: () =>
          import(
            /* webpackChunkName: "howToConnect" */ '@/views/HowToConnect.vue'
          ),
        header: MainNavbar,
        footer: MainFooter
      },
      props: defaultProps
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () =>
          import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
        header: MainNavbar
      },
      props: defaultProps
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () =>
          import(/* webpackChunkName: "register" */ '@/views/Login.vue'),
        header: MainNavbar
      },
      props: defaultProps
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
  mode: 'history',
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
