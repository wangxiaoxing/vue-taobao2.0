<template>
  <div class="wrapper">
    <div class="guessLike">
      <i class="iconfont icon-hengxiandianzuo"></i>&nbsp;
      <i class="iconfont icon-search_light"></i>
      <span>&nbsp;猜你喜欢</span>&nbsp;
      <i class="iconfont icon-hengxiandianyou"></i>
    </div>
    <div class="products">
      <div class="item">
        <img src="../../assets/products/box.png">
        <div class="description">
          [为你推荐]专柜正品田园柳编非藤编收纳桶塑料大号脏衣篮子储物箱首饰盒篮子
        </div>
        <div class="price">
          <div class="priceNum">￥28</div>
          <div class="payNum">21人付款</div>
        </div>
      </div>
      <div class="item">
        <img src="../../assets/products/cup.png">
        <div class="description">
          [为你推荐]美国单不粘迷你奶锅汤锅泡面锅米糊锅巧克力马卡龙棒棒糖熬糖糖水
        </div>
        <div class="price">
          <div class="priceNum">￥28.8</div>
          <div class="payNum">216人付款</div>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="item">
        <img src="../../assets/products/wood.png">
        <div class="description">
          [为你推荐]碳化竹捣蒜罐无漆植物油涂制研钵蒜臼美食达人厨房用具设计礼物
        </div>
        <div class="price">
          <div class="priceNum">￥39</div>
          <div class="payNum">22人付款</div>
        </div>
      </div>
      <div class="item">
        <img src="../../assets/products/bed.png">
        <div class="description">
          [为你推荐]美式卫生间淋浴帘特惠田园涤纶布料加厚防水防霉浴室窗帘索莎娜
        </div>
        <div class="price">
          <div class="priceNum">￥30</div>
          <div class="payNum">31人付款</div>
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
.guessLike {
  display: flex;
  font-size: 0.35rem;
  color: white;
  justify-content: center;
  height: 0.35rem;
}
i {
  color: #ff5000;
  font-size: 0.2rem;
}
span {
  color: #ff5000;
  font-size: 0.17rem;
}
.products {
  display: flex;
  justify-content: space-between;
  font-size: 0.125rem;
}
.item {
  width: 49%;
}
img {
  width: 100%;
}
.description {
  margin: 0.05rem;
  height: 0.31rem;
  word-break: break-all;
  overflow: hidden;
}
.price {
  display: flex;
  height: 0.35rem;
  justify-content: space-between;
  align-items: center;
}
.priceNum {
  color: #ff5000;
  font-size: 0.14rem;
}
.payNum {
  color: rgb(153, 153, 153);
  font-size: 0.12rem;
}
</style>