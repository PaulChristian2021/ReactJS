import React from 'react'

import c from './IconButton.module.css'



const CartBtn = (props) => {
  return (
    <button className={`${c.button} ${props.className}`}>
      {props.children}
    </button>
  )
}

export default CartBtn
