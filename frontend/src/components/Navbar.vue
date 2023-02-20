<template>
  <header class="h-16">
    <nav class="fixed top-0 left-0 w-full h-16 px-10 bg-white">
      <ul class="h-full w-full flex flex-row items-center text-center">
        <li class="logo"><router-link to="/">Kigali Kart</router-link></li>
        <li
          class="text-end cursor-pointer"
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
          <router-link to="/products">Shop Now</router-link>
        </li>
        <li class="search justify-end flex flex-row">
          <input
            type="search"
            class="bg-gray-100 rounded-l-3xl px-2"
            placeholder="search"
          />
          <span class="bg-gray-100 h-6 w-8 rounded-r-3xl"
            ><font-awesome-icon
              icon="search"
              class="text-gray-500 text-sm hover:text-black"
          /></span>
        </li>
        <li class="flex flex-row justify-end gap-10">
          <span class="flex flex-row gap-3 cursor-pointer"
            ><font-awesome-icon icon="user" /> Account</span
          >
          <span
            class="cart flex flex-row gap-3 cursor-pointer"
            cart-length="2"
            @click="openCart"
            ><font-awesome-icon icon="cart-shopping" id="cart-icon" />
            Cart</span
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

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
#user-icon,
#cart-icon {
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
  /*display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  color: white;
  background: teal;
  position: absolute;
  left: 100%;
  top: -10%;
  font-size: 0.7rem;
  font-weight: bold;*/
}
</style>
