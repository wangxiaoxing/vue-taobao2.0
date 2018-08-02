<template>
<div>
  <div class="head" id="my_head1" :style="{width:width+'%',background:background}">
      <div class="top">
          <div class="top_left">
           <i class="iconfont icon-touxiang1"></i>
          <div class="top_middle">
             <div>淘宝测试号</div>
             <div class="top_middle_bottom">
                <i class="iconfont icon-qinqingzhanghu"></i>
                <span>我的亲情账号</span>
                <i class="iconfont icon-icondayu"></i>
             </div>
          </div>
          </div>
          
          <div class="top_right">
          <span>设置</span>
          </div>
      </div>
      <div class="bottom">
         <div class="bottom_list" v-for="item1 in item1s">
            <div>{{item1.num}}</div>
            <div>{{item1.name}}</div>
         </div>
      </div>
      
  </div>
  <div class="head" id="my_head2" :style="{width:width+'%',background:background}">
   <div class="top2">
          <span style="margin-left:-.25rem;">淘宝测试号</span>
          <div class="top2_right">
          <span>设置</span>
          </div>
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
        item1s:[{num:75,name:'收藏夹'},{num:61,name:'关注店铺'},{num:86,name:'足迹'},{num:4,name:'红包卡券'},]
    }
  },
  watch:{},
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
      if(scrollTop>=(0.8*fontSize)){
          $('#my_head2').css('opacity',1);
          $('#my_head1').css('opacity',0);
      }else{
          $('#my_head2').css('opacity',0);
          $('#my_head1').css('opacity',1);
      }
    }
    
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
.head{
    width:100%;
    position:fixed;
    top:0;
}
.top{
    display: flex;
    width:90%;
    margin: 0 auto;
    padding-top: .2rem;
    height: .5rem;
    font-size:.2rem;
    justify-content: space-between;
    align-items: flex-start;
    color:white;
}
.top_left{
    display: flex;
}
.top_middle{
    margin-left:.1rem;
}
.top_middle_bottom{
    /* background: #996600; */
    border-radius: .3rem;
    font-size:.14rem;
    padding:.05rem .05rem;
}
.top_middle_bottom i{
    font-size:.14rem;
}
.icon-touxiang1{
    font-size:.5rem;
}
.top_right i{
    font-size:.2rem;
}
.top_right span{
    font-size:.16rem;
}
.bottom{
    width:95%;
    margin: -.2rem auto 0;
    color:white;
    height: 1.1rem;
    font-size: .15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom:.2rem;
}
.bottom_list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.bottom i{
    font-size:.2rem;
}
#my_head1{
    opacity: 1;
}
#my_head2{
    opacity: 0;
}
.top2{
    height: .3rem;
    display: flex;
    width:50%;
    margin-left: 50%;
    font-size:.16rem;
    justify-content: space-between;
    align-items: center;
    color:white;
}
.top2 i{
    font-size:.16rem;
}

</style>