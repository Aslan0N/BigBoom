import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import { GlobeType } from "../../Types/Type";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { IoPlayBackOutline } from "react-icons/io5";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";

const DetailPage = () => {
  const { id } = useParams<string>();

  const { AllData } = useContext(GlobalContext) as GlobeType;

  // UseCart
  const { addItem } = useCart();

  // UseWishList
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const myList = (prod: any) => {
    if (inWishlist(prod.id)) {
      removeWishlistItem(prod.id);
    } else {
      addWishlistItem(prod);
    }
  };

  const result = AllData.filter(
    (item: any) => item.id.toString() === id
  ) as any;
  return (
    <section id="detail">
      {!result ? (
        "Wait"
      ) : (
        <div className="container">
          <div className="row">
            {result.map((item: any) => {
              return (
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                  <div className="arr-card">
                    <div className="image">
                      <div className="i-con">
                        <span
                          onClick={() => {
                            addItem(item), toast.success("Added cart");
                          }}
                        >
                          <AiOutlineShoppingCart className="i" />
                        </span>
                        <span
                          onClick={() => {
                            myList(item);
                            inWishlist(item.id)
                              ? toast.warn("Close wishlist")
                              : toast.success("Added wishlist");
                          }}
                        >
                          {inWishlist(item.id) ? (
                            <AiFillHeart className="i" />
                          ) : (
                            <AiOutlineHeart className="i" />
                          )}
                        </span>
                        <span
                          onClick={() => {
                            window.history.back();
                          }}
                        >
                          <IoPlayBackOutline className="i" />
                        </span>
                      </div>
                      <img src={item.image} alt="" />
                    </div>
                    <div className="p-con">
                      <p className="desc">{item.explanation}</p>

                      <p className="price">${item.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailPage;
