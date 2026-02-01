<template>
  <button id="reserve-btn">Reservar</button>
</template>

<style scoped>

  #reserve-btn {
    display: block;
    width: 56vw;
    max-width: 460px;
    padding: min(3.5%, 20px);
    border: none;
    border-radius: 3px;
    font-size: clamp(19px, 4cqi, 22px);
    font-weight: 600;
    background-color: var(--accent);
    color: white;
    letter-spacing: 1px;
    font-family: "Montserrat";
    box-shadow: #191918 3px 3px 7px -1px;
  }

  @media (min-width: 800px) {

    #reserve-btn {
      font-size: clamp(22px, 2.5cqi, 26px);
    }
  }  

</style>