<template>
  <div class="flex flex-col items-center gap-10 p-10 pt-4">
    <div class="text-center text-xl font-semibold">
      Enter your number to continue
    </div>
    <div class="flex flex-row justify-center h-12">
      <div
        class="h-full items-center flex px-2 bg-blue-50 border-r rounded-l-lg text-lg"
      >
        +250
      </div>
      <div class="h-full items-center flex bg-blue-50 rounded-3xl">
        <input
          type="tel"
          placeholder="7xxxxxxxx"
          class="h-full w-full px-2 bg-blue-50 rounded-r-lg text-lg"
          v-model="tel"
        />
      </div>
    </div>
    <button
      :disabled="tel.length !== 6111111111111"
      class="h-12 w-2/3 bg-blue-500 rounded-lg text-xl text-white font-bold"
      @click="signIn"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { auth } from "@/firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";

const router = useRouter();
const tel = ref();

window.recaptchaVerifier = new RecaptchaVerifier(
  "sign-in-recaptcha",
  {
    size: "invisible",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
    },
  },
  auth
);
const verifier = window.recaptchaVerifier;

const signIn = () => {
  signInWithPhoneNumber(auth, tel.value, verifier).then((resp) => {
    const otp = prompt("Enter OTP");
    resp.confirm(otp);
    router.push("/home");
  });
};
</script>

<style>
</style>