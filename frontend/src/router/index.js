import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
