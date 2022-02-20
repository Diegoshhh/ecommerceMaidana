import { useEffect, useState } from "react"
import {getItem} from './data'
import ItemDetail from "./ItemDetail"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [item, setItem] = useState()
  const {productId} = useParams()


  useEffect(() => {
    getItem(productId).then(producto => {
      setItem(producto)
    }).catch(err => {
      console.log(err)
    })
    return(() => {
      setItem()
    })  
  }, [productId])
  
  return (
    <div className="contenedorDetail width">  
        <h1 className="center">Item detail container</h1>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
