// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入vue.js插件
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui//lib/index.js'
import Main from './components/Main.vue'
import Login from './components/Login.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
const routes = [
  { name: 'main', path: '/sub', component: Main },
  { name: 'Login.vue', path: '/', component: Login }
]
var router = new VueRouter({
  routes
})
var App = {
  template: '<router-view></router-view>'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
