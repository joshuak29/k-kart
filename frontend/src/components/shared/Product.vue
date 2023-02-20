<template>
  <div
    class="product h-full w-full sm:h-72 sm:w-48 flex flex-col flex-nowrap mb-7"
  >
    <div class="pic overflow-hidden">
      <!-- <font-awesome-icon icon="heart" class="text-white " /> -->
      <router-link to="/products/1"
        ><img :src="product.img" alt="product" class="w-full h-full"
      /></router-link>
    </div>
    <div
      class="details text-base flex flex-col overflow-hidden py-1 justify-end"
    >
      <div class="flex flex-row justify-between">
        <router-link to="/products/1" class="w-2/3"
          ><div class="font-bold text-gray-900 overflow-hidden hover:underline">
            {{ product.name }}
          </div></router-link
        >
        <div class="font-bold text-gray-800 w-1/3 text-end">
          {{ product.price }}
        </div>
      </div>
      <div class="text-gray-400 text-xs whitespace-nowrap">
        {{ product.description }}
      </div>
      <p class="mb-2">
        <rating :rating="product.rating" />
      </p>
      <div><global-button /></div>
    </div>
  </div>
</template>

<script setup>
import GlobalButton from "@/components/shared/GlobalButton.vue";
import Rating from "@/components/shared/Rating.vue";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.product {
  min-width: 11rem;
  max-width: 220px;
}
.product:hover {
  transform: translate(2);
}

.pic {
  height: 62%;
  width: 100%;
  background-color: rgb(228, 228, 228);
  border-radius: 10px;
}
.details {
  height: 38%;
  width: 100%;
}
</style>
