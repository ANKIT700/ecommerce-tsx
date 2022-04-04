import * as React from "react";
import "../../styles/login/footer.styles.css";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer bg-secondary text-light pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3  col-md-3 col-sm-6 col-xs-6">
              <h3> Information </h3>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Returns</li>
                <li>Frequently Asked Questions</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-6 col-xs-6">
              <h3> My Account </h3>
              <ul>
                <li>My Account</li>
                <li>Order History</li>
                <li>My Wish List</li>
                <li>Specials</li>
                <li>Track Order</li>
              </ul>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-6 col-xs-6">
              <h3> Contact Us </h3>
              <ul>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Frequently Asked Questions</li>
                <li>Careers</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-6 col-xs-6">
              <h3> Newsletter </h3>
            
            
                  <div className="d-flex">
                    <div>
                    <input type="text" className="form-control" />
                    </div>
                    <div>
                    <button className="btn  bg-danger text-light ms-3" >
                      Subscribe
                    </button>
                    </div>
                    
                  </div>
         
              
              <ul className="social d-flex mx-5 mt-5">
                <li>
                  <i className=" fa fa-facebook mx-3">   </i>
                </li>
                <li>
                  <i className="fa fa-twitter">   </i>
                </li>
                <li>
                  <i className="fa fa-google-plus mx-3">   </i>
                </li>
                <li>
                  <i className="fa fa-pinterest ">   </i>
                </li>
                <li>
                  <i className="fa fa-youtube mx-3">   </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
      <div className="footer-bottom text-center mt-5 bg-dark pt-3 container-fluid">

          <div className="row">
            <p className="">
              Copyright © 2022 Akart Inc. All rights reserved.
            </p>
          
          </div>
   
      </div>
      </div>
    </>
  );
};

export default Footer;
