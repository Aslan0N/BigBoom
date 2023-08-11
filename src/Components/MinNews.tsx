import React from "react";
import {IoRocketOutline} from 'react-icons/io5'
import {SlEarphonesAlt} from 'react-icons/sl'
import {AiOutlineGift} from 'react-icons/ai'
import {TbCoin} from 'react-icons/tb'


const MinNews = () => {
  return (
    <section id="min-news">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="min-card">
             <span><IoRocketOutline className="i"/></span>
              <h5>Free Shipping</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="min-card">
             <span>
              <TbCoin className="i"/>
             </span>
              <h5>30 Days Money Back</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="min-card">
              <span><SlEarphonesAlt className="i"/></span>
              <h5>24/7 Help Center</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="min-card">
              <span><AiOutlineGift className="i"/></span>
              <h5>Gift Promotion</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinNews;
