import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
            errors:{}
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {name,email,password,password_confirmation}=this.state;
        axios.post('http://127.0.0.1:8000/api/auth/register',{
            name,
            email,
            password,
            password_confirmation
        })
            .then(res=>{
                cookie.set('token',res.data.access_token)
                cookie.set('user',res.data.user)
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
                            <h4 className="swal2-title">Register</h4>
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Name" name="name" className="form-control" onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="email" name="email" className="form-control" onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                 <input type="password" placeholder="Password" name="password" className="form-control" onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                 <input type="password" placeholder="Confirm Password" name="password_confirmation" className="form-control" onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Register"  className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default Register;
