<template>
  <div class="login-right">
    <logoWhite />
  </div>
</template>

<script>
import logoWhite from '@/components/Login-logo.vue';
export default {
  name: 'login-right',
  components: {
    logoWhite,
  },
};
</script>

<style>
.login-right {
  display: flex;
  width: 50%;
  height: 100vh;
  background-image: url(../../src/assets/login-bg.png);
  background-size: cover;
  display: flex;
  justify-content: center;
}
</style>
