import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LTooltip,
  LControl,
  LControlAttribution,
} from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import vuetify from "./plugins/vuetify";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-icon", LIcon);
Vue.component("l-tooltip", LTooltip);
Vue.component("l-control", LControl);
Vue.component("l-control-attribution", LControlAttribution);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
