<template>
  <div class="overflow-x-hidden overflow-y-scroll h-screen w-screen pb-10">
    <the-hero />
    <!-- <home-categories /> -->
    <div class="md:px-10">
      <div class="mt-10">
        <h1>Shop Our Top Categories</h1>
        <div
          id="categories"
          class="flex flex-row flex-nowrap gap-5 mt-5 overflow-x-scroll overflow-y-hidden"
        >
          <category
            v-for="i in productsStore.categories"
            size="big"
            :category="i"
            :key="i.id"
          />
        </div>
      </div>
      <div class="flex flex-col mt-10">
        <h1>Don't Miss Todays Best Deals</h1>
        <div
          id="hot-products"
          class="flex flex-row flex-nowrap items-top overflow-x-scroll overflow-y-hidden gap-5 my-5 w-9/10"
        >
          <product
            v-for="i in productsStore.hotProducts"
            :key="i"
            :product="i"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TheHero from "@/components/home/TheHero.vue";
import Product from "@/components/shared/Product.vue";
import { useProductsStore } from "@/stores/products";
import Category from "@/components/shared/Category.vue";

const productsStore = useProductsStore();
</script>
<style scoped>
</style>
