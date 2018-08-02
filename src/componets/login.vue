<template>
  <div>
    <div class="login_info">
      <div class="login_info1">
        您需要登录才能继续访问
      </div>
      <a class="login_info2" @click="jumpToIndex">
        回到首页</a>
    </div>
    <div class="login_body">
      <div>
        <div class="login_icon">
        </div>
        <div v-show="isMessageLogin" class="account">
          <mt-field v-model="phone" placeholder="请输入手机号码"></mt-field>
          <mt-field v-model="captcha" placeholder="验证码">
            <a class='getCaptcha' @click="getCaptcha">|获取短信验证码</a>
          </mt-field>
        </div>
        <div v-show="!isMessageLogin" class="account">
          <mt-field v-model="account" placeholder="手机号/邮箱/会员名"></mt-field>
          <mt-field type="password" v-model="password" placeholder="请输入密码"></mt-field>
        </div>
        <div class="account_foot">
          <a @click="jumpToReg">免费注册</a>
          <a v-show="!isMessageLogin" @click="forgetPwd">忘记密码</a>
        </div>
        <div class="login_button">
          <mt-button @click="login" type="primary" size="large" style="border-radius:0.99rem; margin:.3408rem auto 0;">登录</mt-button>
        </div>
        <div class="login_button">
          <mt-button v-show='isMessageLogin' @click='accountLogin' type="primary" size="large" style="border-radius:0.99rem; margin:.1704rem auto 0;
              background-color:white;color:#FF5000;border:solid 1px #ff5000">账户密码登录</mt-button>
          <mt-button v-show='!isMessageLogin' @click='messageLogin' type="primary" size="large" style="border-radius:0.99rem; margin:.1704rem auto 0;
              background-color:white;color:#FF5000;border:solid 1px #ff5000">短信验证码登录</mt-button>
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
            account: "",
            password: "",
            phone: "",
            captcha: "",
            isMessageLogin: false
        };
    },
    watch: {},
    computed: {},
    methods: {
        //回到首页
        jumpToIndex() {
            this.$router.push("/");
        },
        //免费注册
        jumpToReg() {
            this.$router.push("/reg");
        },
        //账号登录按钮
        accountLogin() {
            this.isMessageLogin = false;
        },
        messageLogin() {
            this.isMessageLogin = true;
        },
        //忘记密码
        forgetPwd() {
            this.$messagebox.alert("请通过手机验证码登录").then(() => {
                this.isMessageLogin = true;
            });
        },
        //登录按钮
        login() {
            //发送ajax,登录信息保存到state中
            var userInfo = {};
            if (this.isMessageLogin == true) {
                if (this.phone == "" || this.captcha == "") {
                    this.$messagebox.alert("请输入所有信息");
                    return;
                } else if (
                    !this.phone.match(
                        /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
                    )
                ) {
                    this.$messagebox.alert("手机号格式错误");
                    return;
                } else {
                    userInfo = {
                        phone: this.phone,
                        captcha: this.captcha
                    };
                }
            } else {
                if (this.account == "" || this.password == "") {
                    this.$messagebox.alert("请输入所有信息");
                    return;
                } else {
                    userInfo = {
                        account: this.account,
                        password: this.password
                    };
                }
            }
            let that = this;
            this.$axios({
                method: "post",
                url: "/loginIn",
                data: userInfo
            })
                .then(function(response) {
                    //登录成功则将登录信息保存到state中
                    that.$store.commit("update", response.data);
                    //跳转到首页
                    if (response.data.isLogin == true) {
                        that.$router.push("/");
                    }
                })
                .catch(function(response) {
                    console.log(response);
                });
        },
        //获取短信验证码
        getCaptcha() {
            this.$messagebox.alert("验证码已发送,请查收");
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped>
.login_info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(238, 238, 238);
  font-size: 0.16rem;
  font-weight: bold;
  height: 0.52rem;
}

.login_info2 {
  color: rgb(153, 153, 153);
}

.login_body {
  width: 90%;
  margin: 0 auto;
}

.login_icon {
  width: 0.8rem;
  height: 0.8rem;
  background: url('https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png')
    no-repeat;
  margin: 0.47rem auto 0;
  background-size: contain;
}

.account {
  margin: 0.432rem auto 0;
}

.account_foot {
  font-size: 0.1344rem;
  display: flex;
  justify-content: space-between;
  color: #555;
  margin: 0.2112rem auto 0;
}
.getCaptcha {
  color: #ff5000;
}
</style>