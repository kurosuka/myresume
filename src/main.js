// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import animate from 'animate.css'
Vue.config.productionTip = false

Vue.use(VueFullPage)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
