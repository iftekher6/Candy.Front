import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { AuthContext, server } from '..';
// import { AuthContext } from '..';
// import { useCart } from '../context/CartContext';


const Form = () => {
   
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description : '',
    image: null,
  });
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const {isAuthenticated} = useContext(AuthContext)
  const {IsAdminAuthenticated, setIsAdminAuthenticated} = useContext(AuthContext)
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('description', formData.description)
    formDataToSend.append('image', formData.image);

    try {
      await axios.post(`${server}/products/upload`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  
  // if (!isAuthenticated) return <Navigate to={"/login"} />;
  if(!IsAdminAuthenticated) return <Navigate to={'/login'} />
  return (
    
 

    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Upload Products</h2>
      <form  onSubmit={handleSubmit}>
   
    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
      <input type="text"  name="name" value={formData.name} onChange={handleChange} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-grey-600" />
    
    </div>

   
    <div class="mb-4">
      <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description:</label>
      <textarea name="description" type="text"  value={formData.description} onChange={handleChange} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-grey-600"></textarea>
    </div>

   
    <div class="mb-4">
      <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Price:</label>
     
      <input type="number" name="price" value={formData.price} onChange={handleChange} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-grey-600" />
    </div>


    <div class="mb-4">
      <label for="file" class="block text-gray-700 text-sm font-bold mb-2 ">Upload File:</label>
      <input type="file" name="image"  onChange={handleImageChange} class="w-full" />
    </div>

  
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 text-grey-600">
      Submit
    </button>
  </form>
  </div>
  </div>  
  //   <div className="min-h-screen flex items-center justify-center bg-gray-50">
  //   <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
  //    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Upload Products</h2>
  //   <form  onSubmit={handleSubmit}>

  //   <div class="mb-4">
  //      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
  //       <input class="text-gray-900 focus:text-red-600 ... "  type="text" name="name" value={formData.name} onChange={handleChange} />
  //     </div>
      
  //     <div class="mb-4">
  //     <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Price:</label>
     
  //       <input class="text-gray-900 focus:text-red-600 ... " type="text" name="price" value={formData.price} onChange={handleChange} />
      
  //    </div>
     
  //    <div class="mb-4">
  //    <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description:</label>
     
  //       <input class="text-gray-900 focus:text-red-600 ... "  type="text" name="description" value={formData.description} onChange={handleChange} />
  //    </div>
      
  //     <label>
  //       Image:
  //       <input class="text-gray-900 focus:text-red-600 ... "  type="file" name="image" onChange={handleImageChange} />
  //     </label>
      
  //     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
  //   </form>
  //  </div>
  //  </div>

  )};


export default Form;



















//original one
// <form  onSubmit={handleSubmit}>

// <div class="mb-4">
//    <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
//     <input class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 "  type="text" name="name" value={formData.name} onChange={handleChange} />
//   </div>
  
//   <label>
//     Price:
//     <input class="text-gray-900 focus:text-red-600 ... " type="text" name="price" value={formData.price} onChange={handleChange} />
//   </label>
  
//   <label>
//     Description:
//     <input class="text-gray-900 focus:text-red-600 ... "  type="text" name="description" value={formData.description} onChange={handleChange} />
//   </label>
  
//   <label>
//     Image:
//     <input class="text-gray-900 focus:text-red-600 ... "  type="file" name="image" onChange={handleImageChange} />
//   </label>
  
//   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
// </form>