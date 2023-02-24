<template>
  <div class="w-24 h-36 bg-gray-300 relative rounded-2xl mb-2">
    <img
      :src="category.img"
      :alt="category.category"
      class="w-full h-full rounded-xl"
    />
    <span class="absolute top-0 w-full h-fit py-2 text-center">{{
      category.category
    }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  size: {
    type: String,
    default: "big",
  },
  category: {
    type: Object,
    required: true,
  },
});

const className = computed(() => {
  return { [props.size]: true };
});
</script>

<style>
</style>