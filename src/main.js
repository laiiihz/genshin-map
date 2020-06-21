import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { LMap, LTileLayer } from "vue2-leaflet";
import 'leaflet/dist/leaflet.css'

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
