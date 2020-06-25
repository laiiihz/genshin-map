<template>
  <div>
    <transition name="fade">
      <div v-if="maskOn" @click="handleMaskOff" class="control-mask"></div>
    </transition>
    <div
      @click="handleMaskOn"
      class="control-button"
      :style="[controlButtonStyle]"
    >
      <transition name="fade">
        <i v-if="!buttonMaskOn" :class="['material-icons', 'control-icon']"
          >add</i
        >
        <div v-else>
          <v-container ref="containerRef" fluid style="padding: 5px 10px;">
            <v-row dense style="text-align: center;">
              <v-col
                v-for="item in Object.keys(genshinObjects)"
                :key="item"
                cols="4"
              >
                <v-checkbox dark :value="item" v-model="checked">
                  <template slot="label">
                    <img
                      height="25"
                      :src="genshinObjects[item].icons[0]"
                      alt=""
                    />{{ genshinObjects[item].name }}
                  </template>
                </v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import genshinObjects from "../genshinObjects/genshinObjects";
export default {
  name: "ControlButton",
  data: () => ({
    maskOn: false,
    buttonMaskOn: false,
    genshinObjects: genshinObjects,
  }),
  methods: {
    handleMaskOn() {
      this.maskOn = true;
      setTimeout(() => {
        this.buttonMaskOn = true;
      }, 300);
    },
    handleMaskOff() {
      this.buttonMaskOn = false;
      setTimeout(() => {
        this.maskOn = false;
      }, 100);
    },
  },
  computed: {
    controlButtonStyle() {
      return {
        height: this.maskOn ? "90px" : "50px",
        width: this.maskOn ? "calc(100% - 40px)" : "50px",
        cursor: this.maskOn ? "unset" : "pointer",
        maxWidth: "500px",
        minHeight: "50px",
      };
    },
    checked: {
      set(val) {
        this.$store.commit("changeChecked", val);
      },
      get() {
        return this.$store.state.genshinChecked;
      },
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
  overflow: hidden;
}
.control-icon {
  position: absolute;
  left: 12px;
  top: 12px;
  color: white;
}
</style>
