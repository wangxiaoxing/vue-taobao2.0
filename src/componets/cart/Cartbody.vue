<template>
  <div>
    <div class="cart_nav" v-for="(cart,index) in computedCarts">
      <div class="cart_wrapper">
        <div class="cart_head">
          <div class="cart_head_left">
            <i class="iconfont icon-xuanzhong" v-if="cart.totalSelected" @click="changeTotalSelected(index)"></i>
            <i class="iconfont icon-round" v-else @click="changeTotalSelected(index)"></i>&nbsp;
            <i class="iconfont icon-tianmao3"></i>&nbsp;
            <span>{{cart.owner}}</span>&nbsp;
            <i class="iconfont icon-right"></i>
          </div>
          <div @click="deleteProduct(index)">删除</div>
        </div>
        <div class="cart_body" v-for="(product,index) in cart.products">
          <i class="iconfont icon-xuanzhong" v-if="product.selected" @click="product.selected=!product.selected"></i>
          <i class="iconfont icon-round" v-else @click="product.selected=!product.selected"></i>
          <div class="imgwrapper">
            <img :src=product.url>
          </div>
          <div class="cart_info">
            <div>{{product.name}}</div>
            <div class="cart_num">{{product.size}}&nbsp;
              <i class="iconfont icon-jiantou-copy"></i>
            </div>
            <div class="cart_price">
              <span style="font-size:.16rem;color:#FF5000;">￥{{product.price}}</span>
              <div>
                <div>
                  <button class="buttonStyle" @click="reduce(product)">-</button>
                  <input v-model=product.num class="inputStyle"></input>
                  <button class="buttonStyle" @click="product.num++">+</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    components: {},
    props: {},
    data() {
        return {};
    },
    watch: {
        //点击全选后触发
        allSelected() {
            if (this.allSelected) {
                this.carts.forEach(element => {
                    element.selected = true;
                });
                this.computedCarts.forEach(element => {
                    element.totalSelected = true;
                });
            } else {
                this.carts.forEach(element => {
                    element.selected = false;
                });
                this.computedCarts.forEach(element => {
                    element.totalSelected = false;
                });
            }
        },
        //总价发生改变后触发，将总价格保存到state中
        totalPrice() {
            this.$store.commit("savePrice", this.totalPrice);
        }
    },
    computed: {
        computedCarts() {
            //对carts按商家分类
            let origin = this.$store.state.user.carts;
            let result = [];
            for (let i of origin) {
                if (result.length == 0) {
                    let obj = {};
                    obj.owner = i.owner;
                    obj.totalSelected = false;
                    obj.products = [];
                    obj.products.push(i);
                    result.push(obj);
                } else {
                    let len = result.length;
                    for (let j = 0; j < len; j++) {
                        if (i.owner != result[j].owner) {
                            let obj = {};
                            obj.owner = i.owner;
                            obj.totalSelected = false;
                            obj.products = [];
                            obj.products.push(i);
                            result.push(obj);
                        } else {
                            result[j].products.push(i);
                        }
                    }
                }
            }
            return result;
        },
        carts() {
            return this.$store.state.user.carts;
        },
        totalPrice() {
            let total = 0;
            for (let i of this.carts) {
                if (i.selected) {
                    total += i.num * parseFloat(i.price);
                }
            }
            return total;
        },
        allSelected() {
            return this.$store.state.user.allSelected;
        }
    },
    methods: {
        //点击商家上的全选按钮触发
        changeTotalSelected(index) {
            this.computedCarts[index].totalSelected = !this.computedCarts[index]
                .totalSelected;
            if (this.computedCarts[index].totalSelected) {
                this.computedCarts[index].products.forEach(element => {
                    element.selected = true;
                });
            } else {
                this.computedCarts[index].products.forEach(element => {
                    element.selected = false;
                });
            }
        },
        //减少数量按钮
        reduce(product) {
            let num = product.num;
            if (num > 0) {
                num--;
            } else {
                num == 0;
            }
            product.num = num;
        },
        deleteProduct(index) {
            this.$messagebox.confirm("确定要删除该家店铺的宝贝吗").then(() => {
                let copyCarts = this.carts;
                this.computedCarts[index].products.forEach(element => {
                    for (let j = 0; j < copyCarts.length; j++) {
                        if (element.name == copyCarts[j].name) {
                            copyCarts.splice(j, 1);
                            j--;
                        }
                    }
                });
                this.$store.commit("updateCarts", copyCarts);
            });
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped>
.buttonStyle {
  background: white;
  border: none;
  color: lightgray;
  font-size: 0.18rem;
}
.inputStyle {
  height: 0.1rem;
  width: 0.3rem;
  outline: 0;
  color: #6a6f77;
  text-align: center;
  border: none;
  font-size: 0.14rem;
}
.cart_nav {
  width: 95%;
  margin: 0 auto;
  background: white;
  border-radius: 0.1rem;
}

.cart_wrapper {
  margin: 0.1rem 0.1rem;
}

.cart_head {
  height: 0.4rem;
  display: flex;
  background: white;
  justify-content: space-between;
  align-items: center;
  font-size: 0.12rem;
}

.cart_head_left {
  display: flex;
  align-items: center;
}

.icon-round {
  font-size: 0.24rem;
  opacity: 0.5;
}
.icon-xuanzhong {
  font-size: 0.24rem;
  color: #ff5000;
}

.icon-tianmao3 {
  font-size: 0.2rem;
  color: red;
}

.icon-right {
  font-size: 0.18rem;
}

.cart_body {
  height: 1rem;
  background: white;
  display: flex;
  align-items: center;
}

.imgwrapper {
  display: flex;
  width: 25%;
  height: 0.7679rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

.imgwrapper img {
  width: 100%;
}

.cart_info {
  font-size: 0.12rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cart_price {
  display: flex;
  justify-content: space-between;
}

.cart_price i {
  font-size: 0.12rem;
}

.cart_num {
  color: grey;
}

.cart_num i {
  font-size: 0.14rem;
}

.vux-inline-x-number {
  height: 0.1rem !important;
}
</style>