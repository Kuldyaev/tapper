<template>
  <div class="gamedesk">
    <HeaderPart />
    <div class="game" v-if="mode === 'game'">
      <section class="userinfo">
        <div class="logoImg"></div>
        <h2>USER INFO</h2>
        <div class="settingImg"></div>
      </section>
      <section class="level">
        <div class="leveltitle">
          <h6>level</h6>
          <h6>{{ level }}/25</h6>
        </div>
        <div class="levelbar">
          <div
            class="levelstatus"
            :style="{ minWidth: Math.round(coins / 10) + '%' }"
          ></div>
        </div>
      </section>
      <section class="coins">
        <div class="coinsImg"></div>
        <h1 class="coinsNumber">{{ coins }}</h1>
      </section>
      <section class="gameboy">
        <button @click="tapper" class="tapbtn">tap me</button>
      </section>
      <section class="gamepanel">
        <div class="energyinfo">
          <div class="energySighn"></div>
          <h3>{{ energy }} / 1000</h3>
        </div>
        <button class="bustersBtn" @click="mode = 'bonuses'"></button>
      </section>
    </div>
    <div class="bonuses" v-if="mode === 'bonuses'">
      <section class="bonusestop">
        <button class="bonusesbackbtn" @click="mode = 'game'">&lt;&lt;</button>
        <h3 class="bonusestoptitle">Бонусы</h3>
        <div class="bonusestopempty">{{ " " }}</div>
      </section>
      <section class="bonusesbalance">
        <h5>Ваш баланс</h5>
        <div class="balancecoins">
          <div class="coinsImg"></div>
          <h1 class="coinsNumber">{{ coins }}</h1>
        </div>
      </section>
      <section class="bonusessection">
        <h3>Ежедневные ускорители</h3>
        <button class="bonusbtn">Ярость - двойной урон</button>
        <button class="bonusbtn">Лечение - 100% энергии</button>
      </section>
      <section class="bonusessection">
        <h3>Особые бонусы</h3>
        <button class="bonusbtn">Автомат - Пригласи друга</button>
      </section>
    </div>
    <FooterPart />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HeaderPart from "./HeaderPart.vue";
import FooterPart from "./FooterPart.vue";

const mode = ref("game");
const level = ref(1);
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
.game,
.bonuses {
  min-height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.bonuses {
  justify-content: flex-start;
  gap: 20px;
}
.bonusestop {
  width: 92%;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bonusestopempty {
  min-width: 50px;
}
.bonusesbackbtn {
  border: none;
  background-color: black;
  color: silver;
  font-size: 25px;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}
.bonusesbalance {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
}

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
  user-select: none;
}

.tapbtn {
  width: min(75vw, 300px);
  height: min(75vw, 300px);
  border-radius: 50%;
  background-color: aquamarine;
  color: black;
  font-size: min(10vw, 40px);
}

.tapbtn:hover {
  background-color: rgb(127, 255, 244);
}
.tapbtn:active {
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
  min-width: min(30vw, 120px);
  min-height: min(15vw, 60px);
  background-image: url("https://f722-79-45-208-49.ngrok-free.app/vue/bonuses.png");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: black;
}

.energyinfo {
  color: silver;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.energySighn {
  min-height: 26px;
  min-width: 26px;
  background-image: url("https://f722-79-45-208-49.ngrok-free.app/vue/energy.png");
  background-position: center;
  background-repeat: no-repeat;
}

.coinsImg {
  min-width: min(20vw, 80px);
  min-height: min(20vw, 80px);
  background-image: url("https://f722-79-45-208-49.ngrok-free.app/vue/coin.png");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: black;
}
.logoImg {
  min-width: min(20vw, 80px);
  min-height: min(20vw, 80px);
  background-image: url("https://f722-79-45-208-49.ngrok-free.app/vue/zelya.png");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: black;
}
.settingImg {
  min-width: min(20vw, 80px);
  min-height: min(20vw, 80px);
  background-image: url("https://f722-79-45-208-49.ngrok-free.app/vue/setttings.png");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  background-color: black;
}

.bonusessection {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
}

.bonusbtn {
  width: 92%;
  padding: 0 4%;
  background-color: grey;
  color: white;
  min-height: 26px;
}
.coins {
  width: 60%;
  padding-left: 20%;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.coinsNumber {
  color: white;
  font-size: 42px;
}
.balancecoins {
  width: 80%;
  padding: 0px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.userinfo {
  justify-content: space-between;
}
.level {
  width: 80%;
  padding: 0px 10%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.leveltitle {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.levelbar {
  min-width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: blanchedalmond;
  display: flex;
}
.levelstatus {
  height: 5px;
  border-radius: 5px;
  background-color: blue;
}
</style>
