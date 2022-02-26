<template>
  <div class="mensagem">
    <p>
      Essa janela do navegador é usada para manter sua sessão de autenticação
      ativa. Deixe-a aberta em segundo plano e abra uma nova janela para
      continuar a navegar.
    </p>
  </div>
</template>

<script>
export default {
  name: 'home-warning-footer',
};
</script>

<style scoped>
.mensagem {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.mensagem p {
  width: 85%;
  font-size: 0.75em;
  display: flex;
  align-items: center;
  border-right: 1px solid #ffffff;
  font-weight: 400;
  text-align: end;
  padding: 1% 0;
  padding-right: 3%;
}
</style>
