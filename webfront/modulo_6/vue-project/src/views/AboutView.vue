<template>
  <div class="about">
    <div v-for="usuario in usuarios" :key="usuario.id">
      <p>Nome: {{ usuario.nome }}</p>
      <p>Email: {{ usuario.email }}</p>
      <hr>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// Importando o Axios
import axios from 'axios'

// Criando uma referência reativa para armazenar os usuários
const usuarios = ref([])

// Executando a chamada à API quando o componente é montado
onMounted(() => {
  // Fazendo uma requisição GET para buscar os usuários
  // O Axios retorna uma Promise (objeto que representa a 
  // eventual conclusão ou falha de uma operação assíncrona)
  axios.get('http://localhost:3000/usuarios')
    .then(response => {
      // Atribuindo os dados recebidos à referência reativa
      // response.data contém o corpo da resposta da API
      usuarios.value = response.data
    })
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
