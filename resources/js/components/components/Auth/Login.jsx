import React, {Component} from 'react';

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
        this.props.history.push('/admin');
        console.log('gcg');
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
                                <input type="email" placeholde="email" name="email" className="form-control" onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                 <input type="password" placeholde="password" name="password" className="form-control" onChange={this.handleInput}/>
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

export default Login;
