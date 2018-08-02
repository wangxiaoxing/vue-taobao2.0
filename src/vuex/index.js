import Vue from 'vue'
import Vuex from 'vuex'
import product from './product.js'
import user from './user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product: product,
    user: user
  }
})
