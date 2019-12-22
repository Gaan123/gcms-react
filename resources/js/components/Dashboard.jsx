import React, {Component} from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {Route, Switch} from "react-router-dom";
import {
    BrowserRouter as Router,

} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store";
import Login from "./components/Auth/Login";
class Dashboard extends Component {

    render() {
        return (
            <>

                <Switch>
                    <Route path="/admin" component={App} />
                    <Route exact path="/g/login" component={Login} />
                </Switch>

            </>
        );
    };
}

export default Dashboard;

if (document.getElementById('dashboard')) {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Dashboard />
            </Router>
        </Provider>


    , document.getElementById('dashboard'));
}
