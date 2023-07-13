import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';
import './css/menu.css';

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      
      <div className="border-bottom">
        <div className="float-left">
        <ul className="menu">
          <li className="menu"><Link to='/admin/home'>Home</Link></li>
          <li className="menu"><Link to='/admin/category'>Category</Link></li>
          <li className="menu"><Link to='/admin/product'>Product</Link></li>
          <li className="menu"><Link to='/admin/order'>Order</Link></li>
          <li className="menu"><Link to='/admin/customer'>Customer</Link></li>
          <img src="https://o.remove.bg/downloads/03e03a6e-aba2-4aed-a391-c864a6abde9f/image-removebg-preview.png" class="logo-image" alt="Logo sneaker"></img>
          
          
        </ul>
      </div>
        <div className="navigation-right">
          Hello <b>{this.context.username}</b>
          <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;