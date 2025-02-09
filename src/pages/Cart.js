import React, { useContext } from 'react'

import { CartCard } from '../components'
import { useTitle } from '../hooks/useTitle'
import { useCart } from '../context/CartContext'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '..'
import Breadcrumb from '../components/BreadCrumb'


export  const Cart = () => {
  useTitle("Cart");
  
  const {total, cartList} = useCart();
  const {isAuthenticated} = useContext(AuthContext)
  
  // if (!isAuthenticated) return <Navigate to={"/login"} />; 
   
  return (
    <main className='max-w-5xl min-h-screen m-auto pb-12 mt-5'>
       <Breadcrumb/>
      <section className='flex justify-center flex-wrap'>
        {/* <h1 className='text-lg p-4 mt-2'>{cartList.length} item costs {total}BDT</h1> */}
       
        {cartList.map((product) => (
          <CartCard key={product._id} product={product}/>
        ))}
      </section>
      <div className='flex justify-center md:justify-between md:space-y-0 mt-3 flex-wrap space-y-5'>
        <div className='flex gap-2 h-[45px]'>
         <input type='text' placeholder='Coupon Code' className='rounded-sm border-[#B8B8B8] p-2 border-[1px]' />
         <button className='bg-ccpurple px-4 text-white '>Apply Coupon</button>
        </div>
        {/* Cart Total */}
        <div className='flex flex-col gap-2 border-[#B1B1B1] p-7  border-[1px] '>
          <h1>Cart Total</h1>
          <div className='flex justify-between'>
            <span>Subtotal</span>
            <span>320 BDT</span>
          </div>
          <div className='flex justify-between'>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className='flex justify-between'>
            <span>Total</span>
            <span>320 BDT</span>
          </div>
          <button className='bg-ccpurple px-3 py-2 text-white mt-2 '>Proceed to checkout</button>

        </div>

      </div>
    </main>
  )
}
