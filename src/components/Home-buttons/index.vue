<template>
  <div class="login">
    <div class="continuar">
      <button>continuar navegando</button>
    </div>
    <div class="logout">
      <button><a href="./">Logout</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-footer-buttons',
};
</script>

<style lang="scss" scoped>
@import '@/components/Home-buttons/index.scss';
</style>
