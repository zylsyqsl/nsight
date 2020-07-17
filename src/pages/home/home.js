import Vue from "vue";
import App from "./home.vue";
import router from "./router/index.js";

import { globalMixin } from "@/assets/js/preConfig.js";
const selfMixin = {
  methods: {
    navigateTo(name, params) {
      this.$router.push({ name: name, params: params || {} });
    },
    replaceTo(name, params) {
      this.$router.replace({ name: name, params: params || {} });
    },
    routerGo(n) {
      this.$router.go(n);
    }
  }
};

// Vue.config.productionTip = false
/* eslint-disable no-new */
let app = new Vue({
  el: "#app",
  mixins: [globalMixin, selfMixin],
  router,
  components: { App },
  template: "<App/>"
});
