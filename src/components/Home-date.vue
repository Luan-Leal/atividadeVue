<template>
  <div class="hora">
    <h1><span id="hora">11</span>:<span id="minutos">26</span></h1>
    <p>
      <span id="diaSemana">Carregando...a </span>,<span id="dia"></span> de
      <span id="mes">março</span> de <span id="ano">2020</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home-date',
};
</script>

<style lang="scss" scoped>
.hora {
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 7em;
    line-height: 0.8em;
  }
  p {
    font-size: 0.8em;
    align-self: center;
  }
}
@media (max-width: 5000px) {
  .hora {
    h1 {
      font-size: 10em;
    }
  }
}

@media (max-width: 1750px) {
  .hora {
    h1 {
      font-size: 8em;
    }
  }
}
@media (max-width: 1100px) {
  .hora {
    display: none;
  }
}
</style>
