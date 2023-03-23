<template>
  <section class="cart-view">

    <!-- header -->
    <div class="flex flex-row items-center px-4 w-full mb-4">

      <!-- back icon -->
      <font-awesome-icon
        icon="arrow-left"
        class="text-gray-600 hover:text-black text-3xl justify-self-start"
        @click="router.go(-1)"
      />
      <div class="grow flex flex-row justify-center">
        <h1 class="font-bold text-2xl justify-self-center">My Cart</h1>
      </div>

      <!-- clear cart -->
      <div class="flex justify-end">
        <h1 class="underline text-gray-300 text-xs" @click="userStore.clearCart" v-if="userStore.cart.length > 0">Clear</h1>
      </div>
    </div>

    <!-- show if no items in cart -->
    <section class="w-screen h-full flex items-center justify-center" v-if="userStore.cart.length <= 0">
    <h1>Add Products to your cart to show here</h1>
  </section>  


    <!-- cart container -->
    <div id="container" v-else>
      <div class="flex flex-col gap-2 border-gray-300 pb-2">

        <!-- cart items transition -->
        <!-- <div class="cart" v-for="item in cart.cartItems">Item</div> -->
        <transition-group name="cart-items">
        <cart-item
          v-for="item in userStore.cart"
          :key="item.id"
          :item="item"
        />

      </transition-group>

      </div>

      <!-- next button -->
      <div class="flex flex-row w-full gap-5 border border-slate-400 rounded-2xl p-1 bg-sky-50 shadow-inner mb-3">
        <div class="flex flex-col items-left justify-center grow px-4">
          <loading v-if="userStore.cartTotalLoading" />
          <span class="text-md opacity-10" v-if="!userStore.cartTotalLoading">Total</span>
          <span class="text-xl font-bold text-sky-500" v-if="!userStore.cartTotalLoading">{{ userStore.cartTotal }} Frw</span>
        </div>
        <checkout-button @click="router.push('/set-location')" class="grow" />
      </div>
    </div>
        
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { useUserStore } from "@/stores/user";
import { onMounted, ref, computed, onBeforeMount } from "vue";
import { storeToRefs } from 'pinia'
import { db } from '@/firebaseConfig.js'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'

import CartItem from "@/components/CartItem.vue";
import CheckoutButton from "@/components/shared/CheckoutButton.vue";
import Loading from '@/components/shared/Loading.vue'

const productsStore = useProductsStore();
const userStore = useUserStore();
const router = useRouter();

</script>

<style scoped>
#container {
  @apply bg-teal-50 rounded w-screen h-screen relative overflow-y-scroll flex flex-col justify-between p-6 pb-0 rounded-t-3xl bg-blue-50;
  /* height: calc(100vh - 11rem); */
}
.cart-view {
  @apply bg-white h-screen w-screen fixed left-0 top-0 flex flex-col justify-center items-center pt-4;
}
.checkout-btn {
  @apply bg-blue-500 py-4 px-4 rounded-2xl text-white flex flex-row justify-between items-center;
}
.cart-items-move,
.cart-items-leave-active {
  transition: transform .5s, opacity .2s
}
.cart-items-leave-active {
  position: absolute;
}
.cart-items-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}
</style>