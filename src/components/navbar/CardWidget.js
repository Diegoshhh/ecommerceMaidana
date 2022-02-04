import cart from '../../img/carrito.png'
import styled from '@emotion/styled'


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
  return (
    <Container>
      <Carrito src={cart}/>
      <Numero>0</Numero>
    </Container>
  )
}

export default CardWidget
