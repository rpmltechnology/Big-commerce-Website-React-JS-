import React from 'react'
import logo from '../IMG/logo.png'
import fb from '../IMG/fb.png'
import insta from '../IMG/insta.png'
import gg from '../IMG/gg.png'
import twit from '../IMG/twit.png'
export default function Last() {
    return (
        <div>
            <section className="">
                <footer>
                    <div className="row">
                        <div className="col">
                            <div className="firstcontent">
                            <img id="footerlogo" src={logo}/>
                                <p>SPRINGRATES
                                    3653 Regent Blvd. STE 602
                                    Jacksonville, FL 32224</p>
                              
                            </div>
                            <div className="phoneandmail">
                            <p>Email: <a href="">Abc@gmail.com</a></p>
                           <p>Phone: <a href="">904-999-8111 </a></p>
                           </div>
                           
                            <div className="row">
                                <div className="col">
                                <div className="socialicon text-center">
                                    <p><img src={fb} /></p>
                                    </div>
                                </div>

                                <div className="col">
                                <div className="socialicon text-center">
                                    <p><img src={insta} /></p>
                                    </div>
                                </div>

                                <div className="col">
                                <div className="socialicon text-center">
                                    <p><img src={gg} /></p>
                                    </div>
                                </div>

                                <div className="col">
                                <div className="socialicon text-center">
                                    <p><img src={twit} /></p>
                                    </div>
                                </div>
                            </div>
                              
                                
                               
                       
                          
                        </div>

                        <div className="col">
                            <div className="secondcontent">
                                <p id="shop">Shop</p>
                                <ol>
                                    <li href="">Discount</li>
                                    <li>Payment</li>
                                    <li>Helps & FAQS</li>
                                    <li>Blog</li>
                                </ol>
                            </div>
                        </div>

                        <div className="col">
                            <div className="thirdcontent">
                            <p id="topfo">Information</p>
                                <ol>
                                    <li>About us</li>
                                    <li>Contact US</li>
                                    <li>Shipping & Returns</li>
                                    <li>Privacy Policy</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col">
                            <div className="thirdcontent">
                            <p id="topfoo">Brands</p>
                                <ol>
                                    <li>About us</li>
                                    <li>Contact US</li>
                                    <li>Shipping & Returns</li>
                                    <li>Privacy Policy</li>
                                </ol>
                            </div>
                        </div>

                        <div className="col">
                            <div className="thirdcontent">
                            <p id="topfo">subscribe  our news letter</p>
                                <p id="des">Subscribe to our newsletter for giveaways, sales, and to hear about the latest products.</p>
                                <div className="form-group">
                                    <input className="form-control " id="darkinput" placeholder="Enter Your Email " />
                                </div>
                                <button className="btn btn-dark btn-block" id="darkbtn">subscribe</button>
                            </div>
                        </div>
                    </div>
                    <hr className="hrfooter" />
                    <div className="copyright">
                        <p>© 2021 <a href="https://rpmltech.com/">rpmltech.com </a> All rights reserved.</p>
                    </div>
                </footer>
            </section>
        </div>
    )
}
