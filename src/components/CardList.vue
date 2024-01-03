<script setup>
import Card from './Card.vue';

defineProps({
  items: Array,
});

const emit = defineEmits(['addToFavorite', 'addToCart']);

//
</script>

<template>
  <div v-auto-animate class="grid grid-cols-4 gap-5 mt-10">
    <Card
      v-for="item in items"
      :isFavorite="item.isFavorite"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :img="item.imageUrl"
      :OnClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => emit('addToCart', item)"
      :isAdded="item.isAdded" />
  </div>
</template>
