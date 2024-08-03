import React, { useContext} from 'react';
import Loading from '../assets/spinning.svg'

import { useState } from 'react';
// import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { AuthContext, server } from '..';
import axios from '../api/axios';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { refreshAccessToken } from '../../../backend/contollers/userController';
// import { useCart } from '../context/CartContext';
// imp

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

      // console.log(data.user.accessToken)
      // setToken(data.refreshToken)
      // console.log(data[0].accessToken)
      // localStorage.setItem('token' , data.refresh)
      // console.log(data.token)
     
    
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
    <div onMouseEnter={hover} onMouseLeave={unHover} className="absolute top-[80px] right-[250px] min-h-[300px] flex items-center justify-center bg-red-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500 placeholder-pink-800 placeholder-opacity-100 placeholder='email' text-blue-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500  placeholder='password' text-blue-900"
            />
          </div>
          <button
            type="submit"
            className="relative w-[400px] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
         > 
         
       Login{
        loading && <img className="h-[27px] absolute top-[7px] left-[145px]" src={Loading} alt=""/>
       }
      
          </button>
       
        </form>
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




