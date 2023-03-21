import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebaseConfig'
import { useUserStore } from '@/stores/user'

import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import CartView from '@/views/CartView.vue'
import FavouritesView from '@/views/FavouritesView.vue'
import AuthenticateView from '@/views/authentication/AuthenticationView.vue'
import LoginView from '@/views/authentication/LoginView.vue'
import CheckoutView from "@/views/CheckoutView.vue"
import SignupView from '@/views/authentication/SignupView.vue'
import SetLocationView from '@/views/SetLocationView.vue'
import OrdersView from '@/views/OrdersView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user',
      component: AuthenticateView,
      meta: {
        noAuth: true
      }
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductDetailsView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    // {
    //   path: '/favourites',
    //   name: 'favourites',
    //   component: FavouritesView
    // },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        noAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
      meta: {
        noAuth: true
      }
    },
    {
      path: '/set-location',
      name: 'location',
      component: SetLocationView,
      beforeEnter(to, from, next) {
        if(from.name !== 'cart'){
          next('/cart')
          return
        }
         next()
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
      beforeEnter(to, from, next) {
        if(from.name !== 'location'){
          next('/cart')
          return
        }
         next()
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.noAuth && auth.currentUser) {
    next(from)
    console.log('changed')
    return
  }
  if (!to.meta.noAuth && !auth.currentUser) {
    next(from)
    return
  } else {
    next()
    return
  }
 })

export default router
