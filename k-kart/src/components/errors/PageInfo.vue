<template>
  <transition name="page-error">
    <div
      v-if="transition"
      class="fixed bottom-0 left-0 w-full h-20"
    >
      <div class="error-container" v-if="error && transition">
        <font-awesome-icon icon="fa-circle-exclamation" class="mr-8 text-3xl" />{{ message }}
      </div>
      <div v-if="!error && transition" class="info-container">
        <font-awesome-icon icon="fa-circle-exclamation" class="mr-8 text-3xl" />{{ message }}
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  message: {
    type: String,
    required: true
  },
  error: {
    type: Boolean,
    default: true
  }
})

const transition = ref(false)

onMounted(() => {
  transition.value = true
  setInterval(() => {
    transition.value = false
  }, 5000)
})
</script>

<style scoped>
.error-container {
  @apply h-full w-full flex items-center justify-center bg-red-400 bg-opacity-40 font-bold text-red-500  border-l-4  border-red-500 rounded-l-lg;
}
.info-container {
  @apply w-full h-full flex items-center justify-center bg-teal-400 bg-opacity-40 font-bold text-teal-500  border-l-4  border-teal-500 rounded-l-lg;
}
.page-error-leave-to,
.page-error-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.page-error-enter-active,
.page-error-leave-active {
  transition: 0.5s;
}
</style>