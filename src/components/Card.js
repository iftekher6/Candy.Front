


import {Link} from 'react-router-dom';

import CardInner from './Card-Inner';


import { useAllProducts} from '../hooks/useProducts';


export const Card =() => {

    const {data} = useAllProducts()
    // console.log(data, 'wir')
    // const {productDetails, setProductDetails} = useContext(AuthContext)
    // const {cartList,  addToCart, removeFromCart} = useCart();
 
    // const [isInCart, setIsInCart] = useState(false);
  
    // const [page, setPage] = useState(1)

    // const targetDate = new Date('2025-02-10T00:00:00Z'); // Set the sale end time (change as needed)

    // const [timeLeft, setTimeLeft] = useState({
    //   days: 0,
    //   hours: 0,
    //   minutes: 0,
    //   seconds: 0,
    // });
  
    // // Function to calculate the time left
    // const calculateTimeLeft = () => {
    //   const now = new Date();
    //   const timeDifference = targetDate - now;
  
    //   if (timeDifference <= 0) {
    //     return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Time's up
    //   }
  
    //   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    //   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    //   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    //   return { days, hours, minutes, seconds };
    // };
  
    // // Update the timer every second
    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     setTimeLeft(calculateTimeLeft());
    //   }, 1000);
  
    //   return () => clearInterval(intervalId); // Clean up the interval on component unmount
    // }, []);

      // const scrollContainer = (direction)=>{
      //   if(containerRef.current){
      //       const scrollAmount = 300;
      //       containerRef.current.scrollLeft += direction === "next" ? scrollAmount : -scrollAmount;
      //   }
      // }
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
  
    <div className='flex w-[90%] md:max-w-7xl flex-col mx-auto mt-[-50px] '>

       <div className='flex justify-between items-end mb-2'>
        <div className='flex flex-col md:flex-row gap-2 md:gap-[90px] justify-center items-start'>

            <h1 className='font-[600] text-2xl whitespace-nowrap md:text-3xl order-1'>Flash Sales</h1>
            {/* Timer */}
            {/* <div className='flex gap-6 md:order-2 '>
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
            
            </div> */}
        </div>

        <Link to={'/shop'} >
        
       <div className='flex gap-1'>
        
        <span className='underline text-[#525252] font-poppins font-[500]'>View All</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 12H16.25L11 6.75L11.66 6L18.16 12.5L11.66 19L11 18.25L16.25 13H4V12Z" fill="#525252"/>
</svg>
       </div>
        </Link>   

        </div>
        <div  className='flex overflow-x-hidden w-full' >

        <CardInner product={data}/>

        </div>
    </div>
   
  )
}
