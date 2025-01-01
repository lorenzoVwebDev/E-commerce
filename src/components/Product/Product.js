import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { products } from '../../data/products';
import { getTotal, add, remove } from '../../services/operations';

function Product() {
  const [ cart, setCart] = useState(
    {
      cart: [],
      total: 0
    }
);
  

  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.cart?.length}</div>
      <div>Total: {getTotal(cart)}</div>
      {products.map(product => {
        return (
          <>
          <div className="product">
            <span role="img" aria-label='ice cream'>{product.emoji}</span>
          </div>
          <button onClick={() => {
            add(product, cart, setCart)
          }}>Add</button>
          <button onClick={() => remove(product, cart, setCart)}>Remove</button>
          </>
        )
      })}
    </div>
  ) 
}

export default Product;