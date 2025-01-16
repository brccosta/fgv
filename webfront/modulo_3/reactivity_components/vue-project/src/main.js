// Importa o arquivo CSS principal com os estilos globais da aplicação
import './assets/main.css'

// Importa a função createApp da biblioteca Vue.js
import { createApp } from 'vue'
// Importa o componente principal App do arquivo App.vue
import App from './App.vue'

// Cria a aplicação Vue e armazena em uma constante
// app é uma instância Vue
const app = createApp(App)

// Monta a aplicação no elemento com id 'app'
app.mount('#app')
