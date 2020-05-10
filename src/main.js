import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Button from "primevue/button";

Vue.config.productionTip = false;

export const bus = new Vue();
Vue.component("p-button", Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
