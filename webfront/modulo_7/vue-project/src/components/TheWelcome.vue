<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="counter-container">
    <h2>TheWelcome.vue</h2>
    <h1>Contador: {{ counter.count }}</h1>
    <button @click="counter.increment">Incrementar</button>
  </div>
</template>

<style scoped>
.counter-container {
  text-align: center;
  padding: 2rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}
</style>
