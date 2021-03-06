import React, {Component} from 'react';
import {apiAxios} from '../../../axios';
import cookie from 'js-cookie';
import {connect} from 'react-redux';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:"",
            errors:{}
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {email,password}=this.state;
        apiAxios.post('auth/login',{
            email,
            password
        })
            .then(res=>{
                cookie.set('token',res.data.access_token);
                this.props.setLogin(res.data.user);
                this.props.history.push('/admin');

            })
            .catch(e=>{
                this.setState({errors:e.response.data})
            })


    }
    handleInput=(e)=>{
        e.preventDefault();
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value});
    }

    render() {
        return (
            <div className="container">
                <div className="row vh-100">
                    <div className="col-8  my-auto mx-auto">
                        <div className="card card-block p-5">
                            <h4 className="swal2-title">Login</h4>
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="email" placeholder="email" name="email" className="form-control" onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                 <input type="password" placeholder="password" name="password" className="form-control" onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login"  className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                    </div>

                </div>
            </div>
        );

    }
}
const mapDispatchToProps=dispatch=>({
    setLogin:user=>dispatch({type:"SET_LOGIN",payload:user})
});

export default connect(null,mapDispatchToProps)(Login);
