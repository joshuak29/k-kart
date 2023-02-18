<template>
	<div class="mt-14 mx-10">
		<h1>Our Top Categories</h1>
		<div
			id="categories"
			class="flex flex-row gap-5 mt-5 w-full overflow-x-scroll overflow-y-hidden"
		>
			<category v-for="i in categories" :text="i" :key="i" />
		</div>
	</div>
</template>
<script setup>
import { computed } from "vue";
import { useProductsStore } from "@/stores/products";
import Category from "@/components/home/Category.vue";


const productsStore = useProductsStore();
const categories = computed(() => {
	return productsStore.categories
});

</script>
<style></style>
