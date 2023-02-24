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
      <div class="flex flex-col gap-2 border-gray-300 pb-2">
        <cart-item
          v-for="item in productsStore.cartItems"
          :key="item.id"
          :item="item"
        />
        <div class="flex flex-row justify-between my-5">
          <span class="text-gray-700">Total</span>
          <span class="w-fullcheckout text-2xl font-bold text-sky-500"
            >200000 frw</span
          >
        </div>
      </div>
      <checkout-button icon="credit-card" />
    </div>
  </section>
</template>

<script setup>
import CartItem from "@/components/CartItem.vue";
import CheckoutButton from "@/components/shared/CheckoutButton.vue";
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
.checkout-btn {
  @apply bg-blue-500 py-4 px-4 rounded-2xl text-white flex flex-row justify-between items-center mb-2;
}
</style>