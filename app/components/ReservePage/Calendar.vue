<script setup lang="ts">
const { selectedDay, selectedMonth, selectedYear } = defineProps<{
  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
}>();
const emit = defineEmits(["dateClicked"]);
const daysOfWeek = 7;
const monthList = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septienbre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const now = new Date();
const currentWeek = now.getDate() / daysOfWeek;
const currentMonth = ref(selectedMonth);
const currentYear = ref(selectedYear);
const weeksOfMonth = ref(
  Math.ceil(getDaysInMonth(selectedYear, selectedMonth) / daysOfWeek),
);

function setSelectedMonth(action: string) {
  if (action == "add") {
    currentMonth.value = currentMonth.value == 11 ? 0 : ++currentMonth.value;
    if (currentMonth.value == 0) {
      ++currentYear.value;
    }
  } else {
    currentMonth.value = currentMonth.value == 0 ? 11 : --currentMonth.value;
    if (currentMonth.value == 11) {
      --currentYear.value;
    }
  }
  weeksOfMonth.value = Math.ceil(
    getDaysInMonth(currentYear.value, currentMonth.value) / daysOfWeek,
  );
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function setSelectedDate(year: number, month: number, day: number) {
  emit("dateClicked", year, month, day);
}

setTimeout(() => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}, 200);
</script>

<template>
  <div id="calendar-container">
    <h3>Elije una fecha</h3>
    <table>
      <thead>
        <tr>
          <th>
            <button
              class="changeMonthBtn"
              @click="setSelectedMonth('subtract')"
            >
              <ChevronLeft></ChevronLeft>
            </button>
          </th>
          <th colspan="5">
            {{ monthList[currentMonth] }}
            <span id="year">{{ currentYear }}</span>
          </th>
          <th>
            <button class="changeMonthBtn" @click="setSelectedMonth('add')">
              <ChevronRight></ChevronRight>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, wIndex) in weeksOfMonth" :key="wIndex">
          <td
            v-for="(day, dIndex) in daysOfWeek"
            :key="wIndex"
            :class="{
              selected:
                selectedDay + 1 == wIndex * daysOfWeek + dIndex + 1 &&
                selectedMonth == selectedMonth &&
                selectedYear == currentYear,
              'is-empty':
                wIndex * daysOfWeek + dIndex + 1 >
                getDaysInMonth(currentYear, currentMonth),
            }"
            @click="
              setSelectedDate(
                currentYear,
                currentMonth,
                wIndex * daysOfWeek + dIndex,
              )
            "
          >
            {{ wIndex * daysOfWeek + dIndex + 1 }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@import "~/assets/css/reservePage.css";

#calendar-container {
  width: 80vw;
  max-width: 380px;
  margin-top: 3vh;
  container-type: inline-size;
  margin: 0 auto;
  padding-bottom: 100px;
  overflow: hidden;
}

table {
  width: 100%;
  table-layout: fixed;
  aspect-ratio: 1;
  font-family: Montserrat;
  border: 1px solid lightgray;
  border-collapse: collapse;
  border-spacing: 20px;
  background-color: var(--background);
}

.changeMonthBtn {
  border: none;
}

td {
  position: relative;
  border: 1px solid #b4b4b4;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}

td::after {
  content: "";
  display: block;
  transition: all 0.2s ease-out;
}

td:hover::after {
  position: absolute;
  opacity: 0.6;
  background: var(--indicator-accent);
  width: 40%;
  height: 3px;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
}

td.selected::after {
  content: "";
  display: block;
  position: absolute;
  opacity: 1;
  background: var(--indicator-accent);
  width: 40%;
  height: 3px;
  bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
}

td.is-empty {
  color: transparent;
}
</style>
