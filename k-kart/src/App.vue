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
  // productsStore.getCategories();
  // productsStore.getProducts();
  // userStore.fetchCart();
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

<template>
<navbar class="nav" v-if="showNav" />


  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
