<template>
  <div class="login">
    <div class="continuar">
      <button>continuar navegando</button>
    </div>
    <div class="logout">
      <button><a href="./">Logout</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-footer-buttons',
};
</script>

<style>
.login {
  display: flex;
  justify-self: center;
  justify-content: start;
  width: 20%;
}

.continuar {
  display: flex;
  justify-self: center;
  width: 100%;
}

.continuar button {
  background: #ffffff;
  color: #c13216;
  border-style: none;
  width: 100%;
  text-transform: capitalize;
  font-size: 0.875;
  padding: 5%;
}

.logout {
  display: flex;
  justify-content: center;
  width: 100%;
}

.logout button {
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  color: #ffffff;
  border-style: none;
  width: 100%;
}

.logout a {
  color: #ffffff;
  text-decoration: none;
}
</style>
