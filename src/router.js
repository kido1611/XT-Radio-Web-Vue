import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'play',
      component: () => import(/* webpackChunkName: "play" */ './views/Play.vue')
    },
    {
      path: '/livestream',
      name: 'livestream',
      component: () => import(/* webpackChunkName: "video" */ './views/Livestream.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import(/* webpackChunkName: "video" */ './views/Video.vue')
    },
    {
      path: '/crew',
      name: 'crew',
      component: () => import(/* webpackChunkName: "crew" */ './views/Crew.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name:'NotFound',
      component: () => import(/* webpackChunkName: "404" */'./views/404.vue')
    }
  ]
})
