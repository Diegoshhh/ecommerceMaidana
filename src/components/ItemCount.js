import styled from '@emotion/styled'
import React, { useState } from 'react'

const Contenedor = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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
    margin-bottom:0;
    padding: 3px 20px;
    border-radius:7px;
    border:1px solid #2f3848;
    background-color:#fff;
    font-size:2rem;
    margin: 0 10px;
    font-weight:700;
    cursor: pointer;
    :hover{
        color:#fff;
        background-color:#2f3848;
    }
`
const Boton1 = styled.button`
    width: 100%;
    padding: 1.5rem;
    font-size:2rem;
    margin: 0 10px;
    font-weight:700;
    cursor: pointer;
    background-color:#2f3848;
    color: #fff;
    border-radius:5px;
    border:1px solid #1a202d;
    :hover{
        color:#fff;
        background:#1a202d;
    }
`

const ItemCount = ({stock = 1, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial);

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

    return (
    <Contenedor>
        <p className='descripcion'>Stock {stock} </p>
        <ContenedorInterno>
            <Boton
                onClick={handleDecrement}
            >-</Boton>
            <p className='descripcion'>{count}</p>
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
