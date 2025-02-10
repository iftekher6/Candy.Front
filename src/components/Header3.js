import React, {  useContext, useState } from 'react'
import { useCart } from '../context/CartContext';
import { AuthContext } from '..';
import {  useNavigate} from 'react-router-dom';
import loveIcon from '../assets/love.svg'


const CardInners = () => {
    const {products} = useContext(AuthContext)



    // const handleAddtoCart = ()=>{
        
    //     if(isAuthenticated){
    //         addToCart(product)
    //     }else{
    //         navigate('/login')
    //     }
    // }

    // useEffect(() => {
    //     const productIsInCart = cartList.find(cartItem => cartItem._id === _id);

    //     if(productIsInCart){
    //         setIsInCart(true);
    //     }
    //     else{
    //         setIsInCart(false);
    //     }

    //   }, [cartList, _id])
   
      
   
 
  return (
  <div className='flex gap-4 '>
             
             
            
   {
      products.map(product=>(
        <div key={product._id} className='relative flex flex-col h-[300px] w-[200px] gap-3 mb-[80px] '>
         {/* <img src={product.image} className='relative w-full border border-solid border-[#B1B1B1] p-2'/> */}
        <span className='bg-ccpurple px-2 absolute top-3  left-2 rounded-[3px] text-white font-[300] text-sm'>-20%</span>
        <div className='absolute  bg-white rounded-[50%] shadow top-1 right-2 p-1'>
          <img src={loveIcon} alt='love-icon'/>
        </div>

        <div>
            <h1 className='font-[600]'>{product.name}</h1>
            <span className='text-[#7A7A7A] font-[500]'>{product.description}</span>
       <div className='flex gap-2'>
        <span>4.8</span>
        <span>1288 Sold</span>
       </div>
       <span className='font-[600]'>BDT {product.price}</span>
        </div>
    </div>
        
         ))
        }
    
    

  </div>
    
   
   
  )
}

export default CardInners;