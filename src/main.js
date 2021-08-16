import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import Axios from 'axios'

//bootstrap css support
import "bootstrap/dist/css/bootstrap.css"

//bootstrap js support
require("bootstrap")
//to support bootstrap js, @popperjs/core error arise & solve npm install @popperjs/core by this cmd

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
