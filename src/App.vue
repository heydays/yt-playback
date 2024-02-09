<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div class="navbar">
    <span class="navbar-brand">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="80"
           height="80" viewBox="0 -5.45 300 300" xml:space="preserve">
        <desc>Created with Fabric.js 5.2.4</desc>
        <defs>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
        <g transform="matrix(0 0 0 0 0 0)" id="39473d21-8231-437e-b152-d2361049abe7">
        </g>
        <g transform="matrix(1 0 0 1 150 150)" id="d062fe70-27f0-4cfb-84f5-7d45afd55645">
        <rect
          style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;"
          vector-effect="non-scaling-stroke" x="-150" y="-150" rx="0" ry="0" width="300" height="300"/>
        </g>
        <g transform="matrix(2.03 0 0 2.03 170.85 150)">
        <path
          style="stroke: rgb(234,234,234); stroke-width: 7; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(101,101,101); fill-rule: nonzero; opacity: 1;"
          vector-effect="non-scaling-stroke" transform=" translate(-50, -50)"
          d="M 50 92.875 C 26.358 92.875 7.125 73.642 7.125 50 C 7.125 26.358000000000004 26.358 7.125 50 7.125 C 73.642 7.125 92.875 26.358 92.875 50 C 92.875 73.642 73.642 92.875 50 92.875 z M 50 9.125 C 27.461 9.125 9.125 27.461 9.125 50 C 9.125 72.538 27.461 90.875 50 90.875 C 72.538 90.875 90.875 72.538 90.875 50 C 90.875 27.461 72.538 9.125 50 9.125 z"
          stroke-linecap="round"/>
        </g>
        <g transform="matrix(0 0 0 0 0 0)">
        <g style="">
        </g>
        </g>
        <g transform="matrix(1.84 0 0 1.84 94.82 148.88)" id="5acf2659-e0a5-492d-b669-58bd8340b9a5">
        <polygon
          style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(234,234,234); fill-rule: nonzero; opacity: 1;"
          vector-effect="non-scaling-stroke" points="-30.68,-37.41 30.68,0 -30.68,37.41 "/>
        </g>
        <g transform="matrix(0 0 0 0 0 0)">
        <g style="">
        </g>
        </g>
        <g transform="matrix(1.84 0 0 1.84 129.93 150)">
        <polygon
          style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(234,234,234); fill-rule: nonzero; opacity: 1;"
          vector-effect="non-scaling-stroke" points="-30.68,-37.41 30.68,0 -30.68,37.41 "/>
        </g>
        <g transform="matrix(1.84 0 0 1.84 219.93 150)">
        <polygon
          style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(234,234,234); fill-rule: nonzero; opacity: 1;"
          vector-effect="non-scaling-stroke" points="-30.68,-37.41 30.68,0 -30.68,37.41 "/>
        </g>
      </svg>
    </span>
    <div class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item">Home</RouterLink>
        <!--        <RouterLink :to="{path: `/video/${videoOne}`}" class="navbar-item is-link">Video 1</RouterLink>-->
        <!--        <RouterLink :to="{path: `/video/${videoTwo}`}" class="navbar-item is-link">Video 2</RouterLink>-->
        <!--        <RouterLink :to="{path: `/video/${videoThree}`}" class="navbar-item is-link">Video 3</RouterLink>-->
        <a href="#favs" class="navbar-item anchor">Favorites</a>
      </div>
    </div>
  </div>
  <div class="container">
    <RouterView/>
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
</style>
