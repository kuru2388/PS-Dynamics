import React from "react";
import './ClassFooter.css'
class ClassFooter extends React.Component{
    constructor(props:object){
        super(props)
        this.state={currVal:""};
    }


    render():JSX.Element{
        return (
            <html lang="en" dir="ltr">

            <footer>
                <div className="content">
                    <div className="top">
                    <div className="logo-details">
                        <i className="fab fa-slack"></i>
                        <span className="logo_name">PX Dynamics</span>
                    </div>
                    </div>
                    <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">Company</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Products</li>
                        <li><a href="#">Cameras</a></li>
                        <li><a href="#">Lenses</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Bundles</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Account</li>
                        <li><a href="#">My Profile</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Support</li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">Warranty</a></li>
                    </ul>
                    <ul className="box input-box">
                        <li className="link_name">Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                    <span className="copyright_text">Copyright © 2024 PX Dynamics. All rights reserved</span>
                    <span className="policy_terms">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </span>
                    </div>
                </div>
                </footer>    


            </html>
        )
    }
}

export default ClassFooter;
