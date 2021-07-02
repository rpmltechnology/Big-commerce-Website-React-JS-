import React from 'react'
import Top from './Top'
import Midenavbar from './Midenavbar'
import App from '../../App'
import Banner from '../Banner/Banner'
import Bannernav from '../Banner/Bannernav'
import Searchbycategory from '../Topslider/Searchbycategory'
import Staticsuspension from '../Nextslider/Staticsuspension'
import Airsuspension from '../Nextslider/Airsuspenison'
import Subscribe from '../Down/Subscribe'
import Last from '../Down/Last'
import Signup from '../Signin/Signup'
import Mainpage from './Mainpage'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import Signin from '../Signin/Signin'
export default function Navbar() {
//     let subnav = document.getElementById("mainnavabr");

// window.onscroll = function() {runMe()};

// function runMe() {
// if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     subnav.classList.add("scrollme");
    
// } 
// else {
//     subnav.classList.remove("scrollme");
// }
// }


    return (
        
        <div>
    <Router forceRefresh={true}>
     
                <Top />
                <Midenavbar/>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark " id="mainnavabr">
              
                <a class="navbar-brand dropdown collapse navbar-collapse" href="#"><button class="dropbtn">All Category  <span class="navbar-toggler-icon"></span> </button>
                    <div class="dropdown-content">
                        <a href="#" >Link 1</a>
                        <a to="/" href="#" >Link 2</a>
                        <a to="/login" href="#" >Link 3</a>
                    </div>
                    </a>
                    
                <button class="navbar-toggler d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                   
                        <li class="nav-item dropdown" id="mainmenu">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select A Vehicle</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="text-dark dropdown-item" href="#">Action 1</a>
                                <a  className="text-dark dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                        <li class="nav-item" id="mainmenu">
                            <a class="nav-link" href="#">Brands</a>
                        </li>

                        <li class="nav-item" id="mainmenu">
                            <a class="nav-link" href="#">Discounts</a>
                        </li>
                       
                        <li class="nav-item dropdown" id="mainmenu">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Payment Plans</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a  className="text-dark dropdown-item" href="#">Action 1</a>
                                <a  className="text-dark dropdown-item" href="#">Action 1</a>
                            </div>
                        </li>

                        <li class="nav-item" id="mainmenu">
                            <a class="nav-link" href="#">Helps & FAQS</a>
                        </li>

                    </ul>
                 
                    <form className="ml-auto ">
                        <ul className="navbar-nav">
                        <li class="nav-item" id="leftblog" >
                                    <a class="nav-link" href="#">Blog</a>
                                    <Link class="nav-link text-white" to='/' id="lock" href="#">Home</Link>
                                    <Link class="nav-link text-white" to='/login' id="lock" href="#">Signin</Link>
                                    <Link class="nav-link text-white" to="/signup" id="lock" href="#">Register</Link>
                        </li>
                   </ul>
                    </form>
                </div>
                </nav>
               
         
                <Switch>
                <Route path="/" component={Mainpage} exact></Route>
                    <Route path="/login" component={Signin}></Route>
                    <Route path="/signup" component={Signup}></Route>
            </Switch>
            </Router>
           
        </div>
    )
}
