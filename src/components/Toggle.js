import styled from '@emotion/styled'
import React, { useState, useImperativeHandle } from 'react'

const ButtonShow = styled.button`
    background-color: #2f3848;
    color: #fff;
    border: 1px solid;
    font-weight: 700;
    border-radius: 7px;
    padding: 1rem 14rem;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    margin-left: 40rem;

    :hover{
        cursor: pointer;
        background-color: #edf2f6;
        color: #2f3848;
        border: 1px solid #2f3848;
    }
`
const ButtonHide = styled.button`
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

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none'}

  const toggleVisibility = () => {
    setVisible(!visible)
  } 

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <ButtonShow onClick={toggleVisibility}>{props.buttonLabelShow}</ButtonShow>
      </div>
      <div style={showWhenVisible}>
         <ButtonHide onClick={toggleVisibility}>{props.buttonLabelHide ? props.buttonLabelHide : 'X'}</ButtonHide>
         {props.children}
      </div>
    </div>
    ) 
})

export default Togglable