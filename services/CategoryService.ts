import axios from 'axios'
import { CategoryNameFormatter } from '#imports'
import type { Drink } from './DrinkService'

type Category = {
    id: number,
    name: string
}

export default {
    async getCategories() {
        const config = useRuntimeConfig()
        try {
            const response = await axios.get(`${config.public.apiUrl}/categories`)
            console.log('[Debug] response => ', response)
            return response.data.map((category: Category) => {
                return {
                    ...category,
                    formattedName: CategoryNameFormatter.format(category.name)
                }
            })
        } catch(error) {
            console.error('Erro ao obter categorias.', error)
        }
    },
    async getDrinksByCategory(id: number) {
        const config = useRuntimeConfig()
        const response = await axios.get(`${config.public.apiUrl}/categories/${id}/drinks`)

        return response.data.map((drink: Drink) => {
            return {
                ...drink,
                categoryText: CategoryNameFormatter.format(drink.category_id),
                name: {
                  value: drink.name,
                  class: "hover:bg-gray-800 cursor-pointer"
                }
            }
          });
    }
}