import Vue from 'vue'
import App from './App.vue'
import './assets/styles.css'
// import router  from './router.js';
import VueRouter from 'vue-router'

const router = new VueRouter()

Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
