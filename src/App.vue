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
        url="./img/{z}/map_{y}_{x}.webp"
        :tile-size="256"
        no-wrap
      ></l-tile-layer>
      <l-control position="topright">
        <v-btn rounded dark text>
          <span style="text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);"
            >github@laiiihz</span
          >
        </v-btn>
      </l-control>
      <!--dev-marker-->
      <dev-marker disabled></dev-marker>
      <!--markers-->
      <div
        v-for="genshinObject in Object.keys(genshinObjects)"
        :key="genshinObject"
      >
        <div v-if="$store.state.genshinChecked.indexOf(genshinObject) !== -1">
          <l-marker
            v-for="item in genshinObjects[genshinObject].objects"
            :key="item.name"
            :lat-lng="item.pos"
            ><l-tooltip>
              <h2>{{ item.name }}</h2>
              <div style="width: 200px; padding: 10px;">
                <p v-if="item.pos">{{ item.location }}</p>
              </div></l-tooltip
            >
            <l-icon :icon-anchor="[17, 17]" style="position: relative;">
              <img
                height="34"
                width="34"
                :src="genshinObjects[genshinObject].icons[item.pic]"
                alt=""
              />
            </l-icon>
          </l-marker>
        </div>
      </div>
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
import DevMarker from "./components/DevMarker";
export default {
  name: "app",
  components: { DevMarker, ControlButton, StartUpMask },
  data: () => ({
    url: "",
    zoom: 2,
    center: [-128, 128],
    crs: CRS.Simple,
    genshinObjects: genshinObjects,
  }),
  methods: {
    updateZoom(value) {
      this.zoom = value;
    },
    updateCenter(value) {
      this.center = value;
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
/*
fade
*/
.fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
