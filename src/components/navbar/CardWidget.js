import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import carrito from '../../img/carrito.png'

const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
`
const Carrito = styled.img`
  width: 10rem;
  :hover{
    cursor: pointer;
  }
`
const Numero = styled.p`
    color: #fff;
    position: absolute;
    font-weight:700;
    margin: 3rem 0 0 5rem;
`

const CardWidget = () => {
  const {getQuantity,cart} = useContext(CartContext)


  if(cart.length === 0){
    return <></>
  }

  return (
          <Container>
            <Link to={'/cart'}>
              <Carrito src={carrito}/>
            </Link>
            <Numero>{getQuantity()}</Numero>
          </Container> 
    
  )
}

export default CardWidget
