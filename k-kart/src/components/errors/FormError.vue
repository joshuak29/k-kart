<template>
  <div class="text-red-500">
    <font-awesome-icon icon="fa-circle-exclamation" class="mr-2" /><span class="font-extralight"
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