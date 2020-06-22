<template>
  <div id="app">
    <l-map
      id="genshin-map"
      :zoom="zoom"
      :min-zoom="0"
      :max-zoom="5"
      @update:zoom="updateZoom"
      :center="center"
      @update:center="updateCenter"
      :crs="crs"
    >
      <l-tile-layer
        url="./img/{z}/map_{y}_{x}.png"
        :tile-size="256"
        no-wrap
      ></l-tile-layer>
      <l-marker
        :lat-lng="markerLatLng"
        draggable
        @update:lat-lng="updateLatLngMarker"
      >
        <l-icon icon-url="./favicon.ico"></l-icon>
      </l-marker>
      <!--  underground    -->
      <l-marker
        v-for="item in genshinObjects.underground.objects"
        :key="item.name"
        :lat-lng="item.pos"
      >
        <l-tooltip>{{ item.des }}</l-tooltip>
        <l-icon
          icon-url="./img/icons/underground.png"
          :icon-size="[40, 40]"
        ></l-icon>
      </l-marker>
    </l-map>
    <control-button></control-button>
    <start-up-mask></start-up-mask>
  </div>
</template>
<script>
import StartUpMask from "./components/StartUpMask";
import { CRS } from "leaflet";
import genshinObjects from "./genshinObjects/genshinObjects";
import ControlButton from "./components/ControlButton";
export default {
  name: "app",
  components: { ControlButton, StartUpMask },
  data: () => ({
    url: "",
    zoom: 2,
    center: [-128, 128],
    crs: CRS.Simple,
    markerLatLng: [-128, 128],
    genshinObjects: genshinObjects,
  }),
  methods: {
    updateZoom(value) {
      this.zoom = value;
    },
    updateCenter(value) {
      this.center = value;
    },
    updateLatLngMarker(value) {
      this.markerLatLng = value;
      console.log(`[${[value.lat, value.lng]}]`);
    },
  },
  mounted() {
    let windowWidth = window.innerWidth;
    if (windowWidth > 1024) this.zoom = 3;
  },
};
</script>
<style>
body,
html {
  margin: unset;
  height: 100%;
  width: 100%;
}
#app,
#genshin-map {
  height: 100%;
  width: 100%;
}
</style>
