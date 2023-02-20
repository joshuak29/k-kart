import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    categories: [],
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
  },
  getters: {
    hotProducts() {
      return this.products.filter((item) => item.hot == true);
    },
  },
});

// export default useProductsStore;
