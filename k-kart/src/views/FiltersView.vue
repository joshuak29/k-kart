<template>
  <section class="filters-view gap-8">
    <div class="flex flex-row mb-5">
      <div class="w-2/12 justify-center items-center">
        <font-awesome-icon
          icon="angle-left"
          class="text-xl"
          @click="router.go(-1)"
        />
      </div>
      <div
        class="w-10/12 flex flex-row justify-center items-center pr-8 font-bold text-xl"
      >
        Filters
      </div>
    </div>
    <div class="w-full flex justify-center">
      <input
        type="text"
        class="w-10/12 h-12 pl-5 text-lg"
        placeholder="Search by item, store,..."
      />
    </div>
    <price-filters />
    <check-filters-group title="Categories" :filters="CatFilters" />
    <check-filters-group title="Stores" :filters="StoreFilters" />
    <location-filters />
  </section>
</template>

<script setup>
import CategoriesFilters from "@/components/filters/CategoriesFilters.vue";
import PriceFilters from "@/components/filters/PriceFilters.vue";
import StoresFilters from "@/components/filters/StoresFilters.vue";
import LocationFilters from "@/components/filters/LocationFilters.vue";
import CheckFiltersGroup from "@/components/filters/CheckFiltersGroup.vue";
import { useProductsStore } from "@/stores/products";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const CatFilters = [
  "Fashion",
  "Kitchen Ware",
  "House Ware",
  "Sport",
  "Jewelry",
];
const StoreFilters = [
  "Simba Town",
  "Sawa Citi",
  "le Gallette",
  "Simba KH",
  "T 200",
];

const router = useRouter();
const productsStore = useProductsStore();
</script>

<style scoped>
.filters-view {
  @apply w-full h-full bg-slate-50 overflow-y-scroll border p-4 fixed top-0 left-0 flex flex-col;
}
</style>