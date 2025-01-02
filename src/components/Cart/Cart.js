import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

function Cart({
  shopCart
}) {

/*   const cartArray = Object.entries(cart)
  const 
 */
  const {cart, total } = shopCart;

  return (
   <div className="cart-wrapper">
      { cart.length > 0 ?
        cart.map(product => {
          return (<div className="cart-box" key={product.id}>
            <div className="cart-box-image">
              <img src={product.image}/>
            </div>
            <h6>{product.name} <span>Quantity: {product.quantity}</span></h6>
          </div>
          )
        }) : <h3 style={{
          color: 'red',
          fontStyle: 'italic'
        }}>Cart is empty!</h3>
      }  
      <Link to="/"><button>Close the cart</button></Link>
    </div> 
  )
}

export default Cart;

Cart.propTypes = {
  shopCart: PropTypes.object.isRequired
}