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
        const copia = cart.map(prod => {
            if(prod.id === id) {
                const copia = {
                    ...prod,
                    quantity: prod.quantity + quantity
                };
                return copia
            }else{
                return prod
            }
        });
        setCart(copia)
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

    const removeItem = (id) => {
        const itemsFiltrados = cart.filter(prod => prod.id !== id)
        setCart(itemsFiltrados)
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
                removeItem,
                getQuantity,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider