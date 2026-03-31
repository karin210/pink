<script setup lang="ts">
import { ref, onMounted } from 'vue';

const hourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const hourListEl = ref<HTMLElement | null>(null);
const hourEls = useTemplateRef<HTMLLIElement[]>('hours');
const minuteList = Array.from({ length: 60 }, (_, i) => i);
const minuteListEl = ref<HTMLElement | null>(null);
const minuteEls = useTemplateRef<HTMLLIElement[]>('minutes');
const currentMinute = ref('');
const currentHour = ref('');
let dayPart = 'am';

onMounted(() => {
  nextTick(() => { // This ensures the DOM has been updated before running the logic
    if (minuteListEl.value && minuteEls.value?.length) {
      const observer = new IntersectionObserver((entries) => {
        // Track the element that is fully visible in the center
        
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const value = entry.target.textContent;
            currentMinute.value = value.startsWith('0') ? value.slice(1).trim() : value;
          }
        });
      }, {
        rootMargin: "-30px 0px -30px 0px",
        root: minuteListEl.value,
        threshold: 1.0,  // Element is considered visible when it's fully inside the viewport of ul
      });

      // Start observing each list item
      minuteEls.value.forEach(el => observer.observe(el));
    }

    if (hourListEl.value && hourEls.value?.length) {
      const observer = new IntersectionObserver((entries) => {
        // Track the element that is fully visible in the center
        
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            currentHour.value = entry.target.textContent;
          }
        });
      }, {
        rootMargin: "-30px 0px -30px 0px",
        root: hourListEl.value,
        threshold: 1.0,  // Element is considered visible when it's fully inside the viewport of ul
      });

      // Start observing each list item
      hourEls.value.forEach(el => observer.observe(el));
    }
  });
});

</script>

<template>
  <article id="time-container">
    <h3>Elije una hora</h3>
    <div id="time-ctrls-container">
      <label id="hour-label" for="hour-input">H</label>
      <ul id="hour-list" class="time-list" ref="hourListEl">
        <li :class="{'hour-item': true, 'void': true}"></li>
        <li :class="{'hour-item': true, 'void': true}"></li>
        <li :class="{'hour-item': true, 'void': true}"></li>
        <li 
          v-for="(hour, hIndex) in hourList" 
          :class="{'hour-item': true, selected: hour == Number(currentHour)}" 
          :key="hIndex"
          ref="hours">
          {{ hour }}
        </li>
        <li :class="{'hour-item': true, 'void': true}"></li>
        <li :class="{'hour-item': true, 'void': true}"></li>
        <li :class="{'hour-item': true, 'void': true}"></li>
      </ul>
      <span id="divider">:</span>
      <label id="minutes-label" for="minutes-input">Min</label>
      <ul id="minute-list" class="time-list" ref="minuteListEl">
        <!-- Dynamically bind ref for each <li> element -->
        <li :class="{'minute-item': true, 'void': true}"> </li>
        <li :class="{'minute-item': true, 'void': true}"> </li>
        <li :class="{'minute-item': true, 'void': true}"> </li>
        <li 
          v-for="(minute, mIndex) in minuteList" 
          :key="mIndex"
          ref="minutes"
          :class="{'minute-item': true, selected: minute == Number(currentMinute)}">
          <span v-if="minute < 10">0</span>
          {{ minute }}
        </li>
        <li :class="{'minute-item': true, 'void': true}"> </li>
        <li :class="{'minute-item': true, 'void': true}"> </li>
        <li :class="{'minute-item': true, 'void': true}"> </li>
      </ul>
      <select id="day-part" multiple @change="dayPart = ($event.target as HTMLSelectElement).value">
        <option selected value="am">am</option>
        <option value="pm">pm</option>
      </select>
    </div>
    <button id="next-btn" @click="$emit('set-time', currentHour, currentMinute, dayPart)">Siguiente</button>
  </article>
</template>

<style scoped>

  @import "~/assets/css/reservePage.css";

  #time-container {
    width: 80vw;
    max-width: 380px;
    margin: 0 auto;
    height: 122px;
  }
  
  #time-ctrls-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 20px minmax(0, 1fr) 60px;
    grid-template-rows: 30% minmax(0, 1fr);
    place-items: center;
    justify-content: stretch;
    align-content: stretch;
    padding: 0;
    /* margin-top: 45px; */
    background-color: var(--background);
    overflow: hidden;
  }

  #hour-label {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .time-list {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    list-style: none;
    text-align: center;
    font-size: 17px;
    font-family: Montserrat;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  #hour-list {
    grid-column-start: 1;
    grid-row-start: 2;
  }

  #hour-list li.selected {
    font-weight: 600;
  }

  #divider {
    grid-column-start: 2;
    grid-row-start: 2;
    font-size: 37px;
    font-weight: 700;
  }

  #minutes-label {
    grid-column-start: 3;
    grid-row-start: 1;
  }

  #minute-list {
    grid-column-start: 3;
    grid-row-start: 2;
  }

  #minute-list li.selected {
    font-weight: 600;
  }

  label {
    font-family: Montserrat;
    font-weight: 700;
    text-align: center;
  }

  #day-part {
    grid-column-start: 4;
    grid-row-start: 2;
    font-size: 20px;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid lightgray;
  }
</style>