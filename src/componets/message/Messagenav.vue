<template>
  <div class="message_nav">
    <div class="message_nav_list">
      <div class="message_nav_icon">
        <i class="iconfont icon-wuliu" style="color:dodgerblue"></i>
        <span>交易物流</span>
      </div>
      <div class="message_nav_icon">
        <i class="iconfont icon-tongzhi2" style="color:yellow"></i>
        <span>通知</span>
      </div>
      <div class="message_nav_icon">
        <i class="iconfont icon-hudong" style="color:green"></i>
        <span>互动</span>
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
.message_nav {
  width: 90%;
  height: 0.7rem;
  position: absolute;
  left: 5%;
  right: 5%;
  top: 0.8rem;
  background: white;
  border-radius: 0.2rem;
}
.message_nav_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.1rem 0.2rem;
}
.message_nav_icon {
  display: flex;
  font-size: 0.12rem;
  flex-direction: column;
  align-items: center;
}
.message_nav_icon i {
  font-size: 0.4rem;
}
</style>