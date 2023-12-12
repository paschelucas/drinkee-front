import axios from 'axios'

export default {
    async getCategories() {
        try {
            const response = await axios.get('http://127.0.0.1:3333/api/categories')

            return response.data
        } catch(error) {
            console.error('Erro ao obter categorias.', error)
        }
    },
    async getDrinksByCategory(id: number) {
        const response = await axios.get(`http://127.0.0.1:3333/api/categories/${id}/drinks`)

        return response.data
    }
}