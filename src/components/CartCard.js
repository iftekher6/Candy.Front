import React from 'react'
import { useCart } from '../context/CartContext';

export const CartCard = ({product}) => {
  const { removeFromCart} = useCart();
  const {name,price,image} = product;
  return (
    <div className='flex justify-between items-center  border-2 rounded-2xl min-w-full h-34 my-4 bg-cclev dark:bg-zinc-900'>
  
      <img className='h-20 w-20 mr-2 rounded-2xl object-cover object-center' src={image} alt={name} />
      <p className='md:text-xl pl-4 my-auto text-left'>{name}</p>
        <p className='text-lg m-auto p-4 '>{price} BDT</p>
        <input type='number' value='1' className='w-8 h-5 rounded-sm border-grey border-2 px-1 mr-[10px]'/>
        <button onClick={() => removeFromCart(product)} className='text-white bg-red-800 hover:bg-red-900 border-2 rounded-2xl p-2 text-sm my-auto mx-0 cursor-pointer border-ccbg mr-10'>Remove</button>
    </div>
  )
}




