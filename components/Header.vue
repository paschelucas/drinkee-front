<template>
    <div class="header">
        <CategorySelect />
        <Button buttonText="Pesquisar"/>
    </div>
</template>

<script lang="ts">
import CategorySelect from "./CategorySelect.vue";

export default {
    components: {
        CategorySelect
    }
}
</script>

<style scoped>
    .header {
        background-color: white;
        display: flex;
        justify-content: space-between;
        width: 100%
    }

</style>
