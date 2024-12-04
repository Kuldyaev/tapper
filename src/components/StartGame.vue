<template>
  <div class="startgame">
    <button class="startbtn">Start Game</button>
  </div>
</template>

<script>
export default {
  name: "StartGame",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.startgame {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.startbtn {
  width: min(75vw, 200px);
  height: min(25vw, 65px);
  border-radius: 16px;
}
</style>
