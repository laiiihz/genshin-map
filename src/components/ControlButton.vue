<template>
  <div>
    <transition name="fade">
      <div v-if="maskOn" @click="maskOn = false" class="control-mask"></div>
    </transition>
    <div
      @click="maskOn = true"
      class="control-button"
      :style="[controlButtonStyle]"
    >
      <div></div>
      <transition name="fade">
        <i v-show="!maskOn" :class="['material-icons', 'control-icon']">add</i>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "ControlButton",
  data: () => ({
    maskOn: false,
  }),
  methods: {},
  computed: {
    controlButtonStyle() {
      return {
        height: this.maskOn ? "100px" : "50px",
        width: this.maskOn ? "calc(100% - 40px)" : "50px",
        cursor: this.maskOn ? "unset" : "pointer",
        maxWidth: "500px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.control-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}
.control-button {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 20px;
  z-index: 2000;
  pointer-events: all;
  transition: 0.3s cubic-bezier(0.3, 0.1, 0.7, 0.9);
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.control-icon {
  position: absolute;
  left: 12px;
  top: 12px;
  color: white;
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
