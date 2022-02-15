import React, { useEffect, useState } from 'react'
import { traerArticulos } from './data'
import ItemList from './ItemList'



const ItemListContainer = ({greeting}) => {

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    traerArticulos().then(articulos => {
      setArticulos(articulos)
    })  
  }, [])
  
  
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
