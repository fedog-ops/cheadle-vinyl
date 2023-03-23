import React from 'react'
import {client} from '../lib/client'
import { Herobanner, FooterBanner, Product } from '../components'

const  Home = ({ products, bannerData }) => {

  return (
    <>
    <Herobanner bannerData={bannerData.length && bannerData[0]}/>

    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>2023 Highest Rated</p>
    </div>

    <div className='products-container'>

      {products?.map(product => {
        return (<Product key={product._id} product={product}/>)
      }
     
      )}
    </div>

    <FooterBanner footerBanner={bannerData.length && bannerData[1]}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;