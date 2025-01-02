import React, { useState, useReducer, useContext } from 'react';
import ProductsContext from '../ProductsContext/ProductsContext.js'
import { products } from '../../data/products';
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
/*   const [products, setProducts] = useState(products2) */
  const [cart, setCart] = useReducer(reducer, {
    cart: [],
    total: 0
  });
  const params = useContext(ProductsContext);

  function filterProducts(params, products) {
    if (params) {
      const filteredProducts = products.filter(product => {
        let searchKeywords;

        product.keywords.forEach(keyword => {
           
          if (keyword.toLowerCase().includes(params.toLowerCase())) {
            return searchKeywords = true;
          } 
        });

        return product.name.toLowerCase().includes(params.toLowerCase()) || searchKeywords;
      })
      if (filteredProducts.length === 0 ) {
        return 'No products have been found!';
      } else {
        return filteredProducts;
      }
    } else {
/*       console.log('products 2') */
      return products;
    }
  }

  console.log(filterProducts(params, products))
  

  return (
    <>
    <div>Shopping Cart: {cart.cart?.length}</div>
    <div>Total: {getTotal(cart)}€</div>
    <div className="products-wrapper">
      {
      Array.isArray(filterProducts(params, products)) ?
      
      filterProducts(params, products).map(product => {
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
      }) : <h2>{filterProducts(params, products)}</h2>}
    </div>
    </>
  ) 
}

export default Product;