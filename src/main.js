import Vue from 'vue';

import router from './router';
import App from './components/App'

import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});