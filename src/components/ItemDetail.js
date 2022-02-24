import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from './context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0)

  const handleonAdd = (quantity) => {
    setCantidad(quantity)
  }
  
  return (
    <div className='contenedorInteriorCard'>
        <img className='imgCardBig' src={item?.src} />
        <div className='detailSeparator'>
          <h1 className='titleDetail'>{item?.title}</h1>
          <p className='precioBig'>{item?.price}</p>
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

// setCantidad(true)
// const {datosProductoSeleccionado, setDatosProductoSeleccionado} = useContext(CartContext)
// const {id, category, stock, src, description, price, title} = item;

    // const productoAgregado = {
    //   id, category, stock, src, description, price, title, count
      
    // } 
    
    
    // const existe = datosProductoSeleccionado.some(p => p.id === productoAgregado.id)
    // if(existe){
    //   const productos = datosProductoSeleccionado.map(producto => {
    //     if(p.id === productoAgregado.id){
    //       p.count ++
    //       return p
    //     }
    //   })
    // }else{
    //   setDatosProductoSeleccionado([...datosProductoSeleccionado, productoAgregado])
    // }