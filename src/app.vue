<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  components:{
   
  },
  props:{},
  data(){
    return {
        // msg:'手动搭建vue项目'
    }
  },
  watch:{},
  computed:{},
  methods:{
     testZepto(){
        console.log($('#app'));
     },
     //post请求用data,默认提交是application/json编码方式，传递到后台的将是序列化后的json字符串 
      axios1(){
          this.$axios({
              method:'post',
              url:'/user1',
              data:{
                  firstName:'ths',
                  lastName:'the'
              }
          })
           .then(function(response){
              console.log(response);
          })
          .catch(function(response){
              console.log(response);
          });
          
      },
      //get请求用params
      axios2(){
          this.$axios({
              method:'get',
              url:'/user1',
              params:{
                  // ID:123
              },
          })
           .then(function(response){
              console.log(response);
              console.log(JSON.stringify(response.data, null, 4));
          })
          .catch(function(response){
              console.log(response);
          });
          
      }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>