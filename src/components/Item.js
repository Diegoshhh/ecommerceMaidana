import React from 'react'
import { Link } from 'react-router-dom'



const Item = (articulo) => {  
  return (
    <>
      <div className='card'>
          <h3 className='category'>{articulo.category}</h3>
          <img className='imgCard' src={articulo.img} alt='imagen producto'/>
          <div>
            <div className='contenedorInteriorCard'>
              <h4 className='subTitle'>{articulo.title}</h4>
              <p className='precio'>${articulo.price}</p>
            </div>
              <p>{articulo.description}</p>
              <div className='btn-carrito'>
                <Link to={`/detail/${articulo.id}`}><button className='detalles'>Ver Detalles</button></Link>
              </div>
          </div>
      </div>
    </>
  )
}

export default Item
