import React from 'react';

function Header() {
  const runForm = () => {
    document.querySelector('form').requestSubmit()
  }

  return (
    <div className="main-header">
      <div className="main-header-left-section">
        <a href="index.html">
          <img src="images/viganegologo.png"/>
        </a>
      </div>

      <div className="main-header-central-section">
        <form action="https://www.w3schools.com/cssref/sel_nesting.php#gsc.tab=0&gsc.q=data%20list" id="search-form">
        <input type="text" placeholder='Search your product here!' />
        </form>
        <button type="submit" form="search-form">
          <img src="images/icons/search-icon.png"/>
        </button>
      </div>

      <div className="main-header-right-section">
        <label htmlFor="categories">Select a category</label>
        <select name="categories" id="categories" form="search-form" defaultValue="all-categories" onChange={() => {runForm()}}>
          <option value="all-categories">All categories</option>
          <option value="clothing">Clothing</option>
          <option value="appliance">Appliance</option>
        </select>
      </div>

    </div>
  )
}

export default Header;