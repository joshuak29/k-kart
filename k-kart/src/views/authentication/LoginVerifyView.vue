<template>
  <form class="flex flex-col items-center gap-10 p-10 pt-4" @submit.prevent="verifyOtp">
    <div class="text-center text-xl font-semibold">Enter code sent to +250790956183</div>
    <div class="flex flex-col gap-4 justify-center h-12">
      <div class="h-full items-center flex bg-blue-50">
        <input
          type="tel"
          placeholder="XXXXXX"
          class="h-full w-full px-2 bg-blue-50 rounded-lg text-lg text-center"
          :class="{ error: loginError }"
          v-model="userOtp"
          ref="otp-input"
        />
      </div>
      <form-error v-if="loginError" :text="loginError" />
    </div>
    <button
      type="submit"
      class="h-12 w-2/3 bg-blue-500 rounded-lg text-xl text-white font-bold"
      :disabled="userOtp.length !== 6 || loading"
    >
    <span v-if="!loading">Verify</span>
    <loading v-if="loading"/>
      
    </button>
  </form>
</template>

<script setup>
import { auth } from '@/firebaseConfig'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

import Loading from '../../components/shared/Loading.vue'
import FormError from '@/components/errors/FormError.vue'

const loginError = ref(null)
const loading = ref(false)

const router = useRouter()

const userOtp = ref('')
const userStore = useUserStore()

const verifyOtp = async () => {
  loading.value = true
  loginError.value = null
  let otp = userStore.otp
  try {
    await otp.confirm(userOtp.value)
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-verification-code':
        loginError.value = 'Wrong OTP'
        break

      case 'auth/code-expired':
        loginError.value = 'The SMS code has expired.'
        break

      case 'auth/internal-error':
        loginError.value = 'An internal error has occurred.'
        break
    }
    loading.value = false
    userOtp.value = ""
    return
  }
  loading.value = false
  router.push('/home')
}

</script>

<style scoped>
.error {
  @apply border-4 border-red-600 shadow-md shadow-red-400;
}
button:disabled {
  @apply bg-blue-400 text-blue-300
}
</style>