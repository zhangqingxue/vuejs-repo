<template>
  <div class="login">
    <div class="header"></div>
    <div class="login_bg">
      <!--<img src="../assets/dangdang.jpg">-->
      <div class="homepage-module">
        <div class="wrap">
          <p class="pass_login">密码登录</p>
          <el-row style="margin: 20px 5px">
            <el-input class="el-inputs" id="name" v-model="name" size="large" placeholder="请输入帐号" clearable>
              <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
            </el-input>
            <p class="tips error_words" id="user_mindstyle">
              <span class="login_user_error" id="login_user_error" style="display: none">请输入您的用户名</span>
            </p>
          </el-row>
          <el-row style="margin: 20px 5px">
            <el-input class="el-inputs" v-model="pwd" @input="change($event)" size="large" placeholder="请输入密码"
                      show-password clearable>
              <i slot="prefix" class="el-input__icon el-icon-key"></i>
            </el-input>
            <p class="tips error_words" id="pass_mindstyle">
              <span class="login_pwd_error" id="login_pwd_error" style="display: none">请输入您的登录密码</span>
            </p>
          </el-row>
          <span class="err-msg"></span>
          <el-row style="margin: 20px 5px">
            <el-button type="primary" class="el-login" @click="login()">登录</el-button>
          </el-row>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        name: '',
        pwd: '',
        screenWidth: window.document.body.clientWidth,
        screenHeight: document.body.clientHeight,
        error: {
          warning: ''
        }
      }
    },
    // template: '<router-view></router-view>',
    methods: {
      check(name, pwd) {
        console.log(this.name = this.$data.name) // 两者等价
        if (!name) {
          this.$('#login_user_error').css('display', 'inline');
          return false
        }
        if (!pwd) {
          this.$('#login_pwd_error').css('display', 'inline');
          return false
        }
        return true
      },
      login() {
        const {name, pwd} = this;
        if (!this.check(name, pwd)) return;
        console.log('我这里通过了。。。。');
        const url = this.urlPrefix + '/base/userList';
        console.log(url);
        this.$http.post(url, {}, {})
          .then(() => {
            // 请求成功回调
            console.log('success')

          }, () => {
            // 请求失败回调
            console.log('error')

          });
        this.$router.push({name: 'Home'});
      },

      // 解决密码框输入无法实时显示问题
      change(e) {
        this.$forceUpdate();
      }
    }
  }

</script>

<style scoped lang="scss">
  .login {
    height: 100%;
    width: 100%;
    position: absolute;
    min-width: 1500px;
    min-height: 700px;
  }

  .login_bg {
    background-size: cover;
    background-image: url(../assets/dangdang.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    height: 600px;
    width: 100%;
    position: relative;
    margin-top: 5%;

  }


  .pass_login {
    font-size: 18px;
    color: #3c3c3c;
    margin-top: 5px;
    height: 30px;
  }

  .el-inputs {
    width: 300px;
    /*margin-top: 5px;*/
    /*margin-bottom: 5px;*/
  }


  div {
    display: block;
  }

  .homepage-module {
    background: #fff;
    padding: 15px 25px 15px 15px;
    *padding: 15px 25px 20px 15px;
    width: 300px;
    color: #6e6e6e;
    /*margin: 130px 10% 0 10%;*/
    position: absolute;
    top: 160px;
    right: 18%;
    border: 1px solid #eef2f4;
    box-shadow: 0px 1px 2px #eee;
  }

  img {
    border: none;
    position: absolute;
    z-index: -1;
  }

  .error_words {
    color: #f42e00;
  }

  .tips {
    height: 10px;
    line-height: 30px;
    padding-left: 10px;
    width: 158px;
  }

  html {
    overflow-y: scroll;
    overflow-x: scroll;
  }

  body {
    min-width: 1360px;
    overflow: scroll;
  }

  p, ol, ul, dl, dd {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  .el-login {
    width: 300px;
  }

</style>
