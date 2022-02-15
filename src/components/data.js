export const articulos = [
    {category:'Celulares', src:'https://www.backmarket.de/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/413174_68c84823-9cfd-49fb-bb2c-ce5f82944142.jpg',description:'Celular Iphone 13, lo ultimo en su generacion, Sistema de dos cámaras de 12 MP ultra gran angular y gran angular con modo Noche, modo Retrato y video 4K de hasta 60 cps. ',price:'$ 900',title:'Airpod 13', id:10 },
    {category:'Laptops', src:'https://i.gadgets360cdn.com/large/alienware_x15_r1_image_1622556557685.jpg?downsize=950:*',description:'Notebook Gamer 17" diseñada para todo tipo de juegos',price:'$ 1300',title:'Notebook Alien', id:11 },
    {category:'Auriculares', src:'https://www.edeliranoticias.com/wp-content/uploads/2021/12/1639140575_600_Logitech-G935-menos-de-100-euros-por-estos-fantasticos-auriculares.jpg',description:'Auriculares Logitech 935 sonido envolvente para Juegos y Peliculas.',price:'$ 600',title:'Auriculares G-935', id:12 },
  ]
  
export  const traerArticulos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(articulos)
      }, 2000);
    })
  }