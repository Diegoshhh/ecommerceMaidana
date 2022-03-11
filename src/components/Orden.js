import styled from '@emotion/styled'
import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'


const OrdenGenerada = styled.div`
    display:flex ;
    margin: 4rem auto;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    width: 40%;
    height: 350px;
    border: 1px solid rgb(46,49,145);
    border-radius: 5px;
    border:none;
    border-top: 1rem solid #1a202d;
    box-shadow: 1px 5px 10px 0.1px #2f3848;
`


const Orden = () => {
    const {cart, limpiarCarrito, removeItem, getTotal} = useContext(CartContext)
  return (
    <OrdenGenerada>
        <p><b>Nombre: </b>{cart.title}</p>
        <p><b>Email: </b>{cart.email}</p>
        <p><b>Telefono: </b>{cart.phone}</p>
        <p><b>Direccion: </b>{cart.address}</p>
        <p><b>Orden: </b>{getTotal()}</p>
    </OrdenGenerada>
  )
}

export default Orden
