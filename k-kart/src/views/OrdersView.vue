<template>
	<section class="w-screen px-5 py-5">

    <!-- heading -->
    <div class="flex flex-row items-center mb-10">
    	<font-awesome-icon icon="arrow-left" @click="router.push({name: 'products'})" />
    	<h1 class="w-full flex items-center justify-center text-3xl font-bold">My Orders</h1>
    </div>
    

    <div class="flex flex-col w-full gap-6">
      <order v-for="i in 10" :key="i" />
    </div>
    
  </section>
</template>
<script setup>
import { useRouter } from 'vue-router'

import Order from '@/components/orders/Order.vue'

const router = useRouter()
</script>