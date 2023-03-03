import { db, auth } from './firebaseConfig'
import { addDoc, setDoc, collection, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from "firebase/auth"
export const addData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), data)
    console.log('Doc created with ID: ', docRef)
  } catch (error) {
    console.log(error)
  }
}

export const setData = async (uid, data) => {
  try {
    const docRef = doc(db, 'users', uid)
    await setDoc(docRef, data);
  } catch(error) {
    console.log(error);
  }
}

export const updateData = async () => {
  try {
    const docRef = doc(db, 'users', 'sammy')
    await updateDoc(docRef, {
      tel: '+250783012901'
    })
  } catch (error) {
    console.log(error);
  }
}

export const delDoc = async () => {
  try {
    const docRef = doc(db, 'users', 'sammy')
    await deleteDoc(docRef)
  } catch (error) {
    console.log(error);
  }
}

export const createEmailAcc = () => {
  let email = "rock@joshua.com";
  let password = "faith123";
 createUserWithEmailAndPassword(auth, email, password)
 .then((user) => {
  console.log("Created user with uid: ", user.user.uid);
  setData(user.user.uid, {
    name: "Rock Joshua",
    age: 19,
    gender: "m"
  }).then(() => {
    console.log("Created")
  }).catch((error) => {
    console.log(error);
  })
  
 })
 .catch((error) => {
  console.log(error);
 })
} 
// export const createEmailAcc = () => {
//   let email = "rock@joshua.com";
//   let password = "faith123";

//   createUserWithEmailAndPassword(auth, email, password)
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error.code))
// }
