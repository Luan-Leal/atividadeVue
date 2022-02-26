<template>
  <div class="main">
    <home-main-img></home-main-img>
    <home-mission></home-mission>
  </div>
</template>

<script>
import homeMainImg from '@/components/Home-main-image.vue';
import homeMission from '@/components/Home-main-message.vue';
export default {
  name: 'Home-Main',
  components: {
    homeMainImg,
    homeMission,
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
</style>
