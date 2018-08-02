<template>
  <div class="foot" :style="{background:background}">
    <i id="left" class="iconfont icon-tao"></i>
    <div id="right">
      <i class="iconfont icon-search_light"></i>
      <input placeholder="寻找宝贝店铺" v-model="searchKey" @keyup.enter="jumpToList">
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            searchKey:'优衣库'
        };
    },
    watch: {},
    computed: {
        background() {
            return this.$store.state.user.background;
        }
    },
    methods: {
        jumpToList() {
            //axios请求
            let that=this;
            this.$axios({
                method:'get',
                url:'/searchResult',
                params:{
                    searchKey:that.searchKey
                },
            }).then(function(response){
                that.$store.commit('searchProducts',response.data);
                that.$router.push("/searchResult");
            }).catch(function(response){
                console.log(response);
            });
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped>
.foot {
  display: flex;
  height: 40px;
  align-content: space-between;
}

#right {
  display: flex;
  font-size: 16px;
  margin: 5px auto;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 1.8rem;
}

#left {
  font-size: 40px;
  color: white;
}
input::-webkit-input-placeholder {
  color: lightgray;
}
input {
  border: none;
  outline: none;
  height: 20px;
  width: 1.6rem;
}
</style>