<template>
  <div class="gamedesk">
    <HeaderPart />
    <section class="userinfo">USER INFO</section>
    <section class="level">level: 1 /25</section>
    <section class="coins">coins: {{ coins }}</section>
    <section class="gameboy">
      <button @click="tapper">tap me</button>
    </section>
    <section class="gamepanel">
      <div class="energyinfo">{{ energy }} / 1000</div>
      <button class="bustersBtn">buster</button>
    </section>
    <FooterPart />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderPart from "./HeaderPart.vue";
import FooterPart from "./FooterPart.vue";

const coins = ref(1);
const energy = ref(1000);

function tapper() {
  if (energy.value > 0) {
    coins.value = coins.value + 1;
    energy.value = energy.value - 1;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  color: silver;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.gamedesk {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  width: min(75vw, 300px);
  height: min(75vw, 300px);
  border-radius: 50%;
  background-color: aquamarine;
  color: black;
  font-size: min(10vw, 40px);
  user-select: none;
}
button:hover {
  background-color: rgb(127, 255, 244);
}
button:active {
  background-color: rgb(16, 161, 113);
  scale: 0.995;
}

.gamepanel {
  display: flex;
  width: max(100% - 10vw, 100% - 24px);
  min-height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: min(5vw, 12px);
  padding-right: min(5vw, 12px);
}

.bustersBtn {
  width: min(15vw, 60px);
  height: min(15vw, 60px);
  background-color: aquamarine;
  color: black;
  font-size: min(5vw, 12px);
}

.energyinfo {
  color: silver;
}
</style>
