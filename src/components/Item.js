import React, { useState } from 'react'
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({title, img, description, price,category}) => {
  const [descripcion, setDescripcion] = useState(false)

  const handleMostrar = () => {
    if(descripcion === false){
      setDescripcion(true)
    }else{
      setDescripcion(false)
    }
  }
  
  return (
    <>
      <div className='card'>
          <h3 className='category'>{category}</h3>
          <img className='imgCard' src={img} />
          <div>
            <div className='contenedorInteriorCard'>
              <h4 className='subTitle'>{title}</h4>
              <p className='precio'>{price}</p>
            </div>
              <p>{description}</p>
              <button 
                className='btn-carrito'
                onClick={handleMostrar}
              >Ver detalles</button>
          </div>
        {descripcion && <ItemDetailContainer/>}
      </div>
    </>
  )
}

export default Item
