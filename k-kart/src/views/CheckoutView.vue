<template>
	<div class="text-center px-10 py-5">
		<!-- header -->
		<div class="w-full flex flex-row justify-between items-center">
			<!-- back icon -->
			<font-awesome-icon icon="arrow-left" class="text-lg" @click="router.push('/cart')"/>
			<h1 class="text-2xl font-bold text-slate-700">Payment</h1>

			<!-- cart icon -->
			<font-awesome-icon icon="cart-shopping" class="text-lg" @click="router.push({name: 'cart'})"/>
		</div>
		<div class="w-full flex flex-col items-center my-12 gap-2">
			<img src="@/assets/credit-card.svg" class="w-full mb-10">

			<!-- total price -->
			<div class="text-start w-full mb-3">
				<div class="font-bold text-xl">Total:</div>
				<div class="text-lg font-bold text-blue-500">255000 Frw</div>
			</div>

			<!-- tel form -->
			<label class="w-full text-start" for="tel">Enter Your MoMo</label>
			<form class="flex flex-row gap-0 w-full">
				<span class="h-8"><img src="@/assets/momo-logo.jpg" class="h-full w-full"></span>
				<input type="tel" class="bg-gray-300 rounded-r-lg rounded-l-none text-600 font-bold px-2 grow" id="tel" placeholder="07XXXXXXXX" v-model="tel" :disabled="tel.value.length < 1">
			</form>
			
		</div>

		<!-- place order button -->
		<CheckoutButton class="w-4/5 mx-auto my-5 rounded-2xl" text="Place Order" icon="credit-card" />
	</div>
	
</template>
<script setup>
import { db } from '@/firebaseConfig.js'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { useRouter } from "vue-router"
import { onMounted, ref } from 'vue'

import Loading from "@/components/shared/Loading.vue"
import CheckoutButton from "@/components/shared/CheckoutButton.vue"

const tel = ref(null)

const addOrder = () => {
	const cart = JSON.parse(localStorage.getItem('cart'))
}

onMounted(() => {
	const telInput = document.getElementBtId('tel')
	telInput.focus()
})
const router = useRouter();
</script>
<style>
	input[type='tel']:disabled {
		opacity: 0.6
	}
</style>
