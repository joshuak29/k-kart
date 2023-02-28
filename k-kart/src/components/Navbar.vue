<template>
  <nav class="fixed top-0 left-0 w-full h-16 bg-white p-2 px-4 shadow-md">
    <ul class="h-full w-full flex flex-row items-center justify-between">
      <li class="text-start">
        <router-link to="/filters"
          ><font-awesome-icon icon="filter" class="text-gray-800 text-lg"
        /></router-link>
      </li>
      <li class="text-center">
        <router-link to="/">K-Kart</router-link>
      </li>
      <li class="text-end">
        <router-link to="/menu" id="bars" class="relative"
          ><font-awesome-icon icon="bars"
        /></router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductsStore } from "@/stores/products";

const productsStore = useProductsStore();
const categoriesDropDown = ref(false);
const router = useRouter();
const route = useRoute();
</script>
<style scoped>
#bars::after {
  content: "4";
  position: absolute;
  z-index: 14;
  width: 1rem;
  height: 1rem;
  background-color: red;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  top: -30%;
  right: -60%;
}
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
