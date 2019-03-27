<template>
  <div>
    <p>the safety stored number: {{ safelyStoredNumber }}</p>
    <button @click="incrementStoredNumber">increment</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      count: 2
    };
  },
  methods: {
    increment() {
      this.count * 5;
    },
    ...mapMutations(["incrementStoredNumber", "setStoredNumber"])
  },
  computed: {
    ...mapGetters(["safelyStoredNumber"])
  }
};
</script>



