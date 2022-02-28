<template>
  <p class="paragraph">
    Para continuar navegando de forma segura, efetue o login na rede.
  </p>
</template>

<script>
export default {
  name: 'warning-paragraph',
};
</script>

<style lang="scss" scoped>
.paragraph {
  width: 45%;
  font-size: 1em;
  margin-top: 3%;
  margin-bottom: 10%;
  line-height: 1.25em;
}

@media (max-width: 1999px) {
  .paragraph {
    font-size: 1.25em;
    margin-right: 7%;
  }
}

@media (max-width: 5000px) {
  .paragraph {
    font-size: 1.25rem;
    margin-right: 7%;
  }
}
</style>
