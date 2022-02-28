<template>
  <section>
    <login-left></login-left>
    <login-right></login-right>
  </section>
</template>

<script>
import loginLeft from '@/containers/Login-page-left/index.vue';
import loginRight from '@/containers/Login-page-right/index.vue';

export default {
  name: 'Login-page',
  components: {
    loginLeft,
    loginRight,
  },
};
</script>

<style lang="scss" scoped>
@import '@/views/Login/index.scss';
</style>
