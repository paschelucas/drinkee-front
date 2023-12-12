
import type { resolveDirective } from 'vue';
<template>
    <button class="button">
        {{ buttonText  }}
    </button>
</template>

<script lang="ts">
export default {
    props: {
        buttonText: String
    }
}
</script>

<style scoped>
    .button {
        border-radius: 25px;
        color: #AE81FF;
    }
</style>
