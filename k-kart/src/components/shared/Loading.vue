<template>
  <font-awesome-icon icon="spinner" class="loading" />
</template>

<script setup>
</script>

<style scoped>
.loading {
  animation: loading 1.5s ease infinite;
}
@keyframes loading {
  to {
    transform: rotate(1turn);
  }
}

</style>