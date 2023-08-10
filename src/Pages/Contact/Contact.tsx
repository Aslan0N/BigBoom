import React from 'react'
import ContactMe from './Components/ContactMe'
import Space from '../../Components/Space'
import Map from './Components/Map'
import GlobSec from '../../Components/GlobSec'

const Contact = () => {
  return (
    <>
    <GlobSec title='Contact Us' />
    <Map/>
    <Space/>
    <ContactMe/>
    <Space/>
    </>
  )
}

export default Contact