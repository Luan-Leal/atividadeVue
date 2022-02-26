<template>
  <div class="botao-login">
    <button>Continuar</button>
  </div>
</template>

<script>
export default {
  name: 'login-button',
};
</script>

<style>
.botao-login button {
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
  border-radius: 50px;
  color: white;
  border-style: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin-top: 5%;
}

.botao-login {
  text-decoration: none;
  color: #e0e0e0;
  width: 50%;
  height: 8%;
  padding: 0 3%;
  padding-bottom: 5%;
}
</style>
