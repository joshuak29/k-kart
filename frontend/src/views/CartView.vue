<template>
  <section class="cart-view">
    <div class="flex flex-row items-center px-4 w-full mb-4">
      <font-awesome-icon
        icon="arrow-left"
        class="text-gray-600 hover:text-black text-3xl justify-self-start"
        @click="router.go(-1)"
      />
      <div class="grow flex flex-row justify-center">
        <h1 class="font-bold text-2xl justify-self-center">My Cart</h1>
      </div>
    </div>

    <div id="container">
      <div class="flex flex-col gap-2 border-b border-gray-300 pb-2">
        <cart-item
          v-for="item in productsStore.cartItems"
          :key="item.id"
          :item="item"
        />
        <div>
          <span>Total</span>
          <span class="checkout text-2xl font-bold text-sky-500"
            >200000 frw</span
          >
        </div>
      </div>

      <div class="checkout-container">
        <p class="checkout text-2xl font-bold text-sky-500">200000 frw</p>
        <p class="checkout">
          <button>
            <font-awesome-icon
              icon="credit-card"
              class="text-sm translate-y-1"
            />
            Check Out
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import CartItem from "@/components/CartItem.vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { onMounted } from "vue";

const productsStore = useProductsStore();
const router = useRouter();
</script>

<style scoped>
#container {
  @apply bg-teal-50 rounded w-screen h-screen relative overflow-y-scroll flex flex-col justify-between p-6 pb-0 rounded-t-3xl bg-gradient-to-r from-slate-400 to-slate-50;
  /* height: calc(100vh - 11rem); */
}
.cart-view {
  @apply bg-white h-screen w-screen fixed left-0 top-0 flex flex-col justify-center items-center pt-4;
}
.checkout {
  @apply w-1/2 h-full flex items-center justify-center;
}
.checkout button {
  @apply bg-blue-600 hover:bg-blue-700 rounded-3xl p-4 font-bold text-lg text-sky-300 flex flex-row gap-4;
}
.checkout-container {
  @apply mt-6 h-24 bg-white w-screen rounded-t-2xl flex flex-row items-center -translate-x-6;
}
</style>