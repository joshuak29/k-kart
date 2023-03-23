<template>
  <button class="checkout-btn">
    <div class="grow flex-row flex justify-center gap-5 font-bold">
      <font-awesome-icon
        :icon="icon"
        class="icon text-lg translate-y-0.1 mr-4"
        v-if="icon"
      />
      {{ text }}
    </div>
    <font-awesome-icon icon="angle-right" class="text-lg"/>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Check Out",
  },
  icon: {
    type: String,
  },
});
</script>

<style scoped>
.icon {
  transform: translateY(0.1rem);
}
.checkout-btn {
  @apply bg-blue-500 py-4 px-4 rounded-2xl text-white flex flex-row justify-between items-center;
}
</style>