<template>
  <transition name="fade">
    <div v-ripple class="startUpMask" @click="handleClose" v-show="startUp">
      <div style="display: inline-block; margin: auto; color: black;">
        <h1 class="genshin-map-title">GENSHIN MAP</h1>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "StartUpMask",
  data: () => ({
    startUp: true,
    timer: null,
  }),
  methods: {
    handleClose() {
      this.startUp = false;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      window.localStorage.setItem("startUp", "GIM");
    },
  },
  mounted() {
    if (window.localStorage.getItem("startUp")) {
      this.timer = setTimeout(() => {
        this.startUp = false;
      }, 1300);
    }
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
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}
.genshin-map-title {
  font-size: 80px;
  color: rgba(255, 255, 255, 0.8);
}
</style>
