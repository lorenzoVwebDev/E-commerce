import React, { useState } from 'react';
import PropTypes from 'prop-types';
const currencyOptions = {
  minimumFractionsDigits: 2,
  maximumFractionDigits: 2
};

const getTotal = (state) => {
  return state.total?.toLocaleString(undefined, currencyOptions)
}
function Product() {
  const [ cart, setCart] = useState(
    {
      cart: [],
      total: 0
    }
  )
  
  console.log(cart)
  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.cart?.length}</div>

      <div className="product">
        <span role="img" aria-label='ice cream'>🍦</span>
      </div>
      <button onClick={() => { setCart({
        cart: ['ice cream'],
        total: 5
      })}}>Add</button>
      <button onClick={() => setCart({
        cart: [],
        total: 0
      })}>Remove</button>
      <div>Total: {getTotal(cart)}</div>
    </div>
  ) 
}

export default Product;