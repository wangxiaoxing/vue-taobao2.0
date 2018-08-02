<template>
  <div class="wrapper">
    <div class="grid">
      <div class="grid-cell">
        <img src="../../assets/imgs/tianmao.png">
        <div class="text">天猫</div>
      </div>
      <div class="grid-cell">
        <img src="../../assets/imgs/huasuan.png">
        <div class="text">聚划算</div>
      </div>
      <div class="grid-cell">
        <img src="../../assets/imgs/jingkou.png">
        <div class="text">天猫国际</div>
      </div>
      <div class="grid-cell">
        <img src="../../assets/imgs/waimai.png">
        <div class="text">外卖</div>
      </div>
      <div class="grid-cell">
        <img src="../../assets/imgs/chaoshi.png">
        <div class="text">天猫超市</div>
      </div>
    </div>
    <div class="grid">
      <div class="grid-cell">
        <img src="../../assets/imgs/chongzhi.png">
        <div class="text">充值中心</div>
      </div>
      <div class="grid-cell">
        <img src="../../assets/imgs/feizhu.png">
        <div class="text">飞猪旅行</div>
      </div>
      <div class="grid-cell">
        <img src="../../assets/imgs/jinbi.png">
        <div class="text">领金币</div>
      </div>
      <div class="grid-cell">
        <img src="../../assets/imgs/paimai.png">
        <div class="text">拍卖</div>
      </div>
      <div class="grid-cell">
        <img src="../../assets/imgs/fenlei.png">
        <div class="text">分类</div>
      </div>
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
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.12rem;
}
.grid-cell {
  width: 0.688rem;
}
.text {
  margin: 0 auto;
  text-align: center;
}
img {
  width: 100%;
}
</style>