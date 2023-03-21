<template>
  <section
    class="page home-view overflow-x-hidden overflow-y-scroll f-screen w-full pb-10"
  >
    <the-hero />
    <div class="px-2">
      <div class="top-categories flex flex-col mt-10">
        <h1>Shop Our Top Categories</h1>
        <div class="w-full overflow-x-scroll mt-5">
          <div class="w-fit h-full flex flex-row flex-nowrap gap-2">
            <category
              v-for="category in productsStore.categories"
              :key="category.id"
              :category="category"
              size="big"
            />
          </div>
        </div>
      </div>
      <div class="hot-products flex flex-col mt-10">
        <h1>Don't Miss Todays Best Deals</h1>
        <div
          id="hot-products"
          class="flex flex-row flex-nowrap items-top overflow-x-scroll overflow-y-hidden gap-5 mt-5"
        >
          <product
            v-for="i in productsStore.hotProducts"
            :key="i"
            :product="i"
          />
        </div>
      </div>
    </div>
  </section>
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
