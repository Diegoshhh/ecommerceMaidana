import Categorias from "./CategoriasProductos"
import CardWidget from "./CardWidget"
import styled from "@emotion/styled"
import logo from '../../img/logoBlanco.png'
import lupa from '../../img/lupaBlanca.png'
import { Link} from "react-router-dom"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import {articulos, getCategory} from "../data"


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
  const [filtro, setFiltro] = useState('celular')
  const [filtrados, setFiltrados] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    if(filtro){
      
      const categFiltrados = articulos.filter(cate => cate.category === filtro)
      setFiltrados(categFiltrados)
      console.log(categFiltrados)
    }
  }, [categoryId])
  
  // onChange={e => setFiltro(e.target.value)} value='celular' 
  return (
    <Contenedor>
      <ContenedorInterno>
        <Link to={'/'}><Lupa src={lupa}/></Link>
        <Link to={'/'}><Logo src={logo}/></Link>
      </ContenedorInterno>
      <ContenedorInterno>

        <Link to={`/category/:${filtro}`}  >
          <Categorias value={categoryId} categoria='celular'/>
        </Link>

        <Link to={`/category/:${filtrados}`}>
          <Categorias filtro={'laptop'} categoria='laptop'/>
        </Link>

        <Link to={`/category/:${filtrados}`}>
          <Categorias filtro={'auricular'} categoria='auricular'/>
        </Link>

        <CardWidget/>
      </ContenedorInterno>
    </Contenedor>
  )
}

export default Navbar
