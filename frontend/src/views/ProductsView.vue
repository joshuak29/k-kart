<template>
  <div class="flex flex-col">
    <div
      id="categories"
      class="flex-row flex-nowrap w-full gap-5 overflow-x-scroll justify-center hidden lg:flex"
    >
      <category
        v-for="i in productsStore.categories"
        :key="i.id"
        size="small"
        :category="i"
      />
    </div>
    <div class="h-screen w-screen flex flex-row">
      <div
        class="flex flex-row flex-wrap gap-5 p-5 justify-center sm:p-10 w-full h-full overflow-y-scroll"
      >
        <product v-for="i in productsStore.products" :key="i" :product="i" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Product from "@/components/shared/Product.vue";
import Category from "@/components/shared/Category.vue";
import { useProductsStore } from "@/stores/products";
import { ref } from "vue";

const filtersOpen = ref(false);

const productsStore = useProductsStore();
</script>
<style scoped>
</style>