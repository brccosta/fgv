<script setup>
import { ref } from 'vue'
import StarRating from './StarRating.vue'

const props = defineProps({
  produto: {
    type: Object,
    required: true
  }
})

const avaliacao = ref(0)
  
function salvarAvaliacao(valor) {
  avaliacao.value = valor
}
</script>

<template>
    <div class="produto">
      <h2>{{ produto.nome }}</h2>
      <p>R$ {{ produto.preco }}</p>
      
      <StarRating 
        :initial-rating="avaliacao" 
        @avaliar="salvarAvaliacao"
      />
      
      <p>Sua avaliação: {{ "⭐".repeat(avaliacao) }}</p>
    </div>
</template>