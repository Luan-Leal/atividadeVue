<template>
  <section>
    <home-logo />
    <home-date />
    <home-weather />
  </section>
</template>

<script>
import homeLogo from '@/components/Home-logo.vue';
import homeDate from '@/components/Home-date.vue';
import homeWeather from '@/components/Home-weather.vue';

export default {
  name: 'home-page',
  components: {
    homeLogo,
    homeDate,
    homeWeather,
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
}
</style>
