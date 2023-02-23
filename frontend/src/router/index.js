import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import CartView from "@/views/CartView.vue";
import FiltersView from "@/views/FiltersView.vue";
import MenuView from "@/views/MenuView.vue";
import FavouritesView from "@/views/FavouritesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/products/:id",
    name: "product",
    component: ProductDetailsView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/filters",
    name: "filters",
    component: FiltersView,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: FavouritesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
