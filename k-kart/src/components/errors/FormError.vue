<template>
  <div class="text-red-500 self-start">
    <font-awesome-icon icon="fa-circle-exclamation" class="mr-2 text-sm" /><span class="font-extralight text-sm italic"
      >{{ text }}</span
    >
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Login Error",
  }
})
</script>

<style>
</style>