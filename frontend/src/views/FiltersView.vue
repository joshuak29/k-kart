<template>
  <transition name="filters">
    <section class="filters-view">
      <div class="flex flex-row">
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
    </section>
  </transition>
</template>

<script setup>
import { useProductsStore } from "@/stores/products";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const productsStore = useProductsStore();
</script>

<style scoped>
.filters-view {
  @apply w-full h-full bg-slate-50 overflow-y-scroll border p-4 fixed top-0 left-0 flex flex-col;
}
</style>