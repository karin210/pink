<script setup lang="ts">
const { guestNum, date, time, place, currentStep } = defineProps<{
  guestNum: number | undefined;
  date: {
    day: number | undefined;
    month: number | undefined;
    year: number | undefined;
  };
  time: string | undefined;
  place: "interior" | "exterior" | undefined;
  currentStep:
    | "guests"
    | "calendar"
    | "time"
    | "place"
    | "finished"
    | undefined;
}>();
const monthList = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "Mayo",
  "Jun",
  "Jul",
  "Ago",
  "Sept",
  "Oct",
  "Nov",
  "Dic",
];
</script>

<template>
  <ul>
    <li
      id="guest-num-step"
      :class="{ ready: guestNum }"
      @click="$emit('stepClicked', 'guests')"
    >
      <div class="main-content-wrapper">
        <img
          class="icon"
          src="/pink/group-gray-icon.svg"
          alt="Ícono de cantidad de personas"
        />
        <div :class="{ circle: true, selected: currentStep === 'guests' }">
          <span>{{ guestNum ?? "--" }}</span>
        </div>
      </div>
      <svg
        class="line"
        width="20"
        height="10"
        viewBox="0 0 20 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="5"
          x2="20"
          y2="5"
          :stroke="guestNum ? '#da8e00' : '#d3d3d3'"
          stroke-width="2"
        />
      </svg>
    </li>
    <li :class="{ ready: date.day }" @click="$emit('stepClicked', 'date')">
      <div class="main-content-wrapper">
        <img
          class="icon"
          src="/pink/calendar-gray-icon.svg"
          alt="Ícono de fecha"
        />
        <div :class="{ circle: true, selected: currentStep === 'calendar' }">
          <p>
            {{
              date.day
                ? `${date.day + 1}/${monthList[date.month as number]}`
                : "--"
            }}
          </p>
          <span v-if="date.year">{{ date.year }}</span>
        </div>
      </div>
      <svg
        class="line"
        width="20"
        height="10"
        viewBox="0 0 20 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="5"
          x2="20"
          y2="5"
          :stroke="date.day ? '#da8e00' : '#d3d3d3'"
          stroke-width="2"
        />
      </svg>
    </li>
    <li :class="{ ready: time }" @click="$emit('stepClicked', 'time')">
      <div class="main-content-wrapper">
        <img class="icon" src="/pink/clock-gray-icon.svg" alt="Ícono de hora" />
        <div :class="{ circle: true, selected: currentStep === 'time' }">
          <span>{{ time ?? "--" }}</span>
        </div>
      </div>
      <svg
        class="line"
        width="20"
        height="10"
        viewBox="0 0 20 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="5"
          x2="20"
          y2="5"
          :stroke="time ? '#da8e00' : '#d3d3d3'"
          stroke-width="2"
        />
      </svg>
    </li>
    <li :class="{ ready: place }" @click="$emit('stepClicked', 'place')">
      <div class="main-content-wrapper">
        <img
          class="icon"
          src="/pink/selected-place-gray-icon.svg"
          alt="Ícono de lugar"
        />
        <div :class="{ circle: true, selected: currentStep === 'place' }">
          <span>{{ place ?? "--" }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-bottom: 45px;
  container-type: inline-size;
}

li {
  display: flex;
  cursor: pointer;
}

.main-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.icon {
  width: 30px;
  height: 30px;
}

.circle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Merriweather;
  font-size: 12px;
  font-weight: 700;
  align-items: center;
  width: 55px;
  height: 55px;
  background: lightgray;
  border-radius: 50%;
  margin: 0 2px;
  transition: all 0.3s ease;
}

.circle.selected {
  border: 2px solid var(--accent);
}

.ready .main-content-wrapper .circle {
  background: var(--accent);
}

.circle p {
  margin: 1px 0;
}

.line {
  margin-top: auto;
  margin-bottom: 29%;
}

@media (min-width: 440px) {
  .circle {
    width: 12cqi;
    max-width: 65px;
    height: 12cqi;
    max-height: 65px;
  }

  .icon {
    width: 7cqi;
    max-width: 40px;
    height: 7cqi;
    max-height: 40px;
  }
}
</style>
