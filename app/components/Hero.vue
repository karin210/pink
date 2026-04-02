<template>
  <main id="hero-section">
    <img id="logo-hero" src="/pink-logo.png" alt="Logo de Pink Bubble Brunch" />
    <figure id="hero-img-container">
      <picture>
        <source srcset="/girls-vertical-1.jpg" media="(max-width: 619px)" />
        <source srcset="/main-slide.jpg" media="(min-width: 620px)" />
        <img src="/main-slide.jpg" alt="hero image" />
      </picture>
    </figure>
    <div id="foreground"></div>
    <div id="bottom-components">
      <h2 id="hero-headline">
        Una experiencia extraordinaria para personas extraordinarias
      </h2>
      <ReserveBtn></ReserveBtn>
    </div>
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

#hero-section figure#hero-img-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0;
  height: 100%;
  overflow: hidden;
}

#hero-img-container img {
  height: 100%;
  filter: brightness(0.86) contrast(1.1);
}

#hero-section #foreground {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100vw;
  height: 100dvh;
  background: linear-gradient(transparent 65%, #000000a3 70%, #0b0b0b);
  z-index: 1;
}

#bottom-components {
  position: absolute;
  bottom: 11%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#hero-headline {
  width: 100vw;
  padding: 24px;
  box-sizing: border-box;
  color: white;
  text-align: center;
  font-size: clamp(21px, 5.5cqi, 35px);
  font-weight: 600;
  letter-spacing: 0.8px;
  text-shadow: #1c1c1c 0px 2px 4px;
  z-index: 2;
}

@media (min-height: 815px) {
  #hero-headline {
    font-size: clamp(24px, 5.5cqi, 35px);
  }
}

@media (min-width: 620px) {
  #hero-img-container img {
    width: 100vw;
    height: 100dvh;
    object-fit: cover;
    object-position: center;
  }
}

@media (min-width: 1080px) {
  #hero-headline {
    font-size: clamp(35px, 3cqi, 2.7rem);
  }
}
</style>
