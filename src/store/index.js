import Vue from 'vue'
import Vuex from 'vuex'
import order from './modules/order'
Vue.use(Vuex)
const modules = {
    order
}
const store = new Vuex.Store({ modules })
export default store