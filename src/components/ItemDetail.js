import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {


  return (
    <div className='contenedorInteriorCard contenedorDetail'>
        <img className='imgCardBig' src={item.src} />
        <div className='detailSeparator'>
          <h1>{item.title}</h1>
          <p className='precioBig'>{item.price}</p>
          <p>{item.description}</p>
          <ItemCount/>
        </div>
    </div>
  )
}

export default ItemDetail
