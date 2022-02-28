<template>
  <section class="footer">
    <home-warning-footer />
    <home-timer />
    <home-footer-buttons />
  </section>
</template>

<script>
import homeWarningFooter from '@/components/Home-footer-warning/index.vue';
import homeTimer from '@/components/Home-timer/index.vue';
import homeFooterButtons from '@/components/Home-buttons/index.vue';
export default {
  name: 'home-footer',
  components: {
    homeWarningFooter,
    homeTimer,
    homeFooterButtons,
  },
};
</script>

<style lang="scss" scoped>
@import '@/containers/Home-footer/index.scss';
</style>
