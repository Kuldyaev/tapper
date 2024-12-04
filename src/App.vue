<template>
  <main>
    <LoaderMirror v-if="loader" />
    <div v-else class="activedesk">
      <StartGame v-if="user_id === null" @startGame="startGame" />
      <GameBody v-else />
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import GameBody from "./components/GameBody.vue";
import StartGame from "./components/StartGame.vue";
import LoaderMirror from "./components/LoaderMirror.vue";
import api from "./shared/api";
const user_id = ref(null);
const loader = ref(true);

async function askIsUser(id) {
  try {
    api.post("/users/check", { telegram_id: id }).then((res) => {
      if (res.data.status) {
        console.log(res.data);
        console.log("успех");
        return true;
      } else {
        console.log(res.data);
        console.log("провал");
        return false;
      }
    });
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function startGame() {
  loader.value = true;
  try {
    api.post("/users", { telegram_id: 55555 }).then((res) => {
      if (res.data.tel_id === 55555) {
        user_id.value = res.data.tel_id;
        loader.value = false;
        localStorage.setItem("user_id", res.data.tel_id);
      } else {
        console.log("something wrong");
        console.log(res.data);
        loader.value = false;
      }
    });
  } catch (error) {
    console.log(error);
    loader.value = false;
    return false;
  }
}

onMounted(() => {
  if (localStorage.getItem("user_id")) {
    user_id.value = Number(localStorage.getItem("user_id"));
    if (askIsUser(Number(user_id.value))) {
      loader.value = false;
    } else {
      user_id.value = null;
      loader.value = false;
    }
  } else {
    user_id.value = null;
    loader.value = false;
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
.activedesk {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
