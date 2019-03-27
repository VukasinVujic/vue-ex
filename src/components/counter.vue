<template>
  <div>
    <p>the safety stored number: {{ safelyStoredNumber }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  computed: {
    ...mapGetters(["safelyStoredNumber"])
  }
};
</script>



