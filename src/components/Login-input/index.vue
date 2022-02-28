<template>
  <div id="form">
    <div class="form-1">
      <input
        type="ratio"
        class="input-login"
        placeholder="Usuário"
        id="user"
        name="username"
      />
      <i class="user-icon"
        ><img draggable="false" src="@/assets/user-icon.png" alt=""
      /></i>
    </div>
    <div class="form-2">
      <input
        type="password"
        class="input-login"
        name="password"
        id="senha"
        placeholder="Senha"
      />
      <i
        ><img
          class="cadeado"
          draggable="false"
          src="@/assets/password-icon.png"
          alt=""
      /></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-form',
};
</script>

<style lang="scss" scoped>
@import '@/components/Login-input/index.scss';
</style>
