import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';
import './Header.css'

const Header = () => {

    const {user, logOut} = useAuth()
    return (
        <div>
           <NavLink to="/home" className="nav-a" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>Home</NavLink>
           <NavLink to="/Blog" className="nav-a" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>Blog</NavLink>
           <NavLink to="/shipping" className="nav-a" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>Shipping</NavLink>
           <NavLink to="/register" className="nav-a" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>Register</NavLink>
           <NavLink to="/Login" className="nav-a" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>Login</NavLink>
           <NavLink to="/PlaceOrder" className="nav-a" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>PlaceOrder</NavLink>
           <span>{user.displayName}</span>
          {user?.displayName &&  <button onClick={logOut}>Logout</button>}
          
        </div>
    );
};

export default Header;