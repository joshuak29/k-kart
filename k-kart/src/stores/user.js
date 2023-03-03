import { defineStore } from 'pinia'
import axios from 'axios'
import { auth } from '@/firebaseConfig'
import { signInWithPhoneNumber } from 'firebase/auth'
import router from '@/router'
import { getDoc, doc } from 'firebase/firestore'
import { db } from "@/firebaseConfig"

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
    async addUser(user) {
      const userSnapshot = await getDoc(doc(db, 'users', user.uid))
      if(userSnapshot) {
        this.user = userSnapshot.data()
      }
      else {
        console.log("Error getting user details");
      }
      
    },
    clearUser() {
      this.user = null
    },
    fetchUser() {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          this.clearUser()
          const routePath = router.currentRoute.value.path
          const routes = ['/', '/login', '/signup']

          if (
            router.isReady() &&
            (!routes.includes(routePath))
          ) {
            router.push('/')
          }

        } else {
          this.addUser(user)

          const routePath = router.currentRoute.value.path
          const routes = ['/', '/login', '/signup']

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
