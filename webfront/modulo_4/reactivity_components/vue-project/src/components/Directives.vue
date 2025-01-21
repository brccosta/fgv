<script setup>
import { ref } from 'vue'

const mensagem = ref('Exemplo de v-text')
const mostrarElemento = ref(true)
const idade = ref(18)
const frutas = ref(['Maçã', 'Banana', 'Laranja', 'Uva'])
</script>

<template>
  <div class="directives-demo">
    <h2>Demonstração de Diretivas</h2>
    
    <!-- v-text -->
    <p v-text="mensagem"></p>
    
    <!-- v-show -->
    <p v-show="mostrarElemento">Este texto usa v-show e está visível</p>
    
    <!-- v-if e v-else -->
    <div>
      <p v-if="idade >= 18">Você é maior de idade (v-if)</p>
      <p v-else>Você é menor de idade (v-else)</p>
    </div>
    
    <!-- v-for -->
    <ul>
      <li v-for="(fruta, index) in frutas" :key="index">
        {{ fruta }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.directives-demo {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>