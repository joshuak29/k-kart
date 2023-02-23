<template>
  <section class="favourites-view">
    <h1 class="text-center text-xl">You recently liked these</h1>
    <div class="favourites">
      <product
        v-for="product in productsStore.products"
        :product="product"
        :key="product.id"
      />
    </div>
  </section>
</template>

<script setup>
import { useProductsStore } from "@/stores/products";
import Product from "@/components/shared/Product.vue";

const productsStore = useProductsStore();
</script>

<style scoped>
.favourites-view {
  @apply flex flex-col -z-10 mt-20 gap-6;
}
.favourites {
  @apply flex flex-row flex-wrap gap-5 p-5 pt-0 justify-center w-full h-full overflow-y-scroll;
}
</style>