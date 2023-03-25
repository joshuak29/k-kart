<template>
	<div class="shadow-md border border-blue-100 rounded-2xl flex flex-col py-2 px-1 bg-blue-50 gap-3" @click="open = !open">
    <div class="flex items-center justify-between px-3 pt-2">

      <!-- order name -->
      <span class="text-xl font-semibold">{{ order.name}}</span> 

      <!-- order time -->
      <span class="text-sm text-gray-500">26-04-2021</span>
    </div>

    <div class="flex items-center justify-between px-3 pt-2">

      <!-- total price -->
      <div class="border-r border-gray-400 grow font-bold text-sm text-blue-500">
      	{{ order.total }} Frw
      </div>

      <!-- status indicator -->
      <div class="grow text-end">
       <span class="text-xs text-gray-400 mr-1">Status </span> 

       <!-- delivered -->
       <font-awesome-icon icon="circle-check" class="text-blue-600" v-if="order.delivered" />

       <!-- pending -->
       <font-awesome-icon icon="circle-check" class="text-gray-300" v-else/>
       <!-- <font-awesome-icon icon="circle-xmark" class="text-red-600" /> -->

      </div>
    </div>

    <div class="flex flex-col mt-7" v-if="open">
      <div class="flex flex-row py-2 px-5 items-center gap-0 w-full justify-center">
        <span class="point placed done"></span>
        <span class="line" :class="{'done': order.approved || order.delivered}"></span>
        <span class="point approved" :class="{'done': order.approved || order.delivered}"></span>
        <span class="line" :class="{'done': order.delivered}"></span>
        <!-- <span class="point delivered" :class="{'done': order.delivered}"></span> -->
        <font-awesome-icon icon="circle-check" class="point delivered text-2xl" :class="{'text-green-400': order.delivered}"/>
      </div>
    </div>
  </div>
    
</template>
<script setup>
import { ref } from 'vue'

const open = ref(false)

defineProps({
  order: {
    type: Object,
    required: true
  }
});
</script>
<style>
  .point {
    @apply w-4 h-4 rounded-3xl relative bg-gray-300 text-gray-300
  }
  .line {
    @apply h-1 w-24 bg-gray-300
  }
  .placed::after {
    content: "Placed";
    @apply text-gray-500 text-xs absolute -top-5 -left-1/2
  }
  .approved::after {
    content: "Approved";
    @apply text-gray-500 text-xs absolute -top-5 -left-1/2
  }
  .delivered::after {
    content: "Delivered";
    @apply text-gray-500 text-xs absolute -top-5  -left-1/2
  }
  .done {
    @apply shadow-md shadow-blue-500 bg-blue-500
  }
</style>
