import React from 'react'
import { useCart } from '../context/CartContext';

export const CartCard = ({product}) => {
  const { removeFromCart} = useCart();
  const {name,price,image} = product;
  return (
    <div className='flex justify-between align-middle border-2 rounded-2xl min-w-full h-34 my-4 bg-cclev dark:bg-zinc-900'>
      <img className='h-28 w-28 mr-2 rounded-2xl object-cover object-center' src={image} alt={name} />
      <p className='text-2xl pl-4 my-auto text-left'>{name}</p>
        <p className='text-xl m-auto p-4'>{price}$</p>
        <button onClick={() => removeFromCart(product)} className='text-white bg-red-800 hover:bg-red-900 border-2 rounded-2xl p-4 my-auto mx-0 cursor-pointer border-ccbg mr-10'>Remove</button>
    </div>
  )
}




