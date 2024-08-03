import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { server } from '..';

 export const Register = ()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    // useContext(Context); 

  const submitHandler = async (e) => {
    // setLoading(true);
    e.preventDefault();
    try {
       await axios.post(
        `${server}/users/post`,
        {
          name,
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
      // setLoading(false);
    } catch (error) {
      console.log('Error sending data:' , error)
      // toast.error(error.response.data.message);
      setIsAuthenticated(false);
      // setLoading(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/login"} />;
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Register</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="Name" className="block text-gray-600 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500 placeholder='name' text-blue-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
            onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500 placeholder='email' text-blue-900"
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500 placeholder='password' text-blue-900"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
           
          <a href="/Login" className="text-blue-500 hover:underline">
           Login
          </a>
        </p>
      </div>
    </div>
  );
}

// export default App;



