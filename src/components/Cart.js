import React, {useContext} from 'react'
import { CartContext } from './context/CartContext'


const Cart = () => {
    const {cart, limpiarCarrito, removeItem} = useContext(CartContext)

    return (
    <>
        {cart.map(prod => (
            <div key={prod.id}>
                <p>{prod.quantity}</p>
                <button onClick={() => removeItem(prod.id)}>remove</button>
            </div>
        ))} 
        <button
            onClick={limpiarCarrito}
        >Borrar todo</button>
    </>
  )
}

export default Cart
