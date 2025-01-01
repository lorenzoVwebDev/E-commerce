import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { products, products2 } from '../../data/products';
import { getTotal, add, remove } from '../../services/operations';

function Product() {
  const [ cart, setCart] = useState(
    {
      cart: [],
      total: 0
    }
);
  
  return (
    <>
    <div>Shopping Cart: {cart.cart?.length}</div>
    <div>Total: {getTotal(cart)}€</div>
    <div className="products-wrapper">
      {products2.map(product => {
        return (
          <div className="product-box">
          <div className="product-image">
            <img src={product.image}/>
          </div>
          <div className="product-buttons">
          <button onClick={() => {
            add(product, cart, setCart)
          }}>Add</button>
          <button onClick={() => remove(product, cart, setCart)}>Remove</button>
          </div>
          </div>
        )
      })}
    </div>
    </>
  ) 
}

export default Product;