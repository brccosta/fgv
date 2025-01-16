// Importa o arquivo CSS principal com os estilos globais da aplicação
import './assets/main.css'

// Importa a função createApp da biblioteca Vue.js
import { createApp } from 'vue'
// Importa o componente principal App do arquivo App.vue
import App from './App.vue'

// Cria a aplicação Vue usando o componente App e monta ela no elemento HTML com id 'app'
createApp(App).mount('#app')

