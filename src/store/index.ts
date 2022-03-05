import { createStore } from "vuex";

export default createStore({
  state: {
    test: "",
  } as { test: string },
  getters: {
    test: (state) => {
      if (localStorage.getItem("test")) {
        console.log(11111);

        return localStorage.getItem("test");
      }
      return state.test;
    },
  },
  mutations: {
    setTest(state, payload) {
      state.test = payload;
    },
  },
  actions: {
    setTest({ commit }, payload) {
      localStorage.setItem("test", payload);
      commit("setTest", payload);
    },
  },
  modules: {},
  plugins: [
    (s) => {
      console.log(s);
    },
  ],
});
