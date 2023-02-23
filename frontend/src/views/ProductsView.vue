<template>
  <section class="page products-view">
    <div class="categories">
      <category
        v-for="i in productsStore.categories"
        :key="i.id"
        size="small"
        :category="i"
      />
    </div>
    <div class="products">
      <product v-for="i in productsStore.products" :key="i" :product="i" />
    </div>
  </section>
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
.products-view {
  @apply flex flex-col -z-10 mt-16;
}
.categories {
  @apply flex-row flex-nowrap w-full gap-5 overflow-x-scroll justify-center hidden lg:flex;
}
.products {
  @apply flex flex-row flex-wrap gap-5 p-5 justify-center sm:p-10 w-full h-full overflow-y-scroll;
}
</style>