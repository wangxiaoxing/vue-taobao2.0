<template>
  <div class="wrapper">
    <Messagehead></Messagehead>
    <Messagenav></Messagenav>
    <Messagebody></Messagebody>
  </div>
</template>

<script>
import Messagehead from './Messagehead'
import Messagenav from './Messagenav'
import Messagebody from './Messagebody'
export default {
  components:{
      Messagehead:Messagehead,
      Messagenav:Messagenav,
      Messagebody:Messagebody
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