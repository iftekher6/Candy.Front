import React, { useContext} from 'react';
import Loading from '../assets/spinning.svg'

import darkLoginIcon from '../assets/darkmode-loginIcon.svg'
import iconGoogle from '../assets/Icon-Google.svg'
import iconFacebook from '../assets/icon-Facebook.svg'
import { useState } from 'react';


import { AuthContext } from '..';

import useAxiosPrivate from '../hooks/useAxiosPrivate';
import {  useNavigate, useLocation, Link } from 'react-router-dom';

 export const Login= ({hover, unHover})=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setAuth} = useContext(AuthContext)
  const [loading, setLoading ] = useState(false)
  const axiosPrivate = useAxiosPrivate()
  const { setIsAuthenticated} = useContext(AuthContext);

    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  
    
  const submitHandler = async (e) => {
    
    e.preventDefault();
    try {
      setLoading(true);
     const {data} = await axiosPrivate.post(
        `api/v1/users/login`,
        {
          
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log('data sent success')
      // toast.success(data.message);
      setIsAuthenticated(true);
      const accessToken = data.accessToken
      const role = data.role
      console.log(data.role)
      console.log(accessToken)
      setAuth({accessToken : accessToken, role: role})
      navigate(from, {replace : true});  
      setLoading(false);
    } catch (error) {
      console.log('Error sending data:' , error)
      // toast.error(error.response.data.message);
      setIsAuthenticated(false);
   
      setLoading(false);
    }
  };

  // if (isAuthenticated) return <Navigate to={"/"} />;
    return (
    <div  className="min-h-screen w-full md:max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center mb-6 ">
      <div className='w-1/2 '>
      
        <img src={darkLoginIcon} width={450} alt='icon' />
      </div>
      <div className="w-full md:w-1/2  p-6 dark:bg-[#262626] rounded-md  ">
        <h2 className="text-3xl font-semibold font-inter dark:text-white text-gray-800 mb-6">Login to Cotton candy</h2>
        <p>Enter your details below</p>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md border-b-2  focus:outline-none focus:border-[#7d3261] placeholder-[#292929] placeholder-opacity-[.5] text-blue-900"
              placeholder='Email'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 rounded-md border-b-2  focus:outline-none focus:border-[#7d3261] placeholder-[#292929] placeholder-opacity-[.5] text-blue-900"
              placeholder='Password '
            />
          </div>
          {/* <span className='text-right w-full cursor-pointer text-sm bg-black'>Forget your password?</span> */}
          <button
            type="submit"
            className="relative w-full bg-ccpurple  text-white py-2 rounded-md hover:bg-[#7d1e59] focus:outline-none "
         > 
         
       Login{
        loading && <img className="h-[27px] absolute top-[7px] left-[145px]" src={Loading} alt="icon"/>
       }
      
          </button>
       
        </form>
        <button
            type="submit"
            className="relative flex justify-center items-center gap-3 w-full border text-white py-2 rounded-md  focus:outline-none mt-4 hover:bg-slate-300">
              <img src={iconGoogle}  width={25} alt='icon'/> 
             <span className='text-[#292929] font-poppins dark:text-[#B1B1B1]'>Sign in with Google</span>
          </button>
        <button
            type="submit"
            className="relative flex justify-center items-center gap-3 w-full border text-white py-2 rounded-md  focus:outline-none mt-4 hover:bg-slate-300">
              <img src={iconFacebook}  width={26} className='ml-5' alt='icon'/> 
             <span className='text-[#292929] font-poppins dark:text-[#B1B1B1]'>Sign in wth Facebook</span>
          </button>
        <p className="mt-4 w-full text-center">
          
         <Link to={'/register'} className="text-[#292929]  font-poppins hover:underline mx-auto" >
        
          Don’t have an account? <span className='underline'>Signup</span>
         </Link>
        </p>
      </div>
     
    </div>
    
  );
}

// export default App;




