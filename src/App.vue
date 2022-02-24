<template>
  <div id="app">
    <login-page></login-page>
  </div>
</template>

<script>
import loginPage from '@/views/Login-page.vue';

export default {
  name: 'Login-page',
  components: {
    loginPage,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap');
* {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
</style>
