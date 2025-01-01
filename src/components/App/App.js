import Product from '../Product/Product.js';
import Header from '../Header.js';

function App() {
  return (
    <>
    <header>Git repository 👉🏻<a href="https://github.com/lorenzoVwebDev/E-commerce">E-commerce</a></header>
    <Header/>
    <div className="App">
      <Product/>
    </div>
    </>
  );
}

export default App;
