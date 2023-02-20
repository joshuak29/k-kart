<template>
  <div
    class="
      bg-teal-50
      h-screen
      w-screen
      fixed
      left-0
      top-0
      flex flex-col
      justify-center
      items-center
      p-20
      overflow-y-scroll
    "
  >
    <font-awesome-icon
      icon="xmark"
      class="
        fixed
        right-8
        top-8
        z-10
        hidden
        sm:block
        text-gray-600
        hover:text-black
        text-3xl
      "
      @click="close"
    />
    <div
      id="container"
      class="
        bg-white
        rounded
        w-full
        h-full
        flex flex-col
        gap-2
        overflow-y-scroll
        p-5
      "
    >
      <cart-item />
      <cart-item />
      <cart-item />
      <cart-item />
      <cart-item />
    </div>
  </div>
</template>

<script setup>
import CartItem from "@/components/CartItem.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const close = () => {
  router.push("/products");
};
</script>

<style scoped>
#container {
  min-height: 17rem;
}
</style>