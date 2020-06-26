<template>
  <div v-if="!disabled">
    <div
      style="
        background-color: white;
        position: fixed;
        z-index: 4000;
        top: 0;
        left: 0;
        height: 20px;
      "
    >
      <label>
        <input v-model="location" />
      </label>
    </div>
    <l-marker
      :lat-lng="location"
      @update:lat-lng="handleUpdateLatLng"
      draggable
    >
      <l-icon shadow-url="`#`" icon-url="./favicon.ico">
        <i class="material-icons">location_on</i>
      </l-icon>
    </l-marker>
  </div>
</template>

<script>
export default {
  name: "DevMarker",
  data: () => ({
    location: [-128, 128],
  }),
  props: {
    disabled: Boolean,
  },
  methods: {
    handleUpdateLatLng(location) {
      this.location = [location.lat, location.lng];
      console.log(`[${location.lat},${location.lng}]`);
    },
  },
};
</script>

<style scoped></style>
