<template>
  <div class="flex flex-row rounded-2xl h-28 border p-1 bg-white shadow-lg" v-if="item">

    <!-- item image -->
    <img :src="item.img" alt="image" class="w-4/12 h-full rounded-xl" />

    <!-- item name and price -->
    <div class="w-5/12 flex flex-col place-items-center justify-center gap-3">
      <h2 class="text-slate-600 text-md">{{ item.name }}</h2>
      <h1 class="text-sky-500 font-bold text-lg">
        {{ props.item.qty * item.price }} frw
      </h1>
    </div>

    <!-- quantity counter -->
    <div class="w-2/12 flex flex-col place-items-center justify-between">
      <button class="count text-2xl shadow-md bg-cyan-100 disabled:opacity-0" @click="userStore.addQty(props.item)" :disabled="props.item.qty >= item.stock">
        +
      </button>
      <span class="count text-xl">{{ props.item.qty }}</span>
      <button class="count text-2xl shadow-md disabled:opacity-0" @click="userStore.reduceQty(props.item)" :disabled="props.item.qty <= 1">-</button>
    </div>

    <!-- delete section -->
    <div class="w-1/12 flex flex-row items-center text-sm">
      <!-- delete icon -->
      <font-awesome-icon
        icon="trash"
        id="delete"
        class="text-gray-500 hover:text-black"
        @click="userStore.removeFromCart(props.item)"
      />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { onBeforeMount } from 'vue'
import { ref } from "vue";
import { db } from '@/firebaseConfig.js'
import { getDoc, doc } from 'firebase/firestore'

const userStore = useUserStore()
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});


const counter = userStore.cartTotal

const item = ref(null)
onBeforeMount(async () => {

  const docRef = doc(db, 'products', props.item.id)

  try {
    var results = await getDoc(docRef)
    item.value = results.data()
  }
  catch(error) {
    console.log(error)
  }
});
</script>

<style scoped>
.count {
  @apply w-8 h-8 rounded-3xl flex items-center justify-center;
}
</style>