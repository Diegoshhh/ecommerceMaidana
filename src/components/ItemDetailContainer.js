import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from 'react-router-dom'
import Loading from "./services/Loading"
import { getProductById } from "./services/firebase/firebase"



const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState()
  const {productId} = useParams()

  useEffect(() => {
    setLoading(true)

    getProductById(productId).then(response => {
      setItem(response)
    }).catch(error => {
      setNotification('Error', error)
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
