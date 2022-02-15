import { useEffect, useState } from "react"
import {getItem} from './data'
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

  const [item, setItem] = useState([])

  useEffect(() => {
    getItem().then(articulos => {
      setItem(articulos)
    })  
  }, [])
  
  return (
    <div className="contenedorDetail width">  
        <h1 className="center">Item detail container</h1>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
