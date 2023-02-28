<template>
  <font-awesome-icon
    icon="star"
    v-for="i in props.rating"
    :key="i"
    id="icon"
    class="text-emerald-500 text-xs"
  /><font-awesome-icon
    icon="star"
    class="text-gray-400 text-xs"
    v-for="i in 5 - props.rating"
    :key="i"
    id="icon"
  /><span class="text-gray-600 text-xs ml-2"> ({{ props.reviews }})</span>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Number,
    default: 127,
  },
});
</script>

<style>
</style>