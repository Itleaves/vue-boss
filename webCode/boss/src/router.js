import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WorkList from "./views/WorkList";
import Details from "./views/Details";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue'),

    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),

    },
    {
      path: '/home',
      name: 'home',
      component: Home,

    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/My.vue')
    },
    {
      path: '/worklist',
      name: 'worklist',
      component: WorkList

    },
    {
      path: '/details',
      name: 'details',
      component: Details

    }]
})
