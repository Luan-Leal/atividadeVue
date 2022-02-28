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

<style lang="scss" scoped>
.mensagem {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
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
}

@media (max-width: 5000px) {
  .mensagem {
    p {
      width: 50%;
    }
  }
}

@media (max-width: 2150px) {
  .mensagem {
    p {
      width: 55%;
    }
  }
}

@media (max-width: 1990px) {
  .mensagem {
    p {
      width: 59.4%;
    }
  }
}

@media (max-width: 1842px) {
  .mensagem {
    p {
      width: 64.1%;
    }
  }
}

@media (max-width: 1710px) {
  .mensagem {
    p {
      width: 69.1%;
    }
  }
}

@media (max-width: 1584px) {
  .mensagem {
    p {
      width: 74.6%;
    }
  }
}

@media (max-width: 1486px) {
  .mensagem {
    p {
      width: 79.5%;
    }
  }
}

@media (max-width: 1374px) {
  .mensagem {
    p {
      width: 86%;
    }
  }
}

@media (max-width: 1273px) {
  .mensagem {
    p {
      width: 93%;
    }
  }
}

@media (max-width: 1179px) {
  .mensagem {
    p {
      width: 100%;
    }
  }
}

@media (max-width: 1133px) {
  .mensagem {
    p {
      font-size: 0.72em;
    }
  }
}

@media (max-width: 1100px) {
  .mensagem {
    display: none;
  }
}
</style>
