<template>
  <section id="container">
    <div class="w-full h-fit py-6 pl-6">
      <font-awesome-icon
        icon="arrow-left"
        class="text-3xl"
        @click="router.go(-1)"
      />
    </div>
    <div class="pic">
      <img
        :src="productDetails.img"
        alt="pic"
        class="w-full h-full rounded-t-3xl"
      />
    </div>
    <div class="details">
      <div class="flex flex-col gap-4">
        <h1 class="name font-bold text-2xl">{{ productDetails.name }}</h1>
        <p>
          <span class="high-stock line-through opacity-50 mr-3">{{
            productDetails.price - (productDetails.price / 100) * 30
          }}</span>
          <span class="price font-bold text-lg"
            >{{ productDetails.price }} Frw</span
          >
        </p>
        <p class="stock text-xs opacity-70 font-light font-mono">
          {{ productDetails.stock }} in stock
        </p>
      </div>

      <div class="desc flex flex-col gap-4 text-start justify-start">
        <p>{{ productDetails.description }}</p>
        <div class="flex flex-row gap-1"></div>
      </div>

      <global-button
        class="bg-black text-white hover:bg-white hover:text-black"
      />
    </div>
  </section>
</template>

<script setup>
import GlobalButton from "@/components/shared/GlobalButton.vue";
import { ref, onMounted, computed, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import axios from "axios";

const productsStore = useProductsStore();

const route = useRoute();
const productDetails = ref([]);

onBeforeMount(() => {
  const results = productsStore.products.filter((item) => {
    return item.id == route.params.id;
  });
  productDetails.value = results[0];
});
const router = useRouter();
</script>

<style scoped>
#container {
  @apply bg-white w-screen h-screen fixed left-0 top-0 flex flex-col items-center overflow-y-scroll rounded-t-3xl;
}
.pic {
  @apply w-full h-fit bg-gray-200 rounded-sm rounded-t-3xl;
}
.details {
  @apply w-full h-fit flex flex-col justify-start gap-10 px-5 pb-5;
}
</style>