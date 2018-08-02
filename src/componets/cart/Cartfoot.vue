<template>
  <div class="cart_foot">
    <div class="cart_foot_left">
      <i class="iconfont icon-xuanzhong" v-if="allSelected" @click="changeAllSelected"></i>
      <i class="iconfont icon-round" v-else @click="changeAllSelected"></i>&nbsp;全选
    </div>
    <div class="cart_foot_right">
      <span>合计:￥{{totalPrice}}</span>
      <mt-button size="small" style="color:white;background:#FF5000;border-radius:20px;">结算({{carts}})</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
      //总价
      totalPrice(){
          return this.$store.state.user.totalPrice;
      },
      //是否全选
      allSelected(){
          return this.$store.state.user.allSelected;
      },
      //购物车中商品数量
      carts(){
          let carts=this.$store.state.user.carts;
          let length=0;
          for(let i of carts){
              if(i.selected==true){
                length++;
              }
          }
          return length;
      }

  },
  methods:{
      //点击改变全选状态
      changeAllSelected(){
          this.$store.commit('changeAllSelected');
      }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.cart_foot {
  position: fixed;
  bottom: 55px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  background-color: aliceblue;
}
.cart_foot_left {
  opacity: 0.5;
  color: gray;
  margin-left: 20px;
}
.cart_foot_right {
  margin-right: 10px;
}
.icon-round {
  font-size: 24px;
}
.icon-xuanzhong {
  font-size: 24px;
  color: #ff5000;
}
</style>