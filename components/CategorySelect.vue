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

<script setup lang="ts">
import { ref } from "vue";
import CategoryService from "../services/CategoryService";

const selectedCategory = ref();
const categories = await CategoryService.getCategories();
const emits = defineEmits(["category-change"]);
const props: { selectKey?: number } = defineProps(["selectKey"]);

const filterByCategory = (): void => {
  emits("category-change", selectedCategory.value);
};

watch(
  () => props.selectKey,
  () => {
    selectedCategory.value = null;
  }
);
</script>
