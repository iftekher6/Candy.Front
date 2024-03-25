import React, { useContext, useEffect, useState } from 'react'
import LogoD from '../assets/CCLogoDark.png'
import LogoL from '../assets/CCLogoLight.png'
import { Link, NavLink } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { useCart } from '../context/CartContext'
import axios from 'axios'
import { AuthContext, server } from '..'



export const Header = () => {
    
    const {cartList} = useCart();
    const {isAuthenticated,setIsAuthenticated} = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")));

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

  return (
    <nav className='bg-ccpink dark:bg-ccpurple rounded-b-2xl shadow-lg shadow-cclev dark:shadow-ccpurple border-b-2 border-ccpink dark:border-ccpurple '>
        <div className='flex item-center justify-around'>
            <div className='z-50 p-5 hhmd:w-auto w-full flex justify-between'>
                <div className='flex items-center'>
                <Link to="/" className='object-cover'> 
                    {darkMode? <img src={LogoD} className="h-10 mx-3 hhmd:cursor-pointer" alt="CottonCandyLogo" /> : <img src={LogoL} className="h-10 mx-3 hhmd:cursor-pointer" alt="CottonCandyLogo" /> }
                </Link>
                </div>
                
                
                <button onClick={() => setOpen(!open)} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-ccpurple rounded-full hhmd:hidden hover:bg-ccbg focus:outline-none focus:ring-2 focus:ring-ccpurple dark:text-cclev dark:hover:bg-ccpink dark:focus:ring-cclev " aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                

            



            </div>
            
            <ul className='hhmd:flex hidden uppercase font-medium  text-ccpurple dark:text-cclev items-center gap-2 hhmd:text-sm hhlg:text-base'>
                <li>
                    <NavLink to="/" className='py-7 px-3 inline-block'>
                        Home
                    </NavLink>
                </li>
                
                <NavLinks />
                
                <li>
                    <NavLink to="/review" className='py-7 px-3 inline-block'>
                        Review
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className='py-7 px-3 inline-block'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className='py-7 px-3 inline-block'>
                        
                     Cart: {isAuthenticated? cartList.length: 0}
                            
                        
                    </NavLink>
                </li>
                <li>
                {isAuthenticated ? (
          <button onClick={logoutHandler} className="btn">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}

                </li>
            </ul>

      
            <div className='flex hhmd:order-2'>
                
                <button onClick={() => setDarkMode(!darkMode)} className="focus:ring-2 rounded-full focus:ring-ccpurple  dark:focus:ring-ccpink  hover:bg-ccbg  dark:hover:bg-ccpink p-2 m-auto ">
                    {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun text-cclev" viewBox="0 0 16 16">
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars text-ccpurple" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                    </svg>) }
                </button> 

                {/* button replaced with search bar */}
                <div className="px-6 py-4">
                    <span className="sr-only">Search icon</span>
                    <form >
                        <input type="text" id="search-navbar" name="search" className="block w-20 p-2 hhmd:w-40 text-ccpurple border border-ccpurple rounded-lg bg-ccbg focus:ring-ccpurple focus:border-ccpurple dark:bg-zinc-900 dark:border-cclev dark:placeholder-cclev dark:text-cclev dark:focus:ring-cclev dark:focus:border-cclev" placeholder="Search..." autoComplete="off"/>
                    </form>
                </div>
                {/* {Ends here} */}

            </div>
            
            {/* Mobile Nav */}
            <ul className={`hhmd:hidden bg-white dark:bg-black fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                <li>
                    <NavLink to="/" className="py-2 pt-12 px-3 inline-block">
                    Home
                    </NavLink>
                </li>
                <NavLinks />
                <li>
                    <NavLink to="/review" className='py-2 px-3 inline-block'>
                        Review
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className='py-2 px-3 inline-block'>
                        About
                    </NavLink>
                </li>
                <li>
                <NavLink to="/cart" className='py-2 px-3 inline-block'>
                        Cart : {cartList.length}
                    </NavLink>
                </li>
                <div className="py-5">
                    <div className="px-6 py-4">
                        <span className="sr-only">Search icon</span>
                        <form >
                            <input type="text" id="search-navbar" name="search" className="block w-full p-2 text-stone-900 border border-stone-300 rounded-lg bg-stone focus:ring-myyel focus:border-myyel dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-stone-200 dark:focus:ring-myyel dark:focus:border-myyel" placeholder="Search..." autoComplete="off"/>
                        </form>
                    </div>
                </div>
            </ul>

        </div>
    </nav>
  )
}
