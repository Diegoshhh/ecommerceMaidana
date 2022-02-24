import React, {createContext, useState} from 'react'

//Crear Context
export const CartContext = createContext()

//Provider donde se encuentran los state y las funciones
const CartProvider = ({children}) => {
    
    const [datosProductoSeleccionado, setDatosProductoSeleccionado] = useState([])

    console.log(datosProductoSeleccionado)

    



    return (
        <CartContext.Provider
            value={{
                datosProductoSeleccionado,
                setDatosProductoSeleccionado
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider