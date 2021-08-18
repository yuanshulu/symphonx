import Vue from 'vue'
import App from './App.vue'
import request from './assets/js/request.js'
import Vuex from '@/store'
Vue.config.productionTip = false
Vue.prototype.$api = request
Vue.prototype.$store = Vuex
new Vue({
  render: h => h(App),
}).$mount('#app')
