<template>
  <div class="login-left">
    <welcome-title />
    <warming-paragraph />
    <login-title />
    <login-form />
    <login-erro />
    <login-button />
  </div>
</template>

<script>
import welcomeTitle from '@/components/Login-Hello/index.vue';
import warmingParagraph from '@/components/Login-warning/index.vue';
import loginTitle from '@/components/Login-title/index.vue';
import loginForm from '@/components/Login-input/index.vue';
import loginErro from '@/components/Login-erro/index.vue';
import loginButton from '@/components/Login-button/index.vue';
export default {
  name: 'login-left',
  components: {
    welcomeTitle,
    warmingParagraph,
    loginTitle,
    loginForm,
    loginErro,
    loginButton,
  },
};
</script>

<style lang="scss" scoped>
@import '@/containers/Login-page-left/index.scss';
</style>
