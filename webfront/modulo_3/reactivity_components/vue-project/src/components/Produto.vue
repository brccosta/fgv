<script setup>
import { ref } from 'vue'
import StarRating from './StarRating.vue'

// Define as props que o componente recebe
// Props são dados que vêm do componente pai
const props = defineProps({
    produto: {
        type: Object,
        required: true
    }
})

// Cria uma variável reativa para armazenar a avaliação
const avaliacao = ref(0)

// Esta função é um event handler que será chamada quando o evento 'avaliar' 
// for emitido pelo componente filho (StarRating)
function salvarAvaliacao(valor) {
    avaliacao.value = valor
}
</script>

<template>
    <div class="produto">
        <h2>{{ produto.nome }}</h2>
        <p>R$ {{ produto.preco }}</p>

        <!-- O componente StarRating emite um evento chamado 'avaliar' -->
        <!-- @avaliar é a sintaxe de escuta de eventos (equivalente a v-on:avaliar) -->
        <!-- Quando o evento 'avaliar' é emitido, a função salvarAvaliacao é chamada -->
        <StarRating :initial-rating="avaliacao" @avaliar="salvarAvaliacao" />

        <p>Sua avaliação: {{ "⭐".repeat(avaliacao) }}</p>
    </div>
</template>