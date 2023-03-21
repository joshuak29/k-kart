<template>
<!-- header -->

  <navbar class="nav" @openFilters="filtersOpen = true" @openMenu="menuOpen = true" v-if="!filtersOpen && !menuOpen" />

  <!-- products view section -->
  <section class="page products-view" v-if="!filtersOpen && !menuOpen">
    <div class="categories">

      <!-- top categories filters -->
      <category
        v-for="i in productsStore.categories"
        :key="i.id"
        size="small"
        :category="i"
      />
    </div>

    <!-- products container -->
    <div class="products">
      <product v-for="i in productsStore.products" :key="i" :product="i" />
    </div>
  </section>

  <!-- filters view section -->
  <filters v-if="filtersOpen" @closeFilters="filtersOpen = false"/>


  <!-- menu view section -->
  <Menu v-if="menuOpen" @closeMenu="menuOpen = false" />
  <transition name="cart">
    <float-cart  v-if="userStore.cart.length > 0 && !filtersOpen && !menuOpen"/>
  </transition>
</template>
<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { useUserStore } from "@/stores/user";

import Product from "@/components/shared/Product.vue";
import Category from "@/components/shared/Category.vue";
import Navbar from '@/components/Navbar.vue'
import Filters from '@/components/Filters.vue'
import Menu from '@/components/Menu.vue'
import FloatCart from '@/components/FloatCart.vue'

const router = useRouter();

const filtersOpen = ref(false);
const menuOpen = ref(false)

const productsStore = useProductsStore();
const userStore = useUserStore();
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
.cart-enter-active {
  transition: all .4s
}
.cart-enter-from {
  opacity: 0.3;
  transform: scale(0.3);
}
</style>