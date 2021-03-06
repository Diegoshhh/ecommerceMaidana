# Curso de React JS - CoderHouse


## Desarrollador - Diego E Maidana 

Contacto: diegoshhh@gmail.com
GitHub: https://github.com/Diegoshhh

# Proyecto a Desarrollar

Se Desarrollara un Ecommerce acorde a los requerimientos solicitados por CoderHouse, en el cual 
el lenguaje solicitado es React.js. 

# Instalación
La app desarrollada requiere [ Node.js ](https://nodejs.org/) para ejecutarse)

Para iniciar el servidor.

```
cd  (carpeta del proyecto) 
npm start
```

# Variables de entorno a configurar:
* apiKey
* authDomain
* projectId
* storageBucket
* messagingSenderId
* appId
* measurementId

# Rutas

- Ruta '/'    '*'   '/category/:categoryId' redireccionan al componente -- ItemListContainer
- Ruta '/detail/:productId' redireccionan al componente -- ItemDetailContainer
- Ruta '/category/:categoryId' redireccionan al componente -- ItemListContainer
- Ruta '/cart' redirecciona al componente -- Cart

# Formato para Products y Orders de compra en Firebase
Campos que debe contener la coleccion Products:
* category
* description
* price
* src
* stock
* title

Campos que va a retornar la coleccion de Orders:
* date
* total
* items

Datos comprador
* adress
* email
* name
* phone

## Tecnologias utilizada

* React.js
* Styled Components
* Css puro
* Create React App
* React Router

![Alt Text](ProyectoCoder.gif)