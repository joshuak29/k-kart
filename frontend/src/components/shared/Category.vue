<template>
  <div :class="className" class="font-bold mb-5">{{ props.name }}</div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  size: {
    type: String,
    default: "small",
  },
  name: {
    type: String,
    required: true,
  },
});

const className = computed(() => {
  return { [props.size]: true };
});
</script>

<style>
.small {
  @apply h-6 bg-teal-200 w-fit p-4 rounded hover:border-l-4 border-teal-700 cursor-pointer mb-3 flex items-center;
  transition: all 0.1s;
}
.big {
  @apply w-32 h-44 bg-gray-400 rounded-md flex justify-center pt-5;
}
</style>