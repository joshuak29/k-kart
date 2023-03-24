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
			<div class="text-start w-full flex flex-row justify-between">
				<div class="font-bold text-md text-slate-400">Sub-Total:</div>
				<div class="text-lg font-bold text-blue-300">{{ userStore.cartTotal}} Frw</div>
			</div>
			<div class="text-start w-full mb-4 flex flex-row justify-between">
				<div class="font-bold text-md text-slate-400">Delivery:</div>
				<div class="text-lg font-bold text-blue-300">{{ delivery }} Frw</div>
			</div>
			<div class="text-start w-full mb-5 flex flex-row justify-between">
				<div class="font-bold text-xl">Total:</div>
				<div class="text-2xl font-bold text-blue-500">{{ total }} Frw</div>
			</div>

			<!-- tel form -->
			<!-- <label class="w-full text-start" for="tel">Enter Your MoMo</label> -->
			<form class="flex flex-col gap-1 w-full" @submit.prevent="placeOrder">
				<label class="w-full text-start text-sm text-gray-500" for="name">Name Your Order</label>
				<input type="text" class="bg-gray-300 rounded-lg text-gray-700 font-bold px-2 grow mb-3 h-10" id="name" placeholder="eg: Sunday Groceries" v-model="orderName" required>
				<label class="w-full text-start text-sm text-gray-500" for="tel">Enter Your MoMo</label>
				<div class="flex flexrow gap-0 w-full">
					<span class="h-10"><img src="@/assets/momo-logo.jpg" class="h-full w-full"></span>
					<input type="tel" class="bg-gray-300 rounded-r-lg rounded-l-none text-gray-700 font-bold px-2 grow" id="tel" placeholder="07XXXXXXXX" v-model="tel" required>
				</div>

				<!-- place order button -->
				<CheckoutButton class="w-4/5 mx-auto my-5 rounded-2xl" text="Place Order" icon="credit-card" type="submit" />
				
			</form>
			
		</div>
	</div>
	
</template>
<script setup>
import { db } from '@/firebaseConfig.js'
import { collection, getDocs, getDoc, doc, addDoc } from 'firebase/firestore'
import { useRouter } from "vue-router"
import { onMounted, ref, computed } from 'vue'
import { auth } from '@/firebaseConfig'
import { useUserStore } from '@/stores/user'

import Loading from "@/components/shared/Loading.vue"
import CheckoutButton from "@/components/shared/CheckoutButton.vue"

const router = useRouter();

const userStore = useUserStore();

const delivery = ref(2000)
const total = computed(() => {
	return delivery.value + userStore.cartTotal
})

const orderName = ref(null)
const tel = ref(null)
const orderPlaced = ref(true)
const placeOrder = async () => {
	if(!auth.currenUser) {
		router.push('/login')
	}
	const cart = JSON.parse(localStorage.getItem('cart'))

	const colRef = collection(db, 'users', auth.currentUser.uid, 'orders')

	try {
		let results = await addDoc(colRef, {
			cart,
			'Sub Total': userStore.cartTotal,
			total: total.value,
			tel: '+25' + tel.value,
			location: JSON.parse(localStorage.getItem('userLocation')),
			name: orderName.value
		})
	} 
	catch(err) {
		console.log(err)
	}

	userStore.cart = []
	localStorage.removeItem('cart')
	localStorage.removeItem('userLocation')
	router.push({name: 'checkout-done'})
	
}


onMounted(() => {
	const telInput = document.getElementById('tel')
	telInput.focus()
});
</script>
<style>
	input[type='tel']:disabled {
		opacity: 0.6
	}
</style>
