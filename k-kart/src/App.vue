<script setup>
import FiltersView from '@/views/FiltersView.vue'
import MenuView from '@/views/MenuView.vue'
import Navbar from '@/components/Navbar.vue'
import { useProductsStore } from '@/stores/products'
import { useUserStore } from '@/stores/user'
import { computed, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { addData, setData, updateData, createEmailAcc } from "@/playground";

const productsStore = useProductsStore()
const userStore = useUserStore()
const route = useRoute()

const showNav = computed(
  () => route.name === 'home' || route.name === 'products' || route.name === 'favourites'
)
onBeforeMount(() => {
  userStore.fetchUser()
})
</script>

<template>
  <navbar class="nav" v-if="showNav" />

  <RouterView />
  <!-- <button @click="createEmailAcc">Create Account</button> -->
  <!-- <button @click="addData">Add data</button>
  <button @click="setData">Set data</button>
  <button @click="updateData">Update data</button>
  <button @click="delDoc">Delete data</button> -->

</template>

<style scoped>
</style>
