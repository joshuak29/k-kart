<template>
  <button class="checkout-btn">
    <div>
      <font-awesome-icon
        :icon="icon"
        class="icon text-lg translate-y-0.1 mr-4"
      />
      {{ text }}
    </div>
    <font-awesome-icon icon="angle-right" class="text-lg" />
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
</style>