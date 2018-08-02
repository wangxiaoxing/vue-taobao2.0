<template>
  <div>
    <mt-tab-container v-model="selected" style="margin-bottom:55px;background:#f3ebeb">
      <mt-tab-container-item id="首页">
        <index></index>
      </mt-tab-container-item>
      <mt-tab-container-item id="微淘">
        <we></we>
      </mt-tab-container-item>
      <mt-tab-container-item id="消息">
        <message></message>
      </mt-tab-container-item>
      <mt-tab-container-item id="购物车">
        <cart></cart>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的淘宝">
        <my></my>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item :id=nav.id v-for="nav in navs">
        <img v-show="selected==nav.id" slot="icon" :src=nav.src1>
        <img v-show="selected!==nav.id" slot="icon" :src=nav.src2> {{nav.id}}
      </mt-tab-item>
    </mt-tabbar>
  </div>

</template>

<script>
import index from './index/index'
import we from './we/we'
import message from './message/message'
import cart from './cart/cart'
import my from './my/my'
export default {
  components:{
    index:index,
    we:we,
    message:message,
    cart:cart,
    my:my
  },
  props:{},
  data(){
    return {
        selected:"首页",
    }
  },
  watch:{
    //通过监听selected中的值来重定向,当selected为除了首页和微淘外首先去state中获取登录信息
    //当登录信息不存在时，重定向到登录页面
    selected: function (newVal, oldVal) {
        if(newVal!=='首页'&&newVal!=='微淘'){
          if(!this.$store.state.user.isLogin){
            this.$router.push('/login');
          }
        }
    }
  },
  computed:{
    navs(){
      return this.$store.state.user.skin;
    }
     
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>