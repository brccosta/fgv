<script setup>
// Define as propriedades do componente
// 'msg' é uma propriedade obrigatória do tipo String
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

// Adicionando dados para demonstração
const user = {
  name: 'João',
  isAdmin: true
}
const items = ['Maçã', 'Banana', 'Laranja']
const activeColor = 'green'
const fontSize = 30
</script>

<template>
  <!-- Container principal com classe 'greetings' -->
  <div class="greetings">
    <!-- Text Interpolation -->
    <h1 :class="activeColor">{{ msg }}</h1>
    <p>Bem-vindo, {{ user.name.toUpperCase() }}!</p>

    <!-- Attribute Bindings -->
    <div :style="{ fontSize: fontSize + 'px' }">
      <p :class="{ admin: user.isAdmin }">
        Status: {{ user.isAdmin ? 'Administrador' : 'Usuário' }}
      </p>
    </div>

    <!-- JavaScript Expressions -->
    <div class="expressions">
      <p>Quantidade de itens: {{ items.length }}</p>
      <p>Data atual: {{ new Date().toLocaleDateString() }}</p>
    </div>
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

/* Adicionando novos estilos */
.admin {
  color: red;
  font-weight: bold;
}

.expressions {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>