import styled from '@emotion/styled'
import React, { useState } from 'react'

const Contenedor = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:auto;
    width: 300px;
    border-radius:5px;
    height: 200px; 
    color:#fff;
    margin-bottom:1.8rem;
`
const ContenedorInterno = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding: 2rem;
`
const Boton = styled.button`
    width: 100%;
    padding: 1.5rem;
    font-size:2rem;
    margin: 0 10px;
    font-weight:700;
    cursor: pointer;
`
const Boton1 = styled.button`
    width: 100%;
    padding: 1.5rem;
    font-size:2rem;
    margin: 0 10px;
    font-weight:700;
    cursor: pointer;
    background-color:#1a202d;
    color: #fff;
    border-radius:5px;
    border:none;
`

const ItemCount = () => {
    
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(5);

    const handleIncrement = () => {
        if(count < stock){
            setCount(count + 1)
            return
        }
    }
    const handleDecrement = () => {
        if(count > 0){
            setCount(count - 1)
            return
        }
    }

    const onAdd = () => {
        if(stock > 0 ){
            setStock(stock - count)
            setCount(0)
            console.log(`Acabas de ordenar ${count} productos`)
            
            return
        }
    }

    return (
    <Contenedor>
        <p>Stock {stock} </p>
        <ContenedorInterno>
            <Boton
                onClick={handleDecrement}
            >-</Boton>
            <p>{count}</p>
            <Boton 
                onClick={handleIncrement}
            >+</Boton>
        </ContenedorInterno>  
        <Boton1
            onClick={onAdd}
        >Agregar al carrito</Boton1>    
    </Contenedor>
  )
}

export default ItemCount
