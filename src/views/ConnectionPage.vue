<template>
  <div id="about">
    <transition name="fade" mode="in-out">
      <div class="connecting" v-if="!connectionFailed">
        <loading-spinner></loading-spinner>
        <p class="connection-text">Collegamento in corso...</p>
      </div>
    </transition>
    <transition name="fade" mode="in-out">
      <div class="retry-connecting">
        <button class="btn btn--danger" @click="tryConnecting">Riprova</button>
        <button @click="router.push({ name: 'MotionControllerPage' })">
          Vai oltre
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import LoadingSpinner from "../components/LoadingSpinner.vue";
import Router from "../router/index";

export default {
  name: "App",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      router: Router,
      timeout: null,
      connection: null,
      connectionFailed: false,
    };
  },
  mounted() {
    this.tryConnecting();
  },
  methods: {
    expireConnection() {
      this.connectionFailed = true;
    },
    tryConnecting() {
      this.connectionFailed = false;
      this.timeout = setTimeout(this.expireConnection, 2000);
      /* this.connection = Create connection 
          In case of success: clearTimeout(this.timeout) and this.router.push({ name: "MotionControllerPage" }); */
    },
  },
};
</script>

<style lang="scss" scoped>
#about {
  background-color: #00a878;
  height: 100vh;
  width: 100vw;
  position: relative;
}

.connection-text {
  filter: drop-shadow(-11px 0px 18px rgba(0, 0, 0, 0.25));
  font-size: 1rem;
  color: #ffe74c;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
}

.retry-connecting {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
}

.btn {
  background: transparent;
  border: none;
  font-family: inherit;
  color: #ffe74c;
}

.btn--danger {
  background: #3f74ca;
  box-shadow: inset 0px -4px 8px rgba(0, 0, 0, 0.25),
    inset 0px 4px 8px rgba(255, 255, 255, 0.4),
    -11px 0px 18px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 3rem;
  border-radius: 3rem;
  font-size: 2rem;
}
</style>
