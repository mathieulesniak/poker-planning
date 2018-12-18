import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import {
  MdApp,
  MdToolbar,
  MdDrawer,
  MdCard,
  MdList,
  MdIcon,
  MdButton,
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";




Vue.use(MdApp);
Vue.use(MdToolbar);
Vue.use(MdDrawer);
Vue.use(MdCard);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
