// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Vue.use(VueNativeSock, 'ws://localhost:5000/ws', {
//   reconnection: true, // (Boolean) whether to reconnect automatically (false)
//   reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
//   reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
// });

//Vue.use(VueNativeSock, 'ws://localhost:5000', { store: store, format: 'json' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
