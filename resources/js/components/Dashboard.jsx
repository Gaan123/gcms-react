import React, {Component} from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import cookie from 'js-cookie';
import {Route, Switch} from "react-router-dom";
import {
    BrowserRouter as Router,

} from "react-router-dom";
import { Provider } from 'react-redux';
import AuthRoute from "./components/Auth/AuthRoute";
import store from "./redux/store";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import axios from 'axios';
import jwt from'jsonwebtoken';

const jwt_secret="t9F8TwFqt3nz6Wj7jXoQequmpHDmOi437eyJzjW66dNtkWgQcgQibJ1RL625X1Gx";
let token=cookie.get('token');
if(token)
{
    jwt.verify(token, jwt_secret, function(err, decoded) {
    if(err){
        token=null;
        cookie.remove('token');
    }else{
        if(decoded.iss !== "http://127.0.0.1:8000/api/auth/login"){
            token=null;
            cookie.remove('token');
        }

    }
});
}

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


class Dashboard extends Component {

    render() {
        return (
            <>

                <Switch>
                    <AuthRoute path="/admin">
                        <App/>
                    </AuthRoute>

                    <Route exact path="/g/login" component={Login} />
                    <Route exact path="/g/register" component={Register} />
                </Switch>

            </>
        );
    };
}
if(token){
    axios.post('http://127.0.0.1:8000/api/auth/me',)
        .then(res=>{
            store.dispatch({type:"SET_LOGIN",payload:res.data});
            if (document.getElementById('dashboard')) {
                return ReactDOM.render(
                    <Provider store={store}>
                        <Router>
                            <Dashboard />
                        </Router>
                    </Provider>


                    , document.getElementById('dashboard'));
            }

        });
}else{
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Dashboard />
            </Router>
        </Provider>


        , document.getElementById('dashboard'));

}
export default Dashboard;

