<template>
  <div class="wrapper" id="wrapper">
    <div class="body" style="margin:0.8rem auto 0;">
      <div class="outerLine">
        <div class="head">
          <span>热门</span>
          <i class="iconfont icon-iconfont707"></i>
        </div>
        <div class="shopInfo">
          <div class="picture">
            <i class="iconfont icon-customer-nike"></i>
          </div>
          <div class="description">
            <div>
              <span>NIKE官方旗舰店</span>
            </div>
            <div>
              <span class="fans">1430.8万粉丝</span>
            </div>
          </div>
        </div>
        <div class="slogan">
          <span>#NIKE#</span>
        </div>
        <div class="list">
          <div style="width:30%;" v-for="url in urls">
            <img v-bind:src="url">
          </div>
        </div>
        <div class="foot">
          <span>6万阅读</span>
          <div>
            <i class="iconfont icon-liuyan">&nbsp;
              <span>10</span>
            </i>&nbsp;&nbsp;
            <i class="iconfont icon-qinziAPPtubiao-">&nbsp;
              <span>58</span>
            </i>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="outerLine">
        <div class="head">
          <span>热门</span>
          <i class="iconfont icon-iconfont707"></i>
        </div>
        <div class="shopInfo">
          <div class="picture">
            <i class="iconfont icon-customer-nike"></i>
          </div>
          <div class="description">
            <div>
              <span>NIKE官方旗舰店</span>
            </div>
            <div>
              <span class="fans">1430.8万粉丝</span>
            </div>
          </div>
        </div>
        <div class="slogan">
          <span>#NIKE#</span>
        </div>
        <div class="list">
          <div style="width:30%;" v-for="url in urls">
            <img v-bind:src="url">
          </div>
        </div>
        <div class="foot">
          <span>6万阅读</span>
          <div>
            <i class="iconfont icon-liuyan">&nbsp;
              <span>10</span>
            </i>&nbsp;&nbsp;
            <i class="iconfont icon-qinziAPPtubiao-">&nbsp;
              <span>58</span>
            </i>
          </div>
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
                urls:[
                    require('../../assets/products/nike_1.jpg'),
                    require('../../assets/products/nike_2.jpg'),
                    require('../../assets/products/nike_3.jpg'),
                    require('../../assets/products/nike_4.jpg'),
                    require('../../assets/products/nike_5.jpg'),
                    require('../../assets/products/nike_6.jpg'),
                    require('../../assets/products/nike_7.jpg'),
                    require('../../assets/products/nike_8.jpg'),
                    require('../../assets/products/nike_1.jpg'),
                ]
            };
        },
        watch: {},
        computed: {},
        methods: {},
        created() {},
        mounted() {}
    };
</script>
<style scoped>
.body {
  width: 90%;
  /* height: 5rem; */
  background-color: white;
  margin: 0.2rem auto 0;
  border-radius: 20px;
  font-size: 0.16rem;
}
.outerLine {
  width: 90%;
  margin: 0 auto;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.4rem;
}
.shopInfo {
  display: flex;
  height: 0.5rem;
  align-items: center;
}
.picture i {
  font-size: 0.3rem;
}
.fans {
  font-size: 0.13rem;
  color: gray;
}
.slogan {
  color: dodgerblue;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list img {
  width: 100%;
}
.foot {
  margin-top: 0.1rem;
  font-size: 0.12rem;
  color: gray;
  display: flex;
  justify-content: space-between;
}
.foot i {
  font-size: 0.12rem;
}
</style>