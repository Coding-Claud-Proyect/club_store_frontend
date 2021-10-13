import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)
axios.defaults.baseURL = "http://localhost:3000"

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
