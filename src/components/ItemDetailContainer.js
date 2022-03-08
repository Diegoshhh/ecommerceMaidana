import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from 'react-router-dom'
import Loading from "./Loading"
import {getDoc, doc} from 'firebase/firestore'
import { db } from "./services/firebase/firebase"


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState()
  const {productId} = useParams()


  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, 'products', productId)
    getDoc(docRef).then(response => {
      const product = {id: response.id, ...response.data()}
      setItem(product)
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
