import React, { useContext, useEffect, useState } from 'react'
import { useCart } from '../context/CartContext';
import { AuthContext } from '..';
import {  useNavigate} from 'react-router-dom';

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

    // function handleAdd(){
    //     addToCart(product);
    //     console.log(cartList);
    // }
    // http://localhost:8000/image-1701881891026.jpg   imageUrl.replace(/\\/g, '/') `http://localhost:8000/images/` +Image `http://localhost:8000/images/${image}`
  return (
    <div>
        <div class="flex justify-center flex-wrap">
            <div class="max-w-sm border border-ccpink dark:border-ccpurple shadow-md rounded p-3 hover:cursor-pointer m-2 bg-white dark:bg-zinc-900 dark:shadow-ccpurple">
                 <img class="rounded-md w-80 h-80 object-cover object-center" src={image} alt={name}/>
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




                    
        {/* <div className="max-w-sm rounded-xl bg-white border border-stone-200 shadow dark:bg-ccbg dark:border-cc mx-auto my-5">
            <Link to="">
                <img className="" src={Product} alt="" />
            </Link>
            <div className="p-5">
                <Link to="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-ccpurple dark:text-white">Lala Land</h5>
                </Link>
                <p className="mb-3 font-normal text-ccpink dark:text-gray-400">overview</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-ccdgreen dark:text-cclgreen">$599</span>
                </div>
            </div>
        </div> */}

    </div>
  )
}
