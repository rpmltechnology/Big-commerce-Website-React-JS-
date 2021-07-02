import React from 'react'
import logo from '../IMG/logo.png'
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Signin from '../Signin/Signin';
import Navbar from './Navbar';
import Top from './Top';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
export default function Midenavbar() {

    return (
        <div>
 
          
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark " id="middlenavbar">
                    <a class="navbar-brand" href="#"><img id="toplogo" className="o" src={logo} /></a>
                    
                    <div class=" navbar-collapse" id="">

                        <ul className="navbar-nav mr-auto mt-w mt-lg-0" id="midmenu">
                            <form className="form-group">
                                <input className='form-control' id="searchbox" placeholder="Search all products" />
                                <button className="btn btn-primary" id="searchbtn"> Search</button>
                            </form>
                        </ul>
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0" id="loginandsignupmenu">

                            <li class="nav-item">

                                <div style={{ textAlign: "center" }}>
                                    <span class="dot"><PersonIcon id="personid" />
                                  
                                 <Link className="nav-link" to='/login'  id="mycardandsigin">SignIn</Link>
                           

                                    </span>
                                    <small id="nameHelp" class="form-text nav-link "> Your Account</small>
                                </div>
                            </li>


                            <li class="nav-item">

                                <div style={{ textAlign: "center" }}>
                                    <span class="dot"><ShoppingCartIcon id="personid" />
                                        <a className="nav-link" id="mycardandsigin">Mycart</a>
                                    </span>
                                    <small id="nameHelp" class="form-text nav-link "> 0 items-$0.00</small>
                                </div>
                            </li>

                        </ul>

                    </div>
                </nav>
          
              
          
        </div>
    )
}
