import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website  is an  platform that  facilitate  the 
            buying  and selling  of products or service over the internet.It 
            serves as a  virtual  marketplace  where businesses and individual can
            showcase thier products, interact  with customers,and conduct
            transactions without  the need  for a physical presence. E-commerce   
            websites have gained  immense popularity due to thier  convenience,
            accesiblity,and the global reach they Offer.</p>
            <p>
                E-commerce website  typically display product or services along
                detailed descriptions,images,prices,and any available variations
                (e.g., sizes, colors,).Each product usually has its own dedicated
                with relevant information.
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
