<template>
  <h1 class="titulo">Olá,</h1>
</template>

<script>
export default {
  name: 'welcome-title',
};
</script>

<style lang="scss" scoped>
.titulo {
  display: flex;
  align-items: center;
  font-size: 3.75em;
  font-weight: 400;
  color: white;
  width: 45%;
  height: 8%;
  text-align: start;
}

@media (max-width: 1100px) {
  .titulo {
    font-size: 2em;
  }
}

@media (max-width: 1999px) {
  .titulo {
    font-size: 5em;
    margin-right: 8%;
  }
}

@media (max-width: 3000px) {
  .titulo {
    font-size: 6em;
    margin-right: 10%;
  }
}
</style>
