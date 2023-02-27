<template>
  <form class="flex flex-col items-center gap-10 p-10 pt-4">
    <div class="text-center text-xl font-semibold">
      Enter code sent to +250790956183
    </div>
    <div class="flex flex-row justify-center h-12">
      <div class="h-full items-center flex bg-blue-50">
        <input
          type="tel"
          placeholder="XXXXXX"
          class="h-full w-full px-2 bg-blue-50 rounded-lg text-lg text-center"
          v-model="otp"
        />
      </div>
    </div>
    <button
      type="submit"
      class="h-12 w-2/3 bg-blue-500 rounded-lg text-xl text-white font-bold"
      :disabled="otp.length !== 6"
      @click="router.push('/home')"
    >
      Verify
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const otp = ref("121225");
const logOut = () => {
  console.log("did it!");
};
</script>

<style>
</style>