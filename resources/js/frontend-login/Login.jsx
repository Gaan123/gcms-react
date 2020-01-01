import React, {Component} from 'react';
import ReactDOM from "react-dom";

class Login extends Component {
    render() {
        return (
            <div>
                <ul className="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Login;

if (document.getElementById('login')) {
    ReactDOM.render(<Login login={login}/>, document.getElementById('login'));
}
