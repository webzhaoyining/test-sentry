import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import home from './page/home/index'
import profile from './page/profile/index'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/home', name: 'home', component: home },
    { path: '/profile', name: 'profile', component: profile },
  ]
})