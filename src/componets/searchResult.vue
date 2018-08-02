<template>
  <div class="wrapper">
    <mt-header :title="searchKey">
      <router-link to="/" slot="left">
        <mt-button icon="back">首页</mt-button>
      </router-link>
      <mt-button slot="right">帮助</mt-button>
    </mt-header>
    <div class="list_item" v-for="(pro,index) in pros" @click="jumpToDetails(index)">
      <div class="img_wrapper">
        <img :src="pro.url">
      </div>
      <div class="pro_desc">
        <span class="pro_name">{{pro.name}}</span>
        <span class="pro_price">￥{{pro.price}}</span>
        <div class="pro_location">
          <span>运费{{pro.express}}</span>
          <span>{{pro.paid}}人付款</span>
          <span>{{pro.location}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
           
        };
    },
    watch: {},
    computed: {
        pros(){
            return this.$store.state.product.products;
        },
        searchKey(){
            return this.$store.state.product.searchKey;
        }
    },
    methods: {
        //跳转到商品详情页
        jumpToDetails(index){
           this.$store.commit('selectProducts',index);
           this.$router.push('/productInfo');
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped>
.list_item {
  height: 1.04rem;
  padding: 0.12rem 0.06rem;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img_wrapper {
  width: 1rem;
  height: 1rem;
  display: flex;
}
img {
  width: 100%;
}
.pro_desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.15rem;
  word-break: break-all;
  color: #4b566a;
  width: 2.15rem;
  margin: 0 auto;
  height: 90%;
}
.pro_price {
  color: #eb5211;
  font-size: 0.16rem;
}
.pro_location {
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
  color: #999;
}
</style>