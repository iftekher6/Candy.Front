import React, { useContext} from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { AuthContext, server } from '..';
// import { useCart } from '../context/CartContext';
// imp

 export const Login= ()=> {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    // useContext(Context); 

    const {isAuthenticated, setIsAuthenticated,setToken} = useContext(AuthContext)
    // const [isLogged,setIsLogged]= useState({})
    

    
    
  const submitHandler = async (e) => {
    // setLoading(true);
    e.preventDefault();
    try {
     const {data} = await axios.post(
        `${server}/users/login`,
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
      setToken(data.token)
      localStorage.setItem('token' , data.token)
      // console.log(data.token)
     
    
      // setLoading(false);
    } catch (error) {
      console.log('Error sending data:' , error)
      // toast.error(error.response.data.message);
      setIsAuthenticated(false);
   
      // setLoading(false);
    }
  };




  if (isAuthenticated) return <Navigate to={"/"} />;
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              email
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
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
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




