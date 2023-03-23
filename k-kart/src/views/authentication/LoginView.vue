<script setup>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { auth } from '@/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useUserStore } from '@/stores/user'

import PageInfo from '@/components/errors/PageInfo.vue'
import Loading from '@/components/shared/Loading.vue'
import FormError from '@/components/errors/FormError.vue'

const userStore = useUserStore()
const router = useRouter()

const pageError = ref(null)
const formError = ref(null)
const loading = ref(false)
const showingPassword = ref(false)
const type = computed(() => showingPassword.value ? "text" : "password")

const togglePassword = () => {

}

const showPassword = computed(() => {
  return showingPassword ? 'eye' : 'eye-slash'
})

const email = ref('')
const password = ref('')
const signIn = () => {
  pageError.value = null
  loading.value = true
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push('/products')
      loading.value = false
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/user-not-found':
          formError.value = 'Wrong Email or Password'
          break

        case 'auth/user-disabled':
          formError.value = 'User has been disabled'
          break

        case 'auth/network-request-failed':
          pageError.value = 'Network failed. Check connetction and try again'
          break

        default:
          formError.value = 'An error occured. Try again later'
          break
      }
      password.value = ''
      loading.value = false
    })
};
</script>
<template>
  <div class="w-screen h-screen flex flex-col p-5 items-center">
    <page-info v-if="pageError" :message="pageError" />
    <img src="@/assets/K-KART.png" alt="k-kart" />
    <h1 class="text-2xl font-bold mb-8 text-blue-500">Sign in to your account</h1>

    <!-- form -->
    <form class="flex flex-col items-center w-3/4 gap-4 pb-2" @submit.prevent="signIn">

      <!-- email label -->
      <label
        ><font-awesome-icon icon="envelope" /><input
          type="email"
          class="grow pl-2"
          placeholder="name@example.com"
          v-model="email"
          :disabled="loading"
          required
      /></label>

      <!-- password label -->
      <label
        ><font-awesome-icon icon="lock" /><input
          :type="type"
          class="grow pl-2"
          placeholder="*****"
          v-model="password"
          :disabled="loading"
          required
        />

        <!-- show pasword icon -->
        <font-awesome-icon v-if="!showingPassword"
          icon="eye"
          class="text-slate-700 text-sm z-10"
          @click="showingPassword = true"
        />
        <font-awesome-icon v-else
          icon="eye-slash"
          class="text-slate-700 text-sm z-10"
          @click="showingPassword = false"
        />
      </label>

      <!-- form error -->
      <form-error v-if="formError" :text="formError" />


      <!-- submit nutton -->
      <button
        type="submit"
        class="w-full py-2 px-2 rounded-3xl bg-blue-500 text-white font-bold mt-2"
        :disabled="loading"
      >
        <span v-if="!loading">Sign In</span> <loading v-if="loading" />
      </button>
    </form>
    <p class="text-slate-400 text-sm">
      New here? <router-link to="/signup" class="underline text-slate-600">Sign Up</router-link>
    </p>
  </div>
  <!-- <page-info v-if="formError" :message="formError" /> -->
</template>

<style scoped>
label,
.label {
  @apply w-full py-2 px-2 shadow-md rounded-3xl bg-white flex flex-row items-center gap-4;
}
</style>