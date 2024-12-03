<template>
  <main>
    <StartGame />
    <HeaderPart />

    <h1>ijffwpeok</h1>
  </main>
</template>

<script>
import HeaderPart from "./components/HeaderPart.vue";
import StartGame from "./components/StartGame.vue";

export default {
  name: "App",
  components: {
    HeaderPart,
    StartGame,
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  min-width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
main {
  max-width: 375px;
  max-height: 750px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  flex-grow: 1;
  margin-top: max((100vh - 750px)/2, 100vh - 100vh);
  padding: 0;
}
</style>
