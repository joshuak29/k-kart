<template>
  <navbar class="nav" v-if="showNav" />
  <router-view />
  <!-- <transition name="filters">
    <filters-view v-if="productsStore.filtersOpen" />
  </transition>
  <transition name="menu">
    <menu-view v-if="productsStore.menuOpen" />
  </transition> -->
</template>

<script setup>
import FiltersView from "@/views/FiltersView.vue";
import MenuView from "@/views/MenuView.vue";
import Navbar from "@/components/Navbar.vue";
import { useProductsStore } from "@/stores/products";
import { useUserStore } from "@/stores/user";
import { computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const productsStore = useProductsStore();
const userStore = useUserStore();
const fetchAll = () => {
  productsStore.getCategories();
  productsStore.getProducts();
  userStore.fetchCart();
};
const route = useRoute();

const showNav = computed(
  () =>
    route.name === "home" ||
    route.name === "products" ||
    route.name === "favourites"
);
onMounted(() => {
  fetchAll();
});
</script>
<style>
.nav {
  z-index: 11;
}
#app {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
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
.filters-leave-to,
.filters-enter-from {
  width: 0%;
}
.filters-leave-active,
.filters-enter-active {
  transition: all 0.2s;
}
</style>

