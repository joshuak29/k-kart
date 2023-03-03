
  <template>
  <section class="menu-view">
    <div class="flex flex-row text-white text-2xl font-bold">
      <header class="menu-header">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="profile"
          class="w-12 h-12 bg-white rounded-3xl"
        />
      </header>
      <div class="w-7/12 flex flex-col">
        <div class="text-lg" v-if="userStore.user">{{ userStore.user.name }}</div>
        <div class="text-md" v-else>Loading...</div>
        <div class="font-light font-mono text-sm">Active</div>
      </div>

      <div class="w-2/12 justify-center items-center text-end">
        <font-awesome-icon
          icon="xmark"
          class="text-xl text-gray-500 translate-y-1"
          @click="router.go(-1)"
        />
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <router-link to="/products">
        <div class="menu-item">
          <font-awesome-icon
            class="menu-icon -translate-x-1"
            icon="house"
          /><span>Shop</span>
        </div></router-link
      >
      <router-link to="/cart"
        ><div class="menu-item">
          <font-awesome-icon
            class="menu-icon -translate-x-2"
            icon="cart-flatbed"
          /><span>My Cart</span>
        </div></router-link
      >
      <router-link to="/favourites"
        ><div class="menu-item">
          <font-awesome-icon class="menu-icon" icon="heart" /><span
            >Favourites</span
          >
        </div></router-link
      >
      <div class="menu-item">
        <font-awesome-icon class="menu-icon" icon="gear" /><span>Settings</span>
      </div>
      <div class="menu-item">
      </div>
    </div>
    <div class="flex flex-row justify-end">
      <button @click="signOutUser"><font-awesome-icon
        class="menu-icon text-sm"
        icon="arrow-right-from-bracket"
      />
      <span class="text-white text-l">Log Out</span></button>
      
    </div>
  </section>
</template>
  
<script setup>
import { useProductsStore } from "@/stores/products";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

const userStore = useUserStore();

const router = useRouter();
const signOutUser = async () => {

  await signOut(auth)

  router.push("/")
}
</script>
  
  <style scoped>
.menu-leave-to,
.menu-enter-from {
  transform: translateX(100%);
}
.menu-leave-active,
.menu-enter-active {
  transition: all 0.2s;
}
.menu-view {
  @apply w-full h-full bg-blue-500 overflow-y-scroll border p-8 fixed top-0 left-0 flex flex-col justify-between;
}
.menu-header {
  @apply w-3/12 flex flex-row justify-center items-center font-bold text-xl;
}
.menu-icon {
  @apply text-white mr-5 text-2xl;
}
.menu-item {
  @apply text-white text-xl font-semibold;
}
</style>