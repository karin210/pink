<script setup lang="ts">
const slideIndex = ref(1);
const prevSlideIndex = ref(0);

function changeImage(action: string) {
  prevSlideIndex.value = slideIndex.value;
  if (action == "add") {
    slideIndex.value = Math.min(++slideIndex.value, 2);
  } else {
    slideIndex.value = Math.max(--slideIndex.value, 0);
  }
}
</script>

<template>
  <article>
    <h3>Elige un lugar</h3>
    <ul class="restaurant-list" @click="$emit('placeSelected', 'Exterior')">
      <li class="restaurant-item">
        <img
          src="/Artilleros-branch-exterior-vertical-1.jpg"
          alt="Restaurante en Quinceo"
        />
        <span>Exterior</span>
        <button>Elegir</button>
      </li>

      <li class="restaurant-item" @click="$emit('placeSelected', 'Interior')">
        <img
          src="/Artilleros-branch-interior-1.jpg"
          alt="Restaurante en Quinceo"
        />
        <span>Interior</span>
        <button>Elegir</button>
      </li>
    </ul>
  </article>
</template>

<style scoped>
@import "~/assets/css/reservePage.css";

article {
  margin-bottom: 100px;
}

.restaurant-list {
  display: flex;
  width: 75vw;
  max-width: 700px;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  margin-top: min(8%, 50px);
  gap: 35px;
  flex-wrap: wrap;
}

.restaurant-item {
  width: 100%;
  max-width: 250px;
  height: 307px;
  box-sizing: border-box;
  position: relative;
  border-radius: 8px;
  font-family: Montserrat;
  margin: 0;
}

img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  filter: contrast(1.3);
}

span {
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-weight: 600;
  font-size: clamp(18px, 3cqi, 20px);
  text-align: center;
  color: white;
}

.restaurant-item button {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 114px;
  height: 40px;
  background: rgba(0, 0, 0, 58%);
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.restaurant-item button:hover {
  transform: scale(1.1);
  background: rgba(0, 0, 0, 80%);
}

@media (min-width: 768px) {
  .restaurant-list {
    flex-wrap: nowrap;
  }

  .restaurant-item {
    width: 47%;
    max-width: 400px;
  }
}
</style>
