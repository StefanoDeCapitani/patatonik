<template>
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="brand">
          <img class="logo" src="../assets/patatina-logo.png" alt="" />
        </div>
        <a
          href="https://github.com/StefanoDeCapitani/patatonik"
          class="nav-link"
        >
          Github Repo
        </a>
      </nav>
    </header>
    <div class="main">
      <div class="content">
        <div class="brand">
          <img class="logo" src="../assets/PATATONIK.png" alt="" />
        </div>
        <h1 class="title">PATATONIK - Mobile Progressive Web App</h1>
        <p class="text">
          Questa app, attualmente in fase di sviluppo, permetterà di comandare a
          distanza tramite smartphone il puntamento e lo sparo di un piccolo
          cannone per palline di mais stampato in 3D.
          <br />
          <span class="small">
            Se sei interessato a replicare il progetto, presto saranno
            disponibili il modello stampabile del cannone e la documentazione
            <br />
            necessaria per comprendere il funzionamento del codice, il quale è
            già disponibile nella mia repository di Github.
          </span>
        </p>
      </div>
      <div class="attribution">
        Progetto di: Stefano De Capitani e Luca Barzani.
        <div class="right">Patatonik - 2021</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopPage",
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
}

.header {
  display: flex;
  background-color: #3f74ca;
  justify-content: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
  .nav {
    flex-grow: 1;
    max-width: 1080px;
    display: flex;
    align-items: center;
    padding: 1rem;
    .brand {
      cursor: pointer;
      .logo {
        transform: rotate(20deg);
        height: 50px;
        filter: drop-Shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
      }
    }
    .nav-link {
      color: #ffe74c;
      margin-left: auto;
      font-size: 1rem;
    }
  }
}

.main {
  background-color: #00a878;
  height: 100%;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  .content {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    .brand {
      width: 50%;
      margin: auto;
      max-width: 300px;
      background-image: url("../assets/pallina-di-palline-di-mais.png");
      background-size: contain;
      background-repeat: no-repeat;
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
      .logo {
        transform: rotate(20deg);
        width: 100%;
        margin-left: -0.5rem;
      }
    }
    .title {
      margin: auto;
      padding-top: 2rem;
      color: #ffe74c;
      -webkit-text-stroke: 1px #3f74ca;
      text-shadow: 3px 3px 0 #3f74ca, -1px -1px 0 #3f74ca, 1px -1px 0 #3f74ca,
        -1px 1px 0 #3f74ca, 1px 1px 0 #3f74ca, 0px 0px 10px rgba(0, 0, 0, 0.25);
    }
    .text {
      color: #3f74ca;
      text-shadow: 3px 3px 0 #ffe74c, -1px -1px 0 #ffe74c, 1px -1px 0 #ffe74c,
        -1px 1px 0 #ffe74c, 1px 1px 0 #ffe74c, 0px 0px 10px rgba(0, 0, 0, 0.25);
      max-width: 700px;
      text-align: center;
      font-size: 0.8rem;
      line-height: 1.2rem;
      margin: auto;
      padding: 1rem;
    }
    .small {
      display: block;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 0.6rem;
      line-height: 0.6rem;
      margin-top: 4rem;
      color: #ffe74c;
      text-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
    }
  }
  .attribution {
    background-color: #3f74ca;
    color: #ffe74c;
    padding: 0.5rem 2rem;
    font-size: 0.8rem;
    display: flex;
    .right {
      margin-left: auto;
    }
  }
}
</style>
