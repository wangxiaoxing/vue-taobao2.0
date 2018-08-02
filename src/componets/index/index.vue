<template>
  <div class="wrapper">
    <Indexhead></Indexhead>
    <carausel></carausel>
    <naver></naver>
    <news></news>
    <products></products>

  </div>
</template>

<script>
import Indexhead from './Indexhead'
import carausel from './carausel'
import naver from './naver'
import news from './news'
import products from './products'
export default {
  components:{
    Indexhead:Indexhead,
    carausel:carausel,
    naver:naver,
    news:news,
    products:products
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
</style>