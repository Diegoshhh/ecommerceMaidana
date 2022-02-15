import React from 'react'

const Item = ({title, img, description, price,category}) => {

  
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
              >Ver detalles</button>
          </div>
      </div>
    </>
  )
}

export default Item
