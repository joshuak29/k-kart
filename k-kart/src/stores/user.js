import { defineStore } from 'pinia'
import axios from 'axios'
import { auth } from '@/firebaseConfig'
import { signInWithPhoneNumber } from 'firebase/auth'
import router from '@/router'
import { getDoc, doc } from 'firebase/firestore'
import { db } from "@/firebaseConfig"

export const useUserStore = defineStore('user', {
  state: () => ({
    cart: [],
    user: null,
    telNumber: null,
    otp: null
  }),
  getters: {
      cartTotal() {
        this.cart.forEach(async (item) => {
          const docRef = doc(db, 'products', item.id)

          try {
            let results = await getDoc(docRef)

           console.log(results.data().price * item.qty)

          }
          catch(error) {
            console.log(error)
          }
          
          return 'true'
        })
      }
  },
  actions: {
    getCart() {
      this.cart = JSON.parse(localStorage.getItem('cart')) || []
    },
    addToCart(id) {
      const item = {}
      item['id'] = id
      item['qty'] = 1

      if(this.cart.filter((item) => item.id === id).length == 0) {
        this.cart.push(item)

        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    },
    removeFromCart(item){

      const product = this.cart.filter((cartItem) => cartItem.id === item.id)

      if(product.length > 0) {
        for (var i = 0; i < this.cart.length; i++) {
          if(JSON.stringify(this.cart[i]) == JSON.stringify(item)) {
            this.cart.splice(i, 1)
          }
        }

        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    },
    clearCart() {
      this.cart = []
      localStorage.removeItem('cart')
    },
    addQty(item) {
      const product = this.cart.filter((cartItem) => cartItem.id === item.id)

      if(product.length > 0) {
        for (var i = 0; i < this.cart.length; i++) {
          if(JSON.stringify(this.cart[i]) == JSON.stringify(item)) {
            this.cart[i].qty += 1
          }
        }

        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    },
    reduceQty(item) {
      const product = this.cart.filter((cartItem) => cartItem.id === item.id)

      if(product.length > 0) {
        for (var i = 0; i < this.cart.length; i++) {
          if(JSON.stringify(this.cart[i]) == JSON.stringify(item)) {
            this.cart[i].qty -= 1
          }
        }

        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
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
            router.push('/products')
          }
        }
      })
    }
  }
})
