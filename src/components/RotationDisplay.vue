<template>
  <div class="rotation-display" :style="getInsetCssPosition">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RotationDisplay",
  props: {
    position: String,
  },
  computed: {
    getInsetCssPosition() {
      return "inset: " + this.position;
    },
  },
};
</script>

<style lang="scss" scoped>
.rotation-display {
  position: absolute;

  font-family: Sigmar One;
  font-style: normal;
  font-weight: normal;
  font-size: clamp(1.25rem, 0.43rem + 4.88vw, 5rem);

  color: #ffe74c;
}
</style>
