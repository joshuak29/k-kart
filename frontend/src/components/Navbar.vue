<template>
  <header class="h-16">
    <nav
      class="fixed top-0 left-0 w-full h-16 bg-white p-2 px-4 min-[415]:px-12"
    >
      <ul class="h-full w-full flex flex-row items-center justify-between">
        <li class="text-start">
          <font-awesome-icon
            icon="filter"
            class="text-gray-800 text-lg"
            @click="productsStore.openCloseFilters"
          />
        </li>
        <li class="text-center">
          <h1>K-Kart</h1>
        </li>
        <li class="text-end">
          <font-awesome-icon icon="bars" @click="productsStore.openCloseMenu" />
        </li>
        <!-- <li class="logo w-2/12 flex justify-start">
          <router-link to="/">K-Kart</router-link>
        </li>
        <li
          class="categories-dropdown min-[415]:block"
          @click="categoriesDropDown = !categoriesDropDown"
        >
          Categories<span class="ml-2"
            ><font-awesome-icon
              :icon="categoriesIsDroppedDown"
              class="text-xs"
              id="drop-icon"
          /></span>
        </li> 
        <li>
          <router-link to="/products" class="hidden min-[415]:block"
            >Shop Now</router-link
          >
        </li> 
        <li class="search justify-end flex flex-row w-5/12 grow">
          <input
            type="search"
            class="bg-gray-100 rounded-l-3xl px-2"
            placeholder="search"
          />
          <span class="bg-gray-100 h-6 w-6 rounded-r-3xl"
            ><font-awesome-icon
              icon="search"
              class="text-gray-500 text-sm hover:text-black"
          /></span>
        </li>
        <li class="flex flex-row justify-end gap-2 w-2/12 justify-center">
          <span class="flex flex-row gap-3 cursor-pointer"
            ><font-awesome-icon icon="user" />
            <span class="hidden min-[415]:block">Account</span></span
          >
          <span
            class="cart flex flex-row gap-3 cursor-pointer"
            cart-length="2"
            @click="openCart"
            ><font-awesome-icon icon="cart-shopping" id="cart-icon" />
            <span class="hidden min-[415]:block">Cart</span></span
          >
        </li> -->
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "@/stores/products";

const productsStore = useProductsStore();
const categoriesDropDown = ref(false);

const categoriesIsDroppedDown = computed(() =>
  categoriesDropDown.value === true ? "angle-up" : "angle-down"
);

const router = useRouter();
const openCart = () => {
  router.push("/cart");
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
li {
  @apply flex-grow;
}
li.logo,
li.search {
  flex-grow: 2;
}
li.logo {
  text-align: start;
}
#user-icon {
  transform: translateY(5px);
}
#drop-icon {
  transform: translateY(2px);
}
.cart {
  position: relative;
}
.cart::after {
  @apply flex flex-row justify-center items-center h-4 w-4 rounded-3xl text-white bg-teal-400 absolute left-full text-xs font-bold;
}
.cart::after {
  content: attr(cart-length);
  top: -0.7rem;
  left: 60%;
}
.categories-dropdown {
  @apply text-end cursor-pointer hidden;
}
</style>
