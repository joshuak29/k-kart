<template>
  <button
    class="border border-black rounded-3xl px-5 py-1 text-sm font-semibold hover:text-white hover:bg-black"
  >
    {{ props.text }}
  </button>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Add To Cart",
  },
});
</script>
<style>
button {
  transition: all 0.5s;
}
</style>