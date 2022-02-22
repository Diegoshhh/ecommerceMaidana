import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategory } from './data'
import ItemList from './ItemList'
import Loading from './Loading'



const ItemListContainer = ({greeting}) => {
  const [loading, setLoading] = useState(true)
  const [articulos, setArticulos] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    getCategory(categoryId).then((articulos) => {
      setArticulos(articulos)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })  
  }, [categoryId])
  
  
  return (
    <>
      <h1 className='center'>
          {greeting}
      </h1>
      {
        loading 
        ? 
        <Loading/>
        : 
        articulos.length ? 
        <ItemList articulos={articulos}/>
        :
        <h1>No hay productos que mostrar</h1>
      }
    </>    
  )
}

export default ItemListContainer
