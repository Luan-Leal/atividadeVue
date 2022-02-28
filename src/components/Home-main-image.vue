<template>
  <div class="foto">
    <img
      src="@/assets/logo-grande.png"
      alt="Compass logo branca 1"
      class="logo"
      draggable="false"
    />
  </div>
</template>

<script>
export default {
  name: 'home-main-img',
};
</script>

<style lang="scss" scoped>
.foto {
  width: 50%;
  display: flex;
  margin-left: -15%;
  z-index: 0;
  position: absolute;
  bottom: 0;
  img {
    min-width: 75%;
  }
}

@media (max-width: 1100px) {
  .foto {
    position: absolute;
    bottom: 0;
    width: 120%;
    height: calc(85%);
    margin-left: -30%;
  }
}
</style>
