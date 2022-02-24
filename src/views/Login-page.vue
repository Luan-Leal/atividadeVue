<template>
  <section>
    <login-left></login-left>
    <login-right></login-right>
  </section>
</template>

<script>
import loginLeft from '@/components/Login-page-left.vue';
import loginRight from '@/components/Login-page-right.vue';

export default {
  name: 'Login-page',
  components: {
    loginLeft,
    loginRight,
  },
};
</script>

<style scoped>
section {
  display: flex;
}
</style>
