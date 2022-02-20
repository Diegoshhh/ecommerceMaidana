export const articulos = [
    {id: 1 ,category:'celular', stock:10, src:'https://www.backmarket.de/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/413174_68c84823-9cfd-49fb-bb2c-ce5f82944142.jpg',description:'Celular Iphone 13, lo ultimo en su generacion. ',price:'$ 900',title:'Airpod 13'},
    {id: 2, category:'laptop', stock:15, src:'https://i.gadgets360cdn.com/large/alienware_x15_r1_image_1622556557685.jpg?downsize=950:*',description:'Notebook Gamer 17" diseñada para todo tipo de juegos',price:'$ 1300',title:'Notebook Alien'},
    {id: 3, category:'auricular', stock:20, src:'https://www.edeliranoticias.com/wp-content/uploads/2021/12/1639140575_600_Logitech-G935-menos-de-100-euros-por-estos-fantasticos-auriculares.jpg',description:'Auriculares Logitech 935 sonido envolvente para Juegos y Peliculas.',price:'$ 600',title:'Auriculares G-935'},
    {id: 4, category:'celular', stock:20, src:'https://www.edeliranoticias.com/wp-content/uploads/2021/12/1639140575_600_Logitech-G935-menos-de-100-euros-por-estos-fantasticos-auriculares.jpg',description:'Auriculares Logitech 935 sonido envolvente para Juegos y Peliculas.',price:'$ 600',title:'iphone 12'},
    {id: 5, category:'auricular', stock:20, src:'https://www.edeliranoticias.com/wp-content/uploads/2021/12/1639140575_600_Logitech-G935-menos-de-100-euros-por-estos-fantasticos-auriculares.jpg',description:'Auriculares Logitech 935 sonido envolvente para Juegos y Peliculas.',price:'$ 600',title:'Auricular G-3'},
    {id: 6, category:'laptop', stock:20, src:'https://www.edeliranoticias.com/wp-content/uploads/2021/12/1639140575_600_Logitech-G935-menos-de-100-euros-por-estos-fantasticos-auriculares.jpg',description:'Auriculares Logitech 935 sonido envolvente para Juegos y Peliculas.',price:'$ 600',title:'laptop G-5'},
  ]
  
export  const traerArticulos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articulos)
    }, 100);
  })
}
export const getItem = (id) => {
  return new Promise((resolve) => {
    const articulo = articulos.find(p => p.id === parseInt(id)) 
    setTimeout(() => {
      resolve(articulo)
    }, 500);  
})}
export const getCategory = (categoryId) => {
  return new Promise((resolve) => {
    const categFiltrados = articulos.filter(articulo => articulo.category === categoryId)
    setTimeout(() => {
      resolve(categFiltrados)
    }, 500);
  })
}