import Item from './Item'


const ItemList = ({articulos}) => {

  return (
    <div className='contenedorArticulos'>
      {articulos.map((articulo) => {
        return <Item 
                  key={articulo.id}
                  category={articulo.category}
                  title={articulo.title}
                  img={articulo.src}
                  description={articulo.description}
                  price={articulo.price}
                  />
      })}
    </div>    
  )
}

export default ItemList
