import axios from 'axios'

const API_URL = 'http://localhost:3000'

export default {
  getUsuarios() {
    try {
      return axios.get(`${API_URL}/usuarios`)
        .then(response => response.data)
    } catch (error) {
      throw new Error('Erro ao buscar usuários: ' + error.message)
    }
  },

  getUsuario(id) {
    try {
      return axios.get(`${API_URL}/usuarios/${id}`)
        .then(response => response.data)
    } catch (error) {
      throw new Error('Erro ao buscar usuário: ' + error.message)
    }
  },

  criarUsuario(usuario) {
    try {
      return axios.post(`${API_URL}/usuarios`, usuario)
        .then(response => response.data)
    } catch (error) {
      throw new Error('Erro ao criar usuário: ' + error.message)
    }
  }
}
