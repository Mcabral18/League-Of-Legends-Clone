import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "jquery";
import "popper.js";
import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
