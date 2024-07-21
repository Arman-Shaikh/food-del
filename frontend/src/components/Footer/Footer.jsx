import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt=''/>
            <p>A restaurant website's end goal is to get you more clients. But, to do so, it must successfully pass the Google filter. Therefore, SEO should always be on your mind because, if done right, it will help you rank higher.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Anout us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 1234567890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
