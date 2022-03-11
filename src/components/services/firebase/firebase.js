import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getDocs, collection, query, where, doc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_ApiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId ? 
    query(collection(db, 'products'), where('category', '==', categoryId)) :
    collection(db, 'products')

    getDocs(collectionRef).then(response => {
      const products = response.docs.map(doc => {
      return {id: doc.id, ...doc.data()}
    })
    resolve(products)
    }).catch((error) => {
      reject('Error obteniendo productos: ', error)
    })
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(db, 'products', productId)
    getDoc(docRef).then(response => {
      const product = {id: response.id, ...response.data()}
      resolve(product)
    }).catch((error) => {
      reject('Error obteniendo producto: ', error)
    })
  })
}