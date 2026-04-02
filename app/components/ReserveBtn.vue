<template>
  <a id="reserve-btn" href="/pink/reservar">Reservar</a>
</template>

<style scoped>
#reserve-btn {
  display: block;
  width: 56vw;
  text-decoration: none;
  text-align: center;
  max-width: 460px;
  padding: min(3.5%, 20px);
  border: none;
  border-radius: 3px;
  font-size: clamp(19px, 4cqi, 22px);
  font-weight: 600;
  background-color: var(--accent);
  filter: brightness(1);
  color: white;
  letter-spacing: 1px;
  font-family: "Montserrat";
  box-shadow: #191918 3px 3px 7px -1px;
  border: 1px solid transparent;
  transition: all 0.2s ease-out;
}

#reserve-btn:hover {
  background-color: #da8e00bd;
  border: 1px solid rgb(192, 192, 192);
}

@media (min-width: 800px) {
  #reserve-btn {
    font-size: clamp(22px, 2.5cqi, 26px);
  }
}
</style>
