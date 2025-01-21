<template>
  <div class="about">
    <div v-if="carregando">Carregando...</div>
    <div v-else-if="erro">Erro ao carregar usuários: {{ erro }}</div>
    <div v-else>
      <div v-for="usuario in usuarios" :key="usuario.id">
        <p>Nome: {{ usuario.nome }}</p>
        <p>Email: {{ usuario.email }}</p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UsuarioService from '@/services/UsuarioService'

const usuarios = ref([])
const erro = ref(null)
const carregando = ref(true)

onMounted(async () => {
  try {
    usuarios.value = await UsuarioService.getUsuarios()
  } catch (error) {
    erro.value = error.message
  } finally {
    carregando.value = false
  }
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
