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
import welcomeTitle from '@/components/Hello.vue';
import warmingParagraph from '@/components/Warning-title.vue';
import loginTitle from '@/components/Login-title.vue';
import loginForm from '@/components/Login-input.vue';
import loginErro from '@/components/Login-erro.vue';
import loginButton from '@/components/Login-button.vue';
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
.login-left {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  justify-content: center;
  color: white;
}

@media (max-width: 1100px) {
  .login-left {
    width: 100%;
  }
}
</style>
