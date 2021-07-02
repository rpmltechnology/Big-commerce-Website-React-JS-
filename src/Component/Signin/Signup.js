import React from 'react'
import fb from '../IMG/fb.png'
import insta from '../IMG/insta.png'
import gg from '../IMG/gg.png'
import twit from '../IMG/twit.png'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
export default function Signup() {
    return (
        <div>
            <section className="registersection">
                <form className="signupform">

                    <p class="text-center" id="register">Register Your Account Now ! </p>
                    <hr className="loginhr" />

                    <div className="form-group">
                        <label>Full Name</label>
                        <input placeholder="Enter Your Name" type="text" className="form-control" id="name" />
                    </div>


                    <div className="form-group">
                        <label>Email Address</label>
                        <input placeholder="Enter Email Address" type="email" className="form-control" id="email" />
                    </div>

                   
                    <div className="form-group">
                        <label>Password</label>
                        <input placeholder="Enter  Password" type="password" className="form-control" id="password" />
                    </div>

                    <button className="btn btn-primary btn-block" id="loginbtn">Register</button>
                    <div className="loginsocialicon">
                        <button className="btn" ><img src={fb} id="imgbtn" /></button>
                        <button className="btn" ><img src={insta} id="imgbtn" /></button>
                        <button className="btn" ><img src={gg} id="imgbtn" /></button>
                        <button className="btn" ><img src={twit} id="imgbtn" /></button>
                    </div>

                    <Link className="nav-link text-center" to='/login'> Already Have Account? Sign In </Link>
                </form>
            </section>
        </div>
    )
}
