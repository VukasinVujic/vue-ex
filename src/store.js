import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    safelyStoredNumber: 0
  },
  getters: {
    safelyStoredNumber: state => state.safelyStoredNumber
  },

  mutations: {
    // mutacije u okviru samog statega menja stanje stateta
    incrementStoredNumber(state) {
      state.safelyStoredNumber++;
    },
    setStoredNumber(state, newNumber) {
      state.safelyStoredNumber = newNumber;
    }
  }
});
