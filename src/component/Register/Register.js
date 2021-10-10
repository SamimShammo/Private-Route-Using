import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
           
            <div className="public">
            <h2 className="page-not">This is Register</h2>
          
            <h3>Please Register</h3>
            <input type="email" /> <br />
            <input type="password" /> <br /><br />
            <input type="submit" name="" id="" />
            <Link to="/login" className="nav-a">Login</Link>
        </div>
    );
};

export default Register;