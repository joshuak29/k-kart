<template>
  <div
    id="container"
    class="bg-white h-screen w-screen fixed left-0 top-0 flex flex-col sm:flex-row items-center justify-center sm:p-20 overflow-y-scroll"
  >
    <font-awesome-icon
      icon="xmark"
      class="fixed right-8 top-8 z-10 hidden sm:block text-gray-600 hover:text-black text-3xl"
      @click="close"
    />
    <div class="pic w-full sm:w-1/2 h-full bg-gray-200 rounded-sm">
      <img :src="productDetails.img" alt="pic" class="w-full h-full" />
    </div>
    <div
      class="details w-full sm:w-1/2 h-full flex flex-col justify-start gap-10 px-5 pb-5"
    >
      <div class="flex flex-col gap-4">
        <h1 class="font-bold text-2xl">{{ productDetails.name }}</h1>
        <p>
          <span class="line-through opacity-50 mr-3">{{
            productDetails.price - (productDetails.price / 100) * 30
          }}</span>
          <span class="font-bold text-lg">{{ productDetails.price }} Frw</span>
        </p>
        <p class="text-xs opacity-70 font-light font-mono">
          {{ productDetails.stock }} in stock
        </p>
      </div>

      <div class="flex flex-col gap-4 text-start justify-start">
        <p>{{ productDetails.description }}</p>
        <div class="flex flex-row gap-1"></div>
      </div>

      <global-button
        class="bg-black text-white hover:bg-white hover:text-black"
      />
    </div>
  </div>
</template>

<script setup>
import GlobalButton from "@/components/shared/GlobalButton.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import axios from "axios";

const productsStore = useProductsStore();

const route = useRoute();
const productDetails = ref("");

onMounted(async () => {
  let results = await axios.get(
    `http://localhost:3000/products/${route.params.id}`
  );
  productDetails.value = results.data;
});
const router = useRouter();
const close = () => {
  router.push("/products");
};
</script>

<style scoped>
.pic,
.details {
  min-height: 30rem;
  max-width: 32rem;
  min-width: 20rem;
}
</style>