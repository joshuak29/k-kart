import { defineStore } from 'pinia'
import axios from 'axios'
import { auth } from '@/firebaseConfig'
import { signInWithPhoneNumber } from 'firebase/auth'
import router from '@/router'

export const useUserStore = defineStore('user', {
  state: () => ({
    cart: [1, 3, 4, 5, 7, 9],
    user: null,
    telNumber: null,
    otp: null
  }),
  actions: {
    async fetchCart() {
      let results = await axios.get('http://localhost:3000/cart')
      // this.cart = results.data;
    },
    addNumber(nmbr) {
      this.telNumber = nmbr
    },
    addOTP(otp) {
      this.otp = otp
    },
    addUser(user) {
      this.user = user
    },
    clearUser() {
      this.user = null
    },
    fetchUser() {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          this.clearUser()
          const routePath = router.currentRoute.value.path
          const routes = ['/', '/login', '/login-verify']

          if (
            router.isReady() &&
            (!routes.includes(routePath))
          ) {
            router.push('/')
          }

        } else {
          this.addUser(user)

          const routePath = router.currentRoute.value.path
          const routes = ['/', '/login', '/login-verify']

          if (
            router.isReady() &&
            (routes.includes(routePath))
          ) {
            router.push('/home')
          }
        }
      })
    }
  }
})
