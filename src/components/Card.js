import React, {  useContext, useEffect, useState } from 'react'
import { useCart } from '../context/CartContext';
import { AuthContext } from '..';
import {  useNavigate} from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';

export const Card = ({product}) => {
    const {cartList,  addToCart, removeFromCart} = useCart();
    const {_id, name,price,description ,image} = product;
    const [isInCart, setIsInCart] = useState(false);
    const {isAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddtoCart = ()=>{
        
        if(isAuthenticated){
            addToCart(product)
        }else{
            navigate('/login')
        }
    }

    useEffect(() => {
        const productIsInCart = cartList.find(cartItem => cartItem._id === _id);

        if(productIsInCart){
            setIsInCart(true);
        }
        else{
            setIsInCart(false);
        }

      }, [cartList, _id])

   
  return (
  
    <div>
 
        <div class="flex justify-center flex-wrap">
 
            <div class="max-w-sm border border-ccpink dark:border-ccpurple shadow-md rounded p-3 hover:cursor-pointer m-2 bg-white dark:bg-zinc-900 dark:shadow-ccpurple">
                 <img class="rounded-md w-80 h-80 max-w-xs transition duration-300 ease-in-out hover:scale-110 object-cover object-center" src={image} alt={name}/>
                <h1 class="text-2xl mt-5">{name}</h1>
                <p class="sm">{description}</p>
                <div className='action pt-4 flex justify-between place-items-center'>
                    <p class="price text-lg">{price} BDT</p>
                    {isInCart? <button onClick={() => removeFromCart(product)} className='text-cyan-900 font-medium bg-ccbblue rounded-lg py-1 px-2 border-2 border-ccdblue hover:bg-ccdblue hover:border-ccdblue'>
                        Remove
                    </button> : <button onClick={handleAddtoCart} className='text-cyan-900 font-medium bg-cclgreen rounded-lg py-1 px-2 border-2 border-ccdgreen hover:bg-ccdgreen hover:border-ccdgreen'>
                        Add to Cart
                    </button> }
                </div>
               
            </div>
        </div>

      

    
    

    </div>
   
   
  )
}
