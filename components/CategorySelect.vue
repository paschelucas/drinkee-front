<template>
  <USelect
    color="#AE81FF"
    variant="outline"
    :options="categoryOptions"
    v-model="selectedCategory"
    option-attribute="name"
    value-attribute="id"
    placeholder="Pick a category"
  />
</template>

<script>
import CategoryService from "../services/CategoryService.ts";
import CategoryNameFormatter from "../utils/CategoryNameFormatter.ts";

export default {
  data() {
    return {
      selectedCategory: null,
      categories: [],
      hasError: false,
    };
  },
  async mounted() {
    try {
      this.categories = await CategoryService.getCategories();
    } catch (error) {
      this.hasError = true;
    }
  },
  computed: {
    categoryOptions() {
      console.log("ola", this.selectedCategory);
      return this.categories.map((category) => ({
        id: category.id,
        name: CategoryNameFormatter.format(category.name),
      }));
    },
  },
};
</script>
<style scoped></style>
