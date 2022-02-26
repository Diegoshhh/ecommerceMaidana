import React, {createContext, useState} from 'react'

//Crear Context
export const CartContext = createContext()

//Provider donde se encuentran los state y las funciones
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            sumarCantidad(item.id, quantity)
        }else{
            setCart([...cart, {...item, quantity}]);
        }
    }

    const isInCart = (id) => {
        const validacion = cart.some((producto) => producto.id === id)
        return validacion;
    }

    const sumarCantidad = (id,quantity) => {
        const copia = [...cart];
        copia.forEach(prod => prod.id === id && (prod.quantity += quantity));

    }

    const removeItem = (id) => {
        const itemsFiltrados = cart.filter(prod => prod.id !== id)
        setCart(itemsFiltrados)

        console.log(itemsFiltrados)
    }

    //borrar items
    const limpiarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                limpiarCarrito,
                removeItem
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider