<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <counter></counter>
    <second-file></second-file>
  </div>
</template>

<script>
import counter from "./components/counter.vue";
import secondFile from "./components/secondFile.vue";

export default {
  name: "app",
  components: {
    counter,
    secondFile
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
