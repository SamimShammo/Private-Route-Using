import React from 'react';
import useAuth from '../../useAuth/useAuth';

const Home = () => {
    const {user} = useAuth()
    return (
        <div className="public">
            <h1>This is home</h1>
            <h3>User: {user.displayName}</h3>
           

        <h2 className="page-not">0</h2>
    </div>
       
    );
};

export default Home;