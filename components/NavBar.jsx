import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import {Cart} from './' 
import { useStateContext } from '../context/StateContext';
import Image from 'next/image';

const NavBar = () => {
const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">
          <Image src='/../public/assets/small-logo.png' width='50' height='50' alt=''/>
        </Link>
      </div>

  <Image src='/../public/assets/big-logo.png' height='100' width='200' alt='' />

      

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>

        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
        
       
    {showCart && <Cart/>}
    </div>
  )
}

export default NavBar