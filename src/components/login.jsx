import React, { Component } from "react";
import login_logo from '../assest/olx_logo.png';
import './login.css'
import { Link } from 'react-router-dom'



class Login extends Component {
    render() {
        return (
            <div className="login">
                <Link to='/'><button className="login__btnBack">Back</button></Link>
                <br />
                <Link to="/"><img className="login__logo" src={login_logo} alt=" " /></Link>
                <p>Help make OLX safer place to buy and sell</p>
                <button className="login_btnConnect">Continue with phone</button>
                <br />
                <button className="login_btnConnect">Continue with facebook</button>
                <br />
                <button className="login_btnConnect" >Continue with google</button>
                <br />
                <button className="login_btnConnect">Continue with email</button>
                <p>We won't share your personal details with anyone</p>
            </div>
        )
    }
}

export default Login;