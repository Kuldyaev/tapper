<template>
  <main>
    <LoaderMirror v-if="loader" />
    <div v-else>
      <StartGame v-if="user_id === null" />
      <HeaderPart v-else />

      <h1>ijffwpeok</h1>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HeaderPart from "./components/HeaderPart.vue";
import StartGame from "./components/StartGame.vue";
import LoaderMirror from "./components/LoaderMirror.vue";
import api from "./shared/api";
const user_id = ref(null);
const loader = ref(true);

async function askIsUser() {
  try {
    api.post("/users/check", { telegram_id: 4564654 }).then((res) => {
      if (res.data.status) {
        console.log(res.data);
        console.log("успех");
      } else {
        console.log(res.data);
        console.log("провал");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  askIsUser();

  if (localStorage.getItem("user_id")) {
    user_id.value = Number(localStorage.getItem("user_id"));
  } else {
    user_id.value = null;
  }
});

// export default {
//   name: "App",
//   components: {
//     HeaderPart,
//     StartGame,
//   },
// };
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
