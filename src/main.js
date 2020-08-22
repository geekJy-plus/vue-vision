import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/global.less'
// 请求基本路径的配置
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
    // 将axios挂载到vue的原型上
Vue.prototype.$http = axios
    //将全局的echarts对象挂载到Vue的原型对象上
Vue.prototype.$echarts = window.echarts
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')