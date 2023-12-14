<template>
  <div class="w-3/4">
    <div class="flex justify-around px-3 py-3.5">
      <UInput
        v-model="q"
        placeholder="Filter drinks..."
        icon="i-heroicons-magnifying-glass-20-solid"
      />
      <CategorySelect
        @category-change="loadFilteredDrinks"
        v-model="selectedCategory"
        :selectKey="selectKey"
      />
      <UButton @click="clearFilters">Clear</UButton>
    </div>
    <UTable
      :rows="filteredRows"
      :columns="columns"
      @row-click="openModal"
      :style="{ borderRadius: '10px', border: '1px solid white' }"
      :loading="loading"
    >
      <template #name-data="{ row }">
        <div @click="openModal(row)">
          {{ row.name.value }}
        </div>
      </template>
    </UTable>
    <DrinksModal :isOpen="modalIsOpen" @close="close" :drink="selectedDrink" />
  </div>
</template>
<script setup lang="ts">
import DrinkService, { type Drink } from "../services/DrinkService";
import CategoryService from "../services/CategoryService";
import DrinksModal from "./DrinksModal.vue";
import CategorySelect from "./CategorySelect.vue";
import { ref, watchEffect } from "vue";

const drinks: Drink[] | undefined = await DrinkService.getDrinks();
const filteredRows: Ref<Drink[] | undefined> = ref(drinks);
const q: Ref<string> = ref("");
const selectedDrink: Ref<Drink | null> = ref(null);
const modalIsOpen: Ref<boolean> = ref(false);
const selectedCategory: Ref<number | null> = ref(null);
const selectKey: Ref<number> = ref(0);
const loading: Ref<boolean> = ref(false);

const loadFilteredDrinks = async (categoryId?: number): Promise<void> => {
  if (categoryId) {
    selectedCategory.value = categoryId;

    loading.value = true;
    filteredRows.value = await CategoryService.getDrinksByCategory(
      selectedCategory.value
    );
    loading.value = false;

    return;
  }

  filteredRows.value = await DrinkService.getDrinks();
};

const clearFilters = () => {
  q.value = "";
  selectedCategory.value = null;
  selectKey.value += 1;
  loadFilteredDrinks();
};

const openModal = (row: Drink): void => {
  modalIsOpen.value = true;
  selectedDrink.value = row;
};

const close = (): void => {
  modalIsOpen.value = false;
};

watchEffect(async () => {
  if (q.value) {
    const queried = await DrinkService.searchDrink(q.value);
    if (selectedCategory.value) {
      loading.value = true;
      filteredRows.value = await DrinkService.searchDrinkInsideCategory(
        selectedCategory.value,
        q.value
      );
      loading.value = false;

      return;
    }

    filteredRows.value = queried;
    return;
  }

  filteredRows.value = drinks;
});

// watchEffect(async () => {
//   await loadFilteredDrinks(null);
// });

const columns = [
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "categoryText",
    label: "Category",
    sortable: true,
  },
];
</script>
