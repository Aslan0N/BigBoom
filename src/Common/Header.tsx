import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineLanguage } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import AdminBtn from "../Components/AdminBtn";
import { GlobalContext } from "../Context/GlobalContext";
import { GlobeType } from "../Types/Type";
import i18n from "i18next";
import { useTranslation } from "react-i18next";


const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // UseCart
  const { totalUniqueItems } = useCart();

  // UseWishList
  const { totalWishlistItems } = useWishlist();



  // Contex
  const {darkMode, setDarkMode} = useContext(GlobalContext) as GlobeType

  document.body.style.overflowY = !isOpen ? "hidden" : "scroll";

  // Change Language

  const handleChange = (lang:any) => {
    i18n.changeLanguage(lang);
  };

  const { t } = useTranslation();

  

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
                  <NavLink to="/">{t('header.1')}</NavLink>
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
              </div>
            </div>
            <div className="my-col col-8 col-sm-6 col-md-5 col-lg-4 thread-col">
              <ul>
                <li className="color">
                  <MdOutlineLanguage className="i" />
                  <ul>
                    <li onClick={()=> handleChange("az")}>Az</li>
                    <li onClick={()=> handleChange("en")}>En</li>
                  </ul>
                </li>
                <li onClick={()=> setDarkMode(!darkMode)}>
                  
                    {
                      darkMode ? <BsSun className="i"/> : <BsMoon className="i" />
                    }
                    
                  
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
                  {/* <NavLink to={'/login'}>
                  <MdOutlinePerson3 className="i" />
                  </NavLink> */}
                  <AdminBtn/>
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
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li onClick={() => setIsOpen(!isOpen)}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
