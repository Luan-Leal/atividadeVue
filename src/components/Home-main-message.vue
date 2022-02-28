<template>
  <div class="missao">
    <h2>Our mission is</h2>
    <p>No missão é</p>
    <h2>to transform the world</h2>
    <p>tranformar o mundo</p>
    <h2>building digital experiences</h2>
    <p>construindo esperiências digitais</p>
    <h2>that enable our client's growth</h2>
    <p>que permitam o crescimento dos nossos clientes</p>
  </div>
</template>

<script>
export default {
  name: 'home-mission',
};
</script>

<style lang="scss" scoped>
.missao {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-top: 2%;
  height: 65vh;
  padding-right: 3.5%;
  h2 {
    color: #c12d18;
    font-size: 2.5em;
    &:first-child {
      font-size: 1.5em;
    }
  }
  p {
    color: #222222;
    font-size: 1.2em;
  }
}

@media (max-width: 5000px) {
  .missao {
    h2 {
      font-size: 4.5em;
      &:first-child {
        font-size: 2.75em;
      }
    }
    p {
      font-size: 1.55em;
    }
  }
}

@media (max-width: 1900px) {
  .missao {
    h2 {
      font-size: 3.5em;
      &:first-child {
        font-size: 2em;
      }
    }
    p {
      font-size: 1.25em;
    }
  }
}

@media (max-width: 1500px) {
  .missao {
    h2 {
      font-size: 3em;
      &:first-child {
        font-size: 1.8em;
      }
    }
    p {
      font-size: 1.1em;
    }
  }
}

@media (max-width: 1300px) {
  .missao {
    h2 {
      font-size: 2.6em;
      &:first-child {
        font-size: 1.6em;
      }
    }
    p {
      font-size: 0.95em;
    }
  }
}

@media (max-width: 1100px) {
  .missao {
    display: none;
  }
}
</style>
