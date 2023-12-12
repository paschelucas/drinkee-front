<template>
  <div class="mainContainer">
    <h1 class="title">Drinkee</h1>
    <DrinksTable />
    <!-- <Header /> -->
  </div>
</template>
<script>
import Header from "../components/header.vue";
import DrinksTable from "../components/DrinksTable.vue"

export default {
  components: {
    Header,
    DrinksTable
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
