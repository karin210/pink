<template>
  <main id="hero-section">
    <img id="logo-hero" src="/pink-logo.png" alt="Logo de Pink Bubble Brunch">
    <figure id="hero-img-container">
      <picture>
        <source srcset="/girls-vertical-1.jpg" media="(max-width: 619px)"/>
        <source srcset="/main-slide.jpg" media="(min-width: 620px)"/>
        <img src="/main-slide.jpg" alt="hero image">
      </picture>
    </figure>
    <div id="foreground"></div>
    <ReserveBtn></ReserveBtn>
    <h2 id="hero-headline">Una experiencia extraordinaria para personas extraordinarias</h2>
  </main>
</template>

<style scoped>

  #hero-section {
    display: flex;
    height: 100dvh;
    overflow: hidden;
    justify-content: center;
    container-type: inline-size;
  }

  #logo-hero {
    position: absolute;
    top: 6%;
    left: 0;
    right: 0;
    width: 40%;
    max-width: 136px;
    margin: auto;
    border-radius: 50%;
    box-shadow: #ffe3f7 0px 5px 21px 3px;
    z-index: 1;
  }

  #hero-headline {
    position: absolute;
    bottom: 9%;
    color: white;
    text-align: center;
    font-size: clamp(20px, 4cqi, 41px);
    font-weight: 300;
    letter-spacing: 0.8px;
    text-shadow: #1c1c1c 0px 2px 4px;
    padding: 7px 6%;
    z-index: 2;
  }

  #hero-section figure#hero-img-container {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
  
  #hero-section #foreground {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100vw;
    height: 100dvh;
    background: linear-gradient(transparent 65%, #000000a3 75%, #0b0b0b);
    z-index: 1;
  }
  
  #hero-img-container img {
    height: 100%;
    filter: brightness(0.86) contrast(1.1);
  }

  @media (min-width: 620px) {

    #hero-img-container img {
      width: 100vw;
      height: 100dvh;
      object-fit: cover;
      object-position: center;
    }
  }

</style>