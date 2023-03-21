<template>
  <div class="product w-5/12 h-fit flex flex-col flex-nowrap mb-7 relative">
    <div class="pic overflow-hidden hover:shadow-lg h-32">
      <router-link
        :to="link"
        class="overflow-hidden w-full h-full hover:shadow-lg"
        ><img :src="product.img" alt="product" class="w-full"
      /></router-link>
    </div>
    <div
      class="details text-base flex flex-col overflow-hidden py-1 justify-end"
    >
      <div class="flex flex-row justify-between">
        <router-link :to="link" class="w-2/3"
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
      <div><global-button @click="userStore.addToCart(product.id)" /></div>
    </div>
  </div>
</template>

<script setup>
import GlobalButton from "@/components/shared/GlobalButton.vue";
import Rating from "@/components/shared/Rating.vue";
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/user";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const userStore = useUserStore();

const like = ref(false);
const link = computed(() => {
  return `/products/${props.product.id}`
});


</script>

<style scoped>
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
@media screen and (min-width: 415px) {
  .product {
    min-width: 11rem;
    max-width: 220px;
  }
}
</style>
