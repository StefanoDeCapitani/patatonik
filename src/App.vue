<template>
  <div id="app">
    <multi-wheel></multi-wheel>
    <multi-slider></multi-slider>
    <rotation-display position="13% auto auto 34%">
      <p>{{ horizontalDegrees + "°" }}</p>
    </rotation-display>
    <rotation-display position="auto auto 13% 25%">
      <p>{{ verticalDegrees + "°" }}</p>
    </rotation-display>
  </div>
</template>

<script>
/* import Wheel from "./components/Wheel.vue";
import Slider from "./components/Slider.vue"; */
import MultiWheel from "./components/MultiWheel.vue";
import MultiSlider from "./components/MultiSlider.vue";
import RotationDisplay from "./components/RotationDisplay.vue";

export default {
  name: "App",
  components: {
    /*     Wheel,
    Slider, */
    MultiWheel,
    MultiSlider,
    RotationDisplay,
  },
  data() {
    return {
      verticalDegrees: 40,
      horizontalDegrees: 80,
    };
  },
};
</script>

<style lang="scss">
@import "scss/app.scss";

body {
  height: 100vh;
  width: 100vw;
}
#app {
  position: relative;
  overflow: hidden;
  font-family: "Sigmar One", cursive;
  height: 100vh;
  width: 100vw;
  background-image: url("assets/X-3.png");
  background-size: cover;
  background-position: center;
}

@media screen and (min-width: 250px) and (max-width: 1100px) and (orientation: portrait) {
  #app {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    height: 100vw;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
  }
}
</style>
