<template>
  <h2 class="login-title">Login</h2>
</template>

<script>
export default {
  name: 'Login-title',
};
</script>

<style lang="scss" scoped>
.login-title {
  font-weight: 400;
  font-size: 1.875em;
  margin-bottom: 3%;
  padding-right: 35%;
}
@media (max-width: 1920px) {
  .login-title {
    font-size: 3em;
    margin-right: 1%;
  }
}
@media (max-width: 5000px) {
  .login-title {
    font-size: 3em;
    margin-right: 5%;
  }
}
</style>
