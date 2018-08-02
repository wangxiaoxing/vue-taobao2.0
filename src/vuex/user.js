import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  isLogin: false,
  totalPrice: 0,
  allSelected: false,
  userInfo: {

  },
  backgrounds: ['linear-gradient(to right,#ff9900, #FF5000)', 'pink', '#0099FF'],
  background: 'linear-gradient(to right,#ff9900, #FF5000)',
  skin: [{
    id: '首页',
    src1: require('../assets/icon/home_active.png'),
    src2: require('../assets/icon/home.png')
  }, {
    id: '微淘',
    src1: require('../assets/icon/we_active.png'),
    src2: require('../assets/icon/we.png')

  }, {
    id: '消息',
    src1: require('../assets/icon/message_light_active.png'),
    src2: require('../assets/icon/message_light.png')

  }, {
    id: '购物车',
    src1: require('../assets/icon/cart_light_active.png'),
    src2: require('../assets/icon/cart_light.png')

  }, {
    id: '我的淘宝',
    src1: require('../assets/icon/people_active.png'),
    src2: require('../assets/icon/people.png')

  }],
  skins: [
    [{
      id: '首页',
      src1: require('../assets/icon/home_active.png'),
      src2: require('../assets/icon/home.png')
    }, {
      id: '微淘',
      src1: require('../assets/icon/we_active.png'),
      src2: require('../assets/icon/we.png')

    }, {
      id: '消息',
      src1: require('../assets/icon/message_light_active.png'),
      src2: require('../assets/icon/message_light.png')

    }, {
      id: '购物车',
      src1: require('../assets/icon/cart_light_active.png'),
      src2: require('../assets/icon/cart_light.png')

    }, {
      id: '我的淘宝',
      src1: require('../assets/icon/people_active.png'),
      src2: require('../assets/icon/people.png')

    }],
    [{
      id: '首页',
      src2: require('../assets/skin/首页.png'),
      src1: require('../assets/skin/index.png')
    }, {
      id: '微淘',
      src2: require('../assets/skin/微淘.png'),
      src1: require('../assets/skin/we.png')

    }, {
      id: '消息',
      src2: require('../assets/skin/消息.png'),
      src1: require('../assets/skin/messge.png')

    }, {
      id: '购物车',
      src2: require('../assets/skin/购物车.png'),
      src1: require('../assets/skin/cart.png')

    }, {
      id: '我的淘宝',
      src2: require('../assets/skin/男.png'),
      src1: require('../assets/skin/my.png')

    }],
    [{
      id: '首页',
      src1: require('../assets/skin2/home_active.png'),
      src2: require('../assets/skin2/home.png')
    }, {
      id: '微淘',
      src1: require('../assets/skin2/we_active.png'),
      src2: require('../assets/skin2/we.png')

    }, {
      id: '消息',
      src1: require('../assets/skin2/message_active.png'),
      src2: require('../assets/skin2/message.png')

    }, {
      id: '购物车',
      src1: require('../assets/skin2/cart_active.png'),
      src2: require('../assets/skin2/cart.png')

    }, {
      id: '我的淘宝',
      src1: require('../assets/skin2/people_active.png'),
      src2: require('../assets/skin2/people.png')
    }]

  ],
  carts: [

  ]
}

const mutations = {
  update (state, obj) {
    state.isLogin = obj.isLogin
    state.userInfo = obj.userInfo
  },
  changeSkin (state, el) {
    var index = 0
    switch (el) {
      case '官方默认':
        index = 0
        break
      case '粉色少女':
        index = 1
        break
      default:
        index = 2
    }
    state.skin = state.skins[index]
    state.background = state.backgrounds[index]
  },
  savePrice (state, price) {
    state.totalPrice = price
  },
  changeAllSelected (state) {
    state.allSelected = !state.allSelected
  },
  addToCart (state, obj) {
    // 添加购物车时需要判断是否是同一件商品
    var flag = true
    for (let i of state.carts) {
      // 当商品名称，大小，颜色均相等时商品数量+1.否则不算同一件商品
      if (i.name === obj.name && i.size === obj.size) {
        i.num++
        flag = false
      }
    }
    if (flag) {
      state.carts.push(obj)
    }
  },
  updateCarts (state, obj) {
    state.carts = obj
  }
}

const user = {
  state,
  mutations
}

export default (
  user
)
