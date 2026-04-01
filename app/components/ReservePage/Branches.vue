<script setup lang="ts">
const showBranchPopup = ref(false);
const showPicsPopup = ref(false); // New state for pics-btn popup
let timeoutId: ReturnType<typeof setTimeout> | null = null;
let picsTimeoutId: ReturnType<typeof setTimeout> | null = null; // New timeout for pics-btn popup

function handleBranchClick(event: Event) {
  event.preventDefault();
  showBranchPopup.value = true;

  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    showBranchPopup.value = false;
  }, 4000);
}

function handlePicsClick(event: Event) {
  event.preventDefault(); // Prevent default image link behavior
  showPicsPopup.value = true;

  if (picsTimeoutId) clearTimeout(picsTimeoutId);
  picsTimeoutId = setTimeout(() => {
    showPicsPopup.value = false;
  }, 4000);
}
</script>
<template>
  <article>
    <h3>Elige una ubicación</h3>
    <ul id="branch-list" class="item-list">
      <li class="branch-item card relative">
        <img
          src="/Artilleros-branch-interior-1.jpg"
          alt="Restaurante en Quinceo"
        />
        <ul class="info-list">
          <li class="address-item">
            <div class="address-header">
              <img src="/location-pink-icon.svg" alt="Ícono de mapa" />
              <h4>Dirección</h4>
            </div>
            <p>
              Artilleros de 1847 1391, Chapultepec Oriente, 58260 Morelia, Mich.
              <a
                href="https://maps.app.goo.gl/ezo7S7fsNSEN1j8v6"
                target="_blank"
                >Ver mapa</a
              >
            </p>
          </li>
          <li class="cta-item relative">
            <div class="void-space"></div>
            <button
              class="enter-btn"
              @click.stop="$emit('branchSelected', 'artilleros')"
            ></button>
            <div class="pics-btn-container">
              <img
                class="pics-btn"
                src="/pic-pink-icon.svg"
                alt="Ícono de fotos"
                @click.stop="handlePicsClick($event)"
              />
              <Transition name="fade">
                <div v-if="showPicsPopup" class="popup small-popup">
                  Imágenes no disponibles
                </div>
              </Transition>
            </div>
          </li>
        </ul>
      </li>

      <li class="branch-item card" @click="handleBranchClick($event)">
        <img src="/Quinceo-branch-5.jpg" alt="Restaurante en Quinceo" />
        <ul class="info-list">
          <li class="address-item">
            <div class="address-header">
              <img src="/location-pink-icon.svg" alt="Ícono de mapa" />
              <h4>Dirección</h4>
            </div>
            <p>
              Exhacienda de Quinceo 234, 58149 Morelia, Mich.
              <a
                href="https://maps.app.goo.gl/4g6NVf3CsASFHc2P6"
                target="_blank"
                :style="{ pointerEvents: 'none' }"
                >Ver mapa</a
              >
            </p>
          </li>
          <li class="cta-item">
            <div class="void-space"></div>
            <button
              class="enter-btn"
              :style="{ pointerEvents: 'none' }"
            ></button>
            <img
              class="pics-btn"
              src="/pic-pink-icon.svg"
              alt="Ícono de fotos"
            />
          </li>
        </ul>
        <Transition name="fade">
          <div v-if="showBranchPopup" class="popup">Info no disponible</div>
        </Transition>
      </li>
    </ul>
  </article>
</template>

<style scoped>
@import "~/assets/css/reservePage.css";

article {
  margin-bottom: 100px;
}

.item-list {
  display: flex;
  width: 75vw;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  margin-top: min(12%, 55px);
  gap: 35px;
  flex-wrap: wrap;
}

.card {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 150px auto;
  width: 100%;
  max-width: 250px;
  justify-items: stretch;
  border-radius: 8px;
  padding: min(35px, 8%) 15px;
  background-color: lightgray;
  font-family: Montserrat;
  flex-grow: 1;
  position: relative; /* Added for popup positioning */
}

.card > img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  filter: contrast(1.3);
  box-shadow: black 1px 1px 5px 0px;
}

.card:nth-of-type(2) {
  opacity: 0.7;
}

.info-list {
  list-style: none;
  padding: 0;
  grid-row-start: 2;
  margin-top: 23px;
}

.address-header {
  display: flex;
}

.address-header img {
  margin-right: 3px;
}

.address-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
}

.address-item a {
  white-space: nowrap;
  margin: 0 auto;
  margin-left: 8px;
}

h4 {
  margin: 0;
  margin-top: auto;
}

p {
  line-height: 1.4;
  margin: 0;
  text-align: center;
}

.address-header img {
  width: 25px;
}

.pics-btn-container {
  position: relative;
  display: inline-block;
  width: 50%;
  cursor: pointer;
}

.cta-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  margin-top: 20px;
  align-items: end;
  justify-items: center;
}

.cta-item img {
  width: 50%;
  max-width: 41px;
  background: #f2f2f2;
  border-radius: 26%;
  border: 2px solid #f2f2f2;
  justify-self: end;
}

.pics-btn-container > img {
  width: 100%;
  cursor: pointer;
}

.enter-btn {
  box-sizing: border-box;
  width: 60px;
  height: 34px;
  padding: 5px 0;
  background-image: url(/right-arrow-white-icon.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--tertiary);
  margin-top: 20px;
  background-size: contain;
  border: 3px solid var(--tertiary);
  border-radius: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.enter-btn:hover {
  background-color: var(--primary);
  border-color: var(--primary);
}
/* Popup styles - Reused from Header.client.vue with minor adjustments */
.popup {
  position: absolute;
  top: -40px; /* Position above the li */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
}

.popup.small-popup {
  bottom: calc(100% + 5px); /* Position above the pics-btn img */
  font-size: 0.7rem;
  padding: 4px 8px;
}

.popup.small-popup::after {
  top: 100%;
  border-width: 4px;
}

.popup::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .item-list {
    flex-wrap: nowrap;
  }

  .card {
    width: 38%;
    max-width: 370px;
  }
}
</style>
