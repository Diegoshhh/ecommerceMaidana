import { useEffect, useState } from "react"
import {getItem} from './data'
import ItemDetail from "./ItemDetail"
import {useParams} from 'react-router-dom'
import Loading from "./Loading"

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState()
  const {productId} = useParams()


  useEffect(() => {
    getItem(productId).then(producto => {
      setItem(producto)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
    return(() => {
      setItem()
    })  
  }, [productId])
  
  return (
    <>
    
    {
      loading
      ?
      <Loading/>
      :
      <div className="contenedorDetail width">  
        <ItemDetail item={item}/>
      </div>
    }
    </>
  )
}

export default ItemDetailContainer
