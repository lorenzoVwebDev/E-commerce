import Product from '../Product/Product.js';
import Header from '../Header/Header.js';
import ProductsContext from '../ProductContext/ProductsContext.js';
import { Products2 } from '../../data/products.js'

function App() {
  return (
    <>
    <header>Git repository 👉🏻<a href="https://github.com/lorenzoVwebDev/E-commerce">E-commerce</a></header>
    <ProductsContext.Provider>
    <Header/>
    <div className="App">
      <Product/>
    </div>
    </ProductsContext.Provider>
    </>
  );
}

export default App;
