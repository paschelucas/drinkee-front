import axios from "axios";
import { CategoryNameFormatter } from "#imports";

export type Drink = {
  id: number;
  name: {
    value: string;
    class: string;
  };
  recipe: string;
  image_url: string;
  category_id: number;
  categoryText?: string;
};

export default {
  async getDrinks(): Promise<Drink[] | undefined> {
    const config = useRuntimeConfig();
    try {
      const response = await axios.get(`${config.public.apiUrl}/drinks`);

      return response.data.map((drink: Drink) => {
        return {
          ...drink,
          categoryText: CategoryNameFormatter.format(drink.category_id),
          name: {
            value: drink.name,
            class: "hover:bg-gray-800 cursor-pointer",
          },
        };
      });
    } catch (error) {
      console.error("Erro ao obter drinks.", error);
    }
  },
  async searchDrink(q?: string): Promise<Drink[]> {
    const config = useRuntimeConfig();
    const response = await axios.get(
      `${config.public.apiUrl}/drinks/search?name=${q}`
    );

    return response.data.map((drink: Drink) => {
      return {
        ...drink,
        categoryText: CategoryNameFormatter.format(drink.category_id),
        name: {
          value: drink.name,
          class: "hover:bg-gray-800 cursor-pointer",
        },
      };
    });
  },
  async searchDrinkInsideCategory(
    category: number,
    q?: string
  ): Promise<Drink[]> {
    const config = useRuntimeConfig();
    const response = await axios.get(
      `${config.public.apiUrl}/drinks/${category}/search?name=${q}`
    );

    return response.data.map((drink: Drink) => {
      return {
        ...drink,
        categoryText: CategoryNameFormatter.format(drink.category_id),
        name: {
          value: drink.name,
          class: "hover:bg-gray-800 cursor-pointer",
        },
      };
    });
  },
};
