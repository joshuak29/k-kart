<template>
  <section id="container" class="h-screen w-screen">
    <div class="w-full h-full flex-col flex">
      <div class="w-full h-2/3 p-5">
        <img src="@/assets/K-KART.png" alt="home" class="w-full " />
      </div>
      <div class="w-full h-1/3 flex flex-col justify-center items-center gap-5">
        <button
          class="btn bg-blue-600 text-white text-lg"
          @click="router.push('/login')"
        >
          Login
        </button>
        <button
          class="btn bg-slate-100 text-slate-600 text-lg"
          @click="router.push('/signup')"
        >
          Get Started
        </button>
        <!-- <button class="btn border border-blue-500 text-blue-500">
          Get Started
        </button> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.btn {
  @apply w-2/3 h-10 rounded-lg;
}
button:disabled {
  background-color: rgba(88, 88, 234, 0.718);
  color: rgb(166, 166, 248);
}
</style>