<template>
  <div
    class="bg-white h-screen w-screen fixed left-0 top-0 flex flex-col justify-center items-center pt-4 overflow-y-scroll"
  >
    <font-awesome-icon
      icon="xmark"
      class="fixed right-8 top-8 z-10 hidden sm:block text-gray-600 hover:text-black text-3xl"
      @click="close"
    />
    <div class="flex flex-row items-center px-4 w-full mb-4">
      <font-awesome-icon
        icon="arrow-left"
        class="sm:hidden text-gray-600 hover:text-black text-3xl justify-self-start"
        @click="close"
      />
      <div class="grow flex flex-row justify-center">
        <h1 class="font-bold text-3xl justify-self-center">My Cart</h1>
      </div>
    </div>

    <div
      id="container"
      class="bg-teal-50 rounded w-screen h-fit relative overflow-y-scroll flex flex-col gap-2 p-6 pb-16 rounded-t-3xl bg-gradient-to-r from-slate-400 to-slate-50"
    >
      <cart-item
        v-for="item in productsStore.cartItems"
        :key="item.id"
        :item="item"
      />
      <div
        class="mt-6 h-24 bg-white w-screen rounded-t-2xl flex flex-row items-center -translate-x-6"
      >
        <p class="checkout text-2xl font-bold text-sky-500">200000 frw</p>
        <p class="checkout">
          <button
            class="bg-blue-600 hover:bg-blue-700 rounded-3xl p-4 font-bold text-l text-sky-300 flex flex-row gap-4"
          >
            <font-awesome-icon
              icon="credit-card"
              class="text-sm translate-y-1"
            />
            Check Out
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from "@/components/CartItem.vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { onMounted } from "vue";

const productsStore = useProductsStore();
const router = useRouter();
const close = () => {
  router.push("/products");
};
</script>

<style scoped>
#container {
  min-height: calc(100vh - 4rem);
}
.checkout {
  @apply w-1/2 h-full flex items-center justify-center;
}
</style>