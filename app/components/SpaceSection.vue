<script setup lang="ts">
  
  interface Slide { subheading: string, imgSrc: string, altText: string };
  // const slidesData: Array<Slide> = [
  //   {subheading: "El lugar indicado para la mejor experiencia", imgSrc: "/main-slide.jpg", altText: ""},
  //   {subheading: "Disfruta de una comida deliciosa", imgSrc: "/food-slide.jpg", altText: ""},
  //   {subheading: "Los spots que tu Instagram necesita", imgSrc: "/spots-slide.jpg", altText: ""},
  //   {subheading: "El espacio perfecto para tus fechas especiales", imgSrc: "events-slide.jpg", altText: ""},
  // ];

</script>

<template>
  <section id="space-section">
    <h2>Diseñado para inspirarte día con día</h2>
    <ul id="slider">
      <li class="slide">
        <figure class="img-container">
          <img src="/main-slide.jpg" alt="">
        </figure>
      </li>
      <li class="slide">
        <figure class="img-container">
          <img src="/spots-slide.jpg" alt="">
        </figure>
      </li>
      <li class="slide">
        <figure class="img-container">
          <img src="/events-slide.jpg" alt="">
        </figure>
      </li>
    </ul>
    <button class="nav-arrow"></button>
    <button class="nav-arrow"></button>
  </section>
</template>

<style scoped>

  #space-section {
    container-type: inline-size;
    height: 100dvh;
  }
  
  h2 {
    font-size: clamp(13px, 5cqi, 25px);
    font-family: Merriweather;
    text-align: center;
    font-weight: 700;
    margin-top: 44px;
    margin-bottom: 28px;
    padding: 0 25px;
    color: var(--tertiary);
    /* text-shadow:
    1.5px 0px var(--tertiary),
    0px 1.5px var(--tertiary),
    -1.5px 0px var(--tertiary),
    0px -1.5px var(--tertiary); */
    letter-spacing: 1.5px;
  }

  ul#slider {
    display: flex;
    overflow: scroll;
    gap: 50px;
    background-color: black;
    padding: 65px 20px;
  }

  .slide {
    list-style: none;
  }


  figure.img-container {
    display: flex;
    width: 62vw;
    height: 54dvh;
    max-width: 400px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0;
  }

  figure.img-container img {
    height: 100%;
    object-position: center;
  }

</style>