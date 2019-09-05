import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 加入eventBus
const eventBus = new Vue()
Vue.prototype.$EventBus = eventBus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
