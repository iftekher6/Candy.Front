import React, { useContext} from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { AuthContext, server } from '..';
import toast from 'react-hot-toast'
// import { useCart } from '../context/CartContext';
// imp

export const AdminLogin= ()=> {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false)
  const {IsAdminAuthenticated,setIsAdminAuthenticated} = useContext(AuthContext)
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    // useContext(Context); 

    // const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
    // const [isLogged,setIsLogged]= useState({})
    
  const submitHandler = async (e) => {
    // setLoading(true);
    e.preventDefault();
    try {
     const {data} = await axios.post(
        `${server}/api/v1/admin/loginadmin`,
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
      setIsAdminAuthenticated(true)
      console.log(data.message)
      toast.success(data.message);
    //   setIsAuthenticated(true);
     
    
      // setLoading(false);
    } catch (error) {
        setIsAdminAuthenticated(false)
      console.log('Error sending data:' , error)
      // console.log(data.message)
      // toast.error(error.response.data.message);
    //   setIsAuthenticated(false);
   
      // setLoading(false);
    }
  };




  if (IsAdminAuthenticated) return <Navigate to={"/admin"} />;
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">AdminLogin</h2>
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
   
      </div>
    </div>
  );
}

// export default AdminLogin;




