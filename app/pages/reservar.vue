<template>
  <div>
    <h2>Reservación</h2>
    <ReservePageCalendar></ReservePageCalendar>
  </div>
</template>


<style scoped>

  h2 {
    font-size: clamp(24px, 5cqi, 32px);
    font-family: Merriweather;
    text-align: center;
    font-weight: 700;
    padding: 0 35px;
    margin: 45px 0;
    margin-bottom: 15px;
    color: white;
    text-shadow:
    1.5px 0px var(--tertiary),
    0px 1.5px var(--tertiary),
    -1.5px 0px var(--tertiary),
    0px -1.5px var(--tertiary);
    letter-spacing: 1.5px;
  }
</style>