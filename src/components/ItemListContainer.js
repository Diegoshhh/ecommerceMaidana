import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategory } from './data'
import ItemList from './ItemList'



const ItemListContainer = ({greeting}) => {

  const [articulos, setArticulos] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    getCategory(categoryId).then((articulos) => {
      setArticulos(articulos)
    })  
  }, [categoryId])
  
  
  return (
    <>
      <h1 className='center'>
          {greeting}
      </h1>
      <ItemList articulos={articulos}/>
    </>    
  )
}

export default ItemListContainer
