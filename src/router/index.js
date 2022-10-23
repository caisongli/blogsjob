import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
// 占位空路由<router-view />
const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}
const routes = [
  {
    path: '/',
    component: () => import('../layout/layout-index.vue'),
    children: [
      {
        path: '/',
        redirect: '/basic',
        component: RouteView,
        children: [
          {
            path: 'basic',
            name: 'basic',
            component: HomeView
          },
          {
            path: 'basic-layout',
            name: 'layout',
            component: () => import('../views/basic/basic-layout.vue')
          },
          {
            path: 'basic-icon',
            name: 'icon',
            component: () => import('../views/basic/basic-icon.vue')
          },
          {
            path: 'todo-list',
            name: 'todolist',
            component: () => import('../views/todolist/index-page.vue')
          },

        ]
      },
      // {
      //   path: 'basic',
      //   name: 'basic',
      //   component: HomeView
      // },
      // {
      //   path: 'basic-layout',
      //   name: 'layout',
      //   component: () => import('../views/basic/basic-layout.vue')
      // },
      // {
      //   path: 'basic-icon',
      //   name: 'icon',
      //   component: () => import('../views/basic/basic-icon.vue')
      // },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      },
      {
        path: '/api/img',
        name: '/api/img',
        component: () => import('../views/APi/image-page.vue')
      },
      {
        path: '/api/video',
        name: '/api/video',
        component: () => import('../views/APi/video-page.vue')
      }
    ]
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
