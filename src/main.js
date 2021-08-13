import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./assets/index.css";

Vue.config.productionTip = false;
Vue.use(M);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
