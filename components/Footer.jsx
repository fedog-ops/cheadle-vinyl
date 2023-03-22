import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineReddit} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>felix mcdermott 2023</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineReddit/>
        <AiOutlineTwitter />
        
      </p>
    </div>
  )
}

export default Footer