import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(false)

  const onAdd = () => {
      setCantidad(true)
  }

  return (
    <div className='contenedorInteriorCard'>
        <img className='imgCardBig' src={item?.src} />
        <div className='detailSeparator'>
          <h1 className='titleDetail'>{item?.title}</h1>
          <p className='precioBig'>{item?.price}</p>
          <p className='descripcion'>{item?.description}</p>

          {!cantidad 
            ? 
            <ItemCount onAdd={onAdd} stock={item?.stock}/> 
            : 
            <div className='contenedorInteriorCard'>
              <Link to={'/carrito'}><button className='btn-detail'>Finalizar compra</button></Link>
              <Link to={'/'}><button className='btn-detail'>Seguir Comprando</button></Link>
            </div>
          }
        </div>
    </div>
  )
}

export default ItemDetail
