<script setup lang="ts">
  const { day, month, year } = defineProps<{
    day: number
    month: number
    year: number
  }>();
  const emit = defineEmits(['dateClicked']);
  const daysOfWeek = 7;
  const monthList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septienbre', 'Octubre', 'Noviembre', 'Diciembre'];
  const now = new Date();
  const currentWeek = now.getDate()/daysOfWeek;
  const selectedMonth = ref(month);
  const weeksOfMonth = ref(Math.ceil(getDaysInMonth(year, selectedMonth.value) / daysOfWeek));
  const selectedDate = reactive({ day, month, year});

  function setSelectedMonth(action: string) {
    if(action == 'add') {
      selectedMonth.value = selectedMonth.value == 11 ? 0 : ++selectedMonth.value;
    } else {
      selectedMonth.value = selectedMonth.value == 0 ? 11 : --selectedMonth.value;
    }
    weeksOfMonth.value = Math.ceil(getDaysInMonth(year, selectedMonth.value) / daysOfWeek);
  }
  
  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }


  function getDay(day: number, month: number) {
    const currentDay = now.getDate()
    const currentMonth = now.getMonth();
    return day == currentDay && currentMonth == month;
  };

  function setSelectedDate(year: number, month: number, day: number) {
    selectedDate.day = day;
    selectedDate.month = month;
    selectedDate.year = year;
    emit('dateClicked', year, month, day);
  }

</script>

<template>
  <div id="calendar-container"> 
    <h3>Elije una fecha</h3>
    <table>
      <thead>
        <tr>
          <th>
            <button class="changeMonthBtn" @click="setSelectedMonth('subtract')"><ChevronLeft></ChevronLeft></button>
          </th>
          <th colspan="5">
            {{ monthList[selectedMonth] }} <span id="year">{{ selectedDate.year }}</span>
          </th>
          <th>
            <button class="changeMonthBtn" @click="setSelectedMonth('add')"><ChevronRight></ChevronRight></button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, wIndex) in weeksOfMonth" :key="wIndex">
          <td v-for="(day, dIndex) in daysOfWeek" 
            :key="wIndex"
            :class="{ 
              'selected': selectedDate.day + 1 == ((wIndex * daysOfWeek) + dIndex + 1) && selectedMonth == selectedDate.month && selectedDate.year == year,
              'is-empty': ((wIndex * daysOfWeek) + dIndex + 1) > getDaysInMonth(year, selectedMonth) 
            }"
            @click="setSelectedDate(selectedDate.year, selectedMonth, (wIndex * daysOfWeek) + dIndex)">
            {{ (wIndex * daysOfWeek) + dIndex + 1  }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

  #calendar-container {
    width: 80vw;
    max-width: 380px;
    margin-top: 3vh;
    container-type: inline-size;
    margin: 0 auto;
  }

  h3 {
    font-family: Merriweather;
    font-size: clamp(20px, 6cqi, 23px);
    text-align: center;
  }
  
  table {
    width: 100%;
    table-layout: fixed;
    aspect-ratio: 1;
    font-family: Montserrat;
    border: 1px solid lightgray;
    border-collapse: collapse;
    border-radius: 8px;
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
    content: '';
    display: block;
    transition: all 0.2s ease-out;
  }

  td:hover::after {
    position: absolute;
    background: var(--indicator-accent);
    opacity: 0.6;
    width: 40%;
    height: 3px;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  td.selected::after {
    content: '';
    display: block;
    position: absolute;
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