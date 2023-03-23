import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import {Cart} from './' 
import { useStateContext } from '../context/StateContext';
import Image from 'next/image';
import small_logo from '../public/static/small-logo.png'
import big_logo from '../public/static/big-logo.png'
const NavBar = () => {
const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">
          <Image src={small_logo} width='50' height='50' alt=''/>
        </Link>
      </div>

  <Image src={big_logo} height='100' width='200' alt='' />

      

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>

        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
        
       
    {showCart && <Cart/>}
    </div>
  )
}

export default NavBar