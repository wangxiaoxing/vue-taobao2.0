import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  selectedProduct: {},
  products: [],
  searchKey: ''

}
const mutations = {
  selectProducts (state, index) {
    state.selectedProduct = state.products[index]
  },
  searchProducts (state, obj) {
    state.products = obj.products
    state.searchKey = obj.searchKey
  }

}
// 为什么这里export product不可以？
// const product = {
//   state,
//   mutations
// }

export default {
  state,
  mutations
  // product
}
