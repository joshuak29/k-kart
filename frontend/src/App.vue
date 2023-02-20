<template>
  <navbar />
  <router-view />
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { useProductsStore } from "@/stores/products";
import { onMounted } from "vue";

const productsStore = useProductsStore();
const fetch = () => {
  productsStore.getCategories();
  productsStore.getProducts();
};
onMounted(() => {
  fetch();
});
</script>
<style>
body {
  overflow-y: hidden;
}
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

