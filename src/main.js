import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import "./styles/normalize.css";
import "./styles/skeleton.css";

Vue.config.productionTip = false;
Vue.use(VeeValidate);

new Vue({
  render: h => h(App)
}).$mount("#app");
