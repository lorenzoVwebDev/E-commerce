const currencyOptions = {
  minimumFractionsDigits: 2,
  maximumFractionDigits: 2
};

export const getTotal = (cart) => {
  return cart.total?.toLocaleString(undefined, currencyOptions)
}
//add
export const add = (product, cart, setCart) => {
  let bool = false
  cart.cart.forEach(object => {
    if (product.name === object.name) {
      return bool = true;
    }
  })

  if (bool) {
    product.quantity ? product.quantity += 1 : product.quantity = 2
    setCart( state => {
      return {
        cart: [...state.cart.filter(object => {
          return object.name != product.name
        }), product],
        total: state.total + product.price
      }
    })
    bool = false;
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

//remove
export const remove = (product, cart, setCart) => {
  cart.cart.forEach(purchasedProduct => {
    if (purchasedProduct.name === product.name && purchasedProduct?.quantity > 0) {

      purchasedProduct.quantity -= 1;
      if (purchasedProduct.quantity === 0) {
        setCart(state => {
          return {
            cart: [...state.cart.filter(object => {
              return object.name != product.name
            })],
            total: state.total > 0 ? state.total - product.price : 0
          }
        })
      } else {
        setCart(state => {
          return {
            cart: [...state.cart.filter(object => {
              return object.name != product.name
            }), purchasedProduct],
            total: state.total > 0 ? state.total - product.price : 0
          }
        })
      }

    } else if (purchasedProduct.name === product.name) {
      setCart( state => {
        return {
          cart: state.cart.filter(object =>  object != product),
          total: state.total > 0 ? state.total - product.price : 0
        }
    })
    }
  }
  )
} 