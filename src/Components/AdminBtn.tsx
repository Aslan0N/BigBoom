import React, {  useState } from 'react'
import { NavLink } from 'react-router-dom'
import {MdOutlinePerson3} from 'react-icons/md'
import {MdPerson3} from 'react-icons/md'
import {  Util } from '../Utils/Util'

const AdminBtn = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () =>{
        setOpen(!open)
    }

    // LogOut
    const logOut = () =>{
        localStorage.removeItem('User')
        window.location.reload();
    }
 const Btn = () =>{
    if(Util()){
       return (
        <div className="dropDown">
        <div onClick={toggleOpen} className="click"><MdPerson3/></div>
        <ul className={open ? 'ul-dropdown' : ''}>
            <li onClick={logOut}>Log Out</li>
            <li className='dash'><NavLink to={'/dashboard'}>DashBoard</NavLink></li>
        </ul>
    </div>
       )
    }
     else{
       return <NavLink to={'/login'} className={"login"}><MdOutlinePerson3 className="i mx-3" /></NavLink>
    }
 }
 return(
    <>
        {Btn()}
    </>
 )
}

export default AdminBtn