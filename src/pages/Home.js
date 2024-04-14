import React, {  useEffect, useState } from 'react'
import { Card } from '../components'
import { useTitle } from '../hooks/useTitle';
import axios from 'axios'
import {  server } from '..';
// import { Suspense } from 'react';
// import {ErrorBoundary} from 'react-error-boundary'
import { ErrorFallback } from '../components/Error';
import Skeleton from '../components/Skeleton';
import LoadingSkeleton from '../components/LoadingSkeleten';







export const Home = () => {
  
  useTitle("Home");
  
  const [products, setProducts] = useState([])
  const [error, setError] = useState(true)
  const [loading, setLoading] = useState(true)
  // const {isAuthenticated} = useContext(AuthContext)
  
  useEffect(()=>{
   
  setLoading(true)
  axios.get(`${server}/products/get`).then((response)=>{
    setProducts(response.data)
    setLoading(false)
    console.log(response.data)
    setError(false)
  })

  .catch((error)=>{
   console.log(error)
   setLoading(true)
   setError(true)

 })

  

  },[])

//  if (!isAuthenticated) return <Navigate to={"/login"} />;

// if (error) {
//   return (
//     <main className='max-w-7xl m-auto  py-24  '>
//     <section className='flex justify-center flex-wrap '>
   
//     {[...Array(8)].map((_, i) => (
//     <Skeleton key={i}/>

//   ))}
//     </section>
   
//   </main>
//   );
// }


 

 return (
  <>
 
    <main className='max-w-7xl m-auto py-24 '>
      <section className='flex justify-center flex-wrap'>
        {error? <LoadingSkeleton/>: products.map((product) =>(
        
        <Card key={product._id}  product = {product}/>     
        
        ))}
      
      {/* <Skeleton/> */}
      </section>
     
    </main>
   
    </>
  )
}
