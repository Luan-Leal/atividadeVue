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
  &::placeholder {
    color: white;
  }
}

textarea:focus,
input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
  border: none;
}

.form-1 {
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:focus-within {
    border: 1px solid white;
    border-radius: 50px;
  }
  i {
    margin-left: -13%;
  }
}
.form-2 {
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:focus-within {
    border: 1px solid white;
    border-radius: 50px;
  }
  i {
    margin-top: 1%;
    margin-left: -13%;
  }
}
</style>
