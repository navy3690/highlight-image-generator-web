import Vue from 'vue'
import App from './App.vue'
import './assets/styles.css'
import router  from './router.js';
// import * as VueSpinnersCss from "vue-spinners-css";
// import Loading from "vue-loading-overlay";
// import "vue-loading-overlay/dist/vue-loading.css";
// Init plugin
// Vue.use(Loading);

// Vue.use(VueSpinnersCss)
// import loader from "vue-ui-preloader";
//
// Vue.use(loader);
// import axios from 'axios'
// import AxiosPlugin from 'vue-axios-cors';
//
// Vue.use(AxiosPlugin);
// Vue.config.productionTip = false
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  render: h => h(App),
    router,
}).$mount('#app')
