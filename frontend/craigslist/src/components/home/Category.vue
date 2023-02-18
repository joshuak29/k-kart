<template>
	<div class="category h-6 bg-teal-200 w-fit px-4 py-1 rounded hover:border-l-4 border-teal-700 cursor-pointer">{{ text }}</div>
</template>

<script setup>
defineProps({
	text: {
		type: String,
		required: true,
	}
});
</script>

<style lang="css" scoped>
* {
	box-sizing: content-box;
}
.category {
	transition: all .1s;
}
</style>
