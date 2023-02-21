import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from "@/stores/user";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    categories: [],
    filtersOpen: false,
    menuOpen: false,
  }),
  actions: {
    async getCategories() {
      const results = await axios.get("http://localhost:3000/categories");
      this.categories = results.data;
    },
    async getProducts() {
      const results = await axios.get("http://localhost:3000/products");
      this.products = results.data;
    },
    openCloseFilters() {
      this.filtersOpen = !this.filtersOpen;
    },
    openCloseMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  getters: {
    hotProducts() {
      return this.products.filter((item) => item.hot == true);
    },
    cartItems() {
      const userStore = useUserStore();
      if (userStore.cart.length === 0) {
        return [];
      }
      return this.products.filter((product) => {
        return userStore.cart.includes(product.id);
      });
    },
  },
});

// export default useProductsStore;
