<template>
  <div class="bg-transparent flex flex-row h-fit px-4 py-2 my-4 hover:bg-white hover:shadow-md rounded-2xl" @click="$emit('addLocation', result.geometry.coordinates)">
    <div class="px-2 h-full translate-y-1/2">
      <font-awesome-icon icon="location-dot" class="text-xl" />
    </div>
    
    <div class="flex flex-col grow items-start px-4">
      <p class="font-bold">{{ result.text }}</p>
      <p class="text-slate-500 text-md">{{ result.place_name }}
      </p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  result: {
    type: Object,
    required: true
  }
})
</script>