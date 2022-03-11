import React, { useState } from 'react'
import styled from '@emotion/styled'
import Togglable from './Toggle'


const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`
const Formulario = styled.form`
  display:flex ;
  flex-direction: column;
  justify-content:space-between ;
  width: 800px;
  height: 430px;
  border: 1px solid rgb(46,49,145);
  border-radius: 5px;
  border:none;
  border-top: 1rem solid #1a202d;
  box-shadow: 1px 5px 10px 0.1px #2f3848;
`
const Titulo = styled.h1`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 2.5rem;
  color: #1a202d;;
`
const ContenedorCampo = styled.div`
  margin: 1.5rem auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr 3fr);
  align-items: center;
`
const Label = styled.label`
  margin-left: 0.7rem;
  color: #1a202d;
  font-weight: 900;
  @media (min-width: 992px){
    margin-left: 2.7rem;
    font-size: 20px;
  }
`
const Input = styled.input`
  font-family: 'Lato', sans-serif;
  border: 1px solid #1a202d;;
  padding: 0.7rem;
  width: 80%;
  border-radius: 5px;
  color: #1a202d;
  ::placeholder{
    color: #1a202d;
  }
  @media (min-width: 992px){
    padding: 1rem;
    font-size: 1.5rem;
  }
`
const Button = styled.button`
  width: 90%;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 7px;
  background-color: #1a202d; 
  color: #fff;
  font-weight: 600;
  :hover{
    cursor: pointer;
    background-color: #2f3848;
  }
  @media (min-width: 992px){
    width: 90%;
    font-size: 1.5rem;
  }
`


const Contacto = ({toggleVisibility, setContact}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e => {
    e.preventDefault()

    if([name, email,phone, address].includes('')){
      console.log('hay al menos un campo vacio');
      toggleVisibility.current.toggleVisibility()
      return
    }
    //Objeto contacto
    const objetoContacto = {
        name,
        address,
        email,
        phone,
    }
    setContact(objetoContacto)

    //reiniciar el form
    setName('')
    setEmail('')
    setPhone('')
    setAddress('')
  })

  return (
    <Contenedor>
      <Formulario
        onSubmit={handleSubmit}
      >
        
        <Titulo>Haz tu Consulta</Titulo>
        <ContenedorCampo>
          <Label>Nombre</Label>
          <Input
            type='text'
            id='nombre'
            name='nombre'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ContenedorCampo>
        <ContenedorCampo>
          <Label>Telefono</Label>
          <Input
            type='text'
            id='telefono'
            name='telefono'
            placeholder='Tu telefono'
            autoComplete='off'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </ContenedorCampo>
        <ContenedorCampo>
          <Label>Direccion</Label>
          <Input
            type='text'
            id='direccion'
            name='direccion'
            placeholder='Tu direccion'
            autoComplete='off'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </ContenedorCampo>
        <ContenedorCampo>
          <Label>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Tu email'
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ContenedorCampo>
        <Contenedor>
          <Button>Cargar Datos</Button>
        </Contenedor>
      </Formulario>
    </Contenedor>
  )
}

export default Contacto
