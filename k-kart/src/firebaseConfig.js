import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA_p-XQGbqYwQQo7uWeJr_OFui0now8d5w',
  authDomain: 'k-kart-6915a.firebaseapp.com',
  projectId: 'k-kart-6915a',
  storageBucket: 'k-kart-6915a.appspot.com',
  messagingSenderId: '560308545178',
  appId: '1:560308545178:web:7c9853975fe93addb12123',
  measurementId: 'G-QN34F6E5BS'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
