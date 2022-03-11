import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Loading from './Loading'
import { getProducts } from './services/firebase/firebase'
import styled from '@emotion/styled'


const Titulo = styled.h1`
  font-size: 5rem;
  color: #2f3848;
`

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [articulos, setArticulos] = useState([])
  const {categoryId} = useParams()


  useEffect(() => {
    setLoading(true)
    
    getProducts(categoryId).then(response => {
      setArticulos(response)
    }).catch(error => {
    setNotification('Error',error)
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
