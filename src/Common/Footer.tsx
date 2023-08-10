import React from "react";
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2">
            <h4 className="pd">SHOP</h4>
            <ul className="pd">
              <li>NEW ARRIVALS</li>
              <li>SALE & SPECIAL OFFER</li>
              <li>LIVING ROOM</li>
              <li>FURNITURE DECOR</li>
              <li>LAMP & LIGHTING</li>
              <li>SOFA & CHAIR</li>
              <li>HOME & KITCHENS</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2">
            <h4>INFORMATION</h4>
            <ul>
              <li>ABOUT US</li>
              <li>CUSTOMER SERVICES</li>
              <li>BLOG</li>
              <li>PAGE 404</li>
              <li>SIZING GUIDE</li>
              <li>FAQS</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2">
            <h4>ORDER</h4>
            <ul>
              <li>MY ACCOUNT</li>
              <li>VIEW BAG</li>
              <li>PRIVACY POLICY</li>
              <li>COOKIE POLICY</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <h4>SIGN UP FOR NEWSLETTER</h4>
            <p>
              Don't miss out on exciting promotions and the latest shopping news
            </p>
            <div className="div">
              <input type="text" placeholder="Your email address..." />
              <button>SUBCRIBE</button>
            </div>
            <div className="i-con">
              <span><FiFacebook /></span>
              <span><LuTwitter /></span>
              <span><BsPinterest /></span>
              <span><BsInstagram /></span>
              <span><FiLinkedin /></span>
              <span><BsYoutube /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p>Copyright © 2022. Designed by <span>SmartAddons.Com.</span> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
