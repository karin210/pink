<template>
  <article>
    <h3>Elige una ubicación</h3>
    <ul id="branch-list" class="item-list">
      <li class="branch-item card">
        <img src="/Quinceo-branch-5.jpg" alt="Restaurante en Quinceo">
        <ul class="info-list">
          <li class="address-item">
            <div class="address-header">
              <img src="/location-pink-icon.svg" alt="Ícono de mapa">
              <h4>Dirección</h4>
            </div>
            <p>Exhacienda de Quinceo 234, 58149 Morelia, Mich.   <a href="https://maps.app.goo.gl/4g6NVf3CsASFHc2P6" target="_blank">Ver mapa</a></p>
          </li>
          <li class="cta-item">
            <div class="void-space"></div>
            <button class="enter-btn"></button> 
            <img src="/pic-pink-icon.svg" alt="Ícono de fotos">
          </li>
        </ul>
      </li>

      <li class="branch-item card">
        <img src="/Artilleros-branch-interior-1.jpg" alt="Restaurante en Quinceo">
        <ul class="info-list">
          <li class="address-item">
            <div class="address-header">
              <img src="/location-pink-icon.svg" alt="Ícono de mapa">
              <h4>Dirección</h4>
            </div>
            <p>Artilleros de 1847 1391, Chapultepec Oriente, 58260 Morelia, Mich.   <a href="https://maps.app.goo.gl/ezo7S7fsNSEN1j8v6" target="_blank">Ver mapa</a></p>
          </li>
          <li class="cta-item">
            <div class="void-space"></div>
            <button class="enter-btn" @click="$emit('branchSelected', 'artilleros')"></button>
            <img src="/pic-pink-icon.svg" alt="Ícono de fotos">
          </li>
        </ul>
      </li>
    </ul>
  </article>
</template>

<style scoped>

  @import "~/assets/css/reservePage.css";

  article {
    margin-bottom: 100px;
  }

  .item-list {
    display: flex;
    width: 75vw;
    list-style: none;
    padding: 0;
    justify-content: center;
    align-items: stretch;
    margin: 0 auto;
    margin-top: min(12%, 55px);
    gap: 35px;
    flex-wrap: wrap;
  }
  
  .card {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 150px auto;
    width: 100%;
    max-width: 250px;
    justify-items: stretch;
    border-radius: 8px;
    padding: min(35px, 8%) 15px;
    background-color: lightgray;
    font-family: Montserrat;
    flex-grow: 1;
  }
  
  .card > img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    filter: contrast(1.3);
    box-shadow: black 1px 1px 5px 0px;
  }

  .info-list {
    list-style: none;
    padding: 0;
    grid-row-start: 2;
    margin-top: 23px;
  }

  .address-header {
    display: flex;
  }

  .address-header img {
    margin-right: 3px;
  }

  .address-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
  }

  .address-item a {
    white-space: nowrap;
    margin: 0 auto;
    margin-left: 8px;
  }

  h4 {
    margin: 0;
    margin-top: auto;
  }

  p {
    line-height: 1.4;
    margin: 0;
    text-align: center;
  }

  .address-header img {
    width: 25px;
  }

  .cta-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin-top: 20px;
    align-items: end;
    justify-items: center;
  }

  .cta-item img {
    width: 50%;
    max-width: 41px;
    background: #f2f2f2;
    border-radius: 26%;
    border: 2px solid #f2f2f2;
    justify-self: end;
  }

  .enter-btn {
    box-sizing: border-box;
    width: 60px;
    height: 34px;
    padding: 5px 0;
    background-image: url(/right-arrow-white-icon.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--tertiary);
    margin-top: 20px;
    background-size: contain;
    border: 3px solid var(--tertiary);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
   
    .item-list {
      flex-wrap: nowrap;
    }

    .card {
      width: 38%;
      max-width: 370px;
    }
  }

</style>