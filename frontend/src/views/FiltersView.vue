<template>
  <div
    class="w-full h-full bg-slate-50 overflow-y-scroll border p-4 fixed top-0 left-0 z-10 flex flex-col"
  >
    <div class="flex flex-row">
      <div class="w-2/12 justify-center items-center">
        <font-awesome-icon
          icon="angle-left"
          class="text-xl"
          @click="productsStore.openCloseFilters"
        />
      </div>
      <div
        class="w-10/12 flex flex-row justify-center items-center pr-8 font-bold text-xl"
      >
        Filters
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/stores/products";
const productsStore = useProductsStore();
</script>

<style>
</style>