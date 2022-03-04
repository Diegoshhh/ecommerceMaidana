import React from 'react'
import styled from '@emotion/styled'

const ContenedorFooter = styled.div`
    width: 100%;
    height: 10rem;
    background-color: #1a202d;
    display: flex;
    align-items:center;
    justify-content: center;
    color: #fff;
`

const Footer = () => {
  return (
    <ContenedorFooter>
        <p className='centrar'>Copyright© Diegoshhh</p>
    </ContenedorFooter>
  )
}

export default Footer
