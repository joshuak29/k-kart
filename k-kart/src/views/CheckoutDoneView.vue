<template>	
	<div class="bg-blue-500 flex flex-col items-center justify-center h-screen px-5">	
		<img src="@/assets/ok.svg" class="mb-10 w-28">
		<h1 class="text-white font-bold text-2xl">Payment Sucessful.</h1>
		<h1 class="text-white font-semibold text-xl mb-10 w-full text-center">Order is pending approval, will be delivered in a couple minutes</h1>

		<button
        class="btn bg-white text-blue-500 text-lg w-5/6 mb-4 shadow shadow-white"
        @click="router.push({name: 'orders'})"
      >
        Track order
      </button>
      <button
        class="btn bg-blue-600 text-white text-lg w-5/6 shadow-md"
        @click="router.push({name: 'products'})"
      >
        Continue Shopping
      </button>
	</div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();
</script>