<script setup>
import DrinkService from "../services/DrinkService.ts";

const drinks = await DrinkService.getDrinks();
const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "categoryText",
    label: "Category",
  },
];
</script>

<template>
  <UTable :rows="drinks" :columns="columns" />
</template>
