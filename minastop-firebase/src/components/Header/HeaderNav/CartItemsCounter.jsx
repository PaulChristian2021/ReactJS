import React from 'react'
import c from './CartItemsCounter.module.css'

const CartItemsCounter = () => {
  return (
    <output name='items in cart' className={c.output}>
      {0}
    </output>
  )
}

export default CartItemsCounter
