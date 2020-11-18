import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import {routes} from '../src/routes';
import VueResource from 'vue-resource';
import provedor from './provedor';
import http from './http/index';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://api-studioarquitetura.herokuapp.com';

Vue.config.productionTip = false
Vue.prototype.$httplogin = http /** Para que não seja mais necessário importar o http em todos views/components que o utilizarem */

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

router.beforeEach((routeTo, routeFrom, next) => {
  if(!routeTo.meta.publica && !provedor.state.token){
      return next({path: '/login'})
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store: provedor,
  render: h => h(App)
})
