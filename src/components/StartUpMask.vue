<template>
  <transition name="fade">
    <div class="startUpMask" @click="handleClose" v-show="startUp">
      <h1>Genshin Impact Map</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: "StartUpMask",
  data: () => ({
    startUp: true,
  }),
  methods: {
    handleClose() {
      this.startUp = false;
    },
  },
};
</script>

<style scoped>
.startUpMask {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2000;
}
</style>
