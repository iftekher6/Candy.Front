import React, { useContext, useEffect, useState } from 'react'
import LogoD from '../assets/CCLogoDark.png'
import LogoL from '../assets/CCLogoLight.png'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { AuthContext, server } from '..'
import loginUserIcon from '../assets/loginUserIcon.svg'
import darkToggler from '../assets/darkmodetoggler.svg'
import darkTogglerdark from '../assets/darktogglerdark.svg'
import cart from '../assets/cart.svg' 
import Wishlist from '../assets/Wishlist.svg'
import searchIcon from '../assets/searchIcon.svg'


export const Header = () => {
    
    const {isAuthenticated,
      setIsAuthenticated,
     setSideBarOpen

     } = useContext(AuthContext)
    
    const {searchInput, setSearchInput} = useContext(AuthContext)
    const [isTopHeaderHidden, setIsTopHeaderHidden] = useState(false);
    const [isMainHeaderFixed, setIsMainHeaderFixed] = useState(false);
 
    const [darkMode, setDarkMode] = useState(true); // Default to light mode

  // Check localStorage after mounting
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode)); // Restore previous theme
    } else {
      setDarkMode(true); // Default to dark mode if no preference is saved
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
      
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
        const { value} = e.target
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
    <nav className='relative z-[1000]'>
        <div className={`bg-ccpurple w-full flex justify-center items-center p-2   ${isTopHeaderHidden? 'opacity-0 transition-all duration-[2s] ease' : 'opacity-100 transition-all duration-[1s] ease-in'}`} >
            <p className='text-[#FAFAFA] text-sm text-center md:text-md'>Summer Sale For All T-Shirt And Free Express Delivery - OFF 50%! <span><button className='border-b ml-2'>ShopNow</button></span></p>
        </div>
      {/* Parent DIV of MAIN NAVBAR */}
        <div className={` ${
          isMainHeaderFixed ? "fixed top-0 animate-slideDown w-full " : "transition-all duration-[2s] ease  relative "
        } h-[70px] flex justify-around items-center  bg-ccpink dark:bg-[#232323] rounded-b-2xl shadow-lg shadow-cclev dark:shadow-none dark:shadow-ccpurple border-b-2 border-ccpink dark:border-ccpurple  `}>
            {/* <div className='z-50 p-5 hhmd:w-auto w-full flex justify-between'> */}
            {/* mobile menu */}
          
             {/* hamburger */}
             <div  className=' flex justify-center items-center '>
<div className='lg:hidden cursor-pointer' onClick={()=> setSideBarOpen(prev=> !prev)}>

             <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
  <path d="M4 17.27V16.27H20V17.27H4ZM4 12.5V11.5H20V12.5H4ZM4 7.73V6.73H20V7.73H4Z" fill="#7D3261"  />
</svg>
</div>
                <div className='flex items-center'>
                <Link to="/" className='object-cover'> 
                    {darkMode? <img src={LogoD} className="h-10 mx-3 hhmd:cursor-pointer" alt="CottonCandyLogo" /> : <img src={LogoL} className="h-10 mx-3 hhmd:cursor-pointer" alt="CottonCandyLogo" /> }
                </Link>
                </div>
                
             </div>
             {/* end of logo and ham */}
                {/* search bar */}
                <div className="bg-white rounded-[10px] w-[100px] hidden  md:w-[320px] px-4 py-3 md:flex justify-start items-center  overflow-hidden gap-3">
                    {/* <span className="sr-only">Search icon</span> */}
                    {/* <form onSubmit={searchHandler}> */}
                        <img src={searchIcon} alt='search-icon' />
                        <input type="text" value={searchInput} onChange={searchHandler} name="searchh" className="w-full outline-none " placeholder="Search..." autoComplete="off"/>
                    {/* </form> */}
                </div>
                {/* merge div */}
                <div className='flex gap-3 justify-center items-center'>
  {/* mobile search */}
  <div className='md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 19 19" fill="none">
<path d="M13.553 13.553C14.2086 12.8974 14.7287 12.119 15.0835 11.2624C15.4383 10.4058 15.6209 9.48769 15.6209 8.5605C15.6209 7.63331 15.4383 6.71519 15.0835 5.85858C14.7287 5.00196 14.2086 4.22362 13.553 3.568C12.8973 2.91237 12.119 2.39231 11.2624 2.03748C10.4058 1.68266 9.48765 1.50004 8.56046 1.50004C7.63327 1.50004 6.71515 1.68266 5.85854 2.03748C5.00192 2.39231 4.22359 2.91237 3.56796 3.568C2.24387 4.89209 1.5 6.68795 1.5 8.5605C1.5 10.4331 2.24387 12.2289 3.56796 13.553C4.89205 14.8771 6.68791 15.621 8.56046 15.621C10.433 15.621 12.2289 14.8771 13.553 13.553ZM13.553 13.553L18 18" stroke="#7D3261" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                </div>
                {/* {Ends here} */}
      
               
        
            <ul className='hhmd:flex flex-shrink-0  hidden uppercase font-medium  text-ccpurple dark:text-cclev items-center gap-6 hhmd:text-sm hhlg:text-base'>
           
              
                {/* <NavLinks /> */}
                
                <li>
                    <NavLink to="/cart" className=' relative flex  hover:text-neutral-900 focus:text-neutral-900/'>
                      <img src={Wishlist} alt='product-deposits'/>
                 </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className=' relative flex   hover:text-neutral-900 focus:text-neutral-900/'>
                      <img src={cart} alt='product-deposits'/>
                 </NavLink>
                </li>
                <li>
                {isAuthenticated ? (
          <button onClick={logoutHandler} className="btn">
            Logout
          </button>
        ) : (
          <Link className='flex py-2  px-3 bg-[#7D3261] rounded-[8px] hover:text-neutral-900 focus:text-neutral-900' to={"/login"}><img src={loginUserIcon} alt='login-userIcon'/> <span className='ml-[5px] text-white text-[14px] font-poppins font-normal'>Login</span>
        </Link>
        )}

                </li>
            </ul>
         {/* darkmode button */}
                <div>
                <button onClick={() => setDarkMode(!darkMode)} >
                 {darkMode? 
                 
                 <img src={darkTogglerdark} alt='dark-toggler' className='w-6'/>
                 :
                 <img src={darkToggler} alt='dark-toggler' className='w-6'/>
                }
                   
                </button> 
                </div>
                     
                </div>
                {/* end of merge div */}
              
              </div>

      

    </nav>
  )
}


