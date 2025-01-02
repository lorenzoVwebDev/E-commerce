import React from 'react';

function Cart({
  shopCart
}) {

/*   const cartArray = Object.entries(cart)
  const 
 */
  const {cart, total } = shopCart;

  return (
   <div className="cart-wrapper">
      {
        cart.map(product => {
          return (<div className="cart-box">
            <div className="cart-box-image">
              <img src={product.image}/>
            </div>
            <h6>{product.name} <span>Quantity: {product.quantity}</span></h6>
          </div>
          )
        })
      }  
    </div> 
  )
}

export default Cart;