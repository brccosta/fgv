// Importa a função defineStore da biblioteca Pinia
// que é usada para criar stores no Vue.js
import { defineStore } from 'pinia'

// Define e exporta uma store chamada 'counter'
// O primeiro argumento 'counter' é o id único da store
export const useCounterStore = defineStore('counter', {
  // Define o estado inicial da store
  // Retorna um objeto com a propriedade count iniciada em 0
  state: () => {
    return { count: 0 }
  },

  // Define as ações que podem modificar o estado
  actions: {
    // Método que incrementa o contador em 1
    increment() {
      this.count++
    },
  },
})