<script setup>
import { useCounterStore } from '../stores/counter'
import { ref } from 'vue'

const counter = useCounterStore()
const amountToAdd = ref(5)
</script>

<template>
  <div class="counter-container">
    <h2>HelloWorld.vue</h2>
    <h1>Contador: {{ counter.count }}</h1>
    <p>Valor dobrado: {{ counter.doubleCount }}</p>
    <p>Valor incrementado: {{ counter.incrementedCount }}</p>
    <p>Valor + {{ amountToAdd }}: {{ counter.addAmount(amountToAdd) }}</p>
    <button @click="counter.increment">Incrementar</button>
  </div>
</template>

<style scoped>
.counter-container {
  text-align: center;
  padding: 2rem;
}

h2 {
  color: #666;
  margin-bottom: 1rem;
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
