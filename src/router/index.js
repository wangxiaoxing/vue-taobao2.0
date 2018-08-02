import Vue from 'vue'
import Router from 'vue-router'
import reg from '../componets/reg'
import login from '../componets/login'
import main from '../componets/main'
import searchResult from '../componets/searchResult'
import productInfo from '../componets/productInfo'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/reg',
    name: 'reg',
    component: reg
  }, {
    path: '/',
    name: 'main',
    component: main
  }, {
    path: '/searchResult',
    name: 'searchResult',
    component: searchResult
  }, {
    path: '/productInfo',
    name: 'productInfo',
    component: productInfo
  }]
})
