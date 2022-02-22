import Categorias from "./CategoriasProductos"
import CardWidget from "./CardWidget"
import styled from "@emotion/styled"
import logo from '../../img/logoBlanco.png'
import lupa from '../../img/lupaBlanca.png'
import {Link} from "react-router-dom"


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
    margin-top:2px;
    margin-left:10px;
    position:relative;
    width:50px;
    :hover{
    cursor: pointer;
  }
`

const Navbar = () => {
  
  return (
    <Contenedor>
      <ContenedorInterno>
        <Link to={'/'}><Lupa src={lupa}/></Link>
        <Link to={'/'}><Logo src={logo}/></Link>
      </ContenedorInterno>
      <ContenedorInterno>

        <Link to={'/category/Celular'}>
          <Categorias categoria='Celular'/>
        </Link>

        <Link to={'/category/Laptop'}>
          <Categorias categoria='Laptop'/>
        </Link>

        <Link to={'/category/Auricular'}>
          <Categorias categoria='Auricular'/>
        </Link>

        <CardWidget/>
      </ContenedorInterno>
    </Contenedor>
  )
}

export default Navbar
