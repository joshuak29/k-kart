<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row text-lg justify-between" @click="open">
      <h1 class="text-lg">{{ title }}</h1>
      <span><font-awesome-icon :icon="filtersIcon" /></span>
    </div>

    <div class="flex flex-row flex-wrap px-4" v-if="filtersIsOpen">
      <label v-for="filter in filters" :key="filter"
        ><input type="checkbox" /> {{ filter }}</label
      >
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  filters: {
    type: Array,
    required: true,
  },
});

const filtersIsOpen = ref(false);
const filtersIcon = computed(() => {
  return filtersIsOpen.value ? "angle-up" : "angle-down";
});

const open = () => {
  filtersIsOpen.value = !filtersIsOpen.value;
};
</script>

<style scoped>
label {
  @apply w-1/2;
}
</style>