<template>
  <div class="wheel">
    <img
      class="wheel__background"
      src="../assets/wheel-background.svg"
      alt=""
    />
    <div
      class="wheel__rotatable"
      v-touch:start="onTouchStart"
      v-touch:moving="onTouchMoving"
    >
      <img ref="rotatable" src="../assets/wheel.svg" alt="" />
    </div>
  </div>
</template>

<script>
import TouchEventController from "../TouchEventController";

export default {
  name: "Wheel",
  data() {
    return {
      touchController: null,
      rotation: 0,
    };
  },
  mounted() {
    this.touchController = new TouchEventController(this.$refs.rotatable);
  },
  methods: {
    onTouchStart(touchEvent) {
      this.touchController.setInitialOffsetAngle(touchEvent);
    },
    onTouchMoving(touchEvent) {
      this.rotation += this.touchController.getDegreeChange(touchEvent);
      this.$refs.rotatable.style.transform = "rotate(" + this.rotation + "deg)";
    },
  },
};
</script>

<style scoped lang="scss">
.wheel {
  position: absolute;
  inset: 0 0 0 0;
  margin: auto 20px auto auto;
  width: 40%;
  height: auto;
  max-width: 320px;
  min-width: 250px;

  .wheel__background {
    position: absolute;
    inset: 49% auto auto 47%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    filter: drop-shadow(-11px 0px 18px rgba(0, 0, 0, 0.25));
  }

  .wheel__rotatable {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-48.5%, -45.5%);
    img {
      width: 90%;
      height: 90%;
      transition: transform 0.1s;
    }
  }
}
</style>
