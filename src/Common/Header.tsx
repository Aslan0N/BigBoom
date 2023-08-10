import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Images/logo.png";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdOutlinePerson3 } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import i18n from "i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // UseCart
  const { totalUniqueItems } = useCart();

  // UseWishList
  const { totalWishlistItems } = useWishlist();

  const handleLang = (lang :string) =>{
    i18n.changeLanguage(lang)
  }

  document.body.style.overflowY = !isOpen ? "hidden" : "scroll";

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="my-col col-4 col-sm-6 col-md-2 col-lg-4 first-col">
              <button onClick={() => setIsOpen(!isOpen)}>
                <HiOutlineBars3 className="i" />
              </button>
              <ul className="ps-0">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="my-col col-12 col-sm-12 col-md-5 col-lg-4 second-col">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className="my-col col-8 col-sm-6 col-md-5 col-lg-4 thread-col">
              <ul>
                <li>
                  <GrLanguage className="i" />
                  <ul>
                    <li onClick={()=> handleLang("az")}>Az</li>
                    <li onClick={()=> handleLang("en")}>En</li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/search">
                    <BiSearch className="i" />
                  </NavLink>
                </li>
                <li>
                  <span>{totalWishlistItems / 2}</span>
                  <NavLink to="/wishlist">
                    <AiOutlineHeart className="i" />
                  </NavLink>
                </li>
                <li>
                  <span>{totalUniqueItems}</span>
                  <NavLink to="/basket">
                    <FiShoppingBag className="i" />
                  </NavLink>
                </li>
                <li>
                  <MdOutlinePerson3 className="i" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className={isOpen ? "side-bar" : "side-bar opn"}>
        <ul>
          <li onClick={() => setIsOpen(!isOpen)} className="first-li">
            <AiOutlineClose className="i" />
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
