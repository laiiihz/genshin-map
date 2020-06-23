import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genshinChecked:[],
  },
  mutations: {
    changeChecked(state,value) {
      state.genshinChecked = value;
    },
  },
  actions: {},
  modules: {},
});
