<template>
  <div class="w-3/4">
    <div class="flex px-3 py-3.5">
      <UInput v-model="q" placeholder="Filter drinks..." />
    </div>
    <UTable
      :rows="filteredRows"
      :columns="columns"
      @row-click="openModal"
      :style="{ borderRadius: '10px', border: '1px solid white' }"
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
<script setup>
import DrinkService from "../services/DrinkService.ts";
import DrinksModal from "./DrinksModal.vue";
import { ref, watchEffect } from "vue";

const drinks = await DrinkService.getDrinks();
const filteredRows = ref(drinks);
const q = ref("");
const selectedDrink = ref(null);
const modalIsOpen = ref(false);

const openModal = (row) => {
  modalIsOpen.value = true;
  selectedDrink.value = row;
  console.log("[Debug] ref: ", modalIsOpen.value);
  console.log("[Debug] selected drink: ", selectedDrink);
};

const close = () => {
  modalIsOpen.value = false;
};

watchEffect(async () => {
  if (q.value) {
    const queried = await DrinkService.searchDrink(q.value);
    filteredRows.value = queried;
  } else {
    filteredRows.value = drinks;
  }
});

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
  // {
  //   key: "",
  //   label: "Favorite"
  // }
];
</script>
