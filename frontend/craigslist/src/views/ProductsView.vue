<template>
  <div>
    <div>Products</div>
    <div class="flex flex-row flex-wrap gap-5 p-5 justify-center sm:p-10">
      <product v-for="i in 30" :key="i" />
    </div>
  </div>
</template>
<script setup>
import Product from "@/components/shared/Product.vue";
</script>