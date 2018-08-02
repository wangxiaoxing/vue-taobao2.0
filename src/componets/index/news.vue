<template>
  <div class="wrapper">
    <div class="left">
      <img src="../../assets/imgs/news.png">
    </div>
    <div class="right">
      <div style="display:flex">
        <div class="innerLeft">
          <div class="hotComment">
            <span>
              <i class="iconfont icon-reping">
              </i>夏天钓鱼。风中垂钓这些细节需要注意</span>
          </div>
          <div class="hotComment">
            <span>
              <i class="iconfont icon-reping">
              </i>89平北欧风私人订制公寓超豪华配置</span>
          </div>
        </div>
        <div class="innerRight">
          <img src="../../assets/imgs/fish.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
      
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.wrapper {
  display: flex;
  font-size: 0.5rem;
  margin-top: 0.1rem;
}
.left {
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right {
  width: 85%;
}
.innerLeft {
  width: 70%;
  font-size: 0.12rem;
}
.innerRight {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left img {
  width: 90%;
}
.innerRight img {
  width: 100%;
  height: 90%;
}

span {
  font-size: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
i {
  color: #ff5000;
  font-size: 0.15rem;
}
.hotComment {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
}
</style>