export const articulos = [
    {id: 1, category:'Celular', stock:10, src:'https://www.backmarket.de/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/413174_68c84823-9cfd-49fb-bb2c-ce5f82944142.jpg',description:'Celular Iphone 13, lo ultimo en su generacion. ',price:900,title:'Iphone 13'},
    {id: 2, category:'Laptop', stock:15, src:'https://i.gadgets360cdn.com/large/alienware_x15_r1_image_1622556557685.jpg?downsize=950:*',description:'Notebook Gamer 17" diseñada para todo tipo de juegos',price:1300,title:'Notebook Alien'},
    {id: 3, category:'Auricular', stock:20, src:'https://www.edeliranoticias.com/wp-content/uploads/2021/12/1639140575_600_Logitech-G935-menos-de-100-euros-por-estos-fantasticos-auriculares.jpg',description:'Auriculares Logitech 935 sonido envolvente para Juegos y Peliculas.',price:300,title:'Auriculares G-935'},
    {id: 4, category:'Celular', stock:13, src:'https://media.cdn.kaufland.de/product-images/1024x1024/025dacd18621ea45fa5e76e773b11f56.jpg',description:'Celular Iphone 11 pro 128 GB Smart Dragon procesador.',price:650,title:'Iphone 11'},
    {id: 5, category:'Laptop', stock:7, src:'https://m.media-amazon.com/images/I/51IjtW2MSUL._AC_SY355_.jpg',description:'Notebook Msi 14" Full HD 32GB 1TB SSD i7-1165G7',price:900,title:'Notebook MSI'},
    {id: 6, category:'Auricular', stock:10, src:'https://www.computershopping.com.ar/Images/Productos/Grandes/RZ04-02210100-R3U1_Foto0g.jpg',description:'Auriculares Razer Electra V2 Analog Sonido Envolvente 7.1.',price:150,title:'Auriculares Razer'},
    {id: 7, category:'Celular', stock:10, src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJvDJiv9rQs6JXy8_G4FY55M_CQV3Uxo6Je1-Plp5AY_wvkk1fJW94mWYdM-Hh-xjcrQ&usqp=CAU',description:'Celular Iphone 12 pro max 128 GB camara 64mpx',price:750,title:'Iphone 12'},
    {id: 8, category:'Laptop', stock:10, src:'https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg',description:'Notebook Asus 17" 1TB SSD Procesador Inter i9',price:999,title:'Notebook Asus'},
    {id: 9, category:'Auricular', stock:10, src:'https://www.bandidos-gaming.com/wp-content/uploads/2021/09/CLOUD-FLIGHT-HYPER-X-NOIR-CASQUE-GAMER-SANS-FIL-1.jpg',description:'Auriculares Hiper X Analog Sonido Envolvente 7.1.',price:180,title:'Auriculares Hiper X'},
  ]
  
// export  const traerArticulos = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(articulos)
//     }, 100);
//   })
// }
export const getItem = (id) => {
  return new Promise((resolve) => {
    const articulo = articulos.find(p => p.id === parseInt(id)) 
    setTimeout(() => {
      resolve(articulo)
    }, 100);  
})}
export const getCategory = (categoryId) => {
  return new Promise((resolve) => {
    const categFiltrados = articulos.filter(
      (articulo) => articulo.category === categoryId);
    setTimeout(() => {
      categoryId ? resolve(categFiltrados) : resolve(articulos)
    }, 100);
  })
}