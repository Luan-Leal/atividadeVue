<template>
  <div class="cronometro">
    <p>Application refresh in</p>
    <div class="timer">
      <h1 id="timer">600</h1>
      <h6>segundos</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-timer',
};
</script>

<style lang="scss" scoped>
.cronometro {
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    display: flex;
    width: 25%;
    text-align: end;
  }
}

.timer {
  padding-left: 5%;
  padding-right: 25%;
  h1 {
    font-size: 3.5em;
    line-height: 0.8em;
    padding-top: 1%;
  }
  h6 {
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 5000px) {
  .cronometro p {
    width: 15%;
  }
}
@media (max-width: 1600px) {
  .cronometro p {
    width: 25%;
  }
}
@media (max-width: 1300px) {
  .cronometro p {
    width: 30%;
  }
}
@media (max-width: 1100px) {
  .cronometro {
    display: none;
  }
}
</style>
