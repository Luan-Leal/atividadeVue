<template>
  <section class="footer">
    <home-warning-footer />
    <home-timer />
    <home-footer-buttons />
  </section>
</template>

<script>
import homeWarningFooter from '@/components/Home-footer-warning.vue';
import homeTimer from '@/components/Home-timer.vue';
import homeFooterButtons from '@/components/Home-buttons.vue';
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
.footer {
  display: flex;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  color: #ffffff;
  display: flex;
  height: 15vh;
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: 0;
}

@media (max-width: 5000px) {
  .footer {
    height: 10vh;
  }
}

@media (max-width: 1400px) {
  .footer {
    height: 12vh;
  }
}
</style>
