<template>
  <h1>
    <b>YOU&nbsp;</b>
    <i>CAN&nbsp;</i> haz
    <b>ALL&nbsp;</b>
    <i>my&nbsp;</i> $$$!
  </h1>
</template>

<script>
export default {
  name: "Headline",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  flex-basis: 16vh;
  flex-shrink: 0;
}
</style>
