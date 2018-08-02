<template>
  <div class="wrapper">
    <Carthead></Carthead>
    <Cartbody></Cartbody>
    <products id="cart_products"></products>
    <Cartfoot></Cartfoot>
  </div>
</template>

<script>
import Carthead from './Carthead'
import Cartbody from './Cartbody'
import Cartfoot from './Cartfoot'
import products from '../index/products'
export default {
  components:{
      Carthead:Carthead,
      Cartbody:Cartbody,
      Cartfoot:Cartfoot,
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