import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import './assets/index.css'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')


