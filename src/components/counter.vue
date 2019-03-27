<template>
  <div>
    <p>the safety stored number: {{ safelyStoredNumber }}</p>
    <button class="btn btn-info" @click="mojaPrvaAkcija">increment</button>
    <input v-model="couter" @keyup.enter="setStoredNumber(couter)" type="text">
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      count: 0,
      couter: 9
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    ...mapMutations(["incrementStoredNumber", "setStoredNumber"]),
    ...mapActions(["mojaPrvaAkcija"])
  },
  computed: {
    ...mapGetters(["safelyStoredNumber"])
  }
};
</script>



