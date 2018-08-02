<template>
  <div class="wrapper">
    <div class="my_first">
      <div class="my_first_wrapper">
        <div class="first_head">
          <span>我的订单</span>
          <span>查看更多订单
            <i class="iconfont icon-icondayu"></i>
          </span>
        </div>
        <div class="first_middle">
          <div class="first5" v-for="item1 in item1s">
            <div>
              <i :class="item1.class"></i>
            </div>
            <div>{{item1.name}}</div>
          </div>
        </div>
        <div class="first_foot">
          <div class="first_foot_wrapper">
            <div class="frist_foot_top">
              <span>最新物流</span>
              <span>07-24</span>
            </div>
            <div class="first_foot_bottom">
              <div class="first_foot_bottom_img">
                <img src="../../assets/imgs/youyiku.jpg">
              </div>
              <div class="first_foot_wuliu">
                <div>
                  <i class="iconfont icon-yiqianshou"></i>&nbsp;
                  <span>已签收</span>
                </div>
                <div style="color:lightgray;">
                  快件已被 已签收 签收
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="my_first" style="margin-top:.1rem;">
      <div class="my_first_wrapper">
        <div class="first_head">
          <span>必备工具</span>
          <span>查看全部工具
            <i class="iconfont icon-icondayu"></i>
          </span>
        </div>
      </div>
      <div class="first_middle">
        <div class="first5 second4" v-for="item2 in item2s">
          <div>
            <i :class="item2.class"></i>
          </div>
          <div>{{item2.name}}</div>
        </div>
      </div>
      <div class="first_middle">
        <div class="first5 second4" v-for="item3 in item3s">
          <div>
            <i :class="item3.class"></i>
          </div>
          <div>{{item3.name}}</div>
        </div>
      </div>
    </div>
    <div class="myskin">
      <div class="myskin_wrapper">
        <div class="skin_head first_head">
          <span>我的皮肤</span>
        </div>
        <div class="skin_middle">
          <div class="skin_img" v-for="item4 in item4s" @click="changeSkin">
            <div><img :src=item4.url></div>
            <div>{{item4.name}}</div>
          </div>
        </div>
        <div>
          <mt-button type="primary" size="large" style="border-radius:0.99rem;" @click="randomChangeSkin">一键换肤</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        components: {},
        props: {},
        data() {
            return {
                item1s: [{
                        class: 'iconfont icon-daifukuan',
                        name: '待付款'
                    },
                    {
                        class: 'iconfont icon-daifahuo',
                        name: '待发货'
                    },
                    {
                        class: 'iconfont icon-daishouhuo',
                        name: '待收货'
                    },
                    {
                        class: 'iconfont icon-daipingjia',
                        name: '待评价'
                    },
                    {
                        class: 'iconfont icon-tuikuan',
                        name: '退款/售后'
                    },
                ],
                item2s: [{
                        class: 'iconfont icon-skinfill',
                        name: '主题换肤'
                    },
                    {
                        class: 'iconfont icon-lingquanzhongxin',
                        name: '领券中心'
                    },
                    {
                        class: 'iconfont icon-rechargefill',
                        name: '闲置换钱'
                    },
                    {
                        class: 'iconfont icon-xiaomi1',
                        name: '客服小蜜'
                    },
                ],
                item3s: [{
                        class: 'iconfont icon-huabei',
                        name: '花呗'
                    },
                    {
                        class: 'iconfont icon-newsfill',
                        name: '阿里宝卡'
                    },
                    {
                        class: 'iconfont icon-liuyan',
                        name: '我的评价'
                    },
                    {
                        class: 'iconfont icon-jichutubiao_more_',
                        name: '更多'
                    },
                ],
                item4s:[{
                    url:require('../../assets/imgs/阿里巴巴.png'),
                    name:'官方默认'
                },{
                    url:require('../../assets/imgs/粉色少女系列.png'),
                    name:'粉色少女'
                },{
                    url:require('../../assets/imgs/爱心冬天.png'),
                    name:'爱心冬天'
                }]
            };
        },
        watch: {},
        computed: {},
        methods: {
            changeSkin(event) {
                var el = event.currentTarget.children[1].innerText;
                this.$store.commit('changeSkin',el);
            },
            randomChangeSkin(){
                let el=["官方默认","粉色少女",'爱心冬天'];
                let skin=this.$store.state.user.background;
                let index=0;
                switch(skin){
                    case 'linear-gradient(to right,#ff9900, #FF5000)':index=1;break;
                    case 'pink':index=2;break;
                    default:index=0;
                }
                this.$store.commit('changeSkin',el[index]);
            }
        },
        created() {},
        mounted() {}
    };
</script>
<style scoped>
.my_first {
  background: white;
  height: 2.1rem;
  width: 95%;
  margin: 2.2rem auto 0;
  border-radius: 0.1rem;
}

.my_first_wrapper {
  width: 95%;
  margin: 0 auto;
}

.first_head {
  height: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.16rem;
}

span:nth-child(1) {
  font-weight: bold;
}

span:nth-child(2) {
  color: lightgray;
  font-size: 0.14rem;
}

.first_middle {
  height: 0.9rem;
  display: flex;
  width: 95%;
  margin: 0 auto;
  background: white;
  align-items: center;
  justify-content: space-between;
}

.first5 {
  display: flex;
  font-size: 0.14rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60%;
}

.second4 {
  width: 0.56rem;
}

.first5 i {
  font-size: 0.25rem;
  /* color: #FF5000; */
  background: linear-gradient(to right, #ff9900, #ff5000);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.first_foot {
  background: #f3ebeb;
  width: 95%;
  height: 0.7rem;
  margin: 0 auto;
  border-radius: 0.1rem;
}

.first_foot_wrapper {
  width: 95%;
  margin: 0 auto;
}

.frist_foot_top {
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
  color: lightgray;
}

.first_foot_bottom {
  display: flex;
}

.first_foot_bottom_img {
  width: 15%;
  height: 0.4202rem;
  display: flex;
}
.icon-yiqianshou {
  font-size: 0.14rem;
}
img {
  width: 100%;
}

.first_foot_wuliu {
  font-size: 0.14rem;
  margin-left: 0.1rem;
  color: #0099ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.first_foot_wuliu span {
  color: #0099ff;
  opacity: 1;
}
.skin_head {
  justify-content: center;
}
.skin_middle {
  display: flex;
  justify-content: space-between;
  height: 1.2rem;
  align-items: flex-start;
}
.skin_img {
  width: 30%;
  height: 1.1213rem;
  font-size: 0.16rem;
}
.skin_img img {
  width: 100%;
}
.skin_img div {
  text-align: center;
  font-size: 0.14rem;
  color: gray;
}
.myskin {
  background: white;
  width: 95%;
  margin: 0.2rem auto 0;
  border-radius: 0.1rem;
}
.myskin_wrapper {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  height: 2.2rem;
}
</style>