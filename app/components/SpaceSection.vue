<script setup lang="ts">
  
  interface Slide { subheading: string, imgSrc: string, altText: string };
  const slideIndex = ref(1);
  const prevSlideIndex = ref(0);

  function changeImage(action: string) {
    prevSlideIndex.value = slideIndex.value;
    if(action == 'add') {
      slideIndex.value = Math.min(++slideIndex.value, 2);
    } else {
      slideIndex.value = Math.max(--slideIndex.value, 0);
    }
    
    console.log({prevSlideIndex: prevSlideIndex.value, slideIndex: slideIndex.value});
  }
  // const slidesData: Array<Slide> = [
  //   {subheading: "El lugar indicado para la mejor experiencia", imgSrc: "/main-slide.jpg", altText: ""},
  //   {subheading: "Disfruta de una comida deliciosa", imgSrc: "/food-slide.jpg", altText: ""},
  //   {subheading: "Los spots que tu Instagram necesita", imgSrc: "/spots-slide.jpg", altText: ""},
  //   {subheading: "El espacio perfecto para tus fechas especiales", imgSrc: "events-slide.jpg", altText: ""},
  // ];
</script>

<template>
  <section id="space-section">
    <!-- <h2>Diseñado para inspirarte día con día</h2> -->
    <ul id="slider" :class="{scroll: prevSlideIndex != slideIndex}" :style="{ '--current-slide': slideIndex }">
      <li id="slide-1" :class="{slide: true, selected: slideIndex == 0}">
        <figure class="img-container">
          <img src="/spots-slide.jpg" alt="">
          <figcaption>Los spots que tu Instagram necesita</figcaption>
        </figure>
      </li>
      <li id="slide-2" :class="{slide: true, selected: slideIndex == 1 }">
        <figure class="img-container">
          <img src="/space-img.jpg" alt="">
          <figcaption>Inspírate día a día</figcaption>
        </figure>
      </li>
      <li id="slide-3" :class="{slide: true, selected: slideIndex == 2 }">
        <figure class="img-container">
          <img src="/events-slide.jpg" alt="">
          <figcaption>El espacio perfecto para tus fechas especiales</figcaption>
        </figure>
      </li>
      <li id="slide-3" :class="{slide: true, selected: slideIndex == 2 }">
        <figure class="img-container">
          <img src="/food-slide.jpg" alt="">
          <figcaption>Disfruta de una comida deliciosa</figcaption>
        </figure>
      </li>
    </ul>
    <button class="nav-arrow" @click="changeImage('subtract')">prev</button>
    <button class="nav-arrow" @click="changeImage('add')">Next</button>
  </section>
</template>

<style scoped>

  #space-section {
    container-type: inline-size;
    height: 100dvh;
    overflow: hidden;
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
    gap: 50px;
    align-items: center;
    padding: 65px 19vw;
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;
  }

  ul#slider.scroll {
    transform: translateX(calc((48px + 62vw) * var(--current-slide) * -1));
  }

  .slide {
    list-style: none;
  }

  figure.img-container {
    display: flex;
    flex-direction: column;
    width: 62vw;
    height: 38dvh;
    max-width: 400px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0;
    transition: height 0.5s ease-in-out;
    border-radius: 8px;
  }

  .slide.selected figure.img-container {
    height: 54dvh;
  }

  figure.img-container img {
    height: 85%;
    object-position: center;
  }

  figure.img-container figcaption {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    font-family: 'Montserrat';
    color: white;
     text-shadow:
    1px 0px var(--tertiary),
    0px 1px var(--tertiary),
    -1px 0px var(--tertiary),
    0px -1px var(--tertiary);
    letter-spacing: 1px;
  }

</style>