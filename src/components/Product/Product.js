import React, { useState, useReducer } from 'react';
import { products, products2 } from '../../data/products';
import { getTotal, add, remove } from '../../services/operations';

function reducer(state, action) {
  if (action.type === 'add') {
    return add(state, action.product)
  } else if (action.type === 'remove'&&state.total > 0) {
     return remove(state, action.product)
  } else {
    return state
  }
}
function Product() {
/*   const [ cart, setCart] = useState(
    {
      cart: [],
      total: 0
    }
); */
  const [cart, setCart] = useReducer(reducer, {
    cart: [],
    total: 0
  });
  
  return (
    <>
    <div>Shopping Cart: {cart.cart?.length}</div>
    <div>Total: {getTotal(cart)}€</div>
    <div className="products-wrapper">
      {products2.map(product => {
        return (
          <div className="product-box" key={product.id}>
          <h4>{product.name}</h4>
          <div className="product-content">
          <div className="product-image">
            <img src={product.image}/>
          </div>
          <div className="product-buttons">
          <button onClick={() => {
            setCart({
              product: product,
              type: 'add'
            })
          }}><span>Add</span></button>
          <button onClick={() => setCart({
            product: product,
            type: 'remove'
          })}><span>Remove</span></button>
          </div>
          </div>
          </div>
        )
      })}
    </div>
    </>
  ) 
}

export default Product;