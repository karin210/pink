<script setup lang="ts">
const { guestNum } = defineProps<{
  guestNum: number | undefined;
}>();
const count = ref<number>(Math.max(guestNum ?? 1, 1));
</script>

<template>
  <div id="guest-component-root">
    <h3>Número de personas</h3>
    <article>
      <div>
        <img
          class="icon"
          src="/group-gray-icon.svg"
          alt="Ícono de cantidad de personas"
        />
      </div>
      <div>
        <button class="counter-btn" @click="() => count != 0 && count--">
          -
        </button>
        <span id="count-text">{{ count ?? "--" }}</span>
        <button class="counter-btn" @click="count++">+</button>
      </div>
    </article>
    <button id="next-btn" @click="$emit('setGuestNum', count)">
      Siguiente
    </button>
  </div>
</template>

<style scoped>
@import "~/assets/css/reservePage.css";

#guest-component-root {
  margin-top: 10vh;
}

article {
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-width: 380px;
  margin-top: 3vh;
  padding: 23px;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  container-type: inline-size;
  margin: 0 auto;
  background-color: var(--background);
  font-family: Merriweather;
}

img {
  width: 40px;
  height: 40px;
}

#count-text {
  font-size: clamp(22px, 3cqi, 26px);
  font-weight: 700;
  margin: 18px;
}

.counter-btn {
  font-size: clamp(22px, 3cqi, 26px);
  border: 1px solid #8f8f92;
  border-radius: 3px;
  background-color: #a3a3ad;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.counter-btn:hover {
  transform: scale(1.12);
  border-color: lightgray;
}

#next-btn {
  font-family: "Montserrat";
  display: block;
  font-size: clamp(17px, 3cqi, 22px);
  margin: 0 auto;
  margin-top: 30px;
  background-color: var(--tertiary);
  border: none;
  border-radius: 3px;
  font-weight: 600;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

#next-btn:hover {
  background-color: var(--primary);
  border-color: var(--primary);
}
</style>
