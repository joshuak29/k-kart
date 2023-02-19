<template>
  <div class="overflow-x-hidden">
    <the-hero />
    <!-- <home-categories /> -->
    <div class="md:px-10">
      <div class="mt-10">
        <h1>Shop Our Top Categories</h1>
        <div
          id="categories"
          class="
            flex flex-row flex-nowrap
            gap-5
            mt-5
            overflow-x-scroll overflow-y-hidden
          "
        >
          <category v-for="i in categories" :name="i" size="big" :key="i" />
        </div>
      </div>
      <div class="flex flex-col mt-10">
        <h1>Don't Miss Todays Best Deals</h1>
        <div
          id="hot-products"
          class="
            flex flex-row flex-nowrap
            items-top
            overflow-x-scroll overflow-y-hidden
            gap-5
            my-5
            w-9/10
          "
        >
          <product v-for="i in 10" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TheHero from "@/components/home/TheHero.vue";
import Product from "@/components/shared/Product.vue";
import { computed } from "vue";
import { useProductsStore } from "@/stores/products";
import Category from "@/components/shared/Category.vue";

const productsStore = useProductsStore();
const categories = computed(() => {
  return productsStore.categories;
});
</script>
<style scoped>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-track {
  background-color: rgba(128, 128, 128, 0.289);
  border-radius: 4px;
  display: none;
}
::-webkit-scrollbar-thumb {
  background: rgba(128, 128, 128, 0.356);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: black;
  display: block;
}
</style>
