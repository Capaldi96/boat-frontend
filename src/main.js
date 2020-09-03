import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import 'bootstrap/dist/css/bootstrap.min.css'
import VueVisible from 'vue-visible';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueVisible);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
