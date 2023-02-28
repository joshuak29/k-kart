<template>
  <div class="flex flex-row rounded-2xl h-28 border p-1 bg-white shadow-lg">
    <img :src="item.img" alt="image" class="w-4/12 h-full rounded-xl" />
    <div class="w-5/12 flex flex-col place-items-center justify-center gap-3">
      <h2 class="text-slate-600 text-md">{{ item.name }}</h2>
      <h1 class="text-sky-500 font-bold text-lg">
        {{ counter * item.price }} frw
      </h1>
    </div>
    <div class="w-2/12 flex flex-col place-items-center justify-between">
      <button class="count text-2xl shadow-md bg-cyan-100" @click="counter++">
        +
      </button>
      <span class="count text-xl">{{ counter }}</span>
      <button class="count text-2xl shadow-md" @click="counter--">-</button>
    </div>
    <div class="w-1/12 flex flex-row items-center text-sm">
      <font-awesome-icon
        icon="trash"
        id="delete"
        class="text-gray-500 hover:text-black"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
import { ref } from "vue";

const counter = ref(1);
</script>

<style scoped>
.count {
  @apply w-8 h-8 rounded-3xl flex items-center justify-center;
}
</style>