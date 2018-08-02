<template>
  <div>
    <div class="head" id="cart_head1" :style="{width:'100'+'%',background:background}">
      <div class="top">
        <span>购物车</span>
        <div class="top_right">
          <span>管理</span>
        </div>
      </div>
      <div class="bottom">
        <span>共{{cart}}件宝贝</span>
      </div>
      <!-- <div class="orange">
      </div> -->
    </div>
    <!-- <div class="head" id="cart_head2" :style="{width:width+'%',background:background}">
   <div class="top2">
          <span>购物车</span>
          <div class="top2_right">
          <span>管理</span>
          </div>
  </div>
  </div> -->
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
    width(){
      let width=$('body').width().toString().replace(/px/,'');
      let total=$('html').width().toString().replace(/px/,'');
      return width*100/total;
    },
    background(){
        return this.$store.state.user.background;
    },
    cart(){
        return this.$store.state.user.carts.length;
    }
  },
  methods:{
  handleScroll(){
      var fontSize=$('body').css('font-size').toString().replace(/px/,'');
      //滚动像素
      var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>=(0.8*fontSize)){
          $('#cart_head2').css('opacity',1);
          $('#cart_head1').css('opacity',0);
      }else{
          $('#cart_head2').css('opacity',0);
          $('#cart_head1').css('opacity',1);
      }
    }
    
  },
  created(){},
  mounted(){
      //暂时不要这个功能
    // window.addEventListener('scroll',this.handleScroll);
  },
  destroyed () {//离开该页面需要移除这个监听的事件
  window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped>
.orange {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.6rem;
}
.head {
  width: 100%;
  /* position:fixed; */
  /* top:0; */
  margin: 0 auto;
}
.top {
  display: flex;
  width: 95%;
  margin: 0 auto;
  height: 0.5rem;
  font-size: 0.2rem;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.top_right i {
  font-size: 0.2rem;
}
.top_right span {
  font-size: 0.16rem;
}
.bottom {
  width: 95%;
  margin: 0 auto;
  color: white;
  height: 0.3rem;
  font-size: 0.15rem;
}
.bottom i {
  font-size: 0.2rem;
}
#cart_head1 {
  opacity: 1;
}
#cart_head2 {
  opacity: 0;
}
.top2 {
  height: 0.3rem;
  display: flex;
  width: 50%;
  margin-left: 45%;
  height: 0.3rem;
  font-size: 0.16rem;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.top2 i {
  font-size: 0.16rem;
}
</style>