<template>
  <div class="login-erro">
    <span>Ops, usuario ou senha inválidos. Tente novamente!</span>
  </div>
</template>

<script>
export default {
  name: 'loginErro',
};
</script>

<style scoped>
.login-erro {
  color: #e9b425;
  width: 50%;
  font-size: 1em;
  display: flex;
  justify-content: center;
  text-align: center;
}

.login-erro span {
  display: block;
  padding: 0 15%;
}
</style>
