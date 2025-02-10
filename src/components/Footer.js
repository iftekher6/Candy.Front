import React from 'react'
import logo from '../assets/CCLogoLight.png'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import threads from '../assets/threads.svg'
import instagram from '../assets/instagram.svg'
import NewsLetter from './NewsLetter'

export const Footer = () => {
  return (
    // <div>
        
        <footer className="relative bottom-0 border-b-0  w-full flex flex-col bg-[#F8FAFC] ">
          {/* Parent */}
          <NewsLetter/>
           <div className='p-11 ml-5 mx-auto flex flex-wrap md:justify-center   items-center md:flex-row gap-[50px] md:gap-[180px] '>
           <div className='flex flex-col w-[200px] gap-4'>
            <img src={logo} className='w-full' alt='logo'/>
            <span className='text-sm'>Crafted for confidence, designed for every occasion.
Where fashion meets function, and trends become timeless.
 </span>
            <ul className='flex gap-4 cursor-pointer '>
                <li><img src={facebook}   alt='social-icons'/></li>
                <li><img src={instagram} alt='social-icons' /></li>
                <li><img src={twitter}  alt='social-icons'/></li>
                <li><img src={threads}  alt='social-icons'/></li>
            </ul>
            
            </div>
            <div>
                <h1 className='mb-3 text-[#7D3261] font-[600]'>SHOP</h1>
                <ul className='flex flex-col gap-2 font-[300]'>
                    <li>HOME</li>
                    <li>My Account</li>
                    <li>Wishlist</li>
                    <li>Cart</li>
                </ul>
 
            </div>
            <div>
            <h1 className='mb-3 text-[#7D3261] font-[600]'>COMPANY</h1>
                <ul className='flex flex-col gap-2 font-[300]'>
                    <li>About Us</li>
                    <li>Delivery Details</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
            <h1 className='mb-3 text-[#7D3261] font-[600]'>QUICK LINKS</h1>
                <ul className='flex flex-col gap-2 font-[300]'>
                    <li>Customer Support</li>
                    <li>Cookies Policy</li>
                    <li>Returns & Refunds</li>
                    <li>Shipping Policy</li>
                </ul>
            </div>
           </div>
          <div className='flex justify-center items-center p-4 h-[50px] border-t-2 border-b-0  w-full '>
           <span className='text-sm'>© Copyright, {new Date().getFullYear()} All Rights Reserved by CottonCandy</span>
          </div>
        </footer>

    // </div>
  )
}
