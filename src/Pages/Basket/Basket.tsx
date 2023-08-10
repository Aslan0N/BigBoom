import React from "react";
import { useCart } from "react-use-cart";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  // Usecart
  const { items, removeItem, updateItemQuantity, cartTotal,setItems } = useCart();

  // UseNavigate
  const location = useNavigate()

  // Check Login
  const checkLogin = () =>{
    if(localStorage.getItem("User")){
      return setItems([])
    }else{
      return location('/login')
    }
  }

  return (
    <section id="basket">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-2 col-sm-2 col-md-2 col-lg-2 bold">
                  Image
                </div>
                <div className="col-2 col-sm-2 col-md-2 col-lg-2 bold">
                  Item
                </div>
                <div className="col-2 col-sm-2 col-md-2 col-lg-2 bold">
                  Price
                </div>
                <div className="col-2 col-sm-3 col-md-3 col-lg-3 bold">
                  Count
                </div>
                <div className="col-2 col-sm-2 col-md-2 col-lg-2 bold">
                  Total
                </div>
                <div className="col-2 col-sm-1 col-md-1 col-lg-1 bold"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            {items.map((item: any) => {
              return (
                <div className="container-fluid" key={item.id}>
                  <div className="row">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 desc">
                      {item.desc}
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 price">
                      ${item.price}
                    </div>
                    <div className="col-2 col-sm-3 col-md-3 col-lg-3">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        (-)
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        (+)
                      </button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                      {" "}
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="col-2 col-sm-1 col-md-1 col-lg-1">
                      <button onClick={() => removeItem(item.id)}>
                        <FaTrash className="i" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="total">
        <ul>
          <li>
            IGST 18%: <span>$200.00</span>
          </li>
          <li>
            CGST 20%: <span>$200.00</span>
          </li>
          <li>
            Discount: <span>-$200.00</span>
          </li>
          <li className="end-li">
            <h5>
              Sub Total : <span>${cartTotal.toFixed(2)}</span>
            </h5>
          </li>
        </ul>
        <button onClick={() => checkLogin()} >Buy Now</button>
      </div>
    </section>
  );
};

export default Basket;
