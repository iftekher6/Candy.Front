import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../components'
import { useTitle } from '../hooks/useTitle';
import axios from 'axios'
import { AuthContext, server } from '..';
import { Navigate } from 'react-router-dom';



export const Home = () => {
  
  useTitle("Home");
  
  const [products, setProducts] = useState([])
  const {isAuthenticated} = useContext(AuthContext)
  
  useEffect(()=>{
   

  axios.get(`${server}/api/v1/products/get`).then((response)=>{
    setProducts(response.data)
    console.log(response.data)
  })

  .catch((error)=>{
   console.log(error)

 })

  

  },[])

//  if (!isAuthenticated) return <Navigate to={"/login"} />;

 return (
    <main className='max-w-7xl m-auto py-24 '>
      <section className='flex justify-center flex-wrap'>
        {products.map((product) =>(
        <Card key={product._id}  product = {product}/>         
        ))}
        
      </section>
    </main>
  )
}
