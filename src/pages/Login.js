import React, { useContext} from 'react';
import Loading from '../assets/spinning.svg'
import loginIcon from '../assets/loginImage.svg'
import iconGoogle from '../assets/Icon-Google.svg'
import iconFacebook from '../assets/icon-Facebook.svg'
import { useState } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext, server } from '..';
import axios from '../api/axios';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Link, useNavigate, useLocation } from 'react-router-dom';

 export const Login= ({hover, unHover})=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setAuth} = useContext(AuthContext)
  const [loading, setLoading ] = useState(false)
  const axiosPrivate = useAxiosPrivate()
  const[bio, setBioInput] = useState('')
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

    
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
    <div  className="min-h-screen w-full md:max-w-5xl  mx-auto flex flex-col md:flex-row justify-center items-center mb-6 ">
      <div className='w-1/2'>
        <img src={loginIcon} width={450} />
      </div>
      <div className="w-full md:w-1/2  p-6 bg-white rounded-md shadow-md ">
        <h2 className="text-3xl font-semibold font-inter text-gray-800 mb-6">Login</h2>
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
          <span className='relative left-[243px] top-[-10px] cursor-pointer text-sm'>Forget your password?</span>
          <button
            type="submit"
            className="relative w-[400px] bg-[#7D3261] text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none "
         > 
         
       Login{
        loading && <img className="h-[27px] absolute top-[7px] left-[145px]" src={Loading} alt=""/>
       }
      
          </button>
       
        </form>
        <button
            type="submit"
            className="relative flex justify-center items-center gap-3 w-[400px] border text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none mt-4">
              <img src={iconGoogle}  width={25}/> 
             <span className='text-[#292929] font-poppins'>Sign in with Google</span>
          </button>
        <button
            type="submit"
            className="relative flex justify-center items-center gap-3 w-[400px] border text-white py-2 rounded-md hover:bg-blue-600  focus:outline-none mt-4">
              <img src={iconFacebook}  width={26} className='ml-5'/> 
             <span className='text-[#292929] font-poppins'>Sign in wth Facebook</span>
          </button>
        <p className="mt-4 text-sm text-gray-600">
          
          <a href="/register" className="text-blue-500 hover:underline">
            Register now
          </a>
        </p>
      </div>
     
    </div>
    
  );
}

// export default App;




