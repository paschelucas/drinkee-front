import axios from "axios";
import { CategoryNameFormatter } from "#imports";
type Drink = {
    id: number,
    name: string,
    recipe: string,
    image_url: string,
    category_id: number
}
export default {
  async getDrinks() {
    try {
      const response = await axios.get("http://127.0.0.1:3333/api/drinks");

      return response.data.map((drink: Drink) => {
        return {
            ...drink,
            categoryText: CategoryNameFormatter.format(drink.category_id)
        }
      });
    } catch (error) {
      console.error("Erro ao obter drinks.", error);
    }
  },
  async getCategoryDrinks(id: number) {

  }
};
