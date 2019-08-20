// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui//lib/index.js'

import global_ from './components/Global' // 引用文件
import Home from './components/Home.vue'

import Login from './components/Login.vue'
Vue.config.productionTip = false
Vue.prototype.GLOBAL = global_ // 挂载到Vue实例上面
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueResource)
const routes = [
  { name: 'Home', path: '/Home', component: Home },
  { name: 'Login', path: '/', component: Login }
]

var router = new VueRouter({
  routes
})
const App = {
  template: '<router-view></router-view>'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
