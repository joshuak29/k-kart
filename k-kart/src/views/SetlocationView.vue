<template>
  <div class="relative h-screen w-screen bg-slate-100 z-10">
    <!-- search section -->
    <div class="w-5/6 text-center rounded-2xl absolute top-4 left-2 z-10 bg-white">
        <div class="flex flex-row gap-0 w-full p-0 m-0 bg-transparent" :class="{'mb-8': searchQuery}">

          <!-- search icon -->
          <span class="bg-white rounded-l-3xl h-10 w-10 flex items-center justify-center"
            ><font-awesome-icon icon="search" class="text-slate-400"
          /></span>

          <!-- search Input -->
          <input
            type="text"
            placeholder="Where are you?"
            class="w-4/6 bg-white p-2 rounded-r-3xl grow shadow-lg rounded-l-none"
            v-model="searchQuery"
            @input="performSearch"
          />
        </div>

        <!-- Loading -->
        <loading v-if="searchQuery && !searchResults"/>

        <!-- results section -->
        <search-result
          v-for="result in searchResults"
          :key="result"
          :result="result"
          @add-location="plotLocation"
        />
      </div>


      <!-- set location icon -->
      <div class="absolute top-5 w-full bg-transparent flex items-center justify-end px-4">
      <button
        class="h-8 w-8 rounded-3xl bg-white flex items-center justify-center z-10"
        @click="locate"
      >
        <font-awesome-icon icon="location-arrow" class="text-lg" :class="{'animate-spin': locating}" />
      </button>
    </div>

    <!-- current location section -->
    <div
      class="absolute bottom-0 left-0 h-fit bg-slate-100 w-screen p-5 rounded-t-2xl overflow-y-scroll z-10 flex flex-row justify-evenly"
    >
      <!-- <current-location /> -->
      <button
        class="btn bg-white text-blue-500 text-lg"
        @click="router.go(-1)"
      >
        Back
      </button>
      <button
        class="btn bg-blue-600 text-white text-lg"
        :disabled="!currentLocation"
        v-if="currentLocation"
        @click="router.push('/checkout')"
      >
        Next
      </button>
    </div>

        <!-- map -->
    <div id="map" class="h-full w-screen z-0"></div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from "vue-router"
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import axios from 'axios'
import mapboxgl from "mapbox-gl";

import SearchResult from '@/components/location/SearchResult.vue'
import Loading from '@/components/shared/Loading.vue'
import CurrentLocation from '@/components/location/CurrentLocation.vue'

const router = useRouter();
//MAP

var map
const currentLocation = ref(null)

const locationPopup = ref(new mapboxgl.Popup({
  className: 'location-popup',
  closeButton: false
}).setHTML('<div>Your Location</div>'))

const currentLocationMarker = ref(new mapboxgl.Marker({draggable: true}).setPopup(locationPopup.value))



const initMap = () => {

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [30.064262, -1.95076],
    zoom: 12
  })
}

//set new location for marker and map
  const plotLocation = (coords, zoom="18") => {
    map.easeTo({
      center: coords,
      zoom
    })

    currentLocationMarker.value.setLngLat(coords).addTo(map)
    searchQuery.value = null
    searchResults.value = null

    currentLocation.value = currentLocationMarker.value.getLngLat()

    localStorage.setItem('userLocation', JSON.stringify(currentLocation.value))
  }


//initialize Map on mouted
onMounted(() => {
  initMap()



  //set new current location when map is clicked
  map.on('click', (e) => {
    plotLocation(e.lngLat)
  })


  //move marker and set new current location when user drags marker
  currentLocationMarker.value.on('dragend',(e) => {
    // currentLocation.value = e.lngLat
    plotLocation(e.lngLat)
  })
})



//locate the user
const locating = ref(false)
const locate = () => {
  locating.value = true
  // map.locate({ setView: true, maxZoom: 20, zoom: 17 })
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((res) => {
      plotLocation([res.coords.longitude, res.coords.latitude])
    })
  } else {
  console.log("Geolocation is not supported by this browser.");
  }
  locating.value = false
};


//SEARCH
const searchTimeout = ref(null)
const searchQuery = ref(null)
const searchResults = ref(null)
const searchError = ref(null)

const performSearch = () => {
  searchError.value = null
  // clearTimeout(searchTimeout.value)
  // searchTimeout.value = setTimeout(() => {
    axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?country=rw&access_token=${import.meta.env.VITE_MAPBOX_API_KEY}`
    )
    .then((res) => {
      searchResults.value = res.data.features
    })
    .catch((error) => {
      switch (error.code) {
        case 'ERR_NETWORK':
          searchError.value = "Network Error"
          break;
        default:
          searchError.value = "Unknown Error"
          break;
      }
    })
  
}






</script>
<style>
.leaflet-control {
  display: none;
}
.btn {
  @apply w-2/5 h-10 rounded-lg font-bold;
}
button:disabled {
  background-color: rgba(88, 88, 234, 0.718);
  color: rgb(166, 166, 248);
}
.location-popup{
  @apply rounded-3xl text-blue-500 font-bold text-lg
}
</style>