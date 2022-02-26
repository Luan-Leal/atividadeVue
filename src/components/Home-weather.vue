<template>
  <div class="clima">
    <h5 id="cidade">Carregando...</h5>
    <div class="clima2">
      <div class="container-img">
        <img
          draggable="false"
          src="@/assets/icons/unknown.png"
          id="icon-clima"
        />
      </div>
      <div class="container-temp">
        <div>...</div>
        <span>°</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-weather',
};
</script>

<style scoped>
.clima {
  display: flex;
  flex-direction: column;
  margin-right: 1%;
}

.clima h5 {
  display: flex;
  justify-content: flex-end;
  font-size: 0.6em;
}

.clima2 {
  display: flex;
  justify-content: flex-end;
}

.container-img img {
  width: auto;
  height: 35px;
  margin-top: 15%;
}

.container-temp {
  display: flex;
  font-weight: bold;
  font-size: 2em;
}
</style>
