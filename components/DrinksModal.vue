<template>
  <div>
    <UModal v-model="localIsOpen">
      <div class="p-4">
        <img :src="drink.image_url" alt="Drink Image" />
        <h2 class="font-bold text-xl mt-4">{{ drink.name.value }}</h2>
        <i
          ><p class="mt-2 text-justify">{{ drink.recipe }}</p></i
        >
      </div>
      <button @click="close">Fechar</button>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { ref } from "vue";

const props: { isOpen?: boolean; drink?: any } = defineProps([
  "isOpen",
  "drink",
]);
const emits = defineEmits(["close"]);
const localIsOpen = ref(props.isOpen);
watchEffect(() => {
  localIsOpen.value = props.isOpen;
});

const close = () => {
  emits("close");
};
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
