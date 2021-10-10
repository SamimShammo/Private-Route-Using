import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';
import './Login.css'

const Login = () => {

    const {signInUsingGoogle} = useFirebase();
    return (
        <div>
            <h1>This is login</h1>
            <input type="email" /> <br />
            <input type="password" /> <br /><br />
            <input type="submit" name="" id="" /> <br /><br />
            <button onClick={signInUsingGoogle}>SignIn With Google</button> <br /><br />
            <Link to="/register" className="nav-a"> Create New Account</Link>
        </div>
    );
};

export default Login;