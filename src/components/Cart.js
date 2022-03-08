import React, {useContext, useState} from 'react'
import styled from '@emotion/styled'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { writeBatch, getDoc, doc, addDoc, collection,Timestamp } from 'firebase/firestore'
import { db } from './services/firebase/firebase'
import { useNotificationServices } from './services/Notification'


const Contenedor = styled.div`
    width: 85%;
    height: 150px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8rem;
    padding: 2rem;
    margin: 2rem auto;
    border-radius: 7px;
    background-color: #fff;
`
const ContenedorInterno = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Precio = styled.p`
    font-size: 2.7rem;
    font-weight: 700;
    color: #3d485a;
`
const ImgCarrito = styled.img`
    width: 130px;
`
const ButtonEliminar = styled.button`
    background-color: #2f3848;
    color: #fff;
    border: 1px solid;
    font-weight: 700;
    border-radius: 7px;
    padding: 1rem;

    :hover{
        cursor: pointer;
        background-color: #edf2f6;
        color: #2f3848;
        border: 1px solid #2f3848;
    }
`
const MensajeCarritoVacio = styled.h1`
    width: 100%;
    font-size: 40px;
    text-align: center;
    margin-top: 25rem;
`
const VolverCarrito = styled.button`
    padding: 1rem;
    background-color: #2f3848;
    color: #fff;
    border-radius: 5px;
    font-weight: 700;
    font-size: 20px;

    :hover{
        cursor: pointer;
        background-color: #edf2f6;
        color: #2f3848;
    }
`
const Centrar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ContenedorFinal = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        comment: '',
        email: '',
    })

    const {cart, limpiarCarrito, removeItem, getTotal} = useContext(CartContext)
    const setNotification = useNotificationServices()
    // const contactFormRef = useRef()

    
    
    if(processingOrder){
        return <MensajeCarritoVacio>Se esta Procesando la Orden</MensajeCarritoVacio>
    }

    if(cart.length === 0){
        return <Centrar>
                    <MensajeCarritoVacio>No hay Elementos en el Carrito</MensajeCarritoVacio>
                    <Link to={'/'}><VolverCarrito>Seguir Comprando</VolverCarrito></Link>
               </Centrar>
    }

    const confirmOrder = () => {
        setProcessingOrder(true)
        
        const ordenCompra = {
            buyer: {
                name: 'Marcos',
                phone: '111111',
                adress: 'direccion 123',            
            },
            items:cart,
            total:getTotal(),
            date:Timestamp.fromDate(new Date()) 
        }
        
        const batch = writeBatch(db)        
        const outOfStock = []

        ordenCompra.items.forEach(prod => {
            getDoc(doc(db, 'products', prod.id)).then(response => {
                if(response.data().stock >= prod.quantity){
                    batch.update(doc(db, 'products', response.id),{
                        stock:response.data().stock - prod.quantity
                    })
                }else{
                    outOfStock.push({id: response.id, ...response.data()})
                }
            })
        })
        if(outOfStock.length === 0){
            addDoc(collection(db, 'orders'), ordenCompra).then(({id}) => {
                batch.commit().then(() => {
                    limpiarCarrito()
                    console.log(`Su orden fue generada con exito, el numero de orden es ${id}`)
                    setNotification('success', `La orden se genero correctamente su Numero de orden es ${id}`)
                }).catch(error => {
                    console.log(error) 
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })
            })
        }else{
            //el producto id se encuentra fuera de stock
            //desea continuar la compra sin ese producto??
            //usar funcion removeItem()
            // removeItem()
        }
    }
    return (
    <>  
        {cart.map(prod => (
            <Contenedor key={prod.id}>
                <ImgCarrito src={prod.src} />
                <ContenedorInterno>
                    <div>
                        <p>{prod.description}</p>
                        <p>Cantidad: {prod.quantity}</p>
                        <ButtonEliminar onClick={() => removeItem(prod.id)}>Eliminar Producto</ButtonEliminar>
                    </div>
                    <div>
                        <Precio>${prod.price * prod.quantity}</Precio>
                    </div>
                
                </ContenedorInterno>
            </Contenedor>
            
        ))}
        <ContenedorFinal> 
            <Precio>Total: ${getTotal()}</Precio>
            <ButtonEliminar className='m-4'
                onClick={limpiarCarrito}
            >Vaciar Carrito</ButtonEliminar>
            <ButtonEliminar className='m-4'
                onClick={confirmOrder}
            >Confirmar Compra</ButtonEliminar>
        </ContenedorFinal>
    </>
  )
}

export default Cart
