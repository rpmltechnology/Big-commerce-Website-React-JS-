import React from 'react'
import '../CSS/Style.css'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
export default function Top() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark" id="topnavbar">
                <a class="navbar-brand" id="tophedaing" href="#">Free shipping on order over $49 in USA!</a>
                <div class=" navbar-collapse" id="">
                    <ul class="navbar-nav  mt-2 mt-lg-0"   id="topmenu">
                    <li class="nav-item dropdown" id="menus">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <Link class="dropdown-item" to="/login" href="#">Sign In</Link>
                                <Link class="dropdown-item" to="/singup" href="#">Create Account</Link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="menus" href="#">Wish List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="menus" href="#">Check Out</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="menus" href="#">Get Certificate</a>
                        </li>
                       
                    </ul>
                    
                </div>
                
            </nav>
          
        </div>
    )
}
