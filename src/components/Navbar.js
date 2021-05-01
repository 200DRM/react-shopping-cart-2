import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartObj = useSelector(store => store.cartReducer);

  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/add-item'>Add Item</a>
            </li>
          </ul>
          <ul className='navbar-nav mx-right'>
            <li className='nav-item'>
              <a className='nav-link' href='/cart'>Cart {cartObj.cartItems.length}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;