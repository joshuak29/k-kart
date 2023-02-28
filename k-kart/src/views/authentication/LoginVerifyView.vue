<template>
  <form class="flex flex-col items-center gap-10 p-10 pt-4" @submit.prevent="verifyOtp">
    <div class="text-center text-xl font-semibold">
      Enter code sent to +250790956183
    </div>
    <div class="flex flex-col gap-4 justify-center h-12">
      <div class="h-full items-center flex bg-blue-50">
        <input
          type="tel"
          placeholder="XXXXXX"
          class=" h-full w-full px-2 bg-blue-50 rounded-lg text-lg text-center"
          :class="{'error': loginError}"
          v-model="userOtp"
        />
        
      </div>
      <div class="text-red-500" v-if="loginError">
        <font-awesome-icon icon="fa-circle-exclamation" class="mr-2" /><span class="font-extralight">Wrong code</span>
      </div>
      
    </div>
    <button
      type="submit"
      class="h-12 w-2/3 bg-blue-500 rounded-lg text-xl text-white font-bold"
      :disabled="userOtp.length !== 6"
    >
      Verify
    </button>
  </form>
</template>

<script setup>
import { auth } from "@/firebaseConfig";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const loginError = ref(false);

const router = useRouter();

const userOtp = ref("");
const userStore = useUserStore();

const verifyOtp = () => {
  let otp = userStore.otp;
  otp.confirm(userOtp.value).then(() => {
    router.push('/home');
  }).catch((error) => {
    console.log(error.message);
    alert(error.code)
    loginError.value = true
  });
  // console.log(auth.currentUser);
  
}



</script>

<style scoped>
.error {
  @apply border-4 border-red-600 shadow-md shadow-red-400
}
</style>