<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "scss/app.scss";

#app {
  font-family: "Sigmar One", cursive;
  height: 100vh;
  width: 100vw;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to,
.fade-leave-active {
  opacity: 0;
}
</style>
