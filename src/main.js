import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VeeValidate)
Vue.use(VueRouter)
import App from './components/App.vue'
import Home from './components/Home.vue'
import Admin from './components/Admin.vue'
import RegisterAdmin from './components/RegisterAdmin.vue'
import { Validator } from 'vee-validate';
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/admin', component: Admin},
    {path: '/register-admin', component: RegisterAdmin},
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
    
})
