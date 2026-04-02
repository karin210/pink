<script setup lang="ts">
const now = new Date();
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
const day = now.getDate() - 1;
const month = now.getMonth();
const year = now.getFullYear();
const initialDate: {
  day: number;
  month: number;
  year: number;
} = { day, month, year };
const selectedDate = reactive<{
  day: number | undefined;
  month: number | undefined;
  year: number | undefined;
}>({ day: undefined, month: undefined, year: undefined });
const guestNum = ref<number | undefined>(undefined);
const selectedTime = ref<string | undefined>(undefined);
const showSummary = ref(false);
const showCalendar = ref(false);
const showGuests = ref(true);
const selectedLocation = ref<"quinceo" | "artilleros" | undefined>(undefined);
const selectedPlace = ref<"interior" | "exterior" | undefined>(undefined);
const currentStep = ref<
  "guests" | "calendar" | "time" | "place" | "finished" | undefined
>(undefined);

function handleStepClick(step) {
  switch (step) {
    case "guests":
      currentStep.value = "guests";
      break;

    case "date":
      currentStep.value = "calendar";
      break;

    case "time":
      currentStep.value = "time";
      break;

    case "place":
      currentStep.value = "place";
      break;
  }
}

function findNextStep() {
  if (!guestNum.value) {
    return "guests";
  } else if (!selectedDate.day) {
    return "calendar";
  } else if (!selectedTime.value) {
    return "time";
  } else if (!selectedPlace.value) {
    return "place";
  } else {
    return "finished";
  }
}

function handleGuestNumSet(count) {
  if (count > 0) {
    guestNum.value = count;
  }
  currentStep.value = findNextStep();
}

function handleCalendarClick(
  selectedYear: number,
  selectedMonth: number,
  selectedDay: number,
) {
  // add 1 to the selectedDay
  selectedDate.day = selectedDay;
  selectedDate.month = selectedMonth;
  selectedDate.year = selectedYear;
  currentStep.value = findNextStep();
}

function handleTimeSetting(h: string, m: string, dayPart: string) {
  const min = m.length == 1 ? "0" + m : m;
  selectedTime.value = `${h}:${min} ${dayPart}`;
  currentStep.value = findNextStep();
}

function handleSelectedLocation(branchName: "quinceo" | "artilleros") {
  selectedLocation.value = branchName;
  currentStep.value = findNextStep();
}

function handleSelectedPlace(place: "interior" | "exterior") {
  selectedPlace.value = place;
  currentStep.value = findNextStep();
}
</script>

<template>
  <div id="reservation-page-container">
    <h2>Reservación</h2>
    <Transition name="fade" mode="out-in">
      <ReservePageBranches
        v-if="!selectedLocation"
        @branch-selected="handleSelectedLocation"
      >
      </ReservePageBranches>

      <div v-else>
        <a id="back-btn" href="/pink/reservar">
          <img
            src="/pink/back-black-icon.svg"
            alt="Icono de ir atrás"
          />Ubicaciones</a
        >
        <ReservePageProgressLine
          :guestNum="guestNum"
          :date="selectedDate"
          :time="selectedTime"
          :place="selectedPlace"
          :currentStep="currentStep"
          @step-clicked="handleStepClick"
        >
        </ReservePageProgressLine>
      </div>
    </Transition>

    <Transition name="fade" mode="out-in">
      <ReservePageGuestCounter
        v-if="currentStep == 'guests'"
        :guestNum="guestNum"
        @set-guest-num="handleGuestNumSet"
      >
      </ReservePageGuestCounter>

      <ReservePageCalendar
        v-else-if="currentStep == 'calendar'"
        :selectedDay="selectedDate.day ? selectedDate.day : initialDate.day"
        :selectedMonth="
          selectedDate.month ? selectedDate.month : initialDate.month
        "
        :selectedYear="selectedDate.year ? selectedDate.year : initialDate.year"
        @date-clicked="handleCalendarClick"
      >
      </ReservePageCalendar>

      <ReservePageTime
        v-else-if="currentStep == 'time'"
        @set-time="handleTimeSetting"
      >
      </ReservePageTime>

      <ReservePagePlace
        v-else-if="currentStep == 'place'"
        @place-selected="handleSelectedPlace"
      >
      </ReservePagePlace>

      <h2 v-else-if="currentStep == 'finished'" id="reserved-msg">
        ¡Tu reservación está lista!
      </h2>
    </Transition>
  </div>
</template>

<style scoped>
#reservation-page-container {
  min-height: 100dvh;
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

#back-btn {
  background: transparent;
  display: flex;
  align-items: center;
  font-size: clamp(15px, 11.73px + 1.02vw, 24px);
  gap: 7px;
  border: none;
  margin-left: min(150px, 12vw);
  margin-bottom: 35px;
  text-decoration: none;
  color: black;
}

#back-btn img {
  width: 25px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

#reserved-msg {
  color: black;
  text-shadow: none;
}
</style>
