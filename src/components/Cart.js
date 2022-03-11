import React, {useContext, useState, useRef} from 'react'
import styled from '@emotion/styled'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { writeBatch, getDoc, doc, addDoc, collection,Timestamp } from 'firebase/firestore'
import { db } from './services/firebase/firebase'
import { useNotificationServices } from './services/Notification'
import Togglable from './Toggle'
import Contacto from './Contacto'


const Contenedor = styled.div`
    width: 90%;
    height: auto;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8rem;
    padding: 2rem;
    margin: 2rem auto 0px auto;
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
const ButtonConfirmar = styled.button`
    background-color: #2f3848;
    color: #fff;
    border: 1px solid;
    font-weight: 700;
    border-radius: 7px;
    padding: 1rem 2.5rem;
    margin: 0px 2rem;

    :hover{
        cursor: pointer;
        background-color: #edf2f6;
        color: #2f3848;
        border: 1px solid #2f3848;
    }
`
const VaciarCarrito = styled.button`
    background-color: #2f3848;
    color: #fff;
    border: 1px solid;
    font-weight: 700;
    border-radius: 7px;
    padding: 1rem;
    margin-right: 22rem;

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
    margin-top: 10rem;
    color: #2f3848;
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
const OrdenGenerada = styled.div`
    display:flex ;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    width: 40%;
    height: 350px;
    border: 1px solid rgb(46,49,145);
    border-radius: 5px;
    border:none;
    border-top: 1rem solid #1a202d;
    box-shadow: 1px 5px 10px 0.1px #2f3848;
`
const Factura = styled.div`
    display:flex ;
    margin: 0px auto;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    width: 40%;
    height: 80px;
    border-radius: 5px;
    border:none;
    border-top: 1px solid #1a202d;
    box-shadow: 1px 5px 5px 0.1px #2f3848;
`

const Cart = () => {
    const [orden, setOrden] = useState('')
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
    })

    const {cart, limpiarCarrito, removeItem, getTotal} = useContext(CartContext)
    const setNotification = useNotificationServices()
    const contactFormRef = useRef()


    const confirmOrder = () => {
        
        if(contact.phone !== '' && contact.address !== '' && contact.email !== '' && contact.name !== '') {
            
            
            const ordenCompra = {
                buyer: contact,
                items:cart,
                total:getTotal(),
                date:Timestamp.fromDate(new Date()) 
            }
            

            const batch = writeBatch(db)        
            const outOfStock = []

            const checkOut = () => {
                if(outOfStock.length === 0){

                    addDoc(collection(db, 'orders'), ordenCompra).then(({id}) => {
                        batch.commit().then(() => {
                            limpiarCarrito()
                            setOrden(id)
                        })
                    }).catch(error => {
                        setNotification('error', error)
                    })
                }else{
                    outOfStock.forEach(prod => {
                        setNotification('error', `El producto ${prod.title} no tiene stock disponible.`)
                        removeItem(prod.id)
                    })
                }
            }

            ordenCompra.items.forEach(prod => {
                getDoc(doc(db, 'products', prod.id)).then(response => {
                    if(response.data().stock >= prod.quantity){
                        batch.update(doc(db, 'products', response.id),{
                            stock:response.data().stock - prod.quantity
                        })
                    }else{
                        outOfStock.push({id: response.id, ...response.data()})
                    }
                }).catch((error) => {
                    setNotification('error', error)
                }).then(() => {
                    checkOut()
                })
            })
        }else{
            setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }
    
    if(cart.length === 0){
        return <Centrar>
                    <Precio>Gracias por su compra</Precio>
                    <Factura>{`Su codigo de orden es: ${orden}`}</Factura>
                    <MensajeCarritoVacio>No hay Elementos en el Carrito</MensajeCarritoVacio>
                    <Link to={'/'}><VolverCarrito>Seguir Comprando</VolverCarrito></Link>
               </Centrar>
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
                    <div className='inline'>
                        <p className='subtotal'>Subtotal: </p>
                        <Precio>${prod.price * prod.quantity}</Precio>
                    </div>
                </ContenedorInterno>
                 
            </Contenedor>
        ))}
            <div className='inline'>
                <VaciarCarrito onClick={limpiarCarrito}
                    >Vaciar Carrito
                </VaciarCarrito>
                
                <Precio>Total: ${getTotal()}</Precio>
            </div>
        {
            (contact.phone !== '' && contact.address !== '' && contact.email !== '' && contact.name !== '') ?
            <OrdenGenerada>
                <p><b>Nombre: </b>{contact.name}</p>
                <p><b>Email: </b>{contact.email}</p>
                <p><b>Telefono: </b>{contact.phone}</p>
                <p><b>Direccion: </b>{contact.address}</p>
                
                <ButtonEliminar onClick={() => setContact({ phone: '', address: '', email: '', name: ''})}>
                    Reiniciar datos
                </ButtonEliminar>
                {/* <Link to={'/orden'}> */}
                    <ButtonConfirmar onClick={() => confirmOrder()}>
                        Finalizar Compra
                    </ButtonConfirmar>
                {/* </Link> */}
            </OrdenGenerada> 
        :
            <Centrar>    
                <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.address !== '' && contact.email !== '' && contact.name !== '') 
                            ? 'Editar contacto' 
                            : 'Realizar Compra'
                        } 
                        ref={contactFormRef}>
                    <Contacto toggleVisibility={contactFormRef} setContact={setContact}/>
                </Togglable>
            </Centrar>
        }  

    </>
  )
}

export default Cart
