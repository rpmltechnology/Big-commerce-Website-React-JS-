import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import fb from '../IMG/fb.png'
import insta from '../IMG/insta.png'
import gg from '../IMG/gg.png'
import twit from '../IMG/twit.png'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
export default function Signin() {
    return (
        <div className="signinpage">
            <section className="loginsection">
                <form className="loginform">
                   
                    <h4 class="text-center" id="login">Login Your Account </h4>
                    <hr className="loginhr" />
                  
                    <div className="form-group mt-5">
                        <label>Email</label>
                 <input placeholder="Enter Your Email Address" className="form-control" id="email" />                    </div>
                    
                    <div className="form-group">
                    <label>Password</label>
                    <input placeholder="Enter Your Password" className="form-control" id="email"/>
                    </div>
                    
                    <button className="btn btn-primary btn-block" id="loginbtn">Login</button>
                    <Link className="nav-link text-center" to='/forgotpassword'> Forgot Password? </Link>
                   
                    <div className="loginsocialicon">
                    <button className="btn" ><img src={fb} id="imgbtn" /></button>
                    <button className="btn" ><img src={insta} id="imgbtn"/></button>
                    <button className="btn" ><img src={gg} id="imgbtn" /></button>
                    <button className="btn" ><img src={twit} id="imgbtn"/></button>
                    </div>
                  
                    <Link className="nav-link text-center" to='/signup'> Don`t Have Account? Sign Up </Link>
            </form>
          </section>
        </div>
    )
}
