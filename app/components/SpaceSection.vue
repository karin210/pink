<script setup lang="ts">
  
  const slideIndex = ref(1);
  const prevSlideIndex = ref(0);

  function changeImage(action: string) {
    prevSlideIndex.value = slideIndex.value;
    if(action == 'add') {
      slideIndex.value = Math.min(++slideIndex.value, 2);
    } else {
      slideIndex.value = Math.max(--slideIndex.value, 0);
    }
  }
  
</script>

<template>
  <section id="space-section">
    <h2>Momentos inolvidables día a día</h2>
    <div id="section-main-content">
      <button class="nav-arrow" @click="changeImage('subtract')"></button>
      <div id="slider-container">
        <ul id="slider" :class="{scroll: slideIndex != 0}" :style="{ '--current-slide': slideIndex }">
          <li id="slide-1" :class="{slide: true, selected: slideIndex == 0}">
            <figure class="img-container">
              <img src="/spots-slide.jpg" alt="">
              <figcaption>Los spots que tu Instagram necesita</figcaption>
            </figure>
          </li>
          <li id="slide-3" :class="{slide: true, selected: slideIndex == 1 }">
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
      </div>
      <button class="nav-arrow" @click="changeImage('add')"></button>
    </div>
    <ul id="slider-dots">
      <li :class="{'slide-dot': true, selected: slideIndex == 0}"></li>
      <li :class="{'slide-dot': true, selected: slideIndex == 1}"></li>
      <li :class="{'slide-dot': true, selected: slideIndex == 2}"></li>
    </ul>
  </section>
</template>

<style scoped>

  #space-section {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    background: linear-gradient(180deg, transparent 91%, #ff378c 98%);
    position: relative;
  }
  
  h2 {
    font-size: clamp(24px, 6vw, 32px);
    font-family: Merriweather;
    text-align: center;
    font-weight: 700;
    padding: 0 35px;
    margin-top: 25px;
    margin-bottom: 15px;
    color: white;
    text-shadow:
    1.5px 0px var(--tertiary),
    0px 1.5px var(--tertiary),
    -1.5px 0px var(--tertiary),
    0px -1.5px var(--tertiary);
    letter-spacing: 2px;
    line-height: 1.6;
  }

  #section-main-content {
    display: flex;
    height: 59dvh;
    align-items: center;
    container-type: inline-size;
    padding-top: 6%;
  }

  div#slider-container {
    overflow: hidden;
  }

  ul#slider {
    --button-width-space: calc(2% + 50px);
    --slide-width: min(62vw, 700px);
    --width-void-space: calc(100vw - (var(--button-width-space) * 2) - var(--slide-width));
    --slides-gap: 55px;
    --slides-offset: 7%;
    box-sizing: border-box;
    display: flex;
    padding: 0px calc(var(--button-width-space) + calc(var(--width-void-space) / 2));
    gap: var(--slides-gap);
    align-items: center;
    transform: translateX(0);
    transition: transform 0.3s ease-out;
    list-style: none;
  }

  ul#slider.scroll {
    transform: translateX( calc( calc( (var(--slide-width) + var(--slides-gap)) ) * var(--current-slide) * -1) );
  }

  li.slide {
    width: 62vw;
  }

  figure.img-container {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: min(62vw, 700px);
    grid-template-rows: 100%;
    height: 45dvh;
    max-width: 700px;
    padding: min(35px, 8%) 0px;
    gap: 10px;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    margin: 0;
    background-color: #e8e8e8;
    transition: height 0.4s ease-out;
    border-radius: 8px;
  }
  
  .slide.selected figure.img-container {
    grid-template-rows: 80% auto;
    height: 60dvh;
  }

  figure.img-container img {
    width: 88%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: 8px;
  }

  figure.img-container figcaption {
    font-size: clamp(18px, 3cqi, 20px);
    text-align: center;
    padding: 0px 20px;
    font-weight: 600;
    font-family: 'Montserrat';
    color: var(--soft-black-text);
    letter-spacing: 1px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .slide.selected figure.img-container figcaption {
    opacity: 1;
  }

  button.nav-arrow {
    position: absolute;
    width: 50px;
    height: 50px;
    background-size: contain;
    background-color: #edededd4;
    border-block: 8px solid #ededed40;
    border-inline: 8px solid #ededed40;
    background-repeat: no-repeat;
    border-radius: 18%;
    z-index: 1;
    cursor: pointer;
  }

  button.nav-arrow:first-of-type {
    background-image: url("/chevron-left-icon.svg");
    left: 2%;
  }

  button.nav-arrow:nth-of-type(2) {
    background-image: url("/chevron-right-icon.svg");
    right: 2%;
  }

  #slider-dots {
    display: flex;
    margin: 0 auto;
    gap: 8px;
    padding: 0px;
    margin-top: 35px;
    list-style: none;
  }

  .slide-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #b5b5b5;
  }

  .slide-dot.selected {
    background-color: var(--indicator-accent);
  }

  @media(min-width: 640px) {
    
    .slide-dot {
      width: 13px;
      height: 13px;
    }
  }

  @media(min-height: 830px) {
    
    h2 {
      margin-top: 40px;
    }
  }

  @media(min-width: 768px) {

    button.nav-arrow {
      width: 65px;
      height: 65px;
    }

    figure.img-container figcaption {
      font-size: clamp(20px, 2.2cqi, 25px);
    }

    #section-main-content {
      padding-top: 4%;
    }
  }

  @media(min-width: 1024px) {

    h2 {
      font-size: clamp(32px, 3.2vw, 37px);
    }
  }

  @media(min-width: 1280px) {

    button.nav-arrow {
      width: 65px;
      height: 65px;
    }
  }

  @media(min-width: 1536px) {

    button.nav-arrow {
      width: 75px;
      height: 75px;
      border-block: 10px solid #ededed40;
      border-inline: 10px solid #ededed40;
    }
  }

</style>