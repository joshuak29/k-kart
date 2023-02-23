<template>
  <div class="hero w-full bg-teal-500 flex flex-col p-10 justify-between">
    <div class="text-white">
      Forget about the long lines, the bad clerks or the shopping hustle, K-Kart
      has got you covered. Shop from any supermarket in town and have it
      delivered from the comfort of your home.
    </div>
    <div class="flex flex-row justify-around">
      <router-link to="/products"
        ><global-button text="Shop Now"
      /></router-link>

      <global-button text="Contact Us" />
    </div>
  </div>
</template>
<script setup>
import GlobalButton from "@/components/shared/GlobalButton.vue";
</script>
<style scoped>
div.hero {
  height: 24rem;
  /* background: url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHN0b3JlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60); */
  background: url(@/assets/hero-bg-1.jpg);
  background-position-x: 100%;
  background-position-y: 100%;
}
</style>
