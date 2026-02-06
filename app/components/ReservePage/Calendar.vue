<script setup lang="ts">

  const daysOfWeek = 7;

  function getDaysInMonth(year: number, month: number) {
    // Month is 1-indexed (1 = Jan, 2 = Feb, etc.)
    // We pass 'month' as the monthIndex, which effectively 
    // points to the NEXT month because JS months are 0-indexed.
    return new Date(year, month, 0).getDate();
  }

  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();
  const weeksOfMonth = Math.floor(getDaysInMonth(year, month) / daysOfWeek);

</script>

<template>
  <div id="calendar-container"> 
    <table>
      <thead>
        <tr>
          <th colspan="7">Elije una fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, wIndex) in Array(weeksOfMonth).fill(null)" :key="wIndex">
          <td v-for="(day, dIndex) in Array(daysOfWeek).fill(null)" :key="dIndex" :class="{ 'today': true }">
            {{ (wIndex * daysOfWeek) + dIndex + 1  }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

  #calendar-container {
    margin-top: 25vh;
  }

  table {
    table-layout: fixed;
    margin: 0 auto;
    font-family: Montserrat;
    border: 1px solid lightgray;
    border-radius: 8px;
    border-spacing: 20px;
  } 

  td {
    border: 1px solid lightgray;
    text-align: center;
    padding: 2px;
    font-size: 14px;
  }

</style>