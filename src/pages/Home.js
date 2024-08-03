import React, {  useContext, useEffect, useState } from 'react'
import { Card } from '../components'
import { useTitle } from '../hooks/useTitle';
// import axios from 'axios'
import axios from '../api/axios';
import {  AuthContext, server } from '..';
// import { Suspense } from 'react';
// import {ErrorBoundary} from 'react-error-boundary'
// import { ErrorFallback } from '../components/Error';
// import Skeleton from '../components/Skeleton';
import LoadingSkeleton from '../components/LoadingSkeleten';
// import Pagination from '../components/Pagination';
import  InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from '../components/Skeleton';
// import { set } from 'mongoose';
import {Hearts } from 'react-loading-icons'
import useRefreshToken from '../hooks/useRefreshToken';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
// import { isAuthenticated } from '../../../backend/middleware/authentication';
// import useRefreshToken from '../hooks/useRefreshToken';
import spinner from '../assets/spinning-dots.svg'



export const Home = () => {
  
  useTitle("Home");
  
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [hasMore,setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  // const {IsAuthenticated ,auth} = useContext(AuthContext)
  const {isAuthenticated,setIsAuthenticated, auth} = useContext(AuthContext)
  const {searchInput, setSearchInput} = useContext(AuthContext)

  const findData = products.filter(product => product.name.toLowerCase() === searchInput);
  console.log(findData)

  const handleInfiniteScrolling = ()=>{
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setPage(prev=> prev + 1)
    }
  }
  useEffect((()=>{
    window.addEventListener('scroll',handleInfiniteScrolling)

    return ()=> window.removeEventListener('scroll', handleInfiniteScrolling)
     
    
  }),[])
 const axiosPrivate = useAxiosPrivate()
 
 const getCardData = async () =>{
   
  try {
    
      setLoading(true)
      const {data} = await axiosPrivate.get(`/api/v1/products/pagination?page=${page}`)
      console.log(data.pagination)
      if (page >1) {
        setProducts(prev=> [...prev, ...data.pagination])
      }else {
        setProducts(data.pagination)
      }
      
      setLoading(false)
      // console.log(data.pagination)
     
    
      
      
  } catch (error) { 
    console.log(error)
    setError(true)
    setLoading(true)
  } 
  
  }

  useEffect(()=>{
   
    getCardData()


},[page])

// useEffect(() => {
//   setLoading(true);
//   axios
//     .get(`${server}/users/get`, {
//       withCredentials: true,
//     })
//     .then((res) => {
//       // setUser(res.data.user);
//       setIsAuthenticated(true);
//       // setLoading(false);
//     })
//     .catch((error) => {
//       // setUser({});
//       setIsAuthenticated(false);
//       // setLoading(false);
//     });
// }, []);





//  const refresh =  useRefreshToken()


//  error? <Skeleton/> :
 return (
  <>
     <main className='max-w-7xl m-auto py-24 '>
      <section className='flex justify-center flex-wrap'>
     
        {!searchInput ? products.map((product) =>(
        
        <Card key={product._id}  product = {product}/>
     
        )) :
          findData.map((product) =>(
        
        <Card key={product._id}  product = {product}/>
     
        ))} 
      {/* <button onClick={()=> refresh()}>click to refresh?</button> */}
      
      </section>
      
       
      {loading&& <img src={spinner} className='h-[200px] w-[200px] mx-auto' />}
    
    </main>
    
  
    </>
  )
}
