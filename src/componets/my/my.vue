<template>
  <div class="wrapper">
    <myhead></myhead>
    <mynav></mynav>
    <mybody></mybody>
  </div>
</template>

<script>
import Myhead from './Myhead'
import Mynav from './Mynav'
import Mybody from './Mybody'
export default {
  components:{
      Myhead:Myhead,
      Mynav:Mynav,
      Mybody:Mybody
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