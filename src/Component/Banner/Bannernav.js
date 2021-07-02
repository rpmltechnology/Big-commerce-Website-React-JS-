import React from 'react'

export default function Bannernav() {
    return (
        <div>
            <section className="bannernav">
                <nav class="navbar navbar-expand-sm navbar-dark " id="bannenav">
                    <a class="navbar-brand"  id="selectcar">Select Your Car <br/>  <p class="selectcarbypart">Search parts by vehicle.</p></a>
                    <div class=" navbar-collapse" id="">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <form className="searchform" >
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option className="">1- Make</option>
                                            <option>Acura</option>
                                            <option>BMW</option>
                                        </select>
                                    </div>
                                </form>
                            </li>
                            <li class="nav-item">
                            <form className="searchform">
                                 <div className="form-group">
                                        <select className="form-control">
                                            <option className="">2- Model</option>
                                            <option>Acura</option>
                                            <option>BMW</option>
                                        </select>
                                    </div>
                                </form>
                            </li>
                            <li class="nav-item">
                            <form className="searchform"  >
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option className="">3- Year</option>
                                            <option>Acura</option>
                                            <option>BMW</option>
                                        </select>
                                    </div>
                                </form>
                            </li>

                            <li class="nav-item">
                            <form  className="searchform" >
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option className="">1- Make</option>
                                            <option>Acura</option>
                                            <option>BMW</option>
                                        </select>
                                    </div>
                                </form>
                            </li>

                            <li class="nav-item">
                            <form className="searchform">
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option className="">1- Make</option>
                                            <option>Acura</option>
                                            <option>BMW</option>
                                        </select>
                                    </div>
                                </form>
                            </li>

                            <form className="ml-auto">
                                <button className="btn btn-dark btn-block" id="findparts">Find Parts</button>
                            </form>
                        </ul>
                       
                    </div>
                </nav>
            </section>
        </div>
    )
}
