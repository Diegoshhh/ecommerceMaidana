import ItemListContainer from "./ItemListContainer"
import CardWidget from "./CardWidget"
import styled from "@emotion/styled"
import logo from '../../img/logoBlanco.png'
import lupa from '../../img/lupaBlanca.png'


const Contenedor = styled.div`
    background-color: #1a202d; 
    height: 10vh;
    display: flex;
    justify-content:space-between;
    align-items:center;
`
const ContenedorInterno = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Logo = styled.img`
    width: 180px;
    :hover{
    cursor: pointer;
  }
`
const Lupa = styled.img`
    width: 120px;
    :hover{
    cursor: pointer;
  }
`


const Navbar = () => {
  return (
    <Contenedor>
      <ContenedorInterno>
          <Lupa src={lupa}/>
          <Logo src={logo}/>
      </ContenedorInterno>
      <ContenedorInterno>
        <ItemListContainer/>
        <CardWidget/>
      </ContenedorInterno>
    </Contenedor>
  )
}

export default Navbar
