<template>
    <div class="wrapper">
        <mt-header :title="searchKey">
            <router-link to="/searchResult" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="proImg">
            <img :src=pro.url>
        </div>
        <div class="pro_desc">
            <span class="pro_name">{{pro.name}}</span>
            <span class="pro_price">￥{{pro.price}}</span>
            <div class="pro_location">
                <span>快递：{{pro.express}}</span>
                <span>月销量{{pro.paid}}件</span>
                <span>{{pro.location}}</span>
            </div>
        </div>
        <div class="sale_activity">
            <div class="sale_message">
                <div>
                    <span class="color_red">促销&nbsp;</span>
                    <span>满200元,享部分地区包邮</span>
                </div>
                <div>
                    <span class="color_red">积分&nbsp;</span>
                    <span>购买可得39积分</span>
                </div>
            </div>
            <div class="sale_icon">
                <i class="iconfont icon-shenglve"></i>
            </div>
        </div>
        <div class="select" @click="select">
            <div class="select_left">选择</div>
            <div class="select_middle">配送至:余杭区,请选择主要颜色/尺码</div>
            <div class="select_right">
                <i class="iconfont icon-icondayu"></i>
            </div>
        </div>
        <div class="buy">
            <div class="tubiao">
                <i class="iconfont icon-dianpu"></i>
                <span>店铺</span>
            </div>
            <div class="tubiao">
                <i class="iconfont icon-kefu"></i>
                <span>客服</span>
            </div>
            <div class="tubiao">
                <i class="iconfont icon-shoucang"></i>
                <span>收藏</span>
            </div>
            <!-- 改 -->
            <div class="addToCart" @click="popupVisible=true;">
                <span>加入购物车</span>
            </div>
            <div class="addToCart red" @click="popupVisible=true;">
                <span>立即购买</span>
            </div>
        </div>

        <!-- 弹出的选择框 -->
        <mt-popup v-model="popupVisible" position="bottom">
            <div class="select_color">
                <span class="mainColor">主要颜色</span>
                <div class="colors">
                    <div class="color" v-for="color in colors">
                        <span @click="selectColor">{{color}}</span>
                    </div>
                </div>
            </div>
            <div class="select_color">
                <span class="mainColor">尺码</span>
                <div class="colors">
                    <div class="color" v-for="size in sizes">
                        <span @click="selectSize">{{size}}</span>
                    </div>
                </div>
            </div>
            <div class="select_num">
                <span>购买数量</span>
                <div>
                    <div class="select_num_input">
                        <button class="buttonStyle" @click="reduce">-</button>
                        <input v-model="num" class="inputStyle"></input>
                        <button class="buttonStyle" @click="num++">+</button>
                    </div>
                </div>
            </div>
            <div class="select_button">
                <div class="button orange" @click="addToCart">
                    加入购物车
                </div>
                <div class="button red" @click="addToCart">
                    马上抢
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            popupVisible: false,
            num: 1,
            size: "",
            color: "",
            colorSelected: true,
            sizeSelected: true
        };
    },
    watch: {},
    computed: {
        pro() {
            //获取搜索结果页选中的商品信息
            return this.$store.state.product.selectedProduct;
        },
         searchKey(){
            return this.$store.state.product.searchKey;
        },
        sizes(){
            return this.pro.sizes;
        },
        colors(){
            return this.pro.colors;
        }
    },
    methods: {
        //将商品信息保存到state中，点击加入购物车后的事件
        addToCart() {
            //先判断是否已经登录
            if (!this.$store.state.user.isLogin) {
                this.$router.push("/login");
                return;
            }
            if (this.color != "" && this.size != "") {
                let obj = {};
                obj.url = this.pro.url;
                obj.name = this.pro.name;
                obj.size = this.color + ";" + this.size;
                obj.num = this.num;
                obj.selected = false;
                obj.price = this.pro.price;
                obj.owner = this.pro.owner;
                this.$store.commit("addToCart", obj);
                this.$messagebox.alert("添加成功，在购物车等亲").then(() => {
                    this.popupVisible = false;
                });
            } else {
                this.$messagebox.alert("请选择商品属性");
            }
        },
        //弹出选择框事件
        select() {
            this.popupVisible = true;
        },
        //商品数量减少
        reduce() {
            if (this.num > 0) {
                this.num--;
            } else {
                this.num = 0;
            }
        },
        //选择商品颜色事件
        selectColor(event) {
            let colors = $(event.target)
                .parent()
                .parent()
                .children();
            colors.map(function(index, item) {
                item.children[0].style.color = "black";
            });
            $(event.target).css({ color: "#FF5000" });
            this.color = event.target.innerHTML;
        },
        //选择商品尺寸事件
        selectSize(event) {
            let sizes = $(event.target)
                .parent()
                .parent()
                .children();
            sizes.map(function(index, item) {
                item.children[0].style.color = "black";
            });
            $(event.target).css({ color: "#FF5000" });
            this.size = event.target.innerHTML;
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
.proImg {
    width: 3.44rem;
    height: 3.44rem;
    display: flex;
}
img {
    width: 100%;
}
.pro_desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.15rem;
    word-break: break-all;
    color: #4b566a;
}
.pro_name {
    height: 0.4rem;
    display: block;
    padding: 0.1rem 0.1rem 0;
}
.pro_price {
    color: #ff0036;
    font-size: 0.24rem;
    height: 0.36rem;
    padding: 0 0.1rem;
}
.pro_location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.12rem;
    color: #999;
    height: 0.3rem;
    padding: 0 0.1rem;
}
.buy {
    display: flex;
    /* position:fixed; */
    /* bottom:0; */
    height: 0.5rem;
    border-top: 1px solid #f2f2f2;
}
.tubiao {
    display: flex;
    flex-direction: column;
    font-size: 0.12rem;
    color: #999;
    justify-content: center;
    align-items: center;
    width: 0.5rem;
}
.tubiao i {
    font-size: 0.25rem;
}
.addToCart {
    width: 0.97rem;
    background: #ff9500;
    display: flex;
    justify-content: center;
    align-items: center;
}
.addToCart span {
    font-size: 0.15rem;
    font-weight: 400;
    color: white;
}
.red {
    background: #ff0036;
    /* color: #ff0036; */
}
.orange {
    background: #ff9500;
}
.sale_activity {
    height: 0.4rem;
    padding: 0.12rem 0.12rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.12rem;
}
.sale_message {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.color_red {
    color: #ff0036;
}
.sale_icon {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
}
.sale_icon i {
    font-size: 0.18rem;
}
.select {
    height: 0.22rem;
    padding: 0 0.1rem;
    color: #051b28;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.12rem;
}
.select_left {
    color: #999;
}
.selcted_middle {
    width: 2.86rem;
}
.icon-icondayu {
    font-size: 0.16rem;
}
.select_color {
    width: 3.3rem;
    /* height: 1.7rem; */
    height: 170px;
    margin: 0 auto;
    border-top: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.mainColor {
    /* font-size: 0.13rem; */
    font-size:14px;
    color: #666;
    font-weight: 400;
    /* height: 0.3rem; */
    height: 30px;
}
.colors {
    display: flex;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
}
.color {
    width: 30%;
    background: #f5f5f5;
    /* font-size: 0.13rem; */
    font-size:14px;
    /* height: 0.3rem; */
    height: 30px;
    margin-left: 0.05rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.select_num {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    color: #666;
}
.select_num span {
    /* font-size: 0.14rem; */
    font-size:14px;
    display: flex;
    align-items: center;
}
.select_num_input {
    /* height: 0.4rem; */
    height: 48px;
    display: flex;
    align-items: center;
}
.select_button {
    display: flex;
    /* height: 0.48rem; */
    height: 48px;
}
.button {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 0.15rem; */
    font-size: 16px;
    color: white;
}
</style>