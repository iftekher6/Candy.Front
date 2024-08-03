import React, { useContext } from 'react'
import Sharika from '../assets/Sharika.png'
import { AuthContext } from '..'

function ProductPage() {
    const {productDetails, setProductDetails} = useContext(AuthContext)
   const {name, price, image, description} = productDetails
   console.log(image)
   
   console.log(productDetails)
  return (
    <div className='h-screen flex justify-center items-center bg-gray-50'>
        <div className='bg-white mt-[10px] rounded-md max-w-7xl w-full shadow-md min-h-[500px] mb-[130px]'>
        {/* Product items */}
        <div className='grid grid-cols-2 w-[80%] mx-auto'>
        {/* first column of parent(image column)  */}
        <div className='flex gap-5'>
            <div className='grid grid-row-2'>
            <img src={image} className='h-[150px]'/>    
           <img src={image} className='h-[150px]'/>    
           <img src={image} className='h-[150px]'/>
            </div>
         <div>
         <img src={image} className='h-[450px] shadow-md hover:p-10 rounded-md'/>
         </div>
        </div>        
        
        
        </div>
        </div>
        </div>
        
    
  )
}

export default ProductPage