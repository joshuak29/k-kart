<template>
  <div class="flex flex-col mb-4">
    <h1 class="mb-2">Price:</h1>
    <div class="border border-blue-100 w-fit px-4 py-2 ml-8 my-4 text-gray-600">
      10000 Frw
    </div>
    <input type="range" min="0" max="100" step="1" value="0" class="slider" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.slider {
  @apply w-1/2 bg-blue-500 opacity-50 hover:opacity-100 mt-3 ml-4;
  -webkit-appearance: none;
  height: 0.1rem;
  transition: opacity 0.5s;
}
</style>