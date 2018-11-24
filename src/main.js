import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

/* Creating the main Vue instance with the router and store.*/
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
