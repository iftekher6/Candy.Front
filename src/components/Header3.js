// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import LogoD from '../assets/CCLogoWhite.png'
// import LogoL from '../assets/CCLogoBlack.png'
// import { useCart } from '../context/CartContext'


// export const Header3 = () => {
//   const {cartList} = useCart();

//     const [hidden, setHidden] = useState(true);
//     const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || true);
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false);
//     // const [isOpen2, setIsOpen2] = useState(false);

    
//     useEffect(() => {
//         localStorage.setItem("darkMode", JSON.stringify(darkMode));
        
//         if(darkMode){
//           document.documentElement.classList.add('dark')
//         }
//         else{
//           document.documentElement.classList.remove('dark')
//         }
        
//       }, [darkMode])
    
    
//       // const activeClass = "text-base block py-2 pl-3 pr-4 text-ccpurple bg-cclev rounded hmd:bg-cclav hmd:text-ccpurple hmd:p-0 hmd:dark:text-cclev";
//       // const inActiveClass = "text-base block py-2 pl-3 pr-4 text-ccbblue rounded hover:bg-ccpurple hmd:hover:bg-transparent hmd:hover:text-myyel hmd:p-0 hmd:dark:hover:text-myyel dark:text-white dark:hover:bg-stone-700 dark:hover:text-white hmd:dark:hover:bg-transparent dark:border-stone-700";

//       const handleSubmit = (event) => {
//         event.preventDefault();
//         const queryTerm = event.target.search.value;
//         event.target.reset();

//         console.log(event.target)
    
//         return navigate(`/search?q=${queryTerm}`);
//       }

//   return (


    
//   <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
//     <div className="max-w-screen-xl max-h-20 flex flex-wrap items-center justify-between mx-auto p-4"> 
//     {/* /////////////////////////////////// */}
//         <Link to="/" className="flex items-center"> 
//         {/* ////////////// */}
//           {darkMode ? <img src={LogoD} className="h-8 mx-3" alt="CottonCandyLogo" /> : <img src={LogoL} className="h-8 mx-3" alt="CottonCandyLogo" /> }
//         </Link>

//         <div id='mobile-nav' className="flex hmd:order-2">
//           {/* /////////// */}
//           <button onClick={() => setDarkMode(!darkMode)} className=" focus:ring-2 rounded-full focus:ring-ccpink focus:ring-offset-2 focus:ring-offset-ccpink p-2 mr-4 ">
//             {darkMode ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun text-white" viewBox="0 0 16 16">
//                   <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
//                 </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars" viewBox="0 0 16 16">
//                   <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
//                   <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
//                 </svg>) }
//           </button>
          
//               <button onClick={() => setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="hmd:hidden text-ccpink dark:text-gray-400 hover:bg-ccpurple dark:hover:bg-ccpink focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-ccpink rounded-2xl text-sm p-2.5 mr-1" >
//               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//               </svg>
              
//               <span className="sr-only">Search</span>
//             </button>
//             <div className="relative hidden hmd:block">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg className="w-4 h-4 text-stone0 dark:text-stone-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                 </svg>
//                 <span className="sr-only">Search icon</span>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <input type="text" id="search-navbar" name="search" className="block w-full p-2 pl-10 text-sm text-stone-900 border border-stone-300 rounded-lg bg-stone focus:ring-myyel focus:border-myyel dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-stone-200 dark:focus:ring-myyel dark:focus:border-myyel" placeholder="Search..." autoComplete="off"/>
//               </form>
//             </div>
//             <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hmd:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
//                 <span className="sr-only">Open main menu</span>
//                 <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
//                 </svg>
//             </button>
//           </div>

//           <div className={`${hidden ? "hidden" : ""}  items-center justify-between  w-full hmd:flex hmd:w-auto hmd:order-1" id="navbar-search`}>
//             <div className="relative mt-3 hmd:hidden">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg className="w-4 h-4 text-stone0 dark:text-stone-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                 </svg>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <input type="text" id="search-navbar" name="search" className="block w-full p-2 pl-10 text-sm text-stone-900 border border-stone-300 rounded-lg bg-stone focus:ring-myyel focus:border-myyel dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-myyel dark:focus:border-myyel" placeholder="Search..." autoComplete="off"/>
//               </form>
//             </div>

//             <div className="w-auto hmd:block hmd:w-auto" id="navbar-dropdown">
//               <ul className="flex flex-col font-medium p-4 hmd:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 hmd:flex-row hmd:space-x-8 hmd:mt-0 hmd:border-0 hmd:bg-white dark:bg-gray-800 hmd:dark:bg-gray-900 dark:border-gray-700">
//                 <li>
//                   <NavLink to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded hmd:bg-transparent hmd:text-blue-700 hmd:p-0 hmd:dark:text-blue-500 dark:bg-blue-600 hmd:dark:bg-transparent" aria-current="page" end>Home</NavLink>
//                 </li>
//                 <li>
//                 <button onClick={() => setIsOpen((prev) => !prev)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hmd:hover:bg-transparent hmd:border-0 hmd:hover:text-blue-700 hmd:p-0 hmd:w-auto dark:text-white hmd:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 hmd:dark:hover:bg-transparent"> Shop
//                 {!isOpen ? <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
//                   </svg> : <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
//                   </svg> }
                  
//                 </button>
                
//                 {/* Dropdown menu  */}
//                 {isOpen && (
//                   <div id="dropdownNavbar" className="absolute top-12 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//                     <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
//                       <li>
//                         <NavLink to="/shop/premium" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Premium</NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/shop/thrift" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Thrift</NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/shop/nfu" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Not For You</NavLink>
//                       </li>
//                     </ul>
//                 </div>
//                 ) 
//               }
//             </li>
//             <li>
//               <NavLink to="/review" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hmd:hover:bg-transparent hmd:border-0 hmd:hover:text-blue-700 hmd:p-0 dark:text-white hmd:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white hmd:dark:hover:bg-transparent">Review</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hmd:hover:bg-transparent hmd:border-0 hmd:hover:text-blue-700 hmd:p-0 dark:text-white hmd:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white hmd:dark:hover:bg-transparent">About Us</NavLink>
//             </li>
//             <li>
//               <NavLink to="/cart" className="right block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hmd:hover:bg-transparent hmd:border-0 hmd:hover:text-blue-700 hmd:p-0 dark:text-white hmd:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white hmd:dark:hover:bg-transparent">Cart: {cartList.length}</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </nav>
//   )
// }