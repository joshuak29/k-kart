<template>
	<div class="rounded-3xl h-16 w-16 bg-blue-500 absolute bottom-8 right-8 flex items-center justify-center z-20" @click="router.push({name: 'cart'})">
		<div class="bg-white w-5 h-5 rounded-3xl p-0 flex items-center justify-center font-extrabold text-black absolute top-2 left-9">{{ userStore.cart.length }}</div>
		<font-awesome-icon icon="cart-shopping" class="float-cart text-2xl" />
	</div>
</template>
<script setup>
	import { useProductsStore } from '@/stores/products'
	import { useUserStore } from '@/stores/user'
	import { useRouter } from 'vue-router'
	import { storeToRefs } from 'pinia'
	import {computed, ref} from 'vue'

	const productsStore = useProductsStore();
	const userStore = useUserStore();
	const router = useRouter();
</script>
