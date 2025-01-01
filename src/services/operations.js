const currencyOptions = {
  minimumFractionsDigits: 2,
  maximumFractionDigits: 2
};

export const getTotal = (cart) => {
  return cart.total?.toLocaleString(undefined, currencyOptions)
}
/* //add
export const add = (product, cart, setCart) => {
  let bool = false
  cart.cart.forEach(object => {
    if (product.id === object.id) {
      return bool = true;
    }
  })

  if (bool) {
    product.quantity ? product.quantity += 1 : product.quantity = 2
    setCart( state => {
      return {
        cart: [...state.cart.filter(object => {
          return object.id != product.id
        }), product],
        total: state.total + product.priceCents
      }
    })
    bool = false;
  } else {
    setCart( state => {
      return {
        cart: [...state.cart.filter(object => {
          return object.id != product.id
        }), product] ,
        total: state.total + product.priceCents
      }
    } )
  }
};

//remove
export const remove = (product, cart, setCart) => {
  cart.cart.forEach(purchasedProduct => {
    if (purchasedProduct.id === product.id && purchasedProduct?.quantity > 0) {

      purchasedProduct.quantity -= 1;
      if (purchasedProduct.quantity === 0) {
        setCart(state => {
          return {
            cart: [...state.cart.filter(object => {
              return object.id != product.id
            })],
            total: state.total > 0 ? state.total - product.priceCents : 0
          }
        })
      } else {
        setCart(state => {
          return {
            cart: [...state.cart.filter(object => {
              return object.id != product.id
            }), purchasedProduct],
            total: state.total > 0 ? state.total - product.priceCents : 0
          }
        })
      }

    } else if (purchasedProduct.id === product.id) {
      setCart( state => {
        return {
          cart: state.cart.filter(object =>  object != product),
          total: state.total > 0 ? state.total - product.priceCents : 0
        }
    })
    }
  }
  )
}  */

export const add = (state, product) => {
  let bool = false
  state.cart.forEach(object => {
    if (product.id === object.id) {
      return bool = true;
    }
  })

  if (bool) {
    product.quantity ? product.quantity += 1 : product.quantity = 2
      return {
        cart: [...state.cart.filter(object => {
          return object.id != product.id
        }), product],
        total: state.total + product.priceCents
      }
    bool = false;
  } else {
      return {
        cart: [...state.cart.filter(object => {
          return object.id != product.id
        }), product] ,
        total: state.total + product.priceCents
      }
    } 
}

export const remove = (state, product) => {
  let outputState = {};
  state.cart.forEach(purchasedProduct => {

    if (purchasedProduct.id === product.id && purchasedProduct?.quantity > 0) {

      purchasedProduct.quantity -= 1;
      if (purchasedProduct.quantity === 0) {
        outputState = {
          cart: [...state.cart.filter(object => {
            return object.id != product.id
          })],
          total: state.total > 0 ? state.total - product.priceCents : 0
        }
      } else {
        outputState = {
          cart: [...state.cart.filter(object => {
            return object.id != product.id
          }), purchasedProduct],
          total: state.total > 0 ? state.total - product.priceCents : 0
        }
      }

    } else if (purchasedProduct.id === product.id) {
      outputState = {
        cart: state.cart.filter(object =>  object != product),
        total: state.total > 0 ? state.total - product.priceCents : 0
      }
    } else {
      outputState = state;
    }
  } 
  )

  return outputState;
}