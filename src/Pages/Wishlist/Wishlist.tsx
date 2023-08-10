import React from 'react'
import {useWishlist} from 'react-use-wishlist'
import SingleCard from '../../Components/SingleCard'

const Wishlist = () => {
  const {items} = useWishlist()


  const myArray = [...new Map(items.map((item) => [item.id, item])).values()];
  return (
    <div>
      <div className="container">
        <div className="row">

      {
        myArray.map((item)=>{
          return(
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <SingleCard myProp={item} />
            </div>
            
            
          )
        })
      }
        </div>
      </div>
    </div>
  )
}

export default Wishlist