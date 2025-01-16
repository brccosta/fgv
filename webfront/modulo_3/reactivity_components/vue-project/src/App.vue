<!-- Seção de Script -->
<script setup>
// Importa dois componentes que serão utilizados na página
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<!-- Seção de Template -->
<template>
  <!-- Cabeçalho da página -->
  <header>
    <!-- Logo do Vue com dimensões definidas -->
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <!-- Wrapper que contém o componente HelloWorld -->
    <div class="wrapper">
      <!-- Componente HelloWorld com uma prop 'msg' -->
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <!-- Conteúdo principal que contém o componente TheWelcome -->
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
