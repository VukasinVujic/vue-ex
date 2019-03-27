<template>
  <div>
    <p>the safety stored number: {{ safelyStoredNumber }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["safelyStoredNumber"]) // state je globalna stvar i zbog toga se ovde isto opaljuje i zbog ovog computed
  }
};
</script>



