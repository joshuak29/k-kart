import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebaseConfig'
import { useUserStore } from '@/stores/user'

import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import CartView from '@/views/CartView.vue'
import FiltersView from '@/views/FiltersView.vue'
import MenuView from '@/views/MenuView.vue'
import FavouritesView from '@/views/FavouritesView.vue'
import AuthenticateView from '@/views/authentication/AuthenticationView.vue'
import LoginView from '@/views/authentication/LoginView.vue'
import LoginVerifyView from '@/views/authentication/LoginVerifyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user',
      component: AuthenticateView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductDetailsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: '/filters',
    //   name: 'filters',
    //   component: FiltersView,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/login-verify',
      name: 'loginVerify',
      component: LoginVerifyView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !auth.currentUser) {
    next('/')
    return
  }
  if (!to.meta.requiresAuth && auth.currentUser) {
    next('/home')
    return
  }
  next()
})
// router.beforeEach(async (to, from) => {
//   console.log(to.meta);
//   const authUser = await auth.currentUser
//   console.log(auth.currentUser);
// })

export default router
