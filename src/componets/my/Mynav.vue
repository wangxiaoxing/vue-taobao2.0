<template>
  <div class="my_float">
    <div class="left flexbox">
      <div style="color:gold;font-size:.18rem;">88会员</div>
      <div>淘气值763</div>
    </div>
    <div class="middle flexbox">
      <div style="font-size:.15rem;">优酷VIP 990积分超值兑</div>
      <div>即刻开通 会员抢先看更多！</div>
    </div>
    <div class="right flexbox">
      <img src="../../assets/imgs/film.jpg">
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
.my_float {
  background: white;
  width: 95%;
  border-radius: 0.1rem;
  height: 0.7rem;
  position: absolute;
  top: 1.4rem;
  left: 2.5%;
  right: 2.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.12rem;
  color: gray;
}
.left {
  width: 20%;
}
.right {
  width: 20%;
}
.middle {
  width: 50%;
}
.flexbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  margin: 0 auto;
}
img {
  width: 100%;
}
</style>