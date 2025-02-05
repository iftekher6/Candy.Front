import React, { useContext, useEffect, useState } from 'react'
import LogoD from '../assets/CCLogoDark.png'
import LogoL from '../assets/CCLogoLight.png'
import { Link, NavLink } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { useCart } from '../context/CartContext'
import axios from 'axios'
import { AuthContext, server } from '..'
import loginIcon from '../assets/login.png'
import loginUserIcon from '../assets/loginUserIcon.svg'
import darkToggler from '../assets/darkmodetoggler.svg'
import cart from '../assets/cart.svg'
import Wishlist from '../assets/Wishlist.svg'
import searchIcon from '../assets/searchIcon.svg'
// import { Login } from '../pages/Login'
import { Cart } from '../pages'



export const Header = () => {
    
    const {cartList} = useCart();
    const {isAuthenticated,setIsAuthenticated , auth} = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const {searchInput, setSearchInput} = useContext(AuthContext)
    const [showLogin, setShowLogin] = useState(false)
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")));

    const [isTopHeaderHidden, setIsTopHeaderHidden] = useState(false);
    const [isMainHeaderFixed, setIsMainHeaderFixed] = useState(false);
  
    const hoverMouse = ()=>{
        setShowLogin(true)
    }
   
    const unHoverMouse = ()=>{
        setShowLogin(false)
    }
   
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        
        if(darkMode){
          document.documentElement.classList.add('dark')
        
        }
        else{
          document.documentElement.classList.remove('dark')
             
        }

        
      }, [darkMode])
      
      const logoutHandler = async (e) => {
     
        e.preventDefault();
        
        
        try {
           await axios.get(
            `${server}/users/logout`,
              
            {withCredentials: true}
            
          );
          console.log('data sent success')
      
          setIsAuthenticated(false);
        
        } catch (error) {
          console.log('Error sending data:' , error)
       
          setIsAuthenticated(true);
         
        }

       
      };


      const searchHandler= (e)=>{
        const {name, value} = e.target
        setSearchInput(value)
    
   
      }

      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
    
          // When the page scrolls past 100px, hide the top header
          setIsTopHeaderHidden(scrollY > 100);
    
          // Fix the main header when it reaches the top of the viewport
          setIsMainHeaderFixed(scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <nav className='header h-[2000px]'>
        <div className={` bg-ccpurple w-full flex justify-center items-center p-2   ${isTopHeaderHidden? 'opacity-0 transition-all duration-[2s] ease' : 'opacity-100 transition-all duration-[3s] ease'} `} >
            <p className='text-[#FAFAFA] text-[14px]'>Summer Sale For All T-Shirt And Free Express Delivery - OFF 50%! <span><button className='border-b ml-2'>ShopNow</button></span></p>
        </div>
      {/* Parent DIV of MAIN NAVBAR */}
        <div className={` ${
          isMainHeaderFixed ? "fixed top-0 animate-slideDown w-full " : "transition-all duration-[2s] ease  relative "
        } h-[70px] flex justify-around items-center  bg-ccpink dark:bg-[#7D3261] rounded-b-2xl shadow-lg shadow-cclev dark:shadow-ccpurple border-b-2 border-ccpink dark:border-ccpurple  `}>
            {/* <div className='z-50 p-5 hhmd:w-auto w-full flex justify-between'> */}
                <div className='flex items-center'>
                <Link to="/" className='object-cover'> 
                    {darkMode? <img src={LogoD} className="h-10 mx-3 hhmd:cursor-pointer" alt="CottonCandyLogo" /> : <img src={LogoL} className="h-10 mx-3 hhmd:cursor-pointer" alt="CottonCandyLogo" /> }
                </Link>
                </div>
                
                {/* search bar */}
                <div className="bg-white rounded-[10px] w-[370px] px-4 py-3 flex justify-start items-center  overflow-hidden gap-3">
                    {/* <span className="sr-only">Search icon</span> */}
                    {/* <form onSubmit={searchHandler}> */}
                        <img src={searchIcon} />
                        <input type="text" value={searchInput} onChange={searchHandler} name="searchh" className="w-full outline-none " placeholder="Search..." autoComplete="off"/>
                    {/* </form> */}
                </div>
                {/* {Ends here} */}
      
               
        
            <ul className='hhmd:flex flex-shrink-0  hidden uppercase font-medium  text-ccpurple dark:text-cclev items-center gap-6 hhmd:text-sm hhlg:text-base'>
           
              
                {/* <NavLinks /> */}
                
                <li>
                    <NavLink to="/cart" className=' relative flex  hover:text-neutral-900 focus:text-neutral-900/'>
                      <img src={Wishlist} />
                 </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className=' relative flex   hover:text-neutral-900 focus:text-neutral-900/'>
                      <img src={cart} />
                 </NavLink>
                </li>
                <li>
                {isAuthenticated ? (
          <button onClick={logoutHandler} className="btn">
            Logout
          </button>
        ) : (
          <Link className='flex py-2  px-3 bg-[#7D3261] rounded-[8px] hover:text-neutral-900 focus:text-neutral-900' to={"/login"}><img src={loginUserIcon}/> <span className='ml-[5px] text-white text-[14px] font-poppins font-normal'>Login</span>
        </Link>
        )}

                </li>
            </ul>
         
                <div>
                <button onClick={() => setDarkMode(!darkMode)} >
                   <img src={darkToggler} />
                   
                </button> 
                </div>
                     
              </div>

      

    </nav>
  )
}
