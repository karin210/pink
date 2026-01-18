<template>
  <div id="main-ctrls-bar">
    <a id="logo-anchor-wrapper" href="/">
      <img src="/pink-logo.png" alt="Logo de Pink Bubble Brunch">
    </a>
    <nav>
      <ul id="link-list">
        <li>
          <a href=""> <img src="/celebration-white-icon.svg" alt="Ícono de confetti"> </a>
        </li>
        <li>
          <a href=""> <img src="/restaurant-white-icon.svg" alt="Ícono de restaurante"> </a>
        </li>
        <li id="reservation-item">
          <a href=""> <img src="/calendar-icon.svg" alt="Ícono de reservación"> </a>
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
    z-index: 1;
    height: 45px;
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
    width: 20px;

  }

  #logo-anchor-wrapper img {
    width: 100%;
    visibility: hidden;
  }

  #link-list {
    display: flex;
    margin: 0;
    list-style: none;
    padding: 0;
    height: 100%;
    gap: 15px;
  }

  #reservation-item {
    display: none;
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
  }

</style>