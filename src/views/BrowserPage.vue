<template>
  <div class="container">
    <div class="brand">
      <img class="logo" src="../assets/PATATONIK.png" alt="" />
    </div>
    <h1 class="text">
      Fai click su "installa" per aggiungere l'app alla schermata Home
    </h1>
    <button class="btn btn--danger" @click="tryConnecting">
      In<span class="text-red">stalla</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BrowserPage",
  data() {
    return {
      deferredPrompt: null,
    };
  },
  muonted() {
    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault;
      this.deferredPrompt = e;
      alert(`'beforeinstallprompt' event was fired.`);
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #00a878;
  height: 100vh;
  width: 100vw;
  padding: 3rem 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.brand {
  width: 100%;
  background-image: url("../assets/pallina-di-palline-di-mais.png");
  background-size: contain;
  background-repeat: no-repeat;
  .logo {
    transform: rotate(20deg);
    width: 100%;
    margin-left: -0.5rem;
  }
}

.text {
  color: #ffe74c;
  font-size: 1.1rem;
  text-align: center;
  margin-top: auto;
  text-shadow: -11px 0px 18px rgba(0, 0, 0, 0.25);
}

.btn {
  background: transparent;
  border: none;
  display: block;
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
  margin: 2rem auto 5rem auto;
  text-shadow: -11px 0px 18px rgba(0, 0, 0, 0.25);
}

.text-red {
  color: #ff5964;
}
</style>
