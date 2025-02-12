import React, {  useState , useContext} from 'react'
import greyish from '../assets/greyish.svg'
import bluish from '../assets/bluish.svg'
import greenish from '../assets/greenish.svg'
import yellowish from '../assets/yellow.svg'
import { AuthContext } from '..'
import Breadcrumb from '../components/BreadCrumb'


function ProductPage() {
    const {productDetails} = useContext(AuthContext)
   const {name, price, image} = productDetails
   const [sizePick, setSizePick] = useState(10)

  //  console.log(description)
   
  //  console.log(productDetails)

   const sizes = [10,12,14,16,18,20]
  return (
 

    <div className='flex flex-col md:mt-2 md:flex-row md:justify-start gap-8 max-w-7xl mx-auto p-6 border-dashed border-b-[1px]'>
        
          {/* first section */}
          <div className='w-full md:w-1/2 flex flex-col  gap-2 h-auto '>
            <Breadcrumb/>
            <img src={image} alt={name} className='w-[450px] rounded-[8px] border-[#B1B1B1] border-solid border-[1px] object-cover' />
            <div className='flex gap-2 flex-wrap'>
            <img src={image} alt={name} className='w-[73.8px]  rounded-[8px] border-[#B1B1B1] border-solid border-[1px] object-cover' />
            <img src={image} alt={name} className='w-[73.8px]  rounded-[8px] border-[#B1B1B1] border-solid border-[1px] object-cover' />
            <img src={image} alt={name} className='w-[73.8px]  rounded-[8px] border-[#B1B1B1] border-solid border-[1px] object-cover' />
            <img src={image} alt={name} className='w-[73.8px]  rounded-[8px] border-[#B1B1B1] border-solid border-[1px] object-cover' />
            <img src={image} alt={name} className='w-[73.8px]  rounded-[8px] border-[#B1B1B1] border-solid border-[1px] object-cover' />
            </div>
          </div>
          {/* second section */}

          <div className='flex flex-col w-full md:w-1/2 md:mt-[25px] gap-10 '>
            <div className='flex flex-col gap-5 items-start border-b-[1px] pb-5 border-dashed border-[#A3A3A3] '>

            <h1 className='font-[700] text-3xl text-black dark:text-[#FFFFFF]'>{name}</h1>
            <div className='flex justify-around items-center gap-[100px]'>
              <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
                <span className='line-through text-md text-[#666666] dark:text-[#B1B1B1]'>BDT 700</span>
                <span className='text-lg md:text-xl font-[600] text-black dark:text-[#FFFFFF]'>BDT{price}</span>

              </div>
              <div className='flex gap-3'>
                <span className='text-[#666666] dark:text-[#B1B1B1]'>1,298 Sold</span>
                <span className='font-[600] flex'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
<path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FFAA2B"/>
</svg>4.9</span>
              </div>
            </div>
            </div>
            <div>

            <h1 className='font-[600] text-lg mb-2'>Description:</h1>
            <p className='w-full '>Crafted from high-quality, breathable fabric with a touch of stretch, these tees provide a soft and flattering fit that complements all body shapes. Ideal for casual outings, office wear, or layering during cooler months, they are a must-have addition to any wardrobe. Durable and easy to care for, these T-shirts are machine washable and fade-resistant, ensuring long-lasting wear.</p>
            </div>
            {/* color */}
            <div className='flex flex-col gap-4 '>
              <span className='text-[#8F8F8F] font-[400]'>Color: <span className='font-[600] text-lg text-black ml-1 dark:text-[#FFFFFF]'>White and Black</span></span>
              <div className='flex gap-2'>
               <img src={greyish} alt='color'/>
               <img src={greenish} alt='color'/>
               <img src={yellowish} alt='color'/>
               <img src={bluish} alt='color'/>
              </div>
            </div>
            {/* size */}
            <div className='flex flex-col gap-3 items-start'>
             <div className='flex justify-between w-full items-center '>
             <span className='text-[#8F8F8F] dark:text-[#B1B1B1] flex justify-center items-center gap-1'>Size: 
               <span className='font-[600] text-black text-lg dark:text-white'>{sizePick}</span></span>
             <button className='text-[#525252] border-b-[1px] border-[#525252] dark:text-[#B1B1B1]'>View Size Chart</button>
             </div>
             <div className='flex gap-2 flex-wrap'>
              {sizes.map(size=>(
                <span tabIndex='0' onClick={()=> setSizePick(size)} className={`font-[600] text-black dark:text-[#FFFFFF] text-lg border-[#E6E6E6] border-[1px] p-2 rounded-[6px] px-5 py-1 ${size ? 'focus:border-[#EBEBEB] focus:bg-[#ffe6e6]' : ''}`}>{size}</span>

              ))}
         
             </div>
             {/* CART AND BUY NOW BUTTONS */}
             <div className='flex gap-2 mt-5'>
              <button className='bg-ccpurple text-white px-[65px] rounded-md text-sm sm:text-[1rem] whitespace-nowrap'>Add to Cart</button>
              <button className='border-[#B8B8B8] whitespace-nowrap text-sm sm:text-[1rem] border-[1px] px-5 py-2 rounded-md text-black dark:text-[#FFFFFF]'>Buy Now</button>

             </div>
            </div>
          </div>
    </div>
        
    
  )
}

export default ProductPage