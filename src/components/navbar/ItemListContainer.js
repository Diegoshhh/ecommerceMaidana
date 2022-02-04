import styled from '@emotion/styled';


const CategoriaNav = styled.a`
  margin: 0 1rem; 
  font-weight:600;
  font-size:2rem;
  align-items:center;
  color: #fff;
  :hover{
    cursor: pointer;
  }
`


const ItemListContainer = ({greeting='Categoria'}) => {
  return (
        <CategoriaNav>{greeting}</CategoriaNav>
  )
};

export default ItemListContainer;
