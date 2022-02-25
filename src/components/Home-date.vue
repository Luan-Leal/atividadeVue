<template>
  <div class="hora">
    <h1><span id="hora">11</span>:<span id="minutos">26</span></h1>
    <h6>
      <span id="diaSemana">Carregando...a </span>,<span id="dia"></span> de
      <span id="mes">março</span> de <span id="ano">2020</span>
    </h6>
  </div>
</template>

<script>
export default {
  name: 'home-date',
};
</script>

<style scoped>
.hora h1 {
  font-size: 5em;
  line-height: 0.8em;
}
</style>
