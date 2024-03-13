import React, { useContext } from 'react'

import { CartCard } from '../components'
import { useTitle } from '../hooks/useTitle'
import { useCart } from '../context/CartContext'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '..'


export  const Cart = () => {
  useTitle("Cart");
  
  const {total, cartList} = useCart();
  const {isAuthenticated} = useContext(AuthContext)
  
  if (!isAuthenticated) return <Navigate to={"/login"} />; 
   
  return (
    <main className='max-w-full min-h-screen m-auto pb-12'>
      <section className='flex justify-center flex-wrap'>
        <h1 className='text-lg p-4 mt-2'>{cartList.length} item costs {total}BDT</h1>
        {cartList.map((product) => (
          <CartCard key={product._id} product={product}/>
        ))}
      </section>
      <h1 className='flex justify-center text-lg text-ccpurple dark:text-cclev'>Take a screenshot of the cart and send us on social media app to book them</h1>
    </main>
  )
}
