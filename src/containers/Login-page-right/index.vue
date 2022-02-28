<template>
  <div class="login-right">
    <logoWhite />
  </div>
</template>

<script>
import logoWhite from '@/components/Login-logo/index.vue';
export default {
  name: 'login-right',
  components: {
    logoWhite,
  },
};
</script>

<style lang="scss" scoped>
@import '@/containers/Login-page-right/index.scss';
</style>
