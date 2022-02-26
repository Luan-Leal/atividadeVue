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

<style>
.foto {
  width: 50%;
  display: flex;
  margin-left: -15%;
  z-index: 0;
}

.foto img {
  min-width: 100%;
}
</style>
