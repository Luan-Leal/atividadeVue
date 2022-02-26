<template>
  <section>
    <div class="header">
      <home-logo />
      <home-date />
      <home-weather />
    </div>
    <div>
      <home-main></home-main>
    </div>
    <div>
      <home-footer></home-footer>
    </div>
  </section>
</template>

<script>
import homeLogo from '@/components/Home-logo.vue';
import homeDate from '@/components/Home-date.vue';
import homeWeather from '@/components/Home-weather.vue';
import homeMain from '@/components/Home-main.vue';
import homeFooter from '@/components/Home-footer.vue';

export default {
  name: 'home-page',
  components: {
    homeLogo,
    homeDate,
    homeWeather,
    homeMain,
    homeFooter,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 0 2%;
  margin-top: 1%;
}
</style>
