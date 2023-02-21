
  <template>
  <div
    class="w-full h-full bg-blue-500 overflow-y-scroll border p-8 fixed top-0 left-0 z-10 flex flex-col justify-between"
  >
    <div class="flex flex-row text-white text-2xl font-bold">
      <div
        class="w-3/12 flex flex-row justify-center items-center font-bold text-xl"
      >
        <img
          src="@/assets/logo.png"
          alt="profile"
          class="w-12 h-12 bg-white rounded-3xl"
        />
      </div>
      <div class="w-7/12">Rukundo Joshua</div>
      <div class="w-2/12 justify-center items-center text-end">
        <font-awesome-icon
          icon="xmark"
          class="text-xl text-gray-500 translate-y-1"
          @click="productsStore.openCloseMenu"
        />
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <div class="menu-item">
        <font-awesome-icon class="menu-icon -translate-x-1" icon="house" /><span
          >Home</span
        >
      </div>
      <div class="menu-item">
        <font-awesome-icon
          class="menu-icon -translate-x-2"
          icon="cart-flatbed"
        /><span>My Cart</span>
      </div>
      <div class="menu-item">
        <font-awesome-icon class="menu-icon" icon="heart" /><span
          >Favourites</span
        >
      </div>
      <div class="menu-item">
        <font-awesome-icon class="menu-icon" icon="gear" /><span>Settings</span>
      </div>
    </div>
    <div>
      <font-awesome-icon class="menu-icon" icon="arrow-right-from-bracket" />
      <span class="text-white text-2xl">Log Out</span>
    </div>
  </div>
</template>
  
<script setup>
import { useProductsStore } from "@/stores/products";
const productsStore = useProductsStore();
</script>
  
  <style scoped>
.menu-icon {
  @apply text-white mr-8 text-3xl;
}
.menu-item {
  @apply text-white text-2xl font-bold;
}
</style>