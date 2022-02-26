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

<style scoped>
.cronometro {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cronometro p {
  display: flex;
  width: 25%;
  justify-content: flex-end;
}

.timer {
  padding-left: 5%;
  padding-right: 25%;
}

.timer h1 {
  font-size: 3.5em;
  line-height: 0.8em;
  padding-top: 1%;
}

.timer h6 {
  display: flex;
  justify-content: center;
}
</style>
