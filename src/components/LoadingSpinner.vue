<template>
  <div class="pl">
    <div class="pl__ball">
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
    </div>
    <div class="pl__ball">
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
    </div>
    <div class="pl__ball">
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
    </div>
    <div class="pl__ball">
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
      <div class="pl__ball-seg"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style lang="scss" scoped>
$dur: 4s;
$delayInc: calc($dur / 320);
$ballSegs: 10; // should match the Pug
$preloaderSize: 20em;
$ballDiam: 2.5rem;
$fromCenter: translateY(-4.5em);
$colors: #ff5964 #3f74ca #00a878 #ffe74c;
$shadows: (-0.6em -0.6em 1em inset) (-0.6em 0.6em 1em inset)
  (0.6em 0.6em 1em inset) (0.6em -0.6em 1em inset);

.pl {
  filter: drop-shadow(-11px 0px 18px rgba(0, 0, 0, 0.25));
  transform: scale(0.7);
  margin: auto;
  position: relative;
  width: $preloaderSize;
  height: $preloaderSize;
  &__ball {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform;
    &,
    &-seg {
      position: absolute;
    }
    @for $g from 1 through length($colors) {
      &:nth-child(#{$g}) {
        $rotate: 90deg * ($g - 1);
        $color: nth($colors, $g);
        @if $g > 1 {
          transform: rotate($rotate);
        }
        .pl__ball-seg {
          background: $color;
          box-shadow: nth($shadows, $g);
          color: darken($color, 15%);
        }
      }
    }
    &-seg {
      animation: rotateRight $dur ease-in-out infinite;
      border-radius: 50%;
      top: calc(50% - calc($ballDiam / 2));
      left: calc(50% - calc($ballDiam / 2));
      transform: $fromCenter;
      width: $ballDiam;
      height: $ballDiam;
      z-index: 1;
      + .pl__ball-seg {
        opacity: 0.2;
        z-index: 0;
      }
      @for $b from 2 through $ballSegs {
        &:nth-child(#{$b}) {
          animation-delay: $delayInc * ($b - 1);
        }
      }
    }
  }
}

/* Animation */
@keyframes rotateRight {
  from {
    transform: rotate(0deg) $fromCenter rotate(0deg);
  }
  10% {
    transform: rotate(100deg) $fromCenter rotate(-100deg);
  }
  13% {
    transform: rotate(85deg) $fromCenter rotate(-85deg);
  }
  17% {
    transform: rotate(93deg) $fromCenter rotate(-93deg);
  }
  20%,
  25% {
    transform: rotate(90deg) $fromCenter rotate(-90deg);
  }

  35% {
    transform: rotate(190deg) $fromCenter rotate(-190deg);
  }
  38% {
    transform: rotate(175deg) $fromCenter rotate(-175deg);
  }
  42% {
    transform: rotate(183deg) $fromCenter rotate(-183deg);
  }
  45%,
  50% {
    transform: rotate(180deg) $fromCenter rotate(-180deg);
  }

  60% {
    transform: rotate(280deg) $fromCenter rotate(-280deg);
  }
  63% {
    transform: rotate(265deg) $fromCenter rotate(-265deg);
  }
  67% {
    transform: rotate(273deg) $fromCenter rotate(-273deg);
  }
  70%,
  75% {
    transform: rotate(270deg) $fromCenter rotate(-270deg);
  }

  85% {
    transform: rotate(370deg) $fromCenter rotate(-370deg);
  }
  88% {
    transform: rotate(355deg) $fromCenter rotate(-355deg);
  }
  92% {
    transform: rotate(363deg) $fromCenter rotate(-363deg);
  }
  95%,
  to {
    transform: rotate(360deg) $fromCenter rotate(-360deg);
  }
}
</style>
