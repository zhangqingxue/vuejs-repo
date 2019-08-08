<template>
  <div class="login">
    <div class="input-wrap-parent">
      <div class="input-wrap">
        <input type="text" v-model="name"/>
        <span v-if="error.name" class="err-msg">{{error.name}}</span>
      </div>
      <div class="input-wrap">
        <input type="password" v-model="pwd"/>
        <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
      </div>
      <div class="input-wrap">
        <button @click="login">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      pwd: '',
      error: {
        name: '',
        pwd: ''
      }
    }
  },

  methods: {
    check(name, pwd) {
      if (!name) {
        this.error.name = '请输入姓名'
        return false
      }
      if (!pwd) {
        this.error.pwd = '请输入密码'
        return false
      }
      return true
    },
    login () {
      const {name, pwd} = this;
      if (!this.check(name, pwd)) return;
      console.log('OK');
      this.$router.push({name: 'main'});
    }
  }
}
</script>

<style scoped lang="scss">
  /*.input-wrap-parent {*/
    /*width: 300px;*/
    /*margin: 10% auto;*/
  /*}*/
  .login{
    background-size: cover;
    background-image:url(../assets/yekong.jpg);
    background-repeat:no-repeat;
    background-position:center center;
    height: 100%;
    width: 100%;
    /*background-attachment:fixed;*/
    /*display: block;*/
    position: fixed;
  }
</style>
