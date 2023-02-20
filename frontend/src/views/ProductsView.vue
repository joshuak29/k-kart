<template>
  <div class="overflow-y-scroll h-screen w-screen">
    <div>Products</div>
    <div class="flex flex-row flex-wrap gap-5 p-5 justify-center sm:p-10">
      <product v-for="i in productsStore.products" :key="i" :product="i" />
    </div>
  </div>
</template>
<script setup>
import Product from "@/components/shared/Product.vue";
import { useProductsStore } from "@/stores/products";

const productsStore = useProductsStore();
</script>