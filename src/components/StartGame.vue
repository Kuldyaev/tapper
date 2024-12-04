<template>
  <div class="startgame">
    <button class="startbtn" @click="$emit(`startGame`)">Start Game</button>
  </div>
</template>

<script setup></script>

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
.startbtn:hover {
  background-color: bisque;
}
.startbtn:hover {
  background-color: greenyellow;
  scale: 0.99;
}
</style>
