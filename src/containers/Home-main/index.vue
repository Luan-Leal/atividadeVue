<template>
  <div class="main">
    <home-main-img></home-main-img>
    <home-mission></home-mission>
  </div>
</template>

<script>
import homeMainImg from '@/components/Home-main-image/index.vue';
import homeMission from '@/components/Home-main-message/index.vue';
export default {
  name: 'Home-Main',
  components: {
    homeMainImg,
    homeMission,
  },
};
</script>

<style lang="scss" scoped>
@import '@/containers/Home-main/index.scss';
</style>
