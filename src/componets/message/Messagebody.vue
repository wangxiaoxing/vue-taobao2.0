<template>
  <div class="wrapper">
    <div class="orange" :style="{background:background}">
    </div>
    <div class="message" v-for="item in items">
      <div class="message_left">
        <img :src=item.url>
      </div>
      <div class="message_right">
        <div class="message_right_top">
          <span>{{item.shopName}}</span>
          <span>{{item.date}}</span>
        </div>
        <div class="message_right_bottom">
          <span>{{item.message}}</span>
        </div>
      </div>
    </div>
    <div class="earlyMessage">
      <span>
        <i class="iconfont icon-daojishi"></i>&nbsp;两周前的消息</span>
    </div>
    <div class="message" v-for="item in items">
      <div class="message_left">
        <img :src=item.url>
      </div>
      <div class="message_right">
        <div class="message_right_top">
          <span>{{item.shopName}}</span>
          <span>{{item.date}}</span>
        </div>
        <div class="message_right_bottom">
          <span>{{item.message}}</span>
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
        items:[{
            url:require('../../assets/imgs/puzi.jpg'),
            shopName:'良品铺子',
            date:'18/07/21',
            message:'[4条]深夜好店|￥9.9给你精致一人食'
        },{
            url:require('../../assets/imgs/adidas.jpg'),
            shopName:'Adidas官方旗舰店',
            date:'18/07/18',
            message:'[验收提醒]'
        },{
            url:require('../../assets/imgs/senma.jpg'),
            shopName:'森马官方旗舰店',
            date:'18/07/12',
            message:'#欢聚粉丝趴预告#[预热时间：7月19日 活动]' 
        },{
            url:require('../../assets/imgs/youyiku.jpg'),
            shopName:'优衣库官方旗舰店',
            date:'18/07/12',
            message:'[验收提醒]'
        },{
            url:require('../../assets/imgs/gap.jpg'),
            shopName:'Gap官方旗舰店',
            date:'18/7/10',
            message:'请勿通过银行卡或者支付宝直接转账、汇款进陌生账户'
        }]
    }
  },
  watch:{},
  computed:{
      background(){
        return this.$store.state.user.background;
    }
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.orange {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.6rem;
}
.message {
  width: 95%;
  margin: 0.2rem auto;
  height: 0.392rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.message_left {
  width: 12%;
  height: 100%;
  display: flex;
}
.message_left img {
  width: 100%;
}
.message_right {
  width: 86%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.16rem;
}
.message_right_bottom {
  font-size: 0.14rem;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.message_right_top {
  display: flex;
  justify-content: space-between;
}
span:nth-child(2) {
  font-size: 0.12rem;
  color: gray;
}
.earlyMessage {
  width: 90%;
  margin: 0 auto;
  font-size: 0.14rem;
  color: gray;
  font-weight: bold;
}
.earlyMessage i {
  color: gold;
}
</style>