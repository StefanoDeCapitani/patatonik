<template>
  <div class="slider">
    <img class="slider__track" src="../assets/slider-track.svg" />
    <div class="slider__knob" ref="slidable">
      <img src="../assets/slider-knob.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    translation: Number,
  },
  watch: {
    translation: function (translation) {
      this.$refs.slidable.style.transform = "translateY(" + translation + "%)";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slider {
  position: absolute;
  inset: 0 0 0 0;
  margin: auto auto auto 20px;
  width: 20%;
  height: 70%;
  max-height: 320px;
  min-height: 250px;
  filter: drop-shadow(11px 0px 18px rgba(0, 0, 0, 0.25));

  .slider__track {
    position: absolute;
    inset: auto;
    width: 100%;
    height: 100%;
  }

  .slider__knob {
    position: absolute;
    inset: 51% auto auto 50%;
    width: 50%;
    height: auto;
    max-width: 70px;
    transition: translate 0.5s;

    img {
      width: 100%;
      height: 100%;
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
      transform-origin: 50% 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
