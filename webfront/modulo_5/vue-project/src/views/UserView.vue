<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="user-profile">
    <h1>Perfil do Usuário</h1>
    <div class="user-info">
      <p>ID do Usuário: {{ route.params.id }}</p>
      <p>Nome: Usuário {{ route.params.id }}</p>
      <p>Email: usuario{{ route.params.id }}@exemplo.com</p>
    </div>
  </div>
</template>

<style scoped>
.user-profile {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.user-info {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}
</style>