import React, { useEffect, useState } from 'react'
import { traerArticulos } from './data'
import ItemCount from './ItemCount'
import ItemList from './ItemList'



const ItemListContainer = ({greeting}) => {

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    traerArticulos().then(articulos => {
      setArticulos(articulos)
    })  
  }, [])
  
  console.log(articulos)
  
  return (
    <>
      <h1>
          {greeting}
      </h1>
      <ItemList articulos={articulos}/>
      <ItemCount />
    </>    
  )
}

export default ItemListContainer
