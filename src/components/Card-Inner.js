import React, {  useContext } from 'react'

import { AuthContext } from '..';
import {  Link, useLocation} from 'react-router-dom';

// import { ErrorBoundary } from 'react-error-boundary';

const CardInner = ({product}) => {
    const {setProductDetails} = useContext(AuthContext)
    // const {cartList,  addToCart, removeFromCart} = useCart();
    // const [isInCart, setIsInCart] = useState(false);
    // const {isAuthenticated, products} = useContext(AuthContext)
    // const {_id, name,price,description ,image} = products;

    const location = useLocation()


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
  <div className={`flex ${location.pathname ==='/shop' ? 'flex-wrap': ''}  gap-6`}>
             
             
            
   {
      product?.map(prod=>(
        <Link to={`${location.pathname === '/shop'? `/shop/productPage/${prod.name}` :  `/productPage/${prod.name}`}`}>
        
        <div key={prod._id} onClick={()=> setProductDetails(prod)}  className='relative flex flex-col h-[300px] w-[200px] gap-3 mb-[5px] '>
         <img src={prod.image} className='relative w-full border border-solid border-[#B1B1B1] p-2' alt={prod.name}/>
        <span className='bg-ccpurple px-2 absolute top-3  left-2 rounded-[3px] text-white font-[300] text-sm'>-20%</span>
        <div className='absolute  bg-white rounded-[50%] shadow top-1 right-2 p-1'>
          {/* <img src={loveIcon} /> */}

          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 32 32" fill="none">
  <path d="M10.5 6C7.4629 6 5 8.4376 5 11.445C5 13.8727 5.9625 19.6345 15.4368 25.459C15.6065 25.5623 15.8013 25.6169 16 25.6169C16.1987 25.6169 16.3935 25.5623 16.5632 25.459C26.0375 19.6345 27 13.8727 27 11.445C27 8.4376 24.5371 6 21.5 6C18.4629 6 16 9.3 16 9.3C16 9.3 13.5371 6 10.5 6Z" stroke="#D881B7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className='cursor-pointer hover:fill-ccpink'/>
</svg>        </div>

        <div>
            <h1 className='font-[600]'>{prod.name}</h1>
            <span className='text-[#7A7A7A] font-[500]'>{prod.description}</span>
       <div className='flex gap-2'>
        <span>4.8</span>
        <span>1288 Sold</span>
       </div>
       <span className='font-[600]'>BDT {prod.price}</span>
        </div>
    </div>
        </Link>
        
         ))
        }
    
    

  </div>
    
   
   
  )
}

export default CardInner;