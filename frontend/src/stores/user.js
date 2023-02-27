import { defineStore } from "pinia";
import axios from "axios";
import { auth } from "@/firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    cart: [1, 3, 4, 5, 7, 9],
    user: {},
    telNumber: null,
    otp: null,
    // isLoggedIn: false,
  }),
  actions: {
    async fetchCart() {
      let results = await axios.get("http://localhost:3000/cart");
      // this.cart = results.data;
    },
    addNumber(nmbr) {
      this.telNumber = nmbr;
    },
    addOTP(otp) {
      this.otp = otp;
    },
  },
});
