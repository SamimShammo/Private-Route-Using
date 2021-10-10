import React from 'react';
import {
    Redirect,
    Route
} from 'react-router';
import useAuth from '../useAuth/useAuth';

const PrivateRoute = ({
        children,
        ...rest
    }) => {
        const {
            user
        } = useAuth()
        return ( <Route
             {
                ...rest
            }
            render = {
                ({
                    location
                }) => user.displayName ? children : < Redirect to = {
                        {
                            pathname: "/login",
                            state: {
                                from: location
                            }
                        }
                    } >

                    
                    </Redirect>}




                    >
                    </Route>
            );
        };

        export default PrivateRoute;