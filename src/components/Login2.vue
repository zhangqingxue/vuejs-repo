<template>
  <!--<div class="login">-->
  <div class="login_bg">
    <img src="../assets/dangdang.jpg">
    <div class="homepage-module clearfix">
      <p class="pass_login">密码登录</p>
      <el-row style="margin-top:20px; margin-bottom:20px">
        <el-input class="el-inputs" id="name" v-model="name" size="large" placeholder="请输入帐号" clearable>
          <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
        </el-input>
        <p class="tips error_words" id="user_mindstyle">
          <span class="login_user_error" id="login_user_error" style="display: none">请输入您的用户名</span>
        </p>
      </el-row>
      <el-row style="margin-top:20px; margin-bottom:20px">
        <el-input class="el-inputs" v-model="pwd" @input="change($event)" size="large"
                  placeholder="请输入密码" show-password clearable>
          <i slot="prefix" class="el-input__icon el-icon-key"></i>
        </el-input>
        <p class="tips error_words" id="pass_mindstyle">
          <span class="login_pwd_error" id="login_pwd_error" style="display: none">请输入您的登录密码</span>
        </p>
      </el-row>
      <span class="err-msg"></span>
      <el-row style="margin-top:20px; margin-bottom:20px">
        <el-button type="primary" class="el-login" @click="login()">登录</el-button>
      </el-row>
    </div>
  </div>
  <!--</div>-->
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'login',
    data() {
      return {
        name: '',
        pwd: '',
        error: {
          warning: ''
        }
      }
    },

    methods: {
      check(name, pwd) {
        if (!name) {
          $('#login_user_error').css('display', 'inline');
          return false
        }
        if (!pwd) {
          $('#login_pwd_error').css('display', 'inline');
          return false
        }
        return true
      },
      login() {
        const {name, pwd} = this;
        if (!this.check(name, pwd)) return;
        this.$router.push({name: 'main'});
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
    /*background-size: cover;*/
    /*background-repeat: no-repeat;*/
    /*background-position: center center;*/
    /*height: 100%;*/
    /*width: 100%;*/
    /*position: fixed;*/
  }

  /*.login_bg {*/
  /*background-size: cover;*/
  /*background-image: url(../assets/dangdang.jpg);*/
  /*background-repeat: no-repeat;*/
  /*background-position: center center;*/
  /*height: 62%;*/
  /*width: 100%;*/
  /*position: fixed;*/
  /*margin-top: 5%;*/
  /*}*/

  .pass_login {
    font-size: 18px;
    color: #3c3c3c;
    margin-top: 5px;
  }

  .el-inputs {
    width: 300px;
    text-align: center;
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
    float: right;
    width: 320px;
    color: #6e6e6e;
    margin: 90px auto 0;
    position: relative;
    border: 1px solid #eef2f4;
    box-shadow: 0px 1px 2px #eee;
    margin-top: 15%;
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }

  img {
    border: none;
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

  p, ol, ul, dl, dd {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  .el-login {
    width: 300px;
    margin-top: 20px;
  }

</style>
