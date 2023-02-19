<template>
  <div
    id="container"
    class="
      bg-white
      h-screen
      w-screen
      fixed
      left-0
      top-0
      flex flex-col
      sm:flex-row
      items-center
      justify-center
      sm:p-20
    "
  >
    <font-awesome-icon
      icon="angle-up"
      class="fixed right-8 top-8 z-10 hidden sm:block"
      @click="close"
    />
    <div class="pic w-full sm:w-1/2 h-full bg-gray-200 sm:p-10">
      <img src="@/assets/logo.png" alt="pic" class="w-full h-full" />
    </div>
    <div
      class="
        details
        w-full
        sm:w-1/2
        h-full
        flex flex-col
        justify-between
        px-5
        pb-5
      "
    >
      <div class="flex flex-col gap-4">
        <h1 class="font-bold text-2xl">Hand Watch</h1>
        <p>
          <span class="line-through opacity-50 mr-3">{{ price }}</span>
          <span class="font-bold text-lg">{{ price }} Frw</span>
        </p>
        <p class="text-xs opacity-70 font-light font-mono">4 in stock</p>
      </div>

      <div class="flex flex-col gap-4 text-start justify-start">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          quisquam sapiente alias, suscipit cum iste fugiat blanditiis
          reprehenderit. Doloremque quibusdam aliquam harum quis porro.
          Accusamus cumque corporis exercitationem quibusdam itaque similique
          ducimus blanditiis provident rem sed saepe incidunt ab rerum quis,
          numquam, dicta facilis minima ipsam nihil nobis quasi eum.
        </p>
        <div class="flex flex-row gap-1">
          <font-awesome-icon
            icon="star"
            class="text-teal-700"
            v-for="i in 4"
            :key="i"
          />
          <span class="ml-3">(127)</span>
        </div>
      </div>

      <global-button
        class="bg-black text-white hover:bg-white hover:text-black"
      />
    </div>
  </div>
</template>

<script setup>
import GlobalButton from "@/components/shared/GlobalButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const price = ref(30000);

const router = useRouter();
const close = () => {
  console.log(router);
  router.go(-1);
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