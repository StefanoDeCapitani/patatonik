<template>
  <div
    id="app"
    ref="app"
    v-touch:start="onTouchStart"
    v-touch:moving="onTouchMoving"
    v-touch:end="onTouchEnd"
  >
    <wheel :rotation="wheelRotation"></wheel>
    <slider :translation="sliderTranslation"></slider>
    <rotation-display position="13% auto auto 34%">
      <p>{{ horizontalDegrees + "°" }}</p>
    </rotation-display>
    <rotation-display position="auto auto 13% 25%">
      <p>{{ verticalDegrees + "°" }}</p>
    </rotation-display>
  </div>
</template>

<script>
import Wheel from "./components/Wheel.vue";
import Slider from "./components/Slider.vue";
import RotationDisplay from "./components/RotationDisplay.vue";
import TouchEventRouter from "./TouchEventRouter";

export default {
  name: "App",
  components: {
    Wheel,
    Slider,
    RotationDisplay,
  },
  data() {
    return {
      wheelRotation: 0,
      sliderTranslation: 0,
      touchEventRouter: null,
    };
  },
  computed: {
    horizontalDegrees() {
      return (this.wheelRotation / 10).toFixed();
    },
    verticalDegrees() {
      return this.sliderTranslation.toFixed() * -1;
    },
  },
  mounted() {
    let wheelElement = this.$refs.app.querySelector("div.wheel");
    let sliderElement = this.$refs.app.querySelector("div.slider");
    this.touchEventRouter = new TouchEventRouter(
      this.$refs.app,
      sliderElement,
      wheelElement
    );
  },
  methods: {
    onTouchStart(touchEvent) {
      this.touchEventRouter.onTouchStart(touchEvent);
    },
    onTouchMoving(touchEvent) {
      let result = this.touchEventRouter.onTouchMoving(touchEvent);
      if (result.wheelChangeDegrees) {
        this.wheelRotation += result.wheelChangeDegrees;
      }
      if (result.sliderTranslation) {
        this.sliderTranslation = result.sliderTranslation;
      }
    },
    onTouchEnd(touchEvent) {
      let result = this.touchEventRouter.onTouchEnd(touchEvent);
      if (result) {
        this.sliderTranslation = result.sliderTranslation;
      }
    },
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
