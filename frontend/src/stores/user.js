import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    cart: [1, 3, 4, 5, 7, 9],
  }),
  actions: {
    async fetchCart() {
      let results = await axios.get("http://localhost:3000/cart");
      // this.cart = results.data;
    },
  },
});
