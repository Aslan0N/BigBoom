import React, { useState } from 'react'
import GalleryData from '../../Data/GalleryData.json'
import Space from '../../Components/Space'
import GlobSec from '../../Components/GlobSec'

const Gallery = () => {

  const [tabs, setTabs] = useState<number>(1)

  const add = document.querySelectorAll<Element>(".doc")

  if(tabs === 1){
    add.forEach(el=> el.classList.add("col-lg-3"))
    add.forEach(el=> el.classList.remove("col-lg-4"))
    add.forEach(el=> el.classList.remove("col-lg-6"))
  }else if(tabs === 2){
    add.forEach(el=> el.classList.add("col-lg-4"))
    add.forEach(el=> el.classList.remove("col-lg-3"))
    add.forEach(el=> el.classList.remove("col-lg-6"))
  }else if(tabs === 3){
    add.forEach(el=> el.classList.add("col-lg-6"))
    add.forEach(el=> el.classList.remove("col-lg-3"))
    add.forEach(el=> el.classList.remove("col-lg-4"))
  }

  
 
  return (
    <>
    <GlobSec title='Gallery' />
    <section id='gallery'>
      <div className="tabs-con">
        <button className={tabs === 1 ? "arr" : ''} onClick={()=> setTabs(1)}>TABS DEMO 1(4 COLUMNS)</button>
        <button className={tabs === 2 ? "arr" : ''} onClick={()=> setTabs(2)}>TABS DEMO 2(3 COLUMNS)</button>
        <button className={tabs === 3 ? "arr" : ''} onClick={()=> setTabs(3)}>TABS DEMO 3(2 COLUMNS)</button>
      </div>
      <div className="container-fluid">
        <div className="row g-3">
          {
            GalleryData.map(item=>{
              return(
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 doc" key={item.id}>
                  <img src={item.image} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
    <Space/>
    </>
  )
}

export default Gallery