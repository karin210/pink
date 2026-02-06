<script setup lang="ts">
  const route = useRoute();
  const resetveBtn = document.querySelector('#reserve-btn') ?? null;
  const reserveBtnFound = ref(true);
  const options = { threshold: 0 };


  if(resetveBtn) {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reserveBtnFound.value = true;
        } else {
          reserveBtnFound.value = false;
        }
      });
    };
    const reserveBtnObserver = new IntersectionObserver(callback, options);
    reserveBtnObserver.observe(resetveBtn);
  }
</script>

<template>
  <div id="main-ctrls-bar">
    <a id="logo-anchor-wrapper" href="/" :class="{visible: !reserveBtnFound || route.path != '/'}">
      <img src="/pink-logo.png" alt="Logo de Pink Bubble Brunch">
    </a>
    <nav>
      <ul id="link-list">
        <li title="Eventos especiales">
          <a href=""> <img src="/celebration-white-icon.svg" alt="Ícono de confetti"> </a>
        </li>
        <li title="Menú">
          <a href=""> <img src="/restaurant-white-icon.svg" alt="Ícono de restaurante"> </a>
        </li>
        <li id="reservation-item" :class="{visible: !reserveBtnFound}" title="Reservar">
          <a href="/reservar"> <img src="/calendar-icon.svg" alt="Ícono de reservación"> </a>
        </li>
      </ul>
    </nav>
    <button id="account-btn"></button>
  </div>
</template>

<style scoped>

  #main-ctrls-bar {
    box-sizing: border-box;
    display: flex;
    position: fixed;
    top: calc(100dvh - 45px);
    height: 45px;
    z-index: 1;
    width: 100vw;
    padding: 4px 0;
    justify-content: space-around;
    align-items: center;
    background-color: var(--primary);
  }

  #main-ctrls-bar > *, #main-ctrls-bar img {
    max-height: 30px;
  }

  #logo-anchor-wrapper {
    display: inline-block;
    width: 30px;
    opacity: 0;
    transition: all 0.2s ease-out;
  }

  #logo-anchor-wrapper.visible {
    opacity: 1;
  }

  #logo-anchor-wrapper img {
    width: 100%;
  }

  #link-list {
    display: flex;
    margin: 0;
    list-style: none;
    padding: 0;
    height: 100%;
    gap: 21px;
  }

  #link-list img {
    filter: opacity(1);
    transition: all 0.2s ease-out;
  }

  #link-list img:hover {
    filter: opacity(0.5);
  }

  #reservation-item {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  #reservation-item img {
    width: 0px;

  }

  #reservation-item.visible {
    opacity: 1;
    max-height: 30px;
  }

  #reservation-item.visible img {
    width: auto;
  }

  #account-btn {
    width: 30px;
    padding: 0;
    border: none;
    background-image: url("/user-white-icon.svg");
    background-size: contain;
    background-position: center;
    background-color: transparent;
    aspect-ratio: 1;
    filter: opacity(1);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }

  #account-btn:hover {
    filter: opacity(0.5);

  }

  @media(min-height: 880px) {

    #main-ctrls-bar {
      top: calc(100dvh - 65px);
      height: 65px;
    }
  }

</style>