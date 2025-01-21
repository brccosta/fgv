<script setup>
// Define as props que o componente pode receber do componente pai
const props = defineProps({
    initialRating: {
        type: Number,
        default: 0
    }
})

// Define os eventos que podem ser emitidos para o componente pai
const emit = defineEmits(['avaliar'])

// Função que é chamada quando uma estrela é clicada
// Emite o evento 'avaliar' com o valor da estrela selecionada
function avaliar(valor) {
    emit('avaliar', valor)
}
</script>
<template>
    <!-- Componente de avaliação por estrelas -->
    <div class="star-rating">
        <!-- Botão de estrela que se repete 5 vezes -->
        <!-- @click emite um evento quando a estrela é clicada -->
        <!-- :class adiciona classe 'active' nas estrelas baseado na avaliação -->
        <button v-for="star in 5" :key="star" @click="avaliar(star)" :class="{ active: star <= rating }">
            ⭐
        </button>
    </div>
</template>

<style scoped>
.star-rating button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    opacity: 0.3;
}

.star-rating button.active {
    opacity: 1;
}
</style>