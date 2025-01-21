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
import axios from 'axios'

const usuarios = ref([])

onMounted(() => {
  axios.get('http://localhost:3000/usuarios')
    .then(response => {
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
