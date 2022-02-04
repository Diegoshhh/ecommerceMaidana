import styled from '@emotion/styled';


const ListaContenedor = styled.div`
    color: #fff;
    display: flex;
    justify-content:center;
    align-items:center;
    
`
const CategoriaNav = styled.a`
  margin: 0 1rem; 
  font-weight:600;
  font-size:2rem;
  :hover{
    cursor: pointer;
  }
`


const ItemListContainer = () => {
  return (
    <ListaContenedor>
        <CategoriaNav>Sillas Gamer</CategoriaNav>
        <CategoriaNav>Teclados</CategoriaNav>
        <CategoriaNav>Cpu</CategoriaNav>
    </ListaContenedor>
  )
};

export default ItemListContainer;
