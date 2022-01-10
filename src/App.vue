<template>
  <div id="app">
    <!--     <div id="nav">
      <router-link to="/">Motion</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "scss/app.scss";

#app {
  font-family: "Sigmar One", cursive;
  height: 100vh;
  width: 100vw;
}
</style>
