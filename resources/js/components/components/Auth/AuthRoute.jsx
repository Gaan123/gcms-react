import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
const AuthRoute = ({ children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                rest.loggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/g/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
const mapStateToProps=state=>{
    return {loggedIn:state.auth.isLoggedIn}
}
export default connect(mapStateToProps)(AuthRoute);
