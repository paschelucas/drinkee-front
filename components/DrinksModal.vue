<template>
    <div class="modal">
      <div class="modal-content">
        <h2>{{ drink.name }}</h2>
        <img :src="drink.image_url" alt="Drink Image" />
        <p>{{ drink.recipe }}</p>
        <button @click="closeModal">Fechar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      drink: Object,
    },
    methods: {
      closeModal() {
        // Emitir um evento para notificar o fechamento do modal
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos de modal conforme necessário */
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
  