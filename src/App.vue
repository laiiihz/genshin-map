<template>
  <div id="app" style="height: 100%; width: 100%;">
    {{ zoom }}
    <l-map
      style="height: 800px;width:980px"
      :zoom="zoom"
      @update:zoom="updateZoom"
    >
      <l-tile-layer
        url="./img/{z}/map_{y}_{x}.png"
        :tile-size="256"
      ></l-tile-layer>
    </l-map>
  </div>
</template>
<script>
export default {
  name: "app",
  data: () => ({
    url: "",
    zoom: 0,
  }),
  methods: {
    updateZoom(value) {
      this.zoom = value;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
