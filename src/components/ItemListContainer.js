import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loading from './Loading'
import { db } from './services/firebase/firebase'
import {getDocs, collection, query, where} from 'firebase/firestore'
import styled from '@emotion/styled'


const Titulo = styled.h1`
  font-size: 5rem;
  color: #2f3848;
`

const ItemListContainer = ({greeting}) => {
  const [loading, setLoading] = useState(true)
  const [articulos, setArticulos] = useState([])
  const {categoryId} = useParams()


  useEffect(() => {
    setLoading(true)
    const collectionRef = 
          categoryId ? 
          query(collection(db, 'products'), where('category', '==', categoryId)) :
          collection(db, 'products')

    getDocs(collectionRef).then(response => {
      const products = response.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
      })
      setArticulos(products)
      
      }).catch(err => {
      console.log(err)
      }).finally(() => {
        setLoading(false)
      })
      return(() => {
        setArticulos()
      })
    }, [categoryId])
    
  
  return (
    <>
      <Titulo className='center'>Todo en Tecnologia</Titulo>
      
      {
        loading 
        ? 
        <Loading/>
        : 
        articulos.length ? 
        <>
          <ItemList articulos={articulos}/>
        </>
        :
        <h1>No hay productos que mostrar</h1>
      }
    </>    
  )
}

export default ItemListContainer
