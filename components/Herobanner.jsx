import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Herobanner = ({ bannerData }) => {
 
  return (
 <div className="hero-banner-container">
      <div>
        <p className="sale">{bannerData.smallText}</p>
            <h3>{bannerData.midText}</h3>
            <h1>{bannerData.largeText1}</h1>
            <img src={urlFor(bannerData.image)} alt="sale-item" className="hero-banner-image" /> 
            
        <div>
          <Link href={`/product/czarface-meets-metal-face`}>
            <button type="button">{bannerData.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{bannerData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herobanner

