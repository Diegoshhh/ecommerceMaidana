import React, {useContext} from 'react'
import styled from '@emotion/styled'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const Contenedor = styled.div`
    width: 85%;
    height: 150px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8rem;
    padding: 2rem;
    margin: 2rem auto;
    border-radius: 7px;
    background-color: #fff;
`
const ContenedorInterno = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Precio = styled.p`
    font-size: 2.7rem;
    font-weight: 700;
    color: #3d485a;
`
const ImgCarrito = styled.img`
    width: 130px;
`
const ButtonEliminar = styled.button`
    background-color: #2f3848;
    color: #fff;
    border: 1px solid;
    font-weight: 700;
    border-radius: 7px;
    padding: 1rem;

    :hover{
        cursor: pointer;
        background-color: #edf2f6;
        color: #2f3848;
        border: 1px solid #2f3848;
    }
`
const MensajeCarritoVacio = styled.h1`
    width: 100%;
    font-size: 40px;
    text-align: center;
    margin-top: 25rem;
`
const VolverCarrito = styled.button`
    padding: 1rem;
    background-color: #2f3848;
    color: #fff;
    border-radius: 5px;
    font-weight: 700;
    font-size: 20px;

    :hover{
        cursor: pointer;
        background-color: #edf2f6;
        color: #2f3848;
    }
`
const Centrar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ContenedorFinal = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

const Cart = () => {
    const {cart, limpiarCarrito, removeItem, getTotal} = useContext(CartContext)

    if(cart.length === 0){
        return <Centrar>
                    <MensajeCarritoVacio>No hay Elementos en el Carrito</MensajeCarritoVacio>
                    <Link to={'/'}><VolverCarrito>Seguir Comprando</VolverCarrito></Link>
               </Centrar>
    }

    return (
    <>  
        {cart.map(prod => (
            <Contenedor key={prod.id}>
                <ImgCarrito src={prod.src} />
                <ContenedorInterno>
                    <div>
                        <p>{prod.description}</p>
                        <p>Cantidad: {prod.quantity}</p>
                        <ButtonEliminar onClick={() => removeItem(prod.id)}>Eliminar Producto</ButtonEliminar>
                    </div>
                    <div>
                        <Precio>${prod.price}</Precio>
                    </div>
                
                </ContenedorInterno>
            </Contenedor>
            
        ))}
        <ContenedorFinal> 
            <Precio>Total: ${getTotal()}</Precio>
            <ButtonEliminar className='m-4'
                onClick={limpiarCarrito}
            >Borrar todo</ButtonEliminar>
        </ContenedorFinal>
    </>
  )
}

export default Cart
