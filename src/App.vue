<template>
  <div id="app">
    <Headline msg="GUESS MY PRIVATE KEY"/>
    <KeyForm/>
  </div>
</template>

<script>
import Headline from "./components/Headline.vue";
import KeyForm from "./components/KeyForm.vue";

export default {
  name: "app",
  components: {
    Headline,
    KeyForm
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 14vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
