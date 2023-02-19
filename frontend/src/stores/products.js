import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
	state: () => ({
		products: ["iPhone 7", "iPhone 6", "iPhone 5", "iPhone 8"],
		categories: ["iPhone 7", "iPhone 6", "iPhone 5", "iPhone 8"],
	}),
});

// export default useProductsStore;
