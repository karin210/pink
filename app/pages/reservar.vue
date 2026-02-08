<script setup lang="ts">
  const now = new Date();
  const day= now.getDate() - 1;
  const month = now.getMonth();
  const year = now.getFullYear();
  const selectedDate = reactive({ day, month, year});
  const showSummary = ref(false);
  const showCalendar = ref(true);

  function handleCalendarClick(year: number, month: number, day: number) {
    // add 1 to the day
    showSummary.value = true;
    showCalendar.value = false;
  }

</script>

<template>
  <div id="reservation-page-container">
    <h2>Reservación</h2>
    <article id="summary-container" :class="{show: showSummary}">
      <h3>Resumen de tu reservación</h3>
      <p></p>
    </article>
    <ReservePageCalendar :day="day" :month="month" :year="year" @date-clicked="handleCalendarClick"></ReservePageCalendar>
    <ReservePageTime></ReservePageTime>
  </div>
</template>


<style scoped>

  #reservation-page-container {
    height: 100dvh;
    background-color: #e5e5e5;
  }

  h2 {
    font-size: clamp(24px, 6vw, 32px);
    font-family: Merriweather;
    text-align: center;
    font-weight: 700;
    padding: 45px 35px;
    margin: 0;
    color: white;
    text-shadow:
    1.5px 0px var(--tertiary),
    0px 1.5px var(--tertiary),
    -1.5px 0px var(--tertiary),
    0px -1.5px var(--tertiary);
    letter-spacing: 1.5px;
  }

  #summary-container {
    opacity: 0;
    margin-top: 0;
    transform: translateY(20px);
    background-color: var(--background);
    transition: all 0.4s ease-out;
  }

  #summary-container.show {
    opacity: 1;
    transform: translateY(0px);
  }
</style>