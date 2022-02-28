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
@import '@/components/Home-timer/index.scss';
</style>
