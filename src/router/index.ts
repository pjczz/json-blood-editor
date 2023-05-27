import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import Edit from "../views/Home/Edit.vue"
import NewMain from "../views/New/NewMain.vue"
import Insert from "../views/Insert/Insert.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  },
  { path: "", redirect: 'home' },
  {
    path: '/new',
    name: 'new',
    component: NewMain
  },
  {
    path: '/insert',
    name: 'insert',
    component: Insert
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
