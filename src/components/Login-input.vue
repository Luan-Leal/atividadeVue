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
      <i><img draggable="false" src="@/assets/password-icon.png" alt="" /></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-form',
};
</script>

<style scoped>
#form {
  width: 50%;
  color: #e0e0e0;
}

input {
  border-radius: 90px;
  border-style: none;
  padding: 5%;
  background: transparent;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  width: 100%;
  transition: none;
  color: #ffffff;
}

input::placeholder {
  color: white;
}

textarea:focus,
input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
  border: none;
}

.form-1:focus-within {
  border: 1px solid white;
  border-radius: 50px;
}

.form-1 {
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.form-1 i {
  margin-left: 3%;
}

.form-2 {
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.form-2:focus-within {
  border: 1px solid white;
  border-radius: 50px;
}

.form-2 i {
  margin-left: 3%;
}
</style>
