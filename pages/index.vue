<template>
  <div class="mainContainer">
    <h1 class="title">Drinkee</h1>
    <DrinksTable />
  </div>
</template>
<script>
import DrinksTable from "../components/DrinksTable.vue";

export default {
  components: {
    DrinksTable,
  },
};
</script>

<style>
.title {
  color: white;
  margin-top: 10px;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
