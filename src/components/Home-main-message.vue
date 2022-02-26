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

<style scoped>
.missao {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 65vh;
  padding-right: 3.5%;
}

h2 {
  color: #c12d18;
  font-size: 2.5em;
}

h2:first-child {
  font-size: 1.5em;
}
.missao p {
  color: #222222;
  font-size: 1.2em;
}
</style>
