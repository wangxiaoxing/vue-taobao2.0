<template>
  <div class="wrapper">
    <Wehead></Wehead>
    <Webody></Webody>
  </div>
</template>

<script>
import Wehead from './Wehead'
import Webody from './Webody'
export default {
  components:{
    Wehead:Wehead,
    Webody:Webody
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
  },
  created(){},
  mounted(){
  }
}
</script>
<style scoped>
</style>