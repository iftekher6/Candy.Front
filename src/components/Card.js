import React, {  useContext, useEffect, useRef, useState } from 'react'
import { useCart } from '../context/CartContext';
import { AuthContext } from '..';
import {  Link, useNavigate} from 'react-router-dom';
import loveIcon from '../assets/love.svg'
import arrowRight from '../assets/icons arrow-right.svg'
import arrowLeft from '../assets/icons_arrow-left.svg'
import CardInner from './Card-Inner';
import timerSemicolon from '../assets/Semiclone.svg'
import { axiosPrivate } from '../api/axios';
// import { ErrorBoundary } from 'react-error-boundary';

export const Card = () => {
    const {productDetails, setProductDetails} = useContext(AuthContext)
    const {cartList,  addToCart, removeFromCart} = useCart();
    // const {_id, name,price,description ,image} = product;
    const [isInCart, setIsInCart] = useState(false);
    // const {isAuthenticated} = useContext(AuthContext)
    const [page, setPage] = useState(1)
    const containerRef = useRef(null)
      // const {IsAuthenticated ,auth} = useContext(AuthContext)
      const {isAuthenticated,setIsAuthenticated, auth,products, setProducts} = useContext(AuthContext)
    const navigate = useNavigate()
    const targetDate = new Date('2025-02-10T00:00:00Z'); // Set the sale end time (change as needed)

    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    // Function to calculate the time left
    const calculateTimeLeft = () => {
      const now = new Date();
      const timeDifference = targetDate - now;
  
      if (timeDifference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Time's up
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      return { days, hours, minutes, seconds };
    };
  
    // Update the timer every second
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);
    const getCardData = async () =>{
   
        try {
            
            // setLoading(true)
            const {data} = await axiosPrivate.get(`/api/v1/products/pagination?page=${page}`)
            // const response = await fetch('http://localhost:8000/api/v1/products/pagination?page=${page}')
            // // console.log(response.json())
            // const data = await response.json()
            console.log(data, 'dataa')
            // console.log(data.pagination)
            if (page >1) {
              setProducts(prev=> [...prev, ...data.pagination])
            }else {
              setProducts(data.pagination)
            }
            
            // setLoading(false)
            // console.log(data.pagination)
           
          
            
            
        } catch (error) { 
          console.log(error)
        //   setError(true)
        //   setLoading(true)
        } 
        
        }
      
        useEffect(()=>{
         
          getCardData()
      
      
      },[page])

      const scrollContainer = (direction)=>{
        if(containerRef.current){
            const scrollAmount = 300;
            containerRef.current.scrollLeft += direction === "next" ? scrollAmount : -scrollAmount;
        }
      }
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
   
      
   
   const addToProductPage = (image,price, name, description) =>{
      setProductDetails({image,price, name, description})
   }
  return (
  
    <div className='flex max-w-[80%]  md:max-w-7xl flex-col mx-auto mt-[-50px]  '>

       <div className='flex justify-between items-end mb-2'>
        <div className='flex flex-col md:flex-row gap-2 md:gap-[90px] justify-center items-start'>

            <h1 className='font-[600] text-2xl whitespace-nowrap md:text-3xl order-1'>Flash Sales</h1>
            {/* Timer */}
            <div className='flex gap-6 md:order-2 '>
                <div className='flex flex-col'>
                    <span className='text-[15px] text-[#292929] font-poppins font-[500]'>Days</span>
                    
                    <span className='flex gap-5 text-[#292929] font-poppins font-[700] text-4xl'>0{timeLeft.days}
                        <img src={timerSemicolon} />
                    </span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-[#292929] text-[15px] font-poppins font-[500]'>Hours</span>
                    <span className='flex gap-5 text-[#292929] font-poppins font-[700] text-4xl'>0{timeLeft.days}
                        <img src={timerSemicolon} />
                    </span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-[#292929] text-[15px] font-poppins font-[500]'>Minutes</span>
                    <span className='flex gap-5 text-[#292929] font-poppins font-[700] text-4xl'>{timeLeft.minutes}
                        <img src={timerSemicolon} />
                    </span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-[#292929] text-[15px] font-poppins font-[500]'>Seconds</span>
                    <span className='flex gap-5 text-[#292929] font-poppins font-[700] text-4xl'>{timeLeft.seconds}
                        
                    </span>
                </div>
            
            </div>
        </div>
           
            <div className='flex gap-2'>

            <img src={arrowLeft} onClick={()=> {
                scrollContainer('prev')
                setPage(prev=> prev - 1) 
                
                }} className='bg-[#F5F5F5] cursor-pointer   p-1 rounded-[50%]' />
            <img src={arrowRight} onClick={()=> {
                scrollContainer('next')
                setPage(prev=> prev + 1) 
                
                }} className='bg-[#F5F5F5] cursor-pointer p-1 rounded-[50%]' />
            </div>

        </div>
        <div ref={containerRef} className='flex overflow-x-auto scroll-smooth w-full scrollbar-hide' style={{scrollBehavior: "smooth"}}>

        <CardInner product={products}/>

        </div>
    </div>
   
  )
}
