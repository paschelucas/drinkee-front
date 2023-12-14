<template>
  <div>
    <USelect
      v-model="selectedCategory"
      @change="filterByCategory"
      :options="categories"
      option-attribute="formattedName"
      value-attribute="id"
      placeholder="or pick a category"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CategoryService from "../services/CategoryService";

const selectedCategory = ref(null);
const categories = await CategoryService.getCategories();
const emits = defineEmits(["category-change"]);
const props = defineProps(["selectKey"]);

const filterByCategory = () => {
  emits("category-change", selectedCategory.value);
};

watch(
  () => props.selectKey,
  () => {
    selectedCategory.value = null;
  }
);
</script>
