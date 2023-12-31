// 引入Vue
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入VueRouter
import VueRouter from 'vue-router'
import router from './router'
// 应用VueRouter
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // router:'hello'   // 会报错 不支持自定义
  router
})