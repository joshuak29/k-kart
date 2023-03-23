import { defineStore } from 'pinia'
import axios from 'axios'
import { auth } from '@/firebaseConfig'
import { signInWithPhoneNumber } from 'firebase/auth'
import router from '@/router'
import { getDoc, doc } from 'firebase/firestore'
import { db } from "@/firebaseConfig"

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,

    //cart
    cart: [],
    cartTotal: 0
  }),
  getters: {
  },
  actions: {
    //cart
    getCartTotal() {
      this.cartTotal = 0
      this.cart.forEach(async (item) => {
        let results = await getDoc(doc(db, 'products', item.id))

        if(results) {
          this.cartTotal += results.data().price * item.qty
        }
      })
    },
    getCart() {
      this.cart = JSON.parse(localStorage.getItem('cart')) || []
      this.getCartTotal()
    },
    addToCart(id) {
      const item = {}
      item['id'] = id
      item['qty'] = 1

      if(this.cart.filter((item) => item.id === id).length == 0) {
        this.cart.push(item)

        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
      this.getCartTotal()
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
      this.getCartTotal()
    },
    clearCart() {
      this.cart = []
      localStorage.removeItem('cart')

      this.getCartTotal()
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
      this.getCartTotal()
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
      this.getCartTotal()
    },

    //user
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
