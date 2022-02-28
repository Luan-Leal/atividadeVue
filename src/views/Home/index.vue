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
import homeLogo from '@/components/Home-logo/index.vue';
import homeDate from '@/components/Home-date/index.vue';
import homeWeather from '@/components/Home-weather/index.vue';
import homeMain from '@/containers/Home-main/index.vue';
import homeFooter from '@/containers/Home-footer/index.vue';

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
<style lang="scss" scoped>
@import "@/views/Home/index.scss"
</style>
