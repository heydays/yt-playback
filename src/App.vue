<script setup>
import logoSvg from './assets/logo.svg'
import logoPng from './assets/logo-png.png'
import {RouterLink, RouterView} from 'vue-router'

</script>


<template>
  <div class="navbar">
    <span class="navbar-brand">
      <object :data="logoSvg" type="image/svg+xml" width="80" height="80">
        <img :src="logoPng" width="80" height="80" alt="Alternatives PNG-Bild">
      </object>
    </span>
    <div class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item">Home</RouterLink>
        <a href="#favs" class="navbar-item anchor">Favorites</a>
      </div>
    </div>
  </div>
  <div class="container">
    <RouterView/>
  </div>
  <div class="footer">
    <ul class="footer__link-list">
      <li>A simple SPA by Norman Walter</li>
      <li><a href="https://www.xing.com/profile/Norman_Walter9">@Xing</a></li>
      <li><a href="https://github.com/heydays/yt-playback">@Github Repo</a></li>
    </ul>

  </div>
</template>

<style>
body {
  background: rgb(37, 42, 52);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;
  padding-top: 116px;
  padding-inline: 16px;
  width: 100%;
  height: 100%;
  background: rgb(37, 42, 52);
  max-width: none;

  @media screen  and (min-width: 768px) {
    margin: 52px auto auto;
  }
}

.container {
  width: 100%;
  min-height: 100%;
  max-width: 1280px;
}

.navbar {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  top: 0;
  left: 0;
  padding: 8px;
  width: 100%;
  background: rgba(27, 32, 42, .9);
  color: rgb(255, 46, 99);
  z-index: 110;
}

.navbar a {
  padding: 0;
  font-size: 16px;
  font-weight: 900;
  color: rgb(234, 234, 234);
  background: none;
  border-bottom: 5px solid transparent;
  transition: all 0.25s ease-in-out;

  @media screen  and (min-width: 768px) {
    font-size: 24px;
  }
}

.navbar a:hover {
  background: none;
  border-bottom-color: rgb(234, 234, 234);
}

.navbar-start {
  display: flex;
  gap: 24px;
}

.title {
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  border-bottom: 4px solid;
}

.subtitle {
  font-size: 18px;
  font-weight: 700;
}

li {
  list-style: none;
}

.anchor {
  @media screen  and (min-width: 768px) {
    display: none;
  }
}

.footer {
  display: flex;
  width: 100%;
  background: rgba(27, 32, 42, .9);;
  padding: 16px;
}

.footer__link-list {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  margin: auto;
}

.footer__link-list a {
  color: rgb(255, 255, 255);
}
</style>
