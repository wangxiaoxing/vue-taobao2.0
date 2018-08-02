<template>
  <div class="wrapper">
    <mt-swipe :show-indicators="false">
      <mt-swipe-item><img src="../../assets/carausel/carausel_0.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/carausel/carausel_1.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/carausel/carausel_2.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/carausel/carausel_3.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/carausel/carausel_4.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/carausel/carausel_5.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/carausel/carausel_6.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/carausel/carausel_7.jpg" /></mt-swipe-item>
    </mt-swipe>
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
.mint-swipe {
  height: 1.16rem;
}
img {
  width: 100%;
}
</style>