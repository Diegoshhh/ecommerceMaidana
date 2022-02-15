import React from 'react'
import { articulos } from './data'
import ItemCount from './ItemCount'

const ItemDetail = () => {

  return (
    <div className='contenedorDetail contenedorInteriorCard'>
      <img className='imgCardBig' src={articulos[0].src} />
      <div className='detailSeparator'>
        <div>
            <h1>{articulos[0].title}</h1>
            <p className='precioBig'>{articulos[0].price}</p>
        </div>
        <p>{articulos[0].description}</p>
        <ItemCount/>
      </div>
    </div>
  )
}

export default ItemDetail
