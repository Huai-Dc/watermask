import Vue from 'vue'
import App from './App.vue'
// 注册自定义指令
import './directives'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
