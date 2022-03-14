import { useEffect, useState, useContext } from "react"
import {Link, NavLink} from "react-router-dom"
import styled from "@emotion/styled"
import { CartContext } from "../../context/CartContext"
import { getDocs, collection} from "firebase/firestore"
import { db } from "../services/firebase/firebase"
import CardWidget from "./CardWidget"
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
    margin-right: 2rem;
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
  const [categories, setCategories] = useState([])
  const {cart} = useContext(CartContext)
  
  useEffect(() => {
    getDocs(collection(db,'categories')).then(response => {
      const categories = response.docs.map(cat => {
        return {id: cat.id, ...cat.data()}
      })
      setCategories(categories)
    })
  }, [])
  

  return (
    <Contenedor>
      <ContenedorInterno>
        <Link to={'/'}><Lupa src={lupa}/></Link>
        <Link to={'/'}><Logo src={logo}/></Link>
      </ContenedorInterno>

      <ContenedorInterno>
        {categories.map(cat => 
          <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) => 
            isActive ? 'ActiveOption' : 'Option'}>
            {cat.description}
          </NavLink>)}
        {cart.length > 0 && <CardWidget />}
      </ContenedorInterno>
    </Contenedor>
  )
}

export default Navbar
