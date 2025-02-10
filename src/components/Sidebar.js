import React, { useContext } from 'react'
import LogoD from '../assets/CCLogoDark.png'
import LogoL from '../assets/CCLogoLight.png'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { AuthContext, server } from '..'
import loginUserIcon from '../assets/loginUserIcon.svg'

import cart from '../assets/cart.svg' 
import Wishlist from '../assets/Wishlist.svg'


// import SideBar from './Sidebar'



const SideBar = ({open})=>{
 const {isAuthenticated,
      setIsAuthenticated,
      sideBarOpen, setSideBarOpen

     } = useContext(AuthContext)
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

  
    return(
        <div className={`fixed top-0 bottom-0 transition-all duration-300 ease ${sideBarOpen ? 'left-0' : 'left-[-100%]'}  w-96 p-5 bg-black flex flex-col z-[60] justify-start items-center `}>
              <div className='flex justify-center items-center mt-[30px]'>
                <Link to="/" className='object-cover'> 
                    {true? <img src={LogoD} className="h-10 mx-3 hhmd:cursor-pointer" alt="CottonCandyLogo" /> : <img src={LogoL} className="h-10 mx-3 hhmd:cursor-pointer" alt="CottonCandyLogo" /> }
                </Link>
                </div>
        <ul className='flex flex-col p-5 uppercase font-medium  text-ccpurple dark:text-cclev items-center gap-6 hhmd:text-sm hhlg:text-base'>
       
          
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
   <span className='text-2xl mt-[100px]' onClick={()=> setSideBarOpen(prev=> !prev)}>X</span>
        </div>
    )
}

export default SideBar