<script setup>
// Define as propriedades do componente
// 'msg' é uma propriedade obrigatória do tipo String
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- Container principal com classe 'greetings' -->
  <div class="greetings">
    <!-- Exibe a mensagem recebida via prop 'msg' com estilo verde -->
    <h1 class="green">{{ msg }}</h1>
    <!-- Texto informativo com links para Vite e Vue 3 -->
    <h3>
      You've successfully created a project with
      <!-- Link para documentação do Vite -->
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <!-- Link para documentação do Vue.js -->
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
/* Estilização do título principal */
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

/* Estilização do subtítulo */
h3 {
  font-size: 1.2rem;
}

/* Alinhamento central para títulos dentro da classe greetings */
.greetings h1,
.greetings h3 {
  text-align: center;
}

/* Media query para telas maiores que 1024px */
@media (min-width: 1024px) {
  /* Alinha textos à esquerda em telas grandes */
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>