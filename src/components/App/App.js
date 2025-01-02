import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from '../Product/Product.js';
import Header from '../Header/Header.js';
import ParamsContext from '../ProductsContext/ProductsContext.js'
import { products2 } from '../../data/products.js';

function App() {
  const getParams = () => {
    const url = new URL(window.location.href);
    const params = url.searchParams.get('search');

    return params;
  }

  return (
    <>
    <header>Git repository 👉🏻<a href="https://github.com/lorenzoVwebDev/E-commerce">E-commerce</a></header>
    <BrowserRouter>
    <ParamsContext.Provider
      value={getParams()}
    >
    <Header/>
    <div className="App">
    <Product></Product>
    </div>
    </ParamsContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
