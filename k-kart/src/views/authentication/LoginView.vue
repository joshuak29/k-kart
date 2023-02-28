<template>
  <form class="flex flex-col items-center gap-10 p-10 pt-4" @submit.prevent="signIn">
    <div class="text-center text-xl font-semibold">Enter your number to continue</div>
    <div class="flex flex-row justify-center h-12">
      <div class="h-full items-center flex px-2 bg-blue-50 border-r rounded-l-lg text-lg">+250</div>
      <div class="h-full items-center flex bg-blue-50 rounded-3xl">
        <input
          type="tel"
          placeholder="7xxxxxxxx"
          class="h-full w-full px-2 bg-blue-50 rounded-r-lg text-gray-500 text-2xl font-semibold"
          v-model="tel"
        />
      </div>
    </div>
    <button
      :disabled="tel.length !== 10"
      class="h-12 w-2/3 bg-blue-500 rounded-lg text-xl text-white font-bold disabled:bg-blue-400 disabled:text-blue-300"
      type="submit"
    >
      Next
    </button>
    <div id="sign-in-recaptcha"></div>
  </form>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { auth } from '@/firebaseConfig'
import { RecaptchaVerifier, signInWithPhoneNumber, setPersistence } from 'firebase/auth'
import { useUserStore } from "@/stores/user"

const userStore = useUserStore();
const router = useRouter()
const tel = ref('6505551234')
const telNmbr = computed(() => {
  return '+1' + tel.value
})

const signIn = () => {
  window.recaptchaVerifier = new RecaptchaVerifier("sign-in-recaptcha", {
			'size': 'invisible',
			'callback': (response) => {
				// reCAPTCHA solved, allow signInWithPhoneNumber.
			}
		}, auth)
  const verifier = window.recaptchaVerifier

  signInWithPhoneNumber(auth, telNmbr.value, verifier).then((resp) => {
    userStore.addOTP(resp);
    router.push('/login-verify');
  }).catch((err) => {
    alert(err.code);
  })
}
const getError = (code) => {}
</script>

<style>
</style>