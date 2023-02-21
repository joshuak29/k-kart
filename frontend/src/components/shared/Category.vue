<template>
  <div :class="className" class="font-bold mb-5">
    <img
      :src="props.category.img"
      alt="image"
      v-if="size === 'big'"
      class="h-full w-full rounded-md"
    />
    <div class="text-gray-700" :class="{ absolute: size === 'big' }">
      {{ props.category.category }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  size: {
    type: String,
    default: "small",
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
.small {
  @apply h-6 bg-white  p-4 rounded  border-teal-700  hover:drop-shadow-lg cursor-pointer mb-3 flex items-center drop-shadow-xl;
  transition: all 0.1s;
}
.big {
  @apply w-32 h-44 bg-gray-400 rounded-md flex justify-center relative;
}
</style>