import React, { useContext } from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import { GlobeType, NewProp,  } from "../Types/Type";
import { GlobalContext } from "../Context/GlobalContext";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";



const SingleCard = ({myProp}:NewProp) => {

  // UseCart
  const {addItem} = useCart()

  // Context
  const {rows} = useContext(GlobalContext) as GlobeType;


  // UseWishList
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const myList = (prod :any) =>{
    if(inWishlist(prod.id)){
      removeWishlistItem(prod.id)
    }else{
      addWishlistItem(prod)
    }
  }

  return (
    <>
    <div className="arr-card">
        <div className="image">
          <div className="i-con">
            <span onClick={()=> {
              addItem(myProp),
              toast.success("Added cart")
            }}>
              <AiOutlineShoppingCart className="i" />
            </span>
            <span onClick={()=> {
              myList(myProp);
              inWishlist(myProp.id)
              ? toast.warn("Close wishlist")
              : toast.success("Added wishlist");
            }}>
              {
                inWishlist(myProp.id) ? <AiFillHeart className="i" /> :<AiOutlineHeart className="i" />
              }
            </span>
            <span>
              <NavLink to={`/detail/${myProp.id}`}>
               <AiOutlineEye className="i" />
              </NavLink>
            </span>
          </div>
          <img src={myProp.image} alt="" />
        </div>
        <div className="p-con">
          {
            rows === 3 ? <p className="title">{myProp.desc} </p> : ''
          }
        <p className="desc">{rows === 3 ? myProp.explanation : myProp.desc}</p>

        <p className="price">${myProp.price}</p>
        </div>
      </div>
    </>
  )
}

export default SingleCard