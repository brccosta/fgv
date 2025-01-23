// Importa a função defineStore da biblioteca Pinia
// que é usada para criar stores no Vue.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    // Getter que multiplica por 2
    doubleCount: (state) => state.count * 2,
    
    // Getter que soma 1
    incrementedCount: (state) => state.count + 1,
    
    // Getter que recebe um parâmetro para somar
    // Note que quando precisamos usar parâmetros em getters,
    // precisamos retornar uma função
    addAmount: (state) => {
      return (amount) => state.count + amount
    },
  },
})

