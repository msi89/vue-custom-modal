import Vue from "vue";
import App from "./App.vue";
import Modal from "./plugins/modal";

Vue.use(Modal);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
