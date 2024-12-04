<template>
  <header class="header">
    <p>header</p>
  </header>
</template>

<script>
export default {
  name: "HeaderPart",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: salmon;
}
</style>
