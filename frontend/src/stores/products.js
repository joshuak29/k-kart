import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from "@/stores/user";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 30000,
        description:
          "Sneakers shoes | Autumn collection By Mojtaba Fahiminia ©",
        rating: 4,
        stock: 2,
        category_id: 1,
        hot: true,
      },
      {
        id: 2,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 75000,
        description:
          "So impressed with how comfortable and light these trainers are, decided to experiment with levitation.",
        rating: 5,
        stock: 1,
        category_id: 1,
        hot: true,
      },
      {
        id: 3,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 27000,
        description: "Studioshot of a nike aiforce 1 shadow",
        rating: 5,
        stock: 3,
        category_id: 1,
        hot: false,
      },
      {
        id: 4,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 7000,
        description:
          "Sneakers shoes | Autumn collection By Mojtaba Fahiminia ©",
        rating: 4,
        stock: 10,
        category_id: 1,
        hot: true,
      },
      {
        id: 5,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 7000,
        description:
          "Sneakers shoes | Autumn collection By Mojtaba Fahiminia ©",
        rating: 4,
        stock: 10,
        category_id: 1,
        hot: false,
      },
      {
        id: 6,
        name: "Beauty product",
        img: "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 41000,
        description: "Cosmetics set",
        rating: 4,
        stock: 1,
        category_id: 1,
        hot: false,
      },
      {
        id: 7,
        name: "Lamp Set",
        img: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 30000,
        description: "HouseWare | Desk Lighting Lamp Set",
        rating: 4,
        stock: 2,
        category_id: 1,
        hot: true,
      },
      {
        id: 8,
        name: "Shelf",
        img: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=623&q=80",
        price: 22000,
        description: "Interior Book Shelf",
        rating: 5,
        stock: 2,
        category_id: 1,
        hot: true,
      },
      {
        id: 9,
        name: "Minion",
        img: "https://images.unsplash.com/photo-1567722066597-2bdf36d13481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 30000,
        description: "Minion Toy for kids",
        rating: 4,
        stock: 2,
        category_id: 1,
        hot: false,
      },
      {
        id: 10,
        name: "Necklace",
        img: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 30000,
        description: "White Diamond Halo pendant necklace",
        rating: 3,
        stock: 15,
        category_id: 1,
        hot: true,
      },
      {
        id: 11,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 30000,
        description:
          "Sneakers shoes | Autumn collection By Mojtaba Fahiminia ©",
        rating: 4,
        stock: 2,
        category_id: 1,
        hot: true,
      },
      {
        id: 12,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 75000,
        description:
          "So impressed with how comfortable and light these trainers are, decided to experiment with levitation.",
        rating: 5,
        stock: 1,
        category_id: 1,
        hot: true,
      },
      {
        id: 13,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 27000,
        description: "Studioshot of a nike aiforce 1 shadow",
        rating: 5,
        stock: 3,
        category_id: 1,
        hot: false,
      },
      {
        id: 14,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 7000,
        description:
          "Sneakers shoes | Autumn collection By Mojtaba Fahiminia ©",
        rating: 4,
        stock: 10,
        category_id: 1,
        hot: true,
      },
      {
        id: 15,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 7000,
        description:
          "Sneakers shoes | Autumn collection By Mojtaba Fahiminia ©",
        rating: 4,
        stock: 10,
        category_id: 1,
        hot: false,
      },
      {
        id: 16,
        name: "Beauty product",
        img: "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 41000,
        description: "Cosmetics set",
        rating: 4,
        stock: 1,
        category_id: 1,
        hot: false,
      },
      {
        id: 17,
        name: "Lamp Set",
        img: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 30000,
        description: "HouseWare | Desk Lighting Lamp Set",
        rating: 4,
        stock: 2,
        category_id: 1,
        hot: true,
      },
      {
        id: 18,
        name: "Shelf",
        img: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=623&q=80",
        price: 22000,
        description: "Interior Book Shelf",
        rating: 5,
        stock: 2,
        category_id: 1,
        hot: true,
      },
      {
        id: 19,
        name: "Minion",
        img: "https://images.unsplash.com/photo-1567722066597-2bdf36d13481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 30000,
        description: "Minion Toy for kids",
        rating: 4,
        stock: 2,
        category_id: 1,
        hot: false,
      },
      {
        id: 20,
        name: "Necklace",
        img: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 30000,
        description: "White Diamond Halo pendant necklace",
        rating: 3,
        stock: 15,
        category_id: 1,
        hot: true,
      },
    ],
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
    hotProducts: [
      {
        id: 1,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 30000,
        description:
          "Sneakers shoes | Autumn collection By Mojtaba Fahiminia ©",
        rating: 4,
        stock: 2,
        category_id: 1,
        hot: true,
      },
      {
        id: 2,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        price: 75000,
        description:
          "So impressed with how comfortable and light these trainers are, decided to experiment with levitation.",
        rating: 5,
        stock: 1,
        category_id: 1,
        hot: true,
      },
      {
        id: 3,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 27000,
        description: "Studioshot of a nike aiforce 1 shadow",
        rating: 5,
        stock: 3,
        category_id: 1,
        hot: false,
      },
      {
        id: 4,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 7000,
        description:
          "Sneakers shoes | Autumn collection By Mojtaba Fahiminia ©",
        rating: 4,
        stock: 10,
        category_id: 1,
        hot: true,
      },
      {
        id: 5,
        name: "AirFoce 1",
        img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 7000,
        description:
          "Sneakers shoes | Autumn collection By Mojtaba Fahiminia ©",
        rating: 4,
        stock: 10,
        category_id: 1,
        hot: false,
      },
    ],
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
    ],
  }),
  actions: {
    async getCategories() {
      const results = await axios.get("http://localhost:3000/categories");
      // this.categories = results.data;
    },
    async getProducts() {
      const results = await axios.get("http://localhost:3000/products");
      // this.products = results.data;
    },
  },
  getters: {
    // hotProducts() {
    //   return this.products.filter((item) => item.hot == true);
    // },
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
