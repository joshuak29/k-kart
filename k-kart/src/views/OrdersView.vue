<template>
	<section class="w-screen px-5 py-5">

    <!-- heading -->
    <div class="flex flex-row items-center mb-10">
    	<font-awesome-icon icon="arrow-left" @click="router.push({name: 'products'})" />
    	<h1 class="w-full flex items-center justify-center text-3xl font-bold">My Orders</h1>
    </div>
    
    <!-- orders list -->
    <div class="flex flex-col w-full gap-6" v-if="userStore.orders.length > 0">
      <order v-for="i in userStore.orders" :key="i.id" :order="i" />
    </div>

    <!-- if orders list is empty -->
    <div class="flex items-center justify-center">
      <h1 class="text-xl font bold">You haven't ordered anything yet.</h1>
    </div>
    
  </section>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { onMounted, onBeforeMount } from 'vue'

import Order from '@/components/orders/Order.vue'

const router = useRouter()
const userStore = useUserStore()

onBeforeMount(() => {
  userStore.fetchOrders()
})
</script>