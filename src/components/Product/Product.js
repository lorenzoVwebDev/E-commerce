import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { products } from '../../data/products';
const currencyOptions = {
  minimumFractionsDigits: 2,
  maximumFractionDigits: 2
};


function Product() {
  const [ cart, setCart] = useState(
    {
      cart: [],
      total: 0
    }
  );

  const getTotal = (cart) => {
    return cart.total?.toLocaleString(undefined, currencyOptions)
  }
  
  const add = (product) => {
    if (cart.cart.forEach(object => {
      return product === object
    })) {
      setCart( state => {
        product.quantity += 1;
        return {
          cart: [...state.cart.filter(object => {
            return object.name != product.name
          }), product]
        }
      })
    } else {
      setCart( state => {
        return {
          cart: [...state.cart.filter(object => {
            return object.name != product.name
          }), product] ,
          total: state.total + product.price
        }
      } )
    }
  };
  //continue from removing products based on quantity, keep the product in the car if it has been added more than once
  const remove = (product) => {
    setCart( state => {
        return {
          cart: state.cart.filter(object =>  object != product),
          total: state.total > 0 ? state.total - product.price : 0
        }
    })
  } 
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
            add(product)
          }}>Add</button>
          <button onClick={() => remove(product)}>Remove</button>
          </>
        )
      })}
    </div>
  ) 
}

export default Product;