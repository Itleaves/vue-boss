import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,//告诉应用使用了仓库
  render: h => h(App)
}).$mount('#app')
