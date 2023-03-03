<template>
  <div class="w-screen h-screen flex flex-col p-5 items-center">
    <page-info v-if="pageError" :message="pageError" />
    <img src="@/assets/K-KART.png" alt="k-kart" class="h-1/3" />
    <p class="text-xl font-semibold mb-8 text-black">Create a new account</p>
    <form class="flex flex-col items-center w-3/4 gap-4 pb-2" @submit.prevent="signUp">
      <label
        ><font-awesome-icon icon="user" /><input
          type="text"
          placeholder="Names"
          class="form-input"
          v-model="names"
          :disabled="loading"
      /></label>
      <label :class="{ 'border border-red-500': emailError }"
        ><font-awesome-icon icon="envelope" /><input
          type="email"
          class="form-input"
          placeholder="name@example.com"
          :disabled="loading"
          v-model="email"
      /></label>
      <form-error v-if="emailError" :text="emailError" />
      <label class="font-bold" :class="{ 'border border-red-500': telError }"
        >+250<input
          type="tel"
          class="form-input"
          placeholder="7xxxxxxxx"
          v-model="telNmbr"
          :disabled="loading"
      /></label>
      <form-error v-if="telError" :text="telError" />

      <label :class="{ 'border border-red-500': passwordError }"
        ><font-awesome-icon icon="lock" /><input
          type="password"
          class="form-input"
          placeholder="*****"
          v-model="password"
          :disabled="loading"
      /></label>

      <form-error v-if="passwordError" :text="passwordError" />
      <button
        type="submit"
        class="w-full py-2 px-2 rounded-3xl bg-blue-500 text-white font-bold mt-2"
        :disabled="loading"
      >
        <span v-if="!loading">Sign Up</span><loading v-if="loading" />
      </button>
    </form>
    <p class="text-slate-400 text-sm">
      Already have an account?
      <router-link to="/login" class="underline text-slate-600">Log In</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getDoc, query, collection, where, getDocs } from 'firebase/firestore'
import { db, auth } from '@/firebaseConfig'
import { useRouter } from 'vue-router'

import PageInfo from '@/components/errors/PageInfo.vue'
import Loading from '@/components/shared/Loading.vue'
import FormError from '@/components/errors/FormError.vue'

const router = useRouter()

const loading = ref(false)
const pageError = ref(null)

const email = ref('')
const emailError = ref(null)

const password = ref('')
const passwordError = ref(null)

const telNmbr = ref('')
const telError = ref(null)

const names = ref('')

const signUp = async () => {
  loading.value = true
  pageError.value = null
  // const telQuery = query(collection(db, 'users'), where('tel', '==', telNmbr.value))
  // const docSnap = await getDocs(telQuery)
  // const docs = []

  // docSnap.forEach((doc) => docs.push(doc.data()))

  // if (docs.length < 1) {
  //   telError.value = "Another"
  // } else {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((user) => {
      console.log('Created user with uid: ', user.user.uid)

      let docRef = doc(db, 'users', user.user.uid)
      setDoc(docRef, {
        name: names.value,
        tel: '+250' + telNmbr.value,
        email: email.value
      })
        .then(() => {
          console.log('Created')
          router.push('/home')
        })
        .catch((error) => {
          console.log(error)
        })
      loading.value = false
    })
    .catch((error) => {
      console.log(error)
      switch (error.code) {
        case 'auth/email-already-in-use':
          emailError.value = 'Another account is already using this email'
          break

        case 'auth/weak-password':
          passwordError.value = 'Weak Password! Should be 6+ characters'
          break

        case 'auth/network-request-failed':
          pageError.value = 'Network failed. Check connetction and try again'
          break

        default:
          break
      }
      loading.value = false
    })
  // }
}
</script>

<style scoped>
label {
  @apply w-full py-2 px-2 shadow-md rounded-3xl bg-white flex flex-row items-center gap-4;
}
.form-input {
  @apply grow pl-2;
}
</style>