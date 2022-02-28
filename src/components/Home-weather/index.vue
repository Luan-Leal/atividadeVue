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

<style lang="scss" scoped>
@import '@/components/Home-weather/index.scss';
</style>
