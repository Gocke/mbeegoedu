import './assets/js/rem'
import './assets/css/rem.css'
import Vue from 'vue'
import App from './index.vue'
import router from "./router"
import { Button } from 'vant';
Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
