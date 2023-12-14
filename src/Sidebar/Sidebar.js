import React from 'react'
import "./Sidebar.css"
import Category from "./Category/Category"
import { BsShopWindow } from "react-icons/bs";
import Color from './Color/Color';
import Price from './Price/Price';

function Sidebar() {
  return (
    <section className='sidebar'>
        <div className='logo-container'>
            <BsShopWindow/>
        </div>
        <Category/>
        <Color/>
        <Price/>
    </section>
  )
}

export default Sidebar