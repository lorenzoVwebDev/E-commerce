import React from 'react';

function Header() {
  const runForm = () => {
    document.querySelector('form').requestSubmit()
  }

  const addSearchParams = (input) => {
    input.preventDefault()
    const param = input.target.children[0].value;
    param != '' ? window.location.href= `/?search=${param}` : window.location.href = '/';
  }
  //hello
  return (
    <div className="main-header">
      <div className="main-header-left-section">
        <a href="index.html">
          <img src="https://i.ibb.co/3h6Kks9/viganegologo.jpg"/>
        </a>
      </div>

      <div className="main-header-central-section">
        <form onSubmit={(input) => {
          addSearchParams(input);
        }} id="search-form">
        <input type="text" placeholder='Search your product here!' />
        </form>
        <button type="submit" form="search-form">
          <img src="https://i.ibb.co/Gtcdh6F/search-icon.png"/>
        </button>
      </div>

      <div className="main-header-right-section">
        <label htmlFor="categories">Select a category</label>
        <select name="categories" id="categories" form="search-form" defaultValue="all-categories" onChange={() => {}}>
          <option value="all-categories">All categories</option>
          <option value="clothing">Clothing</option>
          <option value="appliance">Appliance</option>
        </select>
      </div>

    </div>
  )
}

export default Header;