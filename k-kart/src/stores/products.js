import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { db } from '@/firebaseConfig.js'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    categories: [
      {
        id: 1,
        category: "Fashion",
        img: "https://images.unsplash.com/photo-1652184513381-9755426e7fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZhc2hpb24lMjBvcmFuZ2UlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        category: "Kitchen Ware",
        img: "https://images.unsplash.com/photo-1520981825232-ece5fae45120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMHdhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        category: "House Ware",
        img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        category: "Jewelry",
        img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGpld2Vscnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 5,
        category: "Toys",
        img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    hotProducts: [],
    stores: [
      {
        id: 1,
        name: "Simba Kigali Town",
        description:
          "Simba is a chain of supermarkets with branches across the city. They’re generally the best-stocked and most reasonably priced supermarkets in Kigali.",
        location: "Kigali Town",
      },
      {
        id: 2,
        name: "Simba Kigali Heights",
        description:
          "Despite being one of the biggest supermarkets in Kigali, Simba’s Kigali Heights branch is quite poorly stocked.",
        location: "Kacyiru",
      },
      {
        id: 3,
        name: "La Gallette",
        description:
          "La Galette is a very expensive supermarket selling imported ‘Western’ produce, canned goods, cheese, homemade ice cream, a huge range of alcohol, and good quality meat.",
        location: "Muhima",
      },
      {
        id: 4,
        name: "T 2000 ",
        description:
          "T-200 is a big homewares store selling cheap but decent products imported from China at wholesale prices. ",
        location: "Kigali Town",
      },
      {
        id: 5,
        name: "Sawa City",
        description:
          "This Sawa Citi is smaller than its sister store in Kimihurura, but it’s convenient for people living in Remera. As with the other store, there’s a Brood, and you’ll occasionally find some interesting foodstuff for sale at reasonable prices.",
        location: "Remera",
      },
    ]
  }),
  getters:{},
  actions: {
    async getCategories() {
      let results = await axios.get("http://localhost:3000/categories");
      // this.categories = results.data;
    },
    async getProducts() {
      const colRef = collection(db, 'products')

      const productsSnapshot = await getDocs(colRef)

      productsSnapshot.forEach((product) => {
        const details = product.data()
        details['id'] = product.id
        this.products.push(details)
      })
      
    },
  },
});

// export default useProductsStore;
