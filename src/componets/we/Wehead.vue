<template>
  <div>
    <div class="head" id="head1" :style="{width:width+'%',background:background}">
      <div class="top">
        <span>微淘</span>
        <div class="top_right">
          <i class="iconfont icon-search_light"></i>
          <i class="iconfont icon-yonghu"></i>
        </div>
      </div>
      <div class="bottom">
        <div>
          <span>关注</span>
          <div style="height:.02rem;background:white;margin-top:.03rem;"></div>
        </div>
        <span>上新</span>
        <span>推荐</span>
        <span>晒单</span>
        <span>运动</span>
        <span>潮sir</span>
        <span>美食</span>
      </div>
    </div>
    <div class="head" id="head2" :style="{width:width+'%',background:background}">
      <div class="bottom2">
        <div>
          <span>关注</span>
          <div style="height:.02rem;background:white;margin-top:.03rem;"></div>
        </div>
        <span>上新</span>
        <span>推荐</span>
        <span>晒单</span>
        <span>运动</span>
        <span>潮sir</span>
        <span>美食</span>
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
  watch:{

  },
  computed:{
      width(){
      let width=$('body').width().toString().replace(/px/,'');
      let total=$('html').width().toString().replace(/px/,'');
      return width*100/total;
      },
      background(){
        return this.$store.state.user.background;
    }
  },
  methods:{
  handleScroll(){
      var fontSize=$('body').css('font-size').toString().replace(/px/,'');
      //滚动像素
      var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>=(0.5*fontSize)){
          $('#head2').css('opacity',1);
          $('#head1').css('opacity',0);
      }else{
          $('#head2').css('opacity',0);
          $('#head1').css('opacity',1);
      }
    },
  },
  created(){},
  mounted(){
    window.addEventListener('scroll',this.handleScroll);
  },
  destroyed () {//离开该页面需要移除这个监听的事件
  window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped>
.head {
  width: 95.5555556%;
  position: fixed;
  top: 0;
  margin: 0 auto;
}
.top {
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 0.5rem;
  font-size: 0.2rem;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.top_right {
  display: flex;
  justify-content: space-between;
  width: 20%;
}
.top_right i {
  font-size: 0.2rem;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  height: 0.3rem;
  width: 90%;
  margin: 0 auto;
  font-size: 0.13rem;
}
.bottom2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 0.3rem;
  width: 90%;
  margin: 0 auto;
  font-size: 0.13rem;
}
#head1 {
  opacity: 1;
}
#head2 {
  opacity: 0;
}
</style>