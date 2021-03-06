import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../context/CartContext'
import ItemCount from './ItemCount'
import { useNotificationServices } from './services/Notification'


const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0)

  const {addToCart} = useContext(CartContext)
  const setNotification = useNotificationServices()

  const handleonAdd = (quantity) => {
    if(item.stock > 0){
      setCantidad(quantity)
      addToCart(item, quantity)
      setNotification('success', `Se agrego ${item.title} al carrito`)
    }
  }
  
  return (
    <div className='contenedorInteriorCard'>
        <img className='imgCardBig' src={item?.src} />
        <div className='detailSeparator'>
          <h1 className='titleDetail'>{item?.title}</h1>
          <p className='precioBig'>${item?.price}</p>
          <p className='descripcion'>{item?.description}</p>

          {cantidad === 0
            ? 
            <ItemCount 
              onAdd={handleonAdd} 
              stock={item?.stock}/> 
            : 
            <div className='contenedorInteriorCard'>
              <Link to={'/cart'}><button className='btn-detail'>Finalizar compra</button></Link>
              <Link to={'/'}><button className='btn-detail'>Seguir Comprando</button></Link>
            </div>
          }
        </div>
    </div>
  )
}

export default ItemDetail